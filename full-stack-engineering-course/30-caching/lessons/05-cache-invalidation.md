# Lesson 5: Cache Invalidation

## 1. Learning Objectives
- Master the hard problem of cache invalidation.
- Implement event-based invalidation.
- Prevent cache stampedes.

## 2. The Problem
"There are only two hard things in Computer Science: cache invalidation and naming things." - Phil Karlton.
If you update a user's name in the DB, the cache still holds the old name until the TTL expires.

## 3. Strategies
- **TTL:** Just wait it out. Good if eventual consistency is acceptable.
- **Active Invalidation (Event-based):** When you `UPDATE` the DB, you explicitly call `redis.del('user:123')`. The next read will be a miss and fetch the fresh data.
- **Versioned Keys:** Instead of caching `user:123`, cache `user:123:v1`. When updated, change the app to request `v2`.

## 4. Cache Stampede (Dogpiling)
If a highly popular cached item (like a homepage layout) expires, 10,000 concurrent requests might all experience a cache miss at the same millisecond and hit the database simultaneously, crashing it.
- **Solution:** Locking / Debouncing. The first request acquires a lock, queries the DB, and repopulates the cache. The other 9,999 requests wait for the lock to release.

## 5. Summary and Checklist
- [ ] Implement active cache invalidation on a REST API `PUT` endpoint.
- [ ] Explain how to prevent a cache stampede.
