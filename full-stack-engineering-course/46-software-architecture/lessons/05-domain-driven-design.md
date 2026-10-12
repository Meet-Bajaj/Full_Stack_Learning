# Lesson 5: Domain-Driven Design (DDD)

## 🎯 Learning Objectives
- Understand Bounded Contexts and Ubiquitous Language.
- Differentiate Entities and Value Objects.
- Understand the role of Aggregates, Repositories, and Domain Services.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A hospital. The "Patient" concept means something different in the Billing Department (Bounded Context A) vs. the Surgery Ward (Bounded Context B). In Billing, a patient is an account with a balance. In Surgery, a patient is a biological entity with vitals.

**Mental Model:** DDD aligns the software structure exactly with the business domain by modeling the software based on input from domain experts.

## ❓ WHY does it exist?
For complex business logic, traditional CRUD approaches fail. Code becomes a mess of scattered `if/else` statements. DDD centralizes business rules and creates a common language between developers and domain experts.

## 🏗️ Tactical DDD Patterns

### 1. Value Objects
Objects defined by their attributes, with no conceptual identity. They are immutable.
```typescript
class Money {
  constructor(public readonly amount: number, public readonly currency: string) {
    if (amount < 0) throw new Error("Amount cannot be negative");
  }
}
```

### 2. Entities
Objects defined by a unique identity, not their attributes.
```typescript
class User {
  constructor(public id: string, public name: string) {}
}
```

### 3. Aggregates
A cluster of domain objects treated as a single unit. The Aggregate Root is the only object outside code is allowed to hold a reference to.
```typescript
class Order { // Aggregate Root
  private items: OrderItem[] = [];
  
  addItem(product: Product, quantity: number) {
    // business invariant: max 10 items
    if (this.items.length >= 10) throw new Error("Limit reached");
    this.items.push(new OrderItem(product, quantity));
  }
}
```

## ⚠️ Common Mistakes
- **Anemic Domain Model:** Classes with getters and setters but no behavior. Logic is scattered in services.
- **Huge Aggregates:** Putting too much into one Aggregate Root (e.g., loading the whole User, their Orders, and their Reviews just to change their email).

## 🚀 Exercises
1. Identify Bounded Contexts for an E-commerce system.
2. Refactor primitive types (e.g., `string` for email) into a `EmailAddress` Value Object with validation.

## ✅ Summary and Checklist
- [ ] Practice Ubiquitous Language.
- [ ] Create immutable Value Objects.
- [ ] Define precise Aggregate boundaries.
