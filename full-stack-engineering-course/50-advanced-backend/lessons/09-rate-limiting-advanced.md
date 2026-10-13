# Lesson 9: Advanced Rate Limiting

## Learning Objectives
- Understand Token Bucket and Sliding Window algorithms.
- Implement Distributed Rate Limiting using Redis.
- Apply per-user and per-IP limits.

## Why it Exists
To protect APIs from abuse, DDoS attacks, and resource exhaustion. Simple in-memory rate limiting fails in multi-server setups because each server tracks limits independently.

## Mental Model
Think of an arcade. You get 5 tokens (Token Bucket). Every game costs 1 token. You get a new token every hour. If you spend all 5, you must wait. 

## Redis Sliding Window Implementation
```typescript
import Redis from 'ioredis';
const redis = new Redis();

async function isRateLimited(userId, limit, windowSeconds) {
  const now = Date.now();
  const windowStart = now - (windowSeconds * 1000);
  const key = `ratelimit:${userId}`;
  
  const pipeline = redis.pipeline();
  // Remove old requests
  pipeline.zremrangebyscore(key, 0, windowStart);
  // Count requests in current window
  pipeline.zcard(key);
  // Add current request
  pipeline.zadd(key, now, now.toString());
  // Set expiry to keep Redis clean
  pipeline.expire(key, windowSeconds);
  
  const results = await pipeline.exec();
  const requestCount = results[1][1]; // result of zcard
  
  return requestCount >= limit;
}
```

## Checklist
- [ ] Explain Token Bucket vs Sliding Window
- [ ] Implement Redis-backed rate limiter
- [ ] Return HTTP 429 Too Many Requests with `Retry-After` header
