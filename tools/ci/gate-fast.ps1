# G1 fast gate: syntax, no secrets tracked, docs present, production build of exactly this commit (scratch export).
# Runs on push of task/* (pre-push hook). Lint and typecheck: no config in the repo yet, so SKIPPED with reason.
. (Join-Path $PSScriptRoot 'lib.ps1')
$run = New-Run 'fast'
[void](Invoke-Step $run 'syntax' { Test-Syntax })
[void](Invoke-Step $run 'no-secrets' { Test-NoSecrets })
[void](Invoke-Step $run 'docs' { Test-Docs })
[void](Invoke-Step $run 'lint' { 'SKIPPED: no lint config in repo' })
[void](Invoke-Step $run 'typecheck' { 'SKIPPED: no tsconfig in repo (JavaScript project)' })
[void](Invoke-Step $run 'build' { Test-StagedBuild $run.sha })
exit (Complete-Run $run)
