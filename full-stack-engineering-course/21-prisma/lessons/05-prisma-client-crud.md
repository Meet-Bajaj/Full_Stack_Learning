# Lesson 5: CRUD with Prisma Client

## Create
```typescript
const user = await prisma.user.create({
  data: { email: 'alice@prisma.io', name: 'Alice' },
})
```

## Read
```typescript
const users = await prisma.user.findMany()
const user = await prisma.user.findUnique({ where: { id: 1 } })
```

## Update
```typescript
const user = await prisma.user.update({
  where: { id: 1 },
  data: { name: 'Alice Wonderland' },
})
```

## Delete
```typescript
const user = await prisma.user.delete({ where: { id: 1 } })
```
