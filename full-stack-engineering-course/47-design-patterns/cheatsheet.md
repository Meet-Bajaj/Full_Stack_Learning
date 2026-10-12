# Design Patterns Cheatsheet

## Creational Patterns
- **Factory:** Centralizes object creation logic. Useful when object setup is complex or varies by environment.
- **Dependency Injection:** Injecting instantiated dependencies into a class via its constructor, rather than the class creating them itself (IoC).

## Structural Patterns
- **Repository:** Abstracts data access. Acts like an in-memory collection of domain objects.
- **Adapter:** Wraps an incompatible 3rd-party interface into an interface your application understands.
- **Decorator:** Dynamically adds behavior to an object without subclassing, by wrapping it.

## Behavioral Patterns
- **Service:** Orchestrates domain logic and infrastructure. Sits between controllers and repositories.
- **Strategy:** Encapsulates varying algorithms into separate interchangeable classes.
- **Observer (Pub/Sub):** A subject notifies subscribed observers of state changes automatically.
- **Middleware:** A chain of functions that process a request sequentially.
