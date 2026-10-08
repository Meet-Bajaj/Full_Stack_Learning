# Caching Cheatsheet

## Strategies
- **Cache-Aside:** Application manages cache. Safe, but first request is slow (miss).
- **Write-Through:** Write to DB & Cache simultaneously. Data always fresh.
- **Write-Behind:** Write to Cache, async to DB. Fast but risky.

## HTTP Caching
- **Cache-Control:** Directives for browser/CDN.
- **ETag:** Validation token to avoid redownloading unchanged files (304 Not Modified).

## Eviction
- **LRU:** Least Recently Used (most common).
- **LFU:** Least Frequently Used.
