# Lesson 6: Microservices Architecture

## 🎯 Learning Objectives
- Understand the principles of Microservices.
- Define service boundaries using Bounded Contexts.
- Differentiate synchronous vs asynchronous service communication.
- Understand data ownership and deployment considerations.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A restaurant kitchen. Instead of one chef doing everything (Monolith), you have a fry cook, a grill master, and a pastry chef (Microservices). They work independently but communicate to assemble a full meal. 

**Mental Model:** Independent, deployable services modeled around a business domain, communicating via network calls.

## ❓ WHY does it exist?
To allow large teams to work independently, scale parts of a system independently, and use different technology stacks for different problems.

## 🏗️ Core Principles
1. **Independent Deployment:** A change to one service shouldn't require deploying others.
2. **Data Ownership:** Each microservice must own its own database. Services cannot share databases.
3. **Failure Isolation:** If the Email service goes down, the Order service should still be able to take orders.

### Service Communication
- **Synchronous (REST/gRPC):** Service A waits for Service B. High latency, tight temporal coupling.
- **Asynchronous (Events/Message Queues):** Service A fires an event (e.g., `OrderCreated`). Service B listens. Loose coupling, high resilience.

## ⚠️ Common Mistakes
- **Distributed Monolith:** Microservices that are so tightly coupled they must be deployed together and constantly communicate synchronously.
- **Shared Database:** Defeats the purpose of microservices by causing tight coupling at the data layer.

## 🔒 Production Considerations
- **Observability:** You need distributed tracing (e.g., OpenTelemetry, Jaeger) to track a request across 5 different services.
- **Security:** Zero-trust networks, mTLS between services.

## 🚀 Exercises
1. Design a microservice boundary mapping for Netflix.
2. Implement an asynchronous communication pattern using RabbitMQ between two Node.js services.

## ✅ Summary and Checklist
- [ ] Understand microservice boundaries.
- [ ] Grasp synchronous vs asynchronous communication.
- [ ] Know the rule of database per service.
