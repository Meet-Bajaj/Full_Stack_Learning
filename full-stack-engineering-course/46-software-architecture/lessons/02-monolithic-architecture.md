# Lesson 2: Monolithic Architecture

## 🎯 Learning Objectives
- Understand the structure of a monolithic application.
- Identify the advantages and disadvantages of monoliths.
- Know when to choose a monolith over microservices.
- Understand the concept of a modular monolith.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A Swiss Army Knife. Everything you need (knife, screwdriver, corkscrew) is attached to a single handle. It’s easy to carry around and great for most tasks, but if the scissors break, you might have to replace the entire knife.

**Mental Model:** A single unified codebase deployed as a single unit, sharing memory space and a single database.

## ❓ WHY does it exist?
Monolithic architecture is the natural starting point for most applications. It minimizes operational complexity and deployment overhead during the early stages of a project when requirements are rapidly changing and time-to-market is critical.

## 🏗️ Structure & Layers
A typical layered monolith consists of:
1. **Presentation Layer:** Controllers handling HTTP requests.
2. **Business Logic Layer:** Services handling core logic.
3. **Data Access Layer:** Repositories or ORMs.
4. **Database:** A single shared database.

```typescript
// Controller
class UserController {
  constructor(private userService: UserService) {}
  async createUser(req, res) {
    const user = await this.userService.create(req.body);
    res.json(user);
  }
}

// Service (Business Logic)
class UserService {
  constructor(private userRepo: UserRepository) {}
  async create(data) {
    // validation and business rules
    return this.userRepo.save(data);
  }
}

// Repository (Data Access)
class UserRepository {
  async save(data) {
    return db.query('INSERT INTO users...', data);
  }
}
```

## ⚖️ Advantages vs Disadvantages

**Advantages:**
- Easy to develop, test (end-to-end), and deploy initially.
- Simple cross-cutting concerns (logging, security).
- High performance (in-memory calls, no network latency between components).

**Disadvantages:**
- Becomes a "Big Ball of Mud" if boundaries aren't respected.
- Hard to scale specific bottlenecks (must scale the entire app).
- Slow CI/CD pipelines as the codebase grows.
- Harder to adopt new technologies.

## ⚠️ Common Mistakes
- **Spaghetti Code:** Bypassing layers (e.g., Controllers talking directly to the database).
- **Tight Coupling:** Different domains (e.g., Orders and Users) deeply intertwined in the database (e.g., massive joins across domains).

## ✅ Best Practices (Modular Monolith)
- Enforce strict boundaries between modules using internal APIs or events.
- Prevent modules from directly accessing another module's database tables.

## 🚀 Exercises
1. Analyze an existing Express app and identify layer violations.
2. Refactor a controller to move business logic into a service layer.

## ✅ Summary and Checklist
- [ ] Understand layered architecture.
- [ ] Recognize the trade-offs of monoliths.
- [ ] Know how to prevent monoliths from turning into a Big Ball of Mud.
