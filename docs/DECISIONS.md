# Decisions

One dated line per non-obvious decision or trap. Reason in brackets. Git holds the rest.

- 2026-10-23: Checks and deploys run locally; GitHub Actions disabled. [Owner model, GENERAL_MODEL_2026-10-21.md]
- 2026-10-23: Branch `main` renamed to `production`; the same SHA (d1afc27). [Owner approved. Vercel production follows `production`, set by owner]
- 2026-10-23: Repo visibility PUBLIC, left unchanged. [Owner decision open]
- 2026-10-23: `experiment` is served on 127.0.0.1:8090 from `D:\Portfolio`. Gates never replace it. [No live target in gate-deploy by design]
- 2026-10-23: Project folder moved from `D:\shobhit-portfolio` to `D:\Portfolio`; 8090 restarted with a hard stop (a console node process has no graceful stop). [Backups: `E:\ProjectBackups\2026-10-23\Portfolio\` and `Portfolio-all-refs.bundle`, verified]
- 2026-10-23: Gates copy `node_modules` into the scratch export. [Turbopack rejects a junction that points outside the project]
- 2026-10-24: Docs cut to CLAUDE.md, README, docs/DEPLOYMENT.md, docs/BACKLOG.md, docs/DECISIONS.md. RULES merged into CLAUDE.md; HISTORY and the restructure report moved to `D:\_quarantine\2026-10-24-portfolio\` (MANIFEST.csv). [Git holds history; per-task logs drift]
- 2026-10-24: Push of `experiment` runs gate-fast only. Pre-push routes any branch other than production/integration to gate-fast. [Experiment is not a release]
- 2026-10-24: Official README lists only what `integration` contains. Experiment-only features (side quests, comic components, `start:pc`) are not listed there. [Public README must match the released code]
