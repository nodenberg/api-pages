---
sidebar_position: 2
---

# Authentication

All endpoints require an API key except `GET /health`.

## Header

Use the `X-API-Key` header:

```bash
curl -H "X-API-Key: your-secret-api-key-here" \
  http://localhost:3000/template/placeholders
```

## Setup

1. Create `.env` from `.env.example`.
2. Set `API_KEY`.
3. Restart the server.

```bash
API_KEY=your-secret-api-key-here
```

## Errors

### Unauthorized (`401`)

```json
{
  "error": "Unauthorized",
  "message": "Valid API key required. Provide it in the X-API-Key header."
}
```

### Server configuration error (`500`)

```json
{
  "error": "Server Configuration Error",
  "message": "API_KEY is not configured on the server. Please set API_KEY in .env file."
}
```

## Browser behavior

- `OPTIONS` preflight requests are accepted without API key.
- Actual requests still require `X-API-Key` (except `/health`).
