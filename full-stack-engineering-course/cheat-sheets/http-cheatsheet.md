# HTTP Cheat Sheet

## HTTP Methods
- `GET`: Retrieve data. (Idempotent, Safe, Cacheable).
- `POST`: Submit data to create a resource or trigger an action. (Not idempotent).
- `PUT`: Update a resource completely or create if it doesn't exist. (Idempotent).
- `PATCH`: Partially update a resource. (Not necessarily idempotent).
- `DELETE`: Remove a resource. (Idempotent).
- `OPTIONS`: Ask the server for permitted communication options (Used in CORS preflight).

## Common Status Codes
**2xx Success**
- `200 OK`: Request succeeded.
- `201 Created`: Resource successfully created.
- `204 No Content`: Success, but no body to return (often for DELETE).

**3xx Redirection**
- `301 Moved Permanently`: URL changed forever.
- `304 Not Modified`: Cached version is still valid.

**4xx Client Errors**
- `400 Bad Request`: Invalid input or malformed request.
- `401 Unauthorized`: Authentication missing or invalid.
- `403 Forbidden`: Authenticated, but lacks permission.
- `404 Not Found`: Resource does not exist.
- `429 Too Many Requests`: Rate limit exceeded.

**5xx Server Errors**
- `500 Internal Server Error`: Generic server crash.
- `502 Bad Gateway`: Upstream server (proxy) failed.
- `503 Service Unavailable`: Server overloaded or down for maintenance.

## Important Headers
- `Authorization`: Credentials (e.g., `Bearer <token>`).
- `Content-Type`: Media type of the body (e.g., `application/json`).
- `Accept`: What media types the client can handle.
- `User-Agent`: Info about the client's browser/OS.

## CORS (Cross-Origin Resource Sharing)
Browser security mechanism that restricts cross-origin HTTP requests.
- **Preflight Request**: Browser sends an `OPTIONS` request first for non-simple requests (like `PUT` with JSON).
- Server must respond with `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, etc.

## Caching Headers
- `Cache-Control`: Primary header for caching directives.
  - `max-age=3600`: Cache for 1 hour.
  - `no-cache`: Must validate with server before using cached copy.
  - `no-store`: Do not cache at all.
- `ETag`: Unique string identifying the version of the resource. Used for validation.
