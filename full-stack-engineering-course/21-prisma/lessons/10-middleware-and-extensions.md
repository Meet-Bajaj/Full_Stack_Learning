# Lesson 10: Middleware and Extensions

## Prisma Client Extensions
The modern way to extend Prisma (replacing older middleware). Allows adding computed fields, custom methods, and global query modification (like soft deletes).

```typescript
const prisma = new PrismaClient().$extends({
  model: {
    user: {
      signUp() { /* custom logic */ }
    }
  }
})
```
