# Lesson 8: Event-Driven Architecture (EDA)

## 🎯 Learning Objectives
- Understand the role of Events in architecture.
- Learn Event Sourcing and CQRS concepts.
- Contrast Choreography vs Orchestration.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A news agency. The reporter (producer) broadcasts a breaking news event. The newspaper, TV station, and radio (consumers) all react to the news differently, without the reporter knowing who is listening.

**Mental Model:** Systems communicate by emitting "events" (facts about things that happened in the past) rather than issuing direct commands.

## ❓ WHY does it exist?
To deeply decouple systems. It allows systems to react to changes in real-time and enables high scalability since producers don't wait for consumers.

## 🏗️ Core Concepts

### 1. Events vs Commands
- **Command:** "Send an email." (Targeted, can be rejected)
- **Event:** "UserRegistered." (Fact, happened in the past, broadcasted)

### 2. Event Sourcing
Instead of storing the current state of an entity in the database, you store a sequence of events that led to that state.
*Example:* Bank Account. Instead of storing `Balance: $100`, you store `[Deposited $150, Withdrew $50]`.

### 3. CQRS (Command Query Responsibility Segregation)
Separating the write model (Commands) from the read model (Queries). Often used with Event Sourcing to build highly optimized read databases.

### 4. Choreography vs Orchestration
- **Choreography:** Decentralized. Services react to each other's events automatically (like dancers reacting to music).
- **Orchestration:** Centralized. A central "Orchestrator" service commands other services what to do (like a conductor and an orchestra).

## ⚠️ Common Mistakes
- **Eventual Consistency Issues:** Building UI that assumes data is written immediately when it's actually processed asynchronously.
- **Event Schemas:** Changing the structure of an event without versioning it, breaking consumer services.

## 🚀 Exercises
1. Build an event-driven flow using Redis Pub/Sub or Kafka.
2. Implement a basic CQRS pattern separating write operations from read operations in an API.

## ✅ Summary and Checklist
- [ ] Grasp Event Sourcing and CQRS.
- [ ] Differentiate Choreography and Orchestration.
- [ ] Understand Eventual Consistency.
