# Lesson 1: Caching Fundamentals

## 1. Learning Objectives
- Define caching and explain its benefits.
- Understand cache hits, cache misses, and Time-to-Live (TTL).
- Compare cache eviction policies like LRU and LFU.

## 2. What is Caching?
Caching is the process of storing data in a temporary storage area (usually RAM) to serve future requests faster. Instead of calculating a heavy database query or fetching an external API every time, you store the result and reuse it.

## 3. Key Concepts
- **Cache Hit:** The requested data is found in the cache. Fast response.
- **Cache Miss:** The data is not in the cache. The system must fetch it from the primary database, slowing down the response.
- **TTL (Time to Live):** An absolute time limit on how long an item stays in the cache before it is considered stale and deleted (e.g., 60 seconds).

## 4. Eviction Policies
When the cache runs out of memory, it must delete old data to make room for new data.
- **LRU (Least Recently Used):** Discards the least recently accessed items first. The most common default.
- **LFU (Least Frequently Used):** Discards the items accessed the least number of times.

## 5. Summary and Checklist
- [ ] Calculate the performance difference between a cache hit and a miss.
- [ ] Understand why LRU is generally preferred over LFU for web applications.
