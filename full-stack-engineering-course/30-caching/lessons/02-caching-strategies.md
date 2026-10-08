# Lesson 2: Caching Strategies

## 1. Learning Objectives
- Implement Cache-aside pattern.
- Compare Read-through, Write-through, and Write-behind strategies.

## 2. Cache-Aside (Lazy Loading)
The most common caching pattern. The application code manages the cache directly.
1. Application checks cache.
2. If hit, return data.
3. If miss, query database, save to cache, return data.

```typescript
async function getUser(id) {
  const cachedUser = await redis.get(`user:${id}`);
  if (cachedUser) return JSON.parse(cachedUser);
  
  const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  await redis.set(`user:${id}`, JSON.stringify(user), 'EX', 3600); // 1 hour TTL
  return user;
}
```

## 3. Write-Through and Write-Behind
- **Write-Through:** Application writes to cache and DB simultaneously. Slower writes, faster reads, data always consistent.
- **Write-Behind:** Application writes *only* to cache, returning immediately. An async process flushes the cache to the DB. Extremely fast writes, but high risk of data loss if the cache crashes.

## 4. Summary and Checklist
- [ ] Write a cache-aside implementation in Node.js.
- [ ] Evaluate the risk of data loss in a write-behind strategy.
