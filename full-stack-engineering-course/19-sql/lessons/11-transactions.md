# Lesson 11: Transactions

## 1. Introduction and Learning Objectives
In complex applications, a single logical action often requires multiple database queries. If one query succeeds but the next fails, you can end up with corrupted data. Transactions solve this problem.

**Learning Objectives:**
- Understand the concept of Database Transactions.
- Master the ACID properties (Atomicity, Consistency, Isolation, Durability).
- Use `BEGIN`, `COMMIT`, and `ROLLBACK`.
- Understand Transaction Isolation Levels and concurrency phenomena (Dirty Reads, Phantom Reads).

---

## 2. What is a Transaction?

A transaction is a single unit of work that consists of one or more SQL statements. 

**The Classic Example: Bank Transfer**
To transfer $100 from Alice to Bob, you need two queries:
1. `UPDATE accounts SET balance = balance - 100 WHERE name = 'Alice';`
2. `UPDATE accounts SET balance = balance + 100 WHERE name = 'Bob';`

If the database crashes after step 1, Alice lost $100 and Bob never got it. A Transaction ensures that **both steps succeed, or neither succeeds.**

```sql
BEGIN; -- Start the transaction

UPDATE accounts SET balance = balance - 100 WHERE name = 'Alice';
UPDATE accounts SET balance = balance + 100 WHERE name = 'Bob';

COMMIT; -- Save all changes permanently
```
If an error occurs, you issue a `ROLLBACK;` to undo everything since `BEGIN`.

---

## 3. The ACID Properties

Relational databases guarantee ACID properties for transactions:

1. **A - Atomicity:** "All or Nothing." The transaction executes entirely, or not at all.
2. **C - Consistency:** The database moves from one valid state to another. Constraints (like `balance >= 0`) are never violated.
3. **I - Isolation:** Concurrent transactions execute as if they were running sequentially. One transaction cannot interfere with another mid-flight.
4. **D - Durability:** Once a transaction is `COMMIT`ted, the data is saved permanently, even if the power goes out the next millisecond.

---

## 4. Concurrency Phenomena and Isolation Levels

When hundreds of users hit your database simultaneously, Isolation becomes tricky. Databases offer different **Isolation Levels** to balance performance vs. strictness.

### Phenomena (Problems)
- **Dirty Read:** Reading uncommitted data from another transaction. (If that transaction rolls back, you read data that never existed).
- **Non-repeatable Read:** Reading the same row twice in a transaction and getting different values (because another transaction updated it).
- **Phantom Read:** Re-executing a query that returns a set of rows and finding new rows (because another transaction inserted them).

### Isolation Levels
From fastest/least strict to slowest/most strict:
1. **READ UNCOMMITTED:** Fastest. Allows dirty reads. (Rarely used).
2. **READ COMMITTED:** (Default in Postgres). Prevents dirty reads.
3. **REPEATABLE READ:** Prevents dirty and non-repeatable reads. 
4. **SERIALIZABLE:** Safest, slowest. Prevents all phenomena. Transactions behave as if executed strictly one after another.

---

## 5. Summary & Checklist

**Summary:**
Transactions are essential for maintaining data integrity when executing multiple related queries. By wrapping operations in `BEGIN` and `COMMIT`, we satisfy the ACID properties, ensuring our database state remains valid even in the face of application crashes or concurrent access.

**Completion Checklist:**
- [ ] I can write a basic transaction block with `BEGIN` and `COMMIT/ROLLBACK`.
- [ ] I can define Atomicity, Consistency, Isolation, and Durability.
- [ ] I understand the bank transfer scenario and why transactions are necessary.
- [ ] I know what a Dirty Read is and how Isolation levels affect concurrency.
