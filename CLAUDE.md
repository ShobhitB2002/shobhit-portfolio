# Portfolio (Shobhit Bansal, iOS developer portfolio)

Master folder: `D:\Portfolio`. Next.js 16 (App Router), Tailwind 3. Public repo: https://github.com/ShobhitB2002/shobhit-portfolio (visibility PUBLIC; do not change without owner OK).

## Read first
- `docs/RULES.md` - working rules for this repo.
- `docs/DEPLOYMENT.md` - gates, branches, release and PC hosting.
- `docs/HISTORY.md` - what changed and why.
- `D:\ForgeLoop\GENERAL_MODEL_2026-10-21.md` - general local CI/CD model for all projects.

## Branches
- `main` - production branch. Vercel's production deploys follow it. Not renamed to `production` (see HISTORY 2026-10-23).
- `integration` - combined task work; runs gate-full on push.
- `task/<type>-<name>` - one task; runs gate-fast on push (pre-push hook).
- `experiment` - checked out in `D:\Portfolio`. It is the build served on 127.0.0.1:8090. Keep it as-is.
- Other branches (`claude_revamp`, `feature_*`): kept untouched.

## Ports and PC hosting
8090 (127.0.0.1) is this app, served by `next start` through the scheduled task "Portfolio PC Server" (`C:\Users\Vuseia\portfolio-pc-start.vbs`). Tailscale Serve (tailnet only, not Funnel): `https://vuseia-pc.tail535e2b.ts.net:10000` -> 8090. Do not change ports or Tailscale without the owner. Port table: `C:\Users\Vuseia\.claude\CLAUDE.md`.

## Commands
- `npm run dev` - local dev server (not for 8090).
- `powershell -ExecutionPolicy Bypass -File tools\ci\gate-fast.ps1` / `gate-full.ps1` - run gates by hand.
- `powershell -ExecutionPolicy Bypass -File tools\ci\install-hooks.ps1` - install hooks in this clone.
- Never run `npm run build` inside `D:\Portfolio` while 8090 is up: it rewrites the `.next` the server reads. Gates build in a scratch export.
