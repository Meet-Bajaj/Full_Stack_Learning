# Lesson 9: Raw Queries

## `$queryRaw`
For complex queries not supported by Prisma Client.
```typescript
const result = await prisma.$queryRaw`SELECT * FROM User WHERE email = ${email}`
```

*Note: Tagged template literals prevent SQL injection.*
