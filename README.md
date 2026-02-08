# Nodenberg API Pages (Docusaurus)

Static documentation site for the Nodenberg API, prepared for GitHub Pages hosting.

## Scope

- This repository contains documentation site content only.
- The API source markdown is copied from:
  - `https://github.com/nodenberg/nodenberg/blob/main/docs/API.md`

## Notes
- `docs/reference/API.md` is a copy of the original source and is kept as-is.
- Source sync is manual.

## Prerequisites

- Node.js `>=20.0` (see `package.json`)
- npm
- Push permission to `https://github.com/nodenberg/api-pages`

## Initial setup (first time)

1. Install dependencies:

```bash
npm ci
```

2. Confirm Git remote:

```bash
git remote -v
```

`origin` should point to:
`https://github.com/nodenberg/api-pages.git`

3. Configure GitHub Pages in GitHub UI (required):
   - Open repository `Settings` -> `Pages`
   - `Build and deployment` -> `Source`: `Deploy from a branch`
   - `Branch`: `gh-pages` / `/ (root)`
   - Save

## Local development

```bash
npm ci
npm run start
```

## Production build check

```bash
npm run build
npm run serve
```

## Deploy to GitHub Pages (manual)

Use Docusaurus deploy command from your local machine.

```bash
npm ci
npm run build
GIT_USER=<your-github-username> npm run deploy
```

If you use SSH for GitHub:

```bash
USE_SSH=true GIT_USER=<your-github-username> npm run deploy
```

This command publishes the build output to the `gh-pages` branch.

## Update flow (recommended)

1. Update docs (for example `docs/reference/API.md`)
2. Run local check:

```bash
npm run build
npm run serve
```

3. Commit and push to default branch (`main`)
4. Run deploy command above to update `gh-pages`

## Document structure

- `docs/intro.md`: Overview
- `docs/authentication.md`: API key auth details
- `docs/endpoints.md`: Endpoint index
- `docs/usage-notes.md`: Placeholder and encoding notes
- `docs/reference/API.md`: Source copy of API specification

