# Lesson 9: Microservices vs Monolith

## 1. Learning Objectives
- Compare Monoliths, Modular Monoliths, and Microservices.
- Understand the trade-offs of microservices.

## 2. The Monolith
All application code is deployed as a single unit.
- **Pros:** Easy to deploy, test, and debug. No network latency between modules.
- **Cons:** Hard to scale specific parts. One bad bug crashes the whole app. Codebase becomes unwieldy for large teams.

## 3. Microservices
The application is split into small, independently deployable services (e.g., Auth Service, Payment Service).
- **Pros:** Services scale independently. Teams can work autonomously using different languages.
- **Cons:** Massive operational complexity. Network latency, data consistency (distributed transactions), and complex debugging.

## 4. When to use each
Start with a Monolith (or Modular Monolith). Extract microservices only when team size or scaling needs demand it. "Don't build distributed monoliths."

## 5. Summary and Checklist
- [ ] Analyze the true cost of microservices.
- [ ] Understand migration strategies (Strangler Fig pattern).
