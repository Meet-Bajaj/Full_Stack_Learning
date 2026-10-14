# Lesson 04: Design an E-Commerce Platform

## Learning Objectives
- Design a scalable e-commerce backend (e.g., Amazon).
- Handle inventory locking and consistency during checkout.
- Architect search and product catalog.

## 1. Requirements
- **Functional:** Product search, cart management, secure checkout, order history.
- **Non-Functional:** High availability for product catalog, High consistency for inventory and payments.
- **Scale:** High read/write ratio for product views vs purchases. Spikes in traffic during sales (Black Friday).

## 2. Core Challenge: Inventory Management
When a user clicks "Buy", we must ensure the item is in stock. What if 100 people try to buy the last 1 item at the exact same millisecond?

- **Optimistic Locking:** Assume it will succeed. Check the version or stock count during the UPDATE query. `UPDATE inventory SET count = count - 1 WHERE item_id = 1 AND count > 0`. If 0 rows affected, it failed.
- **Pessimistic Locking:** `SELECT * FROM inventory WHERE item_id = 1 FOR UPDATE`. This locks the row until the transaction completes. Safer but slower.

## 3. High-Level Architecture
- **Search Service:** Uses Elasticsearch for fast, fuzzy searching.
- **Cart Service:** Uses Redis. Cart data is ephemeral and needs fast read/write.
- **Order/Payment Service:** Uses a relational DB (PostgreSQL) with ACID guarantees for transactions.
- **Event Bus (Kafka/RabbitMQ):** When an order is placed, publish an `OrderCreated` event so the Notification Service, Shipping Service, and Analytics can react asynchronously.

## Summary & Checklist
- [ ] Understand optimistic vs pessimistic locking.
- [ ] Explain why Redis is good for carts and Elasticsearch for search.
- [ ] Discuss the event-driven architecture for post-purchase actions.
