# Lesson 2: Database Transactions

## Learning Objectives
- Master ACID properties
- Implement transactions in Prisma
- Understand distributed transactions and the Saga Pattern

## Why it Exists
When multiple database operations must succeed or fail as a unit (e.g., transferring money), transactions prevent partial updates that lead to data corruption.

## Mental Model
A transaction is like buying a house. You don't hand over the money until the deed is signed. Either both happen, or neither happens.

## Prisma Transactions

### Sequential Operations
```typescript
const [user, profile] = await prisma.$transaction([
  prisma.user.create({ data: { email: 'test@test.com' } }),
  prisma.profile.create({ data: { bio: 'Hello' } }),
]);
```

### Interactive Transactions
```typescript
await prisma.$transaction(async (tx) => {
  const sender = await tx.account.update({
    where: { id: senderId },
    data: { balance: { decrement: amount } },
  });

  if (sender.balance < 0) {
    throw new Error('Insufficient funds');
  }

  await tx.account.update({
    where: { id: receiverId },
    data: { balance: { increment: amount } },
  });
});
```

## Distributed Transactions & Saga Pattern
In microservices, a single business transaction spans multiple databases. ACID transactions aren't possible.
**Saga Pattern**: A sequence of local transactions. Each local transaction updates the database and publishes an event to trigger the next local transaction. If a local transaction fails, the saga executes **compensating transactions** to undo the changes made by preceding local transactions.

## Checklist
- [ ] Implement Prisma interactive transaction
- [ ] Design a saga with compensating actions
