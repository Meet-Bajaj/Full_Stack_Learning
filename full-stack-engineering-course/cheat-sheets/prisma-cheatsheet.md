# Prisma Cheat Sheet

## Schema (`schema.prisma`)
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]   // One-to-many relation
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id       Int    @id @default(autoincrement())
  title    String
  content  String
  authorId Int
  author   User   @relation(fields: [authorId], references: [id])
}
```

## CLI Commands
- `npx prisma init`: Create empty schema
- `npx prisma format`: Format schema file
- `npx prisma db push`: Push schema to DB (good for prototyping)
- `npx prisma migrate dev`: Create and apply migration
- `npx prisma generate`: Update Prisma Client after schema changes
- `npx prisma studio`: Open GUI to view/edit data

## CRUD Operations
```typescript
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Create
const user = await prisma.user.create({
  data: {
    email: 'alice@prisma.io',
    name: 'Alice',
    posts: { create: [{ title: 'Hello World' }] } // Nested create
  },
})

// Read (Find Unique)
const alice = await prisma.user.findUnique({
  where: { email: 'alice@prisma.io' },
  include: { posts: true } // Fetch relation
})

// Read (Find Many with filtering)
const users = await prisma.user.findMany({
  where: {
    email: { endsWith: 'prisma.io' },
    posts: { some: { published: true } }
  },
  orderBy: { createdAt: 'desc' },
  take: 10,
  skip: 0
})

// Update
const updated = await prisma.user.update({
  where: { id: 1 },
  data: { name: 'Alice Smith' }
})

// Delete
const deleted = await prisma.user.delete({
  where: { id: 1 }
})
```

## Transactions
```typescript
// Interactive Transaction
const result = await prisma.$transaction(async (tx) => {
  const sender = await tx.account.update({
    data: { balance: { decrement: 100 } },
    where: { id: 1 }
  });
  
  if (sender.balance < 0) throw new Error('Insufficient funds');
  
  const recipient = await tx.account.update({
    data: { balance: { increment: 100 } },
    where: { id: 2 }
  });
  
  return recipient;
});
```
