# Lesson 8: Caching Patterns

- **Cache-Aside**: Application code checks cache, then DB.
- **Write-Through**: App writes to cache, cache writes to DB.
- **Cache Stampede**: When a popular key expires, many requests hit the DB at once. Use locking to prevent this.
