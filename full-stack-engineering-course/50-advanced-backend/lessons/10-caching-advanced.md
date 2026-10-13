# Lesson 10: Advanced Caching

## Learning Objectives
- Master Cache-Aside pattern.
- Handle Cache Stampedes.
- Implement Cache Invalidation strategies.

## Why it Exists
Database queries are expensive. Caching stores the result of expensive operations in fast memory (Redis), reducing latency and DB load. However, caching introduces the complex problem of keeping data fresh.

## Mental Model
A cache is like a cheat sheet for an exam. You look at the cheat sheet first (fast). If the answer isn't there (cache miss), you have to look it up in the textbook (database) and then write it on your cheat sheet for next time (cache-aside).

## Cache Stampede
Occurs when a popular cached item expires, and thousands of concurrent requests all hit the database simultaneously to recalculate it.
**Solution**: Use a distributed lock. The first request acquires the lock, fetches from DB, and updates the cache. Other requests wait for the lock or serve slightly stale data.

## Implementation: Cache-Aside with Redis
```typescript
async function getUser(id: string) {
  const cacheKey = `user:${id}`;
  
  // 1. Check Cache
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);
  
  // 2. Cache Miss: Fetch from DB
  const user = await db.users.findById(id);
  
  // 3. Update Cache
  if (user) {
    await redis.set(cacheKey, JSON.stringify(user), 'EX', 3600); // 1 hour
  }
  
  return user;
}
```

## Checklist
- [ ] Understand Cache-Aside pattern
- [ ] Prevent Cache Stampede using Redlock or stale-while-revalidate
- [ ] Plan an invalidation strategy (e.g., delete cache on PUT/POST)
