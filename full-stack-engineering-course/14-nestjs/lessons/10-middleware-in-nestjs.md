# Lesson 10: Middleware in NestJS

## 🎯 Learning Objectives
- Understand how Middleware fits into the NestJS request lifecycle.
- Write class-based middleware and functional middleware.
- Apply middleware to specific routes using the `Consumer`.

## 🧠 Mental Model: The Front Gate
Middleware is the **Front Gate** of your application. It is the very first thing that runs when a request arrives, before Guards, Interceptors, Pipes, or Controllers. 
Because it sits at the absolute outer edge, it is "dumb"—it only knows about raw Express `req` and `res` objects. It does not know about NestJS execution contexts or handlers.

## 📖 Concept Explanation

### When to use Middleware in NestJS?
Because NestJS provides Guards, Interceptors, and Pipes, you actually use Middleware **much less** than you do in Express.
Use Middleware for:
- Logging requests (Morgan).
- Parsing body data (Helmet, CORS, `express.json`).
- Analytics or attaching global request IDs.

### Class-based Middleware
```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${req.method}] ${req.url}`);
    
    // You MUST call next() or the request hangs!
    next();
  }
}
```

### Applying Middleware
You don't use a decorator for Middleware. Instead, your Module must implement the `NestModule` interface.

```typescript
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats'); // Apply only to /cats routes
      
    // You can also restrict it to specific HTTP methods:
    // .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
```

### Functional Middleware
If your middleware doesn't need dependencies (it doesn't need to inject Services), you can just write a plain function.

```typescript
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
}

// In main.ts (Global Middleware)
app.use(logger);
```

## ⚠️ Common Mistakes
1. **Using Middleware for Authorization:** In Express, it's standard to use Middleware for JWT verification and role checking. In NestJS, you should use **Guards** for this, because Guards integrate deeply with the NestJS ecosystem and metadata.
2. **Forgetting `next()`:** Just like in Express, failing to call `next()` will leave the client hanging until timeout.

## 🏋️ Exercises
1. Create a `UserAgentMiddleware` that extracts the `User-Agent` header, checks if the client is an outdated browser, and immediately returns a `426 Upgrade Required` status if so.
2. Apply standard Express middleware like `helmet` and `compression` globally inside `main.ts`.

## ✅ Summary Checklist
- [ ] I understand that Middleware runs before everything else in NestJS.
- [ ] I can create class-based middleware implementing `NestMiddleware`.
- [ ] I know how to use `MiddlewareConsumer` inside a Module.
