# Lesson 4: Idempotency

## Learning Objectives
- Understand idempotency and why it's critical for distributed systems.
- Implement idempotency keys in API requests.
- Differentiate between at-most-once, at-least-once, and exactly-once delivery.

## Why it Exists
When a client sends a request (e.g., "charge $50"), a network timeout might occur before the client receives the response, even if the server successfully processed the charge. If the client retries, they might get double-charged. Idempotency ensures that retrying a request has the same effect as making it once.

## Mental Model & Analogy
An elevator button is idempotent. Pressing the "floor 5" button once takes you to floor 5. Pressing it 10 times still takes you to floor 5. Contrast this with a counter button: pressing it 10 times increments the count by 10.

## Implementation: Idempotency Keys
Clients pass a unique `Idempotency-Key` header with state-changing requests (POST, PATCH). The server checks if it has seen this key before.

```typescript
// Middleware example in Express/NestJS
async function idempotencyMiddleware(req, res, next) {
  const key = req.headers['idempotency-key'];
  if (!key) return next();

  // Check if we already processed this
  const existingResponse = await redis.get(`idempotency:${key}`);
  if (existingResponse) {
    return res.status(200).json(JSON.parse(existingResponse));
  }
  
  // Intercept the response to save it
  const originalSend = res.send;
  res.send = function (body) {
    redis.set(`idempotency:${key}`, body, 'EX', 86400); // 24 hours
    originalSend.call(this, body);
  };
  next();
}
```

## Checklist
- [ ] Understand idempotency vs non-idempotency
- [ ] Implement an idempotency key middleware
- [ ] Explain delivery guarantees
