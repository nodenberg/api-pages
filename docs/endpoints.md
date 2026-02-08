---
sidebar_position: 3
---

# Endpoint Index

## Health

- `GET /health`

## Template inspection

- `POST /template/placeholders`
- `POST /template/info`
- `POST /template/sheets`
- `POST /template/validate`
- `POST /template/upload` (deprecated alias)

## Output generation

- `POST /generate/excel`
- `POST /generate/excel/by-display-order`
- `POST /generate/pdf`
- `POST /generate/pdf/by-display-order`

## Notes

- For full payload examples and behavior details, use the source copy page.
- Base64 encoding is required for template and generated file content.

Continue to: [`Reference / API Source Copy`](./reference/API)
