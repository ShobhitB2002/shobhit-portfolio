# Portfolio experiment: AI worker entry

Experimental version of the portfolio (`experiment` branch): comic side-quest UI. NOT the official site.
Checked out in `D:\Portfolio`. Served privately on 127.0.0.1:8090 and, tailnet only, at https://vuseia-pc.tail535e2b.ts.net:10000.
Repo is PUBLIC: keep private details out. Do not change visibility.

## Rules
- Keep `experiment` checked out in `D:\Portfolio`. 8090 serves this folder.
- Never merge `experiment` into `integration` or `production` without explicit owner approval. Official work goes on `task/*` cut from `integration`.
- Never run `npm run build` in `D:\Portfolio` while 8090 is up: it rewrites the `.next` the server reads. Gates build in a scratch export.
- Never kill or re-bind 8090, except through the scheduled task "Portfolio PC Server" (`C:\Users\Vuseia\portfolio-pc-start.vbs`). Port table: `C:\Users\Vuseia\.claude\CLAUDE.md`.
- Checks run locally. GitHub Actions are disabled. Do not add workflow files.
- Never bypass hooks, force-push, or rewrite pushed history.
- No secrets, keys, `.env*` or `.vercel` in git.
- Do not delete files: move them to `D:\_quarantine\<date>-portfolio\` with a MANIFEST.csv.

## Gates
- Push of `experiment` runs gate-fast only (pre-push hook routes any branch other than production/integration to gate-fast).
- `tools/ci` is copied from `integration`. This branch's `ci.config.json` requires only CLAUDE.md.
- By hand: `powershell -ExecutionPolicy Bypass -File tools\ci\gate-fast.ps1`.

## Commands
- `npm run start:pc`: serve the build on 127.0.0.1:8090 (the scheduled task runs it).
- `npm run dev`: dev server on another port. Not on 8090.
- Health: `curl http://127.0.0.1:8090` returns 200. Tailnet URL above returns 200.

## More
- Official rules and branch model: `integration` branch, `CLAUDE.md` and `docs/`.
- `D:\ForgeLoop\GENERAL_MODEL_2026-10-21.md`.
