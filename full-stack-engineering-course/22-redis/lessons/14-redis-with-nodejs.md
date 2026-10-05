# Lesson 14: Redis with Node.js

Using `ioredis` for robust connection pooling, cluster support, and promises.
```javascript
const Redis = require('ioredis');
const redis = new Redis();
await redis.set('foo', 'bar');
```
