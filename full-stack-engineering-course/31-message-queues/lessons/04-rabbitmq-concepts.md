# Lesson 4: RabbitMQ Concepts

## 1. Learning Objectives
- Understand RabbitMQ's AMQP architecture.
- Differentiate between Exchanges, Bindings, and Queues.

## 2. RabbitMQ Architecture
Unlike BullMQ, which uses Redis, RabbitMQ is a dedicated message broker built on the AMQP protocol.
- **Producer:** Sends messages to an Exchange (not directly to a queue).
- **Exchange:** Routes the message to one or more queues based on Bindings.
- **Queue:** Stores the messages.
- **Consumer:** Reads from the queue.

## 3. Exchange Types
- **Direct Exchange:** Routes messages to a queue based on an exact routing key match.
- **Fanout Exchange:** Broadcasts messages to all bound queues (Pub/Sub).
- **Topic Exchange:** Routes messages based on wildcard matching (e.g., `logs.error.*`).

## 4. Summary and Checklist
- [ ] Explain the difference between an Exchange and a Queue.
- [ ] Design a Fanout routing topology.
