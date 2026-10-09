# Lesson 01: Real-Time Architecture

## Learning Objectives
By the end of this lesson, you will be able to:
- Understand the paradigm shift from Request-Response to Event-Driven Architecture (EDA).
- Explain the Publish-Subscribe (Pub/Sub) pattern.
- Differentiate between Stream Processing and Event Sourcing.
- Choose the right real-time architecture for various use cases.

---

## 1. The Paradigm Shift: Request-Response vs. Event-Driven

Traditional web architecture is synchronous and relies on **Request-Response**. 
- A client asks for data.
- The server processes it.
- The server responds.

**Event-Driven Architecture (EDA)** flips this model. 
- Components of the system do not ask for data; they react to **events** as they happen.
- An event is simply a record of something that occurred (e.g., "UserSignedUp", "OrderPlaced").

### The Mental Model
**Request-Response:** Calling a store to ask if a specific book is in stock.
**Event-Driven:** Giving the store your phone number, and they text you the moment the book arrives on the shelf.

---

## 2. Publish-Subscribe (Pub/Sub) Pattern

The core of most real-time systems is the Pub/Sub pattern.

### Components
1. **Publishers:** Entities that emit events. They don't know who is listening.
2. **Subscribers:** Entities that listen for specific events. They don't know who produced the event.
3. **Message Broker / Event Bus:** The middleman (e.g., Redis Pub/Sub, RabbitMQ, SNS/SQS, Apache Kafka) that routes events from publishers to subscribers.

### Why is this powerful?
- **Decoupling:** If the Notification Service goes down, the Order Service can still publish "OrderPlaced" events.
- **Scalability:** You can add 10 new microservices that need to know about "OrderPlaced" without ever changing the Order Service code.

---

## 3. Stream Processing vs. Event Sourcing

While Pub/Sub is for routing messages, stream processing and event sourcing deal with how events are stored and manipulated.

### Stream Processing
Stream processing involves ingesting a continuous flow of data and processing it in real-time.
- **Tools:** Apache Kafka, AWS Kinesis, Flink.
- **Use Case:** A fraud detection system that reads thousands of credit card transactions per second, calculates rolling averages, and flags anomalies instantly.

### Event Sourcing
Instead of storing the *current state* of an entity in a database (e.g., `AccountBalance: $100`), Event Sourcing stores the *log of events* that led to that state (`Deposited $50`, `Deposited $100`, `Withdrew $50`).
- **Pros:** 100% audit trail, ability to travel back in time to see the system state at any point.
- **Cons:** High complexity, requires read-models (CQRS pattern).

---

## 4. Choosing the Right Tool

| Tool / Concept | Best For | Persistence? |
|----------------|----------|--------------|
| **Redis Pub/Sub** | High throughput, low latency messaging (Chat, WS syncing) | No (Fire and Forget) |
| **RabbitMQ** | Task queues, guaranteed delivery, complex routing | Yes (until acknowledged) |
| **Apache Kafka** | Massive data streams, event sourcing, replayability | Yes (stored on disk for days/forever) |

## Summary
- Real-time systems require moving away from synchronous HTTP calls between microservices to asynchronous event propagation.
- Pub/Sub provides decoupling.
- Brokers like Redis, RabbitMQ, and Kafka serve different architectural needs based on persistence and routing requirements.
