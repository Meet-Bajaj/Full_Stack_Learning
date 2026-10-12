# Lesson 4: Hexagonal Architecture (Ports and Adapters)

## 🎯 Learning Objectives
- Understand the Ports and Adapters pattern.
- Differentiate between primary (driving) and secondary (driven) ports.
- Achieve testability through dependency inversion.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A computer motherboard. The CPU (your core logic) has generic ports (USB, HDMI). It doesn't care if you plug in a Dell monitor or an LG monitor (adapters) into the HDMI port, as long as it speaks the HDMI protocol (interface).

**Mental Model:** Your application is a hexagon. The inside is the core domain. The edges are "Ports" (interfaces). The outside world connects to these ports via "Adapters".

## ❓ WHY does it exist?
To allow an application to equally be driven by users, programs, automated tests, or batch scripts, and to be developed and tested in isolation from its eventual run-time devices and databases.

## 🏗️ Ports and Adapters

### 1. Primary (Driving) Actors
These trigger your application to do something.
- **Port:** An interface defining what the application can do (e.g., `OrderService`).
- **Adapter:** REST Controller, GraphQL Resolver, CLI tool.

### 2. Secondary (Driven) Actors
These are things your application relies on.
- **Port:** An interface defining what the app needs from the outside (e.g., `PaymentGatewayPort`).
- **Adapter:** Stripe Integration, PayPal Integration.

```typescript
// Secondary Port
interface NotificationPort {
  send(userId: string, message: string): Promise<void>;
}

// Core Logic
class CheckoutService {
  constructor(private notifier: NotificationPort) {}

  async checkout(cart: Cart) {
    // ... logic ...
    await this.notifier.send(cart.userId, "Checkout complete!");
  }
}

// Secondary Adapter
class SendGridAdapter implements NotificationPort {
  async send(userId: string, message: string) {
    // Call SendGrid API
  }
}
```

## ⚠️ Common Mistakes
- **Anemic Domain Models:** Building Hexagonal architecture but leaving all the logic in procedural services instead of rich domain objects.
- **Mixing Ports and Adapters:** Letting HTTP request objects (like Express `req`) leak into the core.

## 🚀 Exercises
1. Define a `StoragePort` interface and implement an `S3Adapter` and a `LocalFileAdapter`.
2. Write a test for your core service using an in-memory `StoragePort` adapter.

## ✅ Summary and Checklist
- [ ] Understand Primary vs Secondary Ports.
- [ ] Implement Adapters to map external systems to internal interfaces.
- [ ] Keep external framework data structures out of the core domain.
