# Lesson 4: Application Caching

## 1. Learning Objectives
- Differentiate between In-Memory caching and Distributed caching (Redis).
- Determine what data is safe to cache.

## 2. In-Memory Caching (Local)
Storing data in the Node.js process memory (e.g., using `node-cache`).
- **Pros:** Ultra-fast. No network calls.
- **Cons:** If you have 5 servers, they all have different caches. Inconsistent state. Memory is limited.

## 3. Distributed Caching (Redis)
Using a dedicated cache server (like Redis or Memcached) that all application servers talk to.
- **Pros:** Consistent state across all app servers. Scales independently.
- **Cons:** Slightly slower (network hop). More infrastructure to manage.

## 4. What to Cache
- **DO cache:** Frequent, slow read queries. Static configuration data. Session data.
- **DO NOT cache:** Highly volatile financial data. User-specific private data (unless carefully keyed by user ID).

## 5. Summary and Checklist
- [ ] Compare local Node.js variables vs Redis for caching.
- [ ] Identify candidate DB queries for caching.
