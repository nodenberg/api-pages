---
sidebar_position: 4
---

# Usage Notes

## Placeholder formats

Standard placeholders:

```text
{{placeholder_name}}
```

Array placeholders (legacy):

```text
{{#ArrayName.field}}
```

Section-table placeholders (recommended):

```text
{{##section.table.cell}}
```

Rules:

- Placeholders are case-sensitive.
- Do not mix `{{#...}}` and `{{##...}}` in one template.
- Section-table rows must be contiguous.

## Encoding

All file payloads are base64 strings.

```js
const fileBuffer = fs.readFileSync('template.xlsx');
const templateBase64 = fileBuffer.toString('base64');
```

## Runtime dependencies

PDF generation requires LibreOffice (`soffice`) on the server.
