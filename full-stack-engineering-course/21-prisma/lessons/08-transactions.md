# Lesson 8: Transactions

## Interactive Transactions
Use `$transaction` to execute multiple operations in a single database transaction.

```typescript
await prisma.$transaction(async (tx) => {
  const sender = await tx.account.update({
    where: { id: senderId },
    data: { balance: { decrement: amount } }
  })
  const recipient = await tx.account.update({
    where: { id: recipientId },
    data: { balance: { increment: amount } }
  })
})
```
