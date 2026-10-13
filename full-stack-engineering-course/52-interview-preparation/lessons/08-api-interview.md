# Lesson 08: API Design Interview Questions

## Learning Objectives
- Understand REST principles and HTTP methods/status codes.
- Explain authentication strategies (JWT, OAuth, Sessions).
- Discuss API versioning, rate limiting, and pagination.

## 1. RESTful Principles

REST (Representational State Transfer) is an architectural style.
Key constraints:
- **Client-Server:** Separation of concerns.
- **Stateless:** Each request from client to server must contain all info needed to understand and process the request.
- **Cacheable:** Responses must implicitly or explicitly define themselves as cacheable or not.
- **Uniform Interface:** Consistent resource identification and manipulation.

## 2. HTTP Methods & Status Codes

- **GET:** Retrieve a resource (Idempotent).
- **POST:** Create a new resource (Not idempotent).
- **PUT:** Update/Replace a resource completely (Idempotent).
- **PATCH:** Partially update a resource (Not strictly idempotent, but often implemented as such).
- **DELETE:** Remove a resource (Idempotent).

**Common Status Codes:**
- `200 OK`, `201 Created`, `204 No Content`
- `400 Bad Request`, `401 Unauthorized` (unauthenticated), `403 Forbidden` (authenticated but unauthorized), `404 Not Found`, `429 Too Many Requests`
- `500 Internal Server Error`, `503 Service Unavailable`

## 3. Authentication & Authorization

- **Session-based (Cookies):** Stateful. Server stores session data. Better for web apps on the same domain.
- **JWT (JSON Web Tokens):** Stateless. Token contains payload data. Better for mobile apps and cross-domain APIs. 

## 4. API Design Best Practices

- **Versioning:** Use URL versioning (e.g., `/api/v1/users`) or header versioning to avoid breaking changes for existing clients.
- **Pagination:** Essential for performance. Use Offset-based (limit/offset) or Cursor-based pagination.

## Summary & Checklist
- [ ] Differentiate between `PUT` and `PATCH`.
- [ ] Explain why a REST API is stateless.
- [ ] Describe the differences between Session and JWT auth.
