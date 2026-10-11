# Lesson 5: Distributed Transactions

## Learning Objectives
- Understand why ACID transactions fail across microservices.
- Explain the Two-Phase Commit (2PC) protocol and its drawbacks.
- Implement the Saga Pattern using choreographies or orchestrators.
- Understand the Outbox Pattern for reliable event publishing.

## The Problem
In a monolith:
```sql
BEGIN TRANSACTION;
UPDATE Inventory SET stock = stock - 1 WHERE id = 1;
INSERT INTO Orders (item, user) VALUES (1, 100);
COMMIT;
```
If anything fails, the database handles the rollback.

In microservices, Inventory and Orders are separate databases. You cannot run a single SQL transaction across them. 

## Two-Phase Commit (2PC)
A centralized coordinator manages the transaction across databases.
1. **Prepare Phase**: Coordinator asks DB1 and DB2: "Are you ready to commit?" Both lock their rows and reply "Yes".
2. **Commit Phase**: Coordinator tells both to commit.
**Drawbacks**: It is slow, highly blocking, and not supported by many modern NoSQL databases or message brokers. Rarely used in high-scale web apps.

## The Saga Pattern
A Saga is a sequence of local transactions. Each service updates its own database and publishes an event to trigger the next step.

If a step fails, the Saga executes **compensating transactions** to undo the work of previous steps.

**Example:**
1. `OrderService` creates an order in `PENDING` state and publishes `OrderCreated`.
2. `InventoryService` listens, reserves stock, and publishes `InventoryReserved`.
3. `PaymentService` listens, tries to charge the card. It **FAILS**. It publishes `PaymentFailed`.
4. `InventoryService` listens to `PaymentFailed` and executes a compensating transaction to release the reserved stock.
5. `OrderService` listens and updates the order status to `CANCELLED`.

## The Outbox Pattern
How do you safely update your database *and* publish an event to RabbitMQ/Kafka? If you save to DB, and then the app crashes before publishing, the system is out of sync.
**Solution**:
1. Create an `Outbox` table in your DB.
2. In a single local ACID transaction, save your business data (e.g., to `Orders` table) AND insert an event record (e.g., `OrderCreated`) into the `Outbox` table.
3. A separate background process constantly polls the `Outbox` table and safely publishes the events to the message broker.

## Summary
Distributed transactions require shifting from atomic, synchronous rollbacks to asynchronous, eventual consistency using Sagas and compensating actions.

## Completion Checklist
- [ ] I understand why 2PC is often avoided.
- [ ] I can design a simple Saga with compensating transactions.
- [ ] I know how the Outbox pattern guarantees event delivery.
