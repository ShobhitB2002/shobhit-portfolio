# G2 full gate: fast checks, clean working tree, then a staged production build of exactly this commit.
# The live D:\Portfolio (8090) is never built or replaced. Staged build is kept for gate-deploy.
. (Join-Path $PSScriptRoot 'lib.ps1')
$run = New-Run 'full'
[void](Invoke-Step $run 'syntax' { Test-Syntax })
[void](Invoke-Step $run 'no-secrets' { Test-NoSecrets })
[void](Invoke-Step $run 'docs' { Test-Docs })
[void](Invoke-Step $run 'clean-tree' { $d = Get-Dirty; if ($d) { throw "working tree not clean:`n$d" }; 'clean' })
[void](Invoke-Step $run 'lint' { 'SKIPPED: no lint config in repo' })
[void](Invoke-Step $run 'typecheck' { 'SKIPPED: no tsconfig in repo (JavaScript project)' })
[void](Invoke-Step $run 'build' { Test-StagedBuild $run.sha })
exit (Complete-Run $run)
