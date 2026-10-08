# Lesson 6: Caching in Systems

## 1. Learning Objectives
- Understand cache levels (browser, CDN, application, database).
- Master caching strategies like cache-aside and write-through.
- Solve cache invalidation and cache stampede problems.

## 2. What is Caching?
Caching is the technique of storing copies of frequently accessed data in a temporary, high-speed storage layer (usually RAM) to serve future requests faster.

### Real-World Analogy
Instead of going to the grocery store (Database) every time you want a snack, you keep a few snacks in a jar on your desk (Cache). It's much faster, but if the snack expires (stale data), you have a problem.

## 3. Caching Strategies
- **Cache-aside:** The application checks the cache. If a miss, it queries the DB, writes to the cache, and returns data.
- **Write-through:** The application writes data to the cache and the database simultaneously.
- **Write-behind:** The application writes data to the cache, and an async process writes it to the database later.

## 4. Cache Invalidation
The hardest problem in computer science. How do you know when to delete cached data?
- **TTL (Time to Live):** E.g., expire data after 10 minutes.
- **Event-based:** When a DB row is updated, trigger a cache deletion.

## 5. Summary and Checklist
- [ ] Understand the trade-offs of different caching strategies.
- [ ] Explain how a CDN acts as an edge cache.
