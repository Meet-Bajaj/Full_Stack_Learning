# Lesson 7: Relation Queries

## Eager Loading (Include)
```typescript
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: { posts: true }
})
```

## Nested Writes
Create a user and their posts in one transaction.
```typescript
const user = await prisma.user.create({
  data: {
    email: 'bob@prisma.io',
    posts: {
      create: [{ title: 'First Post' }]
    }
  }
})
```
