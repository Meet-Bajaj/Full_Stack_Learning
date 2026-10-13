# Lesson 6: Graceful Shutdown

## Learning Objectives
- Handle SIGTERM and SIGINT signals.
- Safely drain existing connections before terminating the process.
- Implement zero-downtime deployments.

## Why it Exists
When a server is killed or deployed to, abruptly stopping the process drops active user requests, potentially leaving the database in an inconsistent state and causing a bad user experience.

## Mental Model
Imagine a restaurant closing at 10 PM. A graceful shutdown means locking the front door at 10 PM so no *new* customers enter, but allowing the customers already inside to finish their meals and pay before the staff goes home. A hard shutdown means kicking everyone out mid-bite.

## Implementation (Node.js)
```typescript
const server = app.listen(3000);

function gracefulShutdown(signal) {
  console.log(`Received ${signal}. Shutting down gracefully...`);
  
  // 1. Stop accepting new connections
  server.close(async (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    
    // 2. Close database connections
    await prisma.$disconnect();
    console.log('Closed database connections.');
    
    // 3. Exit
    process.exit(0);
  });

  // Force close if it takes too long
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
```

## Checklist
- [ ] Understand POSIX signals
- [ ] Implement `server.close()`
- [ ] Handle cleanup logic within a timeout
