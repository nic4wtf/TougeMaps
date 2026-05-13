# Repo Rules

- Every time changes are uploaded to GitHub, bump the app version number first.
- Keep the version synchronized in `pwa/app.js`, `pwa/index.html`, and `pwa/version.json`.
- Keep the service worker cache version in `pwa/sw.js` synchronized with the app version too.
- Treat a version bump as part of the same commit that ships the user-facing change.
