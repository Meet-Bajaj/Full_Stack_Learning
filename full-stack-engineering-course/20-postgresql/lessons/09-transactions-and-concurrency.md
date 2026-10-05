# Lesson 09: Transactions and Concurrency

## 1. Introduction and Learning Objectives
Postgres handles concurrency incredibly well due to MVCC. However, when multiple transactions try to modify the exact same row, you need explicit locking strategies to prevent race conditions.

**Learning Objectives:**
- Understand Row-Level Locking (`FOR UPDATE`).
- Understand Deadlocks.
- Understand Advisory Locks.

---

## 2. Row-Level Locks (FOR UPDATE)

Imagine a ticket purchasing system. There is 1 ticket left. User A and User B click "Buy" at the exact same millisecond.
If you just run `SELECT ...` and then `UPDATE ...`, both users will think they bought the ticket.

**Pessimistic Locking:** You lock the row when you read it, so nobody else can read/write it until your transaction finishes.

```sql
BEGIN;

-- Lock the row. If User B runs this query, they must WAIT here.
SELECT * FROM tickets 
WHERE id = 42 
FOR UPDATE; 

UPDATE tickets SET status = 'sold' WHERE id = 42;

COMMIT; -- The lock is released here.
```
*(Alternatives: `FOR SHARE` allows other transactions to read, but prevents them from writing).*

---

## 3. Deadlocks

A Deadlock occurs when two transactions are waiting for locks held by each other.

- **Tx A:** Locks Row 1. Wants Row 2.
- **Tx B:** Locks Row 2. Wants Row 1.
They will wait forever. Postgres detects this automatically after `deadlock_timeout` (usually 1 second) and forcibly kills one of the transactions, throwing an error.

**Prevention:** Always acquire locks in the exact same order in your application code (e.g., always lock Row 1 before Row 2).

---

## 4. Advisory Locks

Advisory Locks are application-level locks controlled entirely by the developer, using the database as a coordinator. They don't lock tables or rows; they lock a specific number.

**Use Case:** You have a cron job running on 3 different servers, but you only want ONE server to execute the job.

```sql
-- Try to acquire a lock on the arbitrary ID '12345'
SELECT pg_try_advisory_lock(12345);
-- Returns TRUE if successful. Returns FALSE if another server holds it.
```
This is a lightweight alternative to Redis distributed locks.

---

## 5. Summary & Checklist
**Summary:** While MVCC handles most concurrency gracefully, specific high-contention scenarios (like inventory management) require explicit pessimistic locking using `FOR UPDATE`. Be careful of deadlocks, and consider advisory locks for coordinating distributed workers.

**Completion Checklist:**
- [ ] I can write a `SELECT ... FOR UPDATE` query.
- [ ] I can explain what a Deadlock is.
- [ ] I understand the concept of an Advisory Lock.
