# G4 release gate: runs after a merge into production (post-merge hook), only if gate-full passed for that exact commit.
# Preconditions: on production, clean tree, latest full RESULT = PASS for HEAD, staged build of HEAD exists.
# Deploy target: none on this PC. 8090 serves the experiment branch from D:\Portfolio and is never replaced by a gate.
param([switch]$DryRun)
. (Join-Path $PSScriptRoot 'lib.ps1')
$run = New-Run 'deploy'
$sha = $run.sha
[void](Invoke-Step $run 'preconditions' {
  if ((Get-Branch) -ne $script:Cfg.branches.production) { throw "not on $($script:Cfg.branches.production)" }
  if (Get-Dirty) { throw 'working tree not clean' }
  $full = Get-Content -Raw (Join-Path $script:Cfg.runsDir 'full-latest.json') | ConvertFrom-Json
  if ($full.result -ne 'PASS' -or $full.sha -ne $sha) { throw "latest full gate is $($full.result) for $($full.sha), not PASS for $sha" }
  $stage = Join-Path $script:Cfg.runsDir ('stage-' + $sha.Substring(0, 7))
  if (-not (Test-Path "$stage\SHA.txt") -or (Get-Content "$stage\SHA.txt") -ne $sha) { throw 'staged build for this SHA missing' }
  "gate-full PASS for $sha; staged build at $stage"
})
[void](Invoke-Step $run 'live-target' { 'SKIPPED: no live target. 8090 (experiment) is not replaced by design; the verified production build is the staged build from gate-full' })
$json = [ordered]@{ gate = 'deploy'; sha = $sha; result = $(if (@($run.steps | Where-Object { $_.status -eq 'FAIL' }).Count) { 'FAIL' } else { 'PASS' }); steps = $run.steps } | ConvertTo-Json -Depth 5
Set-Content -LiteralPath (Join-Path $script:Cfg.runsDir 'deploy-latest.json') $json
Write-Host $json
exit $(if (@($run.steps | Where-Object { $_.status -eq 'FAIL' }).Count) { 1 } else { 0 })
