# Lesson 5: Strategy Pattern

## 🎯 Learning Objectives
- Encapsulate algorithms into separate classes.
- Enable runtime selection of algorithms.
- Replace massive `switch/case` statements with polymorphic strategies.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** Traveling to the airport. You have different strategies: take a Taxi, ride a Bike, or take the Bus. The goal (getting to the airport) is the same, but the algorithm (the strategy) changes based on time or budget.

**Mental Model:** Define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

## ❓ WHY does it exist?
To avoid monolithic classes with massive `if/else` or `switch` statements that change behavior based on a flag. This violates the Open/Closed Principle (you have to modify the class to add a new behavior).

## 🏗️ Implementation

```typescript
// 1. The Strategy Interface
interface PaymentStrategy {
  pay(amount: number): Promise<boolean>;
}

// 2. Concrete Strategies
class StripePayment implements PaymentStrategy {
  async pay(amount: number) {
    console.log(`Paid $${amount} via Stripe`);
    return true;
  }
}

class PayPalPayment implements PaymentStrategy {
  async pay(amount: number) {
    console.log(`Paid $${amount} via PayPal`);
    return true;
  }
}

// 3. The Context
class Checkout {
  constructor(private strategy: PaymentStrategy) {}

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  async process(amount: number) {
    return await this.strategy.pay(amount);
  }
}

// Usage
const checkout = new Checkout(new StripePayment());
checkout.process(100);

// Switch at runtime
checkout.setStrategy(new PayPalPayment());
checkout.process(200);
```

## ⚠️ Common Mistakes
- **Too many strategies:** Creating a strategy for every minor variation instead of just passing configuration parameters to a single algorithm.

## 🚀 Exercises
1. Refactor a function calculating shipping costs (Standard, Express, Overnight) from a `switch` statement into the Strategy pattern.

## ✅ Summary and Checklist
- [ ] Identify varying behaviors.
- [ ] Encapsulate behaviors in Strategy classes.
- [ ] Use Context to delegate to Strategies.
