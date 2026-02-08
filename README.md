# Nodenberg API Pages (Docusaurus)

Static documentation site for the Nodenberg API, prepared for GitHub Pages hosting.

## Scope

- This repository contains documentation site content only.
- Deployment and publishing are intentionally not configured in this phase.
- The API source markdown is copied from:
  - `/home/ubuntu/17_ex-pdf-gen/03_docker-version/docs/API.md`

## Local development

```bash
npm install
npm run start
```

## Production build check

```bash
npm run build
npm run serve
```

## Document structure

- `docs/intro.md`: Overview
- `docs/authentication.md`: API key auth details
- `docs/endpoints.md`: Endpoint index
- `docs/usage-notes.md`: Placeholder and encoding notes
- `docs/reference/API.md`: Source copy of API specification

## Notes

- `docs/reference/API.md` is a copy of the original source and is kept as-is.
- No commit/push automation is included yet.
