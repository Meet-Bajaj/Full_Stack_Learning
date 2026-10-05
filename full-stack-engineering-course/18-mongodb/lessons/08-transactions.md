# Lesson 08: Transactions

## 1. Introduction and Learning Objectives
Historically, MongoDB did not support multi-document transactions. It relied on the fact that single-document operations (updating an embedded array) were atomic. Since version 4.0, MongoDB supports true ACID multi-document transactions.

**Learning Objectives:**
- Understand ACID in the context of MongoDB.
- Write a basic multi-document transaction using Sessions.
- Know when to avoid transactions.

---

## 2. Multi-Document Transactions

Transactions allow you to execute multiple operations in an "all or nothing" manner. If any operation fails, the entire transaction is aborted, and no data is saved.

To use transactions in MongoDB, you must use a **Session**.

```javascript
// Pseudo-code for a Node.js driver implementation
const session = client.startSession();

try {
  // Start the transaction
  session.startTransaction();

  // Deduct money from Alice (pass the session!)
  await accounts.updateOne(
    { name: "Alice" }, 
    { $inc: { balance: -100 } }, 
    { session }
  );

  // Add money to Bob
  await accounts.updateOne(
    { name: "Bob" }, 
    { $inc: { balance: 100 } }, 
    { session }
  );

  // If everything works, commit the transaction
  await session.commitTransaction();
} catch (error) {
  // If anything fails, undo all changes
  await session.abortTransaction();
} finally {
  session.endSession();
}
```

---

## 3. When NOT to Use Transactions

Transactions in MongoDB incur a significant performance penalty (often 3x to 4x slower than standard operations). They also hold locks on documents.

**Best Practice:**
If you need transactions for almost every operation in your app, **you are using the wrong database**. You should be using PostgreSQL.

In MongoDB, you should solve most transactional needs via **Schema Design** (embedding data so a single `updateOne` handles the whole atomic change). Only use multi-document transactions for exceptional edge cases.

---

## 4. Summary & Checklist
**Summary:** MongoDB supports ACID transactions via Sessions. However, they should be used sparingly due to performance impacts. Always try to model data to rely on single-document atomicity first.

**Completion Checklist:**
- [ ] I know how to start, commit, and abort a transaction.
- [ ] I understand the necessity of passing the `session` object to the database queries.
- [ ] I understand why I should avoid relying heavily on MongoDB transactions.
