# Lesson 3: Service Pattern

## 🎯 Learning Objectives
- Understand the role of the Service Layer.
- Learn service composition and transaction management.
- Implement business logic independent of HTTP controllers.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A wedding planner. The planner (Service) doesn't bake the cake (Repository) or play the music, but they coordinate all the different vendors to execute the business process (a wedding).

**Mental Model:** The Service layer orchestrates business logic, defining the "Use Cases" or operations the application can perform, sitting between the UI/Controllers and the Data Access layer.

## ❓ WHY does it exist?
Putting business logic in controllers makes it impossible to reuse that logic (e.g., triggering the same logic from a CLI or a cron job). Putting it in the database (stored procedures) makes it hard to test. The Service Pattern centralizes business rules.

## 🏗️ Implementation

```typescript
class OrderService {
  constructor(
    private orderRepo: OrderRepository,
    private paymentService: PaymentService,
    private emailService: EmailService
  ) {}

  // The Use Case
  async checkout(userId: string, cartItems: CartItem[]): Promise<Order> {
    // 1. Domain Logic
    const order = new Order(userId, cartItems);
    
    // 2. Orchestration
    await this.paymentService.process(order.total);
    await this.orderRepo.save(order);
    await this.emailService.sendReceipt(userId, order);

    return order;
  }
}
```

## ⚠️ Common Mistakes
- **God Services:** A `UserService` that handles registration, password resets, profile updates, and avatar uploads. Break these down!
- **Anemic Domain Models:** Putting *all* logic in the service, making domain objects just dumb data bags.

## 🔒 Transaction Management
When a service orchestrates multiple database writes, it must manage transactions to ensure ACID compliance. If payment succeeds but saving the order fails, the payment must be rolled back.

## 🚀 Exercises
1. Refactor a bloated Express controller by moving its logic into a Service class.
2. Implement a service that coordinates three different repositories.

## ✅ Summary and Checklist
- [ ] Separate business logic from HTTP concerns.
- [ ] Orchestrate domain objects and infrastructure.
- [ ] Manage transactions across multiple operations.
