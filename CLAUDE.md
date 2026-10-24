# Portfolio: AI worker entry

Next.js 16 (App Router), Tailwind 3, deployed on Vercel. Repo is PUBLIC: keep private details out. Do not change visibility.
Career claims in README.md belong to the career chat. Do not edit them here.

## Branches
- `production`: official site. Vercel production follows it. Merge only with owner go-ahead; a merge is the release go-ahead. Never commit to it directly.
- `integration`: staging for the official site. Push runs gate-full.
- `experiment`: separate experimental build, checked out in `D:\Portfolio`, served privately. Never merge it into `integration` or `production` without explicit owner approval.
- `task/<type>-<name>`: one task, cut from `integration`. Push runs gate-fast. Merge into `integration` after it passes.

## Ports and PC hosting
- 8090 (127.0.0.1): `experiment` build (`npm run start:pc`), scheduled task "Portfolio PC Server". Tailnet only: `https://vuseia-pc.tail535e2b.ts.net:10000`.
- Never run `npm run build` in `D:\Portfolio` while 8090 is up: it rewrites the `.next` the server reads. Gates build in a scratch export.
- Never kill or re-bind 8090 except through the scheduled task. Port table: `C:\Users\Vuseia\.claude\CLAUDE.md`.

## Commands
- Gates (by hand): `powershell -ExecutionPolicy Bypass -File tools\ci\gate-fast.ps1` or `gate-full.ps1`.
- Install hooks (shared by all worktrees): `powershell -ExecutionPolicy Bypass -File tools\ci\install-hooks.ps1`.
- Local dev: `npm run dev` (not on 8090).

## Hard rules
- Checks run locally. GitHub Actions are disabled. Do not add workflow files.
- Never bypass hooks (`--no-verify`), force-push, or rewrite pushed history.
- No secrets, keys, `.env*` or `.vercel` in git.
- Do not delete files: move them to `D:\_quarantine\<date>-portfolio\` with a MANIFEST.csv.
- Do not change site content, app counts or career claims without owner OK.

## Docs
- `README.md`: public, for humans.
- `docs/DEPLOYMENT.md`: gates, release, PC hosting, backups.
- `docs/BACKLOG.md`: open items. Update it when an item changes.
- `docs/DECISIONS.md`: non-obvious decisions and traps, one dated line each. No per-task log (git has it).
- Model: `D:\ForgeLoop\GENERAL_MODEL_2026-10-21.md`.
