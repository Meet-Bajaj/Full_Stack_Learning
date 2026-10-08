# Lesson 5: Caching

## Learning Objectives
- Implement Browser Caching (Cache-Control headers).
- Use a CDN for static assets.
- Implement server-side caching (Redis).

## Caching Layers
1. **Client/Browser**: Caches images, CSS, JS. Controlled via `Cache-Control` header.
2. **CDN**: Distributed servers that cache your static assets geographically close to the user.
3. **Application Cache (Redis)**: Caches expensive database queries or rendered HTML in memory.

## Cache Invalidation
"There are only two hard things in Computer Science: cache invalidation and naming things."
Always set a Time-To-Live (TTL) or trigger invalidation hooks when the underlying data changes.
