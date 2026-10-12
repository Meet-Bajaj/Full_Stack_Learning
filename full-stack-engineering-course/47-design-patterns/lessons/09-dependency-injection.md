# Lesson 9: Dependency Injection (DI)

## 🎯 Learning Objectives
- Understand Dependency Injection and Inversion of Control (IoC).
- Implement Constructor Injection.
- Understand how frameworks like NestJS use DI containers.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A professional chef. The chef needs a knife to cook. They don't forge the knife themselves (using `new Knife()`), they expect a perfectly sharpened knife to be handed to them by the sous-chef (the DI Container).

**Mental Model:** Classes should receive their dependencies from the outside rather than instantiating them internally.

## ❓ WHY does it exist?
If a class instantiates its own dependencies, it is tightly coupled to those specific implementations. This makes it impossible to unit test the class in isolation (because you can't mock the dependency).

## 🏗️ Implementation

**Bad (Tight Coupling):**
```typescript
class UserService {
  private db = new PostgresDatabase(); // Hardcoded dependency!
  
  save(user) { this.db.insert(user); }
}
```

**Good (Constructor Injection):**
```typescript
class UserService {
  // Dependency provided from outside
  constructor(private db: DatabaseInterface) {}
  
  save(user) { this.db.insert(user); }
}

// Usage (Manual Injection)
const mockDb = new MockDatabase();
const service = new UserService(mockDb); // Easy to test!
```

### IoC Containers
In large apps, manually wiring up dependencies is tedious. Frameworks like NestJS use IoC Containers to automatically resolve and inject dependencies.

```typescript
// NestJS Example
@Injectable()
class DatabaseService {}

@Injectable()
class UserService {
  constructor(private db: DatabaseService) {} // Auto-injected by NestJS!
}
```

## ⚠️ Common Mistakes
- **Property Injection:** Injecting dependencies via properties instead of constructors can lead to uninitialized state errors.
- **Service Locator Pattern:** Passing the entire DI container into a class and asking it to resolve dependencies (hides what the class actually needs).

## 🚀 Exercises
1. Refactor tightly coupled classes to use constructor injection.
2. Build a simple manual DI container for a Node.js app.

## ✅ Summary and Checklist
- [ ] Invert control by injecting dependencies.
- [ ] Use constructor injection.
- [ ] Understand DI Containers.
