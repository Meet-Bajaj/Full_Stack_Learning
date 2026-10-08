# Lesson 5: Kafka Concepts

## 1. Learning Objectives
- Understand Kafka's distributed streaming architecture.
- Learn about Topics, Partitions, and Consumer Groups.
- Explore Event Sourcing.

## 2. What is Kafka?
Kafka is not a traditional message queue; it's a distributed event streaming platform. Instead of messages being deleted after they are consumed (like RabbitMQ), Kafka stores them in an immutable log for a retention period (e.g., 7 days).

## 3. Architecture
- **Topics:** Categories of events (e.g., `user-clicks`).
- **Partitions:** Topics are split into partitions across multiple servers for massive horizontal scale.
- **Consumer Groups:** A group of workers reading from a topic. Kafka ensures that each partition is read by only one consumer within a group, allowing parallel processing without duplicate work.

## 4. Event Sourcing
Because Kafka persists events, you can use it as a source of truth. If a database dies, you can replay all events from Kafka to rebuild the database state.

## 5. Summary and Checklist
- [ ] Differentiate Kafka's log-based storage from RabbitMQ's queue-based storage.
- [ ] Explain how partitions enable scaling in Kafka.
