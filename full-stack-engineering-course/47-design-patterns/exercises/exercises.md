# Design Patterns Exercises

## 1. Repository Pattern
**Task:** Create a `UserRepository` interface and two implementations: `InMemoryUserRepository` (for testing) and `PostgresUserRepository`. Write a test that uses the in-memory version.

## 2. Factory Pattern
**Task:** Implement a `NotificationFactory` that takes a string (`'email'`, `'sms'`, `'push'`) and returns the appropriate class instance that implements a `NotificationStrategy` interface.

## 3. Strategy Pattern
**Task:** Refactor a monolithic `calculateTax(order, country)` function that uses a massive `switch` statement into a context class that takes a `TaxStrategy` interface. Implement strategies for US, UK, and Canada.

## 4. Decorator Pattern
**Task:** Implement a caching decorator for a `DataFetcher` class. The base class fetches data from an API. The decorator should check an in-memory Map first; if missing, call the base class and store the result.
