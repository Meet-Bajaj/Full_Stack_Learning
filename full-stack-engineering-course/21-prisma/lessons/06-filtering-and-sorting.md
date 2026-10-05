# Lesson 6: Filtering and Sorting

## Filtering
Use the `where` object to filter results.
```typescript
const users = await prisma.user.findMany({
  where: {
    email: { endsWith: '@prisma.io' },
    name: { contains: 'Alice' }
  }
})
```

## Sorting
Use the `orderBy` object.
```typescript
const users = await prisma.user.findMany({
  orderBy: { createdAt: 'desc' }
})
```

## Pagination
- **Offset pagination**: `skip` and `take`.
- **Cursor pagination**: `cursor` and `take`.
