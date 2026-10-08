# Module 28 Cheatsheet

### Promise.all (Concurrency)
```javascript
const [a, b] = await Promise.all([queryA(), queryB()]);
```

### Caching Headers
```http
Cache-Control: public, max-age=31536000, immutable
```

### Redis Caching
```javascript
const cached = await redis.get('key');
if (cached) return JSON.parse(cached);
const data = await db.query();
await redis.set('key', JSON.stringify(data), 'EX', 3600);
```

### Load Testing (k6)
```bash
k6 run script.js
```
