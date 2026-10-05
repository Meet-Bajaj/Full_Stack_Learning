# Lesson 16: Production

- Never use `KEYS *` in production; use `SCAN`.
- Configure `maxmemory-policy` (e.g., `allkeys-lru`) to handle memory limits.
