# Lesson 3: Concurrency Control

## Learning Objectives
- Identify race conditions in web applications
- Implement optimistic locking
- Implement pessimistic locking
- Use distributed locks (Redis)

## Why it Exists
When multiple requests try to modify the same resource simultaneously, they can overwrite each other, leading to inconsistencies (e.g., overselling inventory).

## Mental Model
- **Optimistic Locking**: Going to a public bathroom, assuming it's empty, and only checking if it's occupied when you try to open the door.
- **Pessimistic Locking**: Putting a lock on the bathroom door as soon as you enter, preventing anyone else from even trying until you're done.

## Optimistic Locking
Uses a `version` column.
```typescript
// Update where id = ID and version = VERSION
const updated = await prisma.product.updateMany({
  where: { id: productId, version: currentVersion },
  data: { stock: newStock, version: { increment: 1 } }
});

if (updated.count === 0) {
  throw new Error('Concurrent modification detected');
}
```

## Pessimistic Locking
Uses DB-level locks like `SELECT ... FOR UPDATE`.
```sql
BEGIN;
SELECT stock FROM products WHERE id = 1 FOR UPDATE;
UPDATE products SET stock = stock - 1 WHERE id = 1;
COMMIT;
```

## Redis Distributed Locks
Used when locking across multiple systems or non-DB resources.
```typescript
import Redis from 'ioredis';
import Redlock from 'redlock';

const redis = new Redis();
const redlock = new Redlock([redis], { retryCount: 3 });

async function processOrder() {
  const lock = await redlock.acquire(['inventory:lock:123'], 5000);
  try {
    // Critical section
  } finally {
    await lock.release();
  }
}
```

## Checklist
- [ ] Understand race conditions
- [ ] Implement version-based optimistic locking
- [ ] Use Redlock for distributed locking
