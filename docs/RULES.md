# Rules (Portfolio)

1. Checks run locally. GitHub Actions are disabled for this repo and must not be re-enabled. Do not add workflow files.
2. Never commit to `production` directly. Work on `task/*`, merge into `integration`, then into `production` only with owner go-ahead.
3. Every `task/*` push runs gate-fast (pre-push hook). `integration` runs gate-full. Never bypass a hook.
4. Never kill the 8090 server or change its port. Restart only through the scheduled task "Portfolio PC Server".
5. Do not build inside `D:\Portfolio` while 8090 is up. Use the gates or a scratch copy.
6. Do not delete anything. Move unwanted files to `D:\_quarantine\`.
7. No secrets, keys, `.env*` or `.vercel` folders in git.
8. Do not rewrite shared history (no force push, no rebase of pushed branches).
9. Do not change repo visibility or make anything public without the owner.
10. Every change that alters how the project runs or ships is logged in `docs/HISTORY.md`.
11. Report every gate as PASS, FAIL or SKIPPED with the reason. Unrun checks are not claimed.
