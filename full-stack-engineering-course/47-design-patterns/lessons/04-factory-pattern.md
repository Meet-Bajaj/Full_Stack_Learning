# Lesson 4: Factory Pattern

## 🎯 Learning Objectives
- Understand creational design patterns.
- Implement the Factory Method and Abstract Factory patterns.
- Manage complex object creation.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A car manufacturing plant. You don't build a car by gathering steel and rubber in your driveway and assembling it yourself (using `new`). You ask the factory, "Give me a Sedan," and it handles the complex assembly process for you.

**Mental Model:** A function or method whose sole responsibility is to instantiate and configure complex objects.

## ❓ WHY does it exist?
Using the `new` keyword everywhere tightly couples your code to specific classes. Furthermore, if creating an object requires complex setup (fetching configs, establishing connections), you don't want to repeat that setup everywhere.

## 🏗️ Implementation

### Factory Function
```typescript
interface Logger {
  log(msg: string): void;
}

class ConsoleLogger implements Logger {
  log(msg: string) { console.log(msg); }
}

class FileLogger implements Logger {
  log(msg: string) { /* write to file */ }
}

// The Factory
class LoggerFactory {
  static createLogger(env: string): Logger {
    if (env === 'production') {
      return new FileLogger();
    }
    return new ConsoleLogger();
  }
}

// Usage
const logger = LoggerFactory.createLogger(process.env.NODE_ENV);
logger.log("App started");
```

## ⚠️ Common Mistakes
- **Overuse:** Using factories for simple data objects (like a `User` class with no dependencies). Just use `new`.
- **God Factories:** A single factory that creates everything in the application.

## 🚀 Exercises
1. Create a `PaymentProcessorFactory` that returns a Stripe processor or a PayPal processor based on user input.
2. Use an Abstract Factory to create UI components (Buttons, Checkboxes) for different themes (Dark/Light).

## ✅ Summary and Checklist
- [ ] Encapsulate object creation logic.
- [ ] Return interfaces instead of concrete classes.
- [ ] Decouple client code from concrete implementations.
