# Lesson 3: Clean Architecture

## 🎯 Learning Objectives
- Understand the Dependency Rule.
- Identify the layers in Clean Architecture (Entities, Use Cases, Interface Adapters, Frameworks).
- Implement dependency inversion in a Node.js/TypeScript application.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** An Onion. The most important, core part of your application (business rules) is at the center, protected by outer layers. The outer layers (UI, DB) can be peeled away and replaced without affecting the core.

**Mental Model:** Architecture should be independent of frameworks, databases, and UI. The core domain logic is isolated and testable without external dependencies.

## ❓ WHY does it exist?
To solve the problem of business logic getting coupled to specific technologies (like an ORM or a web framework). When frameworks change or need upgrading, tightly coupled systems require massive rewrites. Clean Architecture makes the core system adaptable and highly testable.

## 🏗️ The Layers
1. **Entities:** Enterprise-wide business rules and objects.
2. **Use Cases:** Application-specific business rules (the "features").
3. **Interface Adapters:** Controllers, Presenters, Gateways (converting data for the Use Cases).
4. **Frameworks & Drivers:** Web frameworks, DBs, external APIs.

### The Dependency Rule
Dependencies must point **inward**. Inner circles cannot know anything about outer circles.

```typescript
// 1. Entity (Core)
class User {
  constructor(public id: string, public email: string) {}
}

// 2. Use Case Boundary (Port)
interface UserRepository {
  save(user: User): Promise<void>;
}

// 3. Use Case (Application Logic)
class RegisterUserUseCase {
  constructor(private userRepo: UserRepository) {} // Dependency Injection

  async execute(email: string) {
    const user = new User(generateId(), email);
    await this.userRepo.save(user); // Independent of actual DB!
  }
}

// 4. Interface Adapter / Framework (Outer Layer)
class PostgresUserRepository implements UserRepository {
  async save(user: User) {
    // SQL implementation
  }
}
```

## ⚠️ Common Mistakes
- **Leaking DB specifics to Entities:** Adding ORM decorators (like `@Column`) directly to Entity classes.
- **Over-engineering:** Using Clean Architecture for a simple CRUD script where MVC would suffice.

## 🔒 Production Considerations
Clean architecture drastically improves testability. You can unit test your Use Cases without spinning up a database or web server by injecting mock repositories.

## 🚀 Exercises
1. Extract business logic from an Express controller into a Use Case.
2. Implement a mock `UserRepository` to write a fast unit test for `RegisterUserUseCase`.

## ✅ Summary and Checklist
- [ ] Grasp the Dependency Rule.
- [ ] Separate Entities and Use Cases from frameworks.
- [ ] Use Dependency Injection to invert dependencies.
