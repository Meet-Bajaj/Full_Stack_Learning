# Software Architecture Assessment

## Part 1: Multiple Choice
1. Which architectural pattern strictly enforces that core business logic has zero dependencies on external frameworks?
   a) Layered Monolith
   b) Clean Architecture
   c) Event-Driven Architecture
   d) Microkernel Architecture

2. In Microservices, what is the golden rule regarding data?
   a) All services share a highly available Postgres cluster.
   b) Data must be synchronized synchronously.
   c) Each service must own its own database schema/instance.

## Part 2: Architecture Critique
**Scenario:** A startup with 2 developers decides to build their simple blog platform using 15 microservices (Auth, Posts, Comments, Tags, etc.) deployed on Kubernetes with Kafka for messaging.
**Task:** Critique this architecture. List 3 major problems with this approach based on architectural trade-offs.

## Part 3: Design
**Task:** Design a high-level architecture for a real-time ride-sharing app (like Uber). Draw (or describe) the components, how they communicate, and where you would use an API Gateway, Event Bus, and specific Microservices.
