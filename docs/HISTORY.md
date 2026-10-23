# History

## 2026-10-23 - restructure to D:\Portfolio and local CI/CD
- Moved `D:\shobhit-portfolio` to `D:\Portfolio`. Stopped the 8090 server PID (no graceful stop available for a console node process; the process was force-stopped, no state held), moved the folder, updated `C:\Users\Vuseia\portfolio-pc-start.vbs` to `D:\Portfolio`, restarted the task "Portfolio PC Server". 8090 returned 200 locally and on the tailnet.
- Backup before the move: `E:\ProjectBackups\2026-10-23\Portfolio\` and `E:\ProjectBackups\2026-10-23\Portfolio-all-refs.bundle` (bundle verified).
- Branch rename `main` -> `production` SKIPPED: Vercel production deploys follow `main` (last production deployment on `d1afc27`, 2026-10-14). Branch name kept as `main`.
- GitHub Actions disabled for the repo (no workflow files existed).
- Added `tools/ci` (gates, hooks), `CLAUDE.md`, `docs/`.
- Repo visibility PUBLIC was found and left unchanged (owner decision).
- `C:\Users\Vuseia\Documents\Git\shobhit-portfolio` does not exist on this PC (not inspected further).

## 2026-10-23 - branch rename main -> production (owner approved)
- GitHub branch `main` renamed to `production` (default branch now `production`). Local `main` renamed to `production`, tracking `origin/production`. Same SHA (`d1afc27`), nothing merged into it.
- Supersedes the 2026-10-23 entry above on the rename: the rename is done. The owner changes Vercel's production branch to `production`.
- Gate config (`tools/ci/ci.config.json`), `CLAUDE.md`, `docs/DEPLOYMENT.md`, `docs/RULES.md` now name `production` as the release branch.
