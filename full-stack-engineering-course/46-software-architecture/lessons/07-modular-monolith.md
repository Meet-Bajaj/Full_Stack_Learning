# Lesson 7: Modular Monolith

## 🎯 Learning Objectives
- Define what a Modular Monolith is.
- Establish strict module boundaries within a single codebase.
- Implement module communication.
- Prepare a monolith for future extraction to microservices.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** An apartment building. It’s one large structure (single deployment), but each apartment has strict boundaries (walls, doors). You can't just walk into your neighbor's kitchen; you have to knock on the door (APIs).

**Mental Model:** A monolithic application built with strict logical boundaries, mimicking microservice boundaries without the network overhead.

## ❓ WHY does it exist?
Microservices introduce massive operational complexity (networking, distributed tracing, eventual consistency). A Modular Monolith provides the logical separation and maintainability of microservices while keeping the simplicity of a single deployment and local method calls.

## 🏗️ Structure
```text
src/
  modules/
    users/
      api/        <-- Only public interface
      core/       <-- Internal logic
      data/       <-- DB access
    orders/
```

### Rules of the Modular Monolith
1. Modules can only communicate through defined public APIs (e.g., Facades/Interfaces).
2. A module cannot directly query the database tables of another module.
3. Modules can communicate via in-memory event buses (e.g., Node EventEmitter).

## ⚖️ Path to Microservices
Because boundaries are strictly maintained, extracting the `orders` module into a true Microservice later only requires changing the local method calls or in-memory events to network calls or RabbitMQ events.

## ⚠️ Common Mistakes
- **Leaking Domain Models:** Returning internal DB entities from the module's public API, causing other modules to depend on them.
- **Foreign Keys Across Modules:** While tempting in a single DB, hard foreign keys across module boundaries make future extraction impossible.

## 🚀 Exercises
1. Refactor a highly coupled Next.js application into a Modular Monolith.
2. Replace direct cross-module method calls with an in-memory event bus.

## ✅ Summary and Checklist
- [ ] Enforce strict boundaries.
- [ ] Prevent cross-module database joins.
- [ ] Use facades for inter-module communication.
