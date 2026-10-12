# Lesson 2: Repository Pattern

## 🎯 Learning Objectives
- Understand the Repository pattern as a data access abstraction.
- Implement the pattern using TypeScript and an ORM (like Prisma).
- Learn how the pattern improves testability.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A librarian. You ask the librarian (Repository) for a specific book. You don't need to know how the books are organized in the back room, whether they use the Dewey Decimal System, or if they have to order it from another branch. You just ask for the book, and the librarian hands it to you.

**Mental Model:** An abstraction layer that acts like an in-memory collection of domain objects, hiding the underlying data access complexities (SQL, ORMs, APIs).

## ❓ WHY does it exist?
If you spread SQL queries or ORM calls throughout your controllers and services, your application becomes tightly coupled to the database. If you change databases or ORMs, you have to rewrite everything. The Repository pattern centralizes data access.

## 🏗️ Implementation (TypeScript & Prisma)

```typescript
// 1. The Interface (Domain Layer)
interface UserRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<void>;
}

// 2. The Implementation (Infrastructure Layer)
class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: string): Promise<User | null> {
    const data = await this.prisma.user.findUnique({ where: { id } });
    if (!data) return null;
    return new User(data.id, data.email); // Map DB model to Domain model
  }

  async save(user: User): Promise<void> {
    await this.prisma.user.upsert({
      where: { id: user.id },
      update: { email: user.email },
      create: { id: user.id, email: user.email }
    });
  }
}
```

## ⚠️ Common Mistakes
- **Leaking DB specifics:** Returning ORM-specific models instead of pure domain models.
- **Overcomplicating:** Creating a repository for a simple script where direct DB queries are fine.
- **God Repositories:** Adding complex business logic or cross-domain queries into a single repository.

## 🔒 Production Considerations
Repositories are the ideal place to implement caching (e.g., Redis) to reduce database load, as the rest of the application won't need to know about the cache.

## 🚀 Exercises
1. Implement a `ProductRepository` interface.
2. Create an in-memory mock implementation for unit testing.
3. Create a Postgres implementation using Knex or Prisma.

## ✅ Summary and Checklist
- [ ] Understand the role of abstraction in data access.
- [ ] Implement a basic repository.
- [ ] Inject mock repositories for testing.
