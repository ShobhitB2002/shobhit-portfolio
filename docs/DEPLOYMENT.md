# Deployment (local CI/CD)

Model: `D:\ForgeLoop\GENERAL_MODEL_2026-10-21.md`. Scripts: `tools/ci/`. Values: `tools/ci/ci.config.json`.

## Gates
| Gate | Trigger | Runs | Result |
|---|---|---|---|
| G1 gate-fast | push of `task/*` (pre-push hook) | syntax of tracked js/json/ps1, no secret-like files, docs present, production build of that commit in a scratch export; lint and typecheck SKIPPED (no config in repo) | FAIL blocks the push |
| G2 gate-full | push of `integration` or `production` (pre-push hook) | G1 checks plus clean working tree | FAIL blocks the push |
| G4 gate-deploy | merge into `production` (post-merge hook, only when `production` is checked out, after G2 PASS) | preconditions, then live target | see below |

Results: `D:\_ci-runs\Portfolio\<gate>-latest.json` plus one folder per run. Staged builds: `D:\_ci-runs\Portfolio\stage-<sha7>`.

Run by hand: `powershell -ExecutionPolicy Bypass -File tools\ci\gate-fast.ps1` (also `gate-full.ps1`, `gate-deploy.ps1`).
Install hooks: `powershell -ExecutionPolicy Bypass -File tools\ci\install-hooks.ps1` (shared by all worktrees of this repo). There is no bypass.

## Release target
- No live target is replaced by a gate. 8090 serves the `experiment` branch from `D:\Portfolio`; a release never touches it.
- G4 therefore reports the live target as SKIPPED with that reason. The verified production build is the staged build from gate-full for the exact commit.
- Vercel: production deploys follow `production` on GitHub (renamed from `main` 2026-10-23). The owner sets Vercel's production branch. A push to `production` triggers a live Vercel build. This is outside the local model and needs owner go-ahead.

## PC hosting (8090)
- Task "Portfolio PC Server" (boot trigger, user Vuseia) runs `wscript //B C:\Users\Vuseia\portfolio-pc-start.vbs`, which runs `npm run start:pc` in `D:\Portfolio` on 127.0.0.1:8090.
- Health: `curl http://127.0.0.1:8090` returns 200. Tailnet: `https://vuseia-pc.tail535e2b.ts.net:10000` returns 200.
- Restart: stop only the PID of the 8090 listener, then `Start-ScheduledTask -TaskName "Portfolio PC Server"`. Build first only if `.next` is missing, and only with the server stopped.

## Backups
- Before moving or large changes: copy to `E:\ProjectBackups\<date>\Portfolio\` (exclude node_modules and .next) and `git bundle create ... --all`.
