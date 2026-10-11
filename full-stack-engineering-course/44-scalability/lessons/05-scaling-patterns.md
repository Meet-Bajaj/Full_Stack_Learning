# Lesson 5: Advanced Scaling Patterns

## Learning Objectives
- Understand CQRS (Command Query Responsibility Segregation).
- Understand Event Sourcing.
- Implement the Bulkhead and Saga patterns conceptually.

## CQRS
In traditional CRUD, you use the same data model to read and write.
CQRS separates the data models:
- **Commands**: Change state (Create, Update, Delete). They use a highly normalized model optimized for data integrity.
- **Queries**: Read state. They use highly denormalized views (perhaps materialized views in a separate DB like Elasticsearch) optimized purely for fast reading.

## Event Sourcing
Instead of storing the *current state* of an entity, you store a sequence of *events* that led to that state.
- **Traditional**: DB says `Account Balance: $50`.
- **Event Sourcing**: DB says `[Deposited $100, Withdrew $30, Withdrew $20]`.
To get the balance, you "replay" the events. This provides an absolute audit log and allows you to recreate past states at any point in time. (Often paired with CQRS).

## Bulkhead Pattern
Named after the watertight compartments (bulkheads) in a ship's hull. If one compartment floods, the ship doesn't sink.
In software, if your `RecommendationService` is heavily overloaded, it shouldn't consume all the server's thread pool and cause the `CheckoutService` to fail. You isolate resources (e.g., separate connection pools, separate servers) for different parts of the application.

## Saga Pattern (Preview)
When you split a monolith into microservices, you lose ACID database transactions that span multiple tables.
If an order requires creating a record in `OrderService` and charging a card in `BillingService`, what happens if the billing fails? You can't just `ROLLBACK` the DB.
A Saga is a sequence of local transactions. If one step fails, the Saga executes **compensating transactions** (e.g., a "Refund" transaction and a "CancelOrder" transaction) to undo the previous steps.

## Summary
Advanced patterns like CQRS and Event Sourcing introduce significant complexity but provide unparalleled auditability and read/write scaling when dealing with massive data volumes.

## Completion Checklist
- [ ] I can define CQRS.
- [ ] I understand how Event Sourcing differs from traditional state storage.
- [ ] I know what the Bulkhead pattern is designed to prevent.
