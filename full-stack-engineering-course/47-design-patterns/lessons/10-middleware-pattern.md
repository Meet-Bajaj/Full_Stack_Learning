# Lesson 10: Middleware Pattern

## 🎯 Learning Objectives
- Understand the pipeline processing model.
- Implement Express-style middleware.
- Create composable middleware chains.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** An assembly line. A raw car chassis enters the line. Station 1 adds the engine. Station 2 adds the wheels. Station 3 paints it. If Station 1 finds a defect, it halts the line and throws it out.

**Mental Model:** A chain of functions where each function receives the request, can modify it, and can either pass it to the next function or halt the chain and send a response.

## ❓ WHY does it exist?
To extract cross-cutting concerns (authentication, logging, parsing, error handling) out of core business logic.

## 🏗️ Implementation (Express Style)

```typescript
type Request = any;
type Response = any;
type NextFunction = () => void;
type Middleware = (req: Request, res: Response, next: NextFunction) => void;

class App {
  private middlewares: Middleware[] = [];

  use(middleware: Middleware) {
    this.middlewares.push(middleware);
  }

  handle(req: Request, res: Response) {
    let index = 0;

    const next = () => {
      if (index < this.middlewares.length) {
        const middleware = this.middlewares[index++];
        middleware(req, res, next);
      }
    };

    next();
  }
}

// Usage
const app = new App();

app.use((req, res, next) => {
  console.log("Logger");
  next();
});

app.use((req, res, next) => {
  if (!req.user) {
    res.send("Unauthorized");
    return; // Halts the chain
  }
  next();
});
```

## ⚠️ Common Mistakes
- **Forgetting `next()`:** If you don't call `next()` and don't send a response, the request hangs forever.
- **Modifying response after `next()`:** Trying to send headers after delegating to downstream middleware.

## 🚀 Exercises
1. Write a custom authentication middleware for an Express app.
2. Implement a rate-limiting middleware.

## ✅ Summary and Checklist
- [ ] Extract cross-cutting concerns into middleware.
- [ ] Understand the `next()` control flow.
