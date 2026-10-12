# Software Architecture Cheatsheet

## Architectures
- **Monolith:** Single deployable unit, shared memory, shared DB. Good for MVPs, fast initial dev. Bad for scaling specific parts.
- **Modular Monolith:** Monolith but with strict internal boundaries. Modules communicate via interfaces/events, not DB joins.
- **Microservices:** Independently deployable services, each with its own DB. Communicates via network. Highly scalable, high operational complexity.

## Clean & Hexagonal
- **Dependency Rule:** Outer layers (UI, DB) depend on inner layers (Business Logic, Entities).
- **Ports & Adapters:** 
  - *Primary/Driving Port:* Defines how outside world talks to the app (e.g., REST API adapter calling a Use Case port).
  - *Secondary/Driven Port:* Defines how app talks to outside world (e.g., Core logic calling a DB interface port implemented by a Postgres adapter).

## Domain-Driven Design (DDD)
- **Bounded Context:** A logical boundary where a specific domain model applies.
- **Entity:** Object with unique ID (e.g., User).
- **Value Object:** Immutable object defined by attributes (e.g., Money).
- **Aggregate Root:** The entry point to a cluster of domain objects.

## Event-Driven Architecture (EDA)
- **Event:** A fact that happened in the past (e.g., `OrderPlaced`).
- **Choreography:** Decentralized flow (services react to events).
- **Orchestration:** Centralized flow (a manager service commands others).
