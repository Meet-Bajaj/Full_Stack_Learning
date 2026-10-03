# Lesson 05: Dependency Injection (The Core of NestJS)

## 🎯 Learning Objectives
- Understand what Dependency Injection (DI) and Inversion of Control (IoC) mean.
- Learn why NestJS relies heavily on DI to solve scaling issues found in standard Express apps.
- Master Constructor Injection.
- Understand Custom Providers (useValue, useClass, useFactory).
- Learn how DI makes unit testing incredibly easy.

## 🧠 Mental Model: The Smart Restaurant Kitchen
Imagine a restaurant kitchen. 
In a **tightly coupled (No DI)** kitchen, the Chef is responsible for buying the ingredients, sharpening their own knives, cooking the food, and plating it. If the supplier changes, the Chef has to change their routine.

In a **Dependency Injected** kitchen, the Chef just says: *"I need a Knife, and I need Vegetables."*
The **Restaurant Manager (The IoC Container / NestJS)** automatically hands the Chef a sharpened knife and chopped vegetables when the Chef's shift starts. 

The Chef doesn't care *where* the knife came from or *how* the vegetables were grown. They just use them. If the manager decides to swap the brand of vegetables tomorrow, the Chef doesn't need to change their cooking logic at all.

## 📖 Concept Explanation

### What is Dependency Injection?
Dependency Injection is a design pattern used to implement **Inversion of Control (IoC)**, allowing the creation of dependent objects outside of a class and passing them in.

In Express, you often see tight coupling:
```typescript
// BAD: Tightly coupled. Hard to test. Hard to change.
class UserController {
  private userService = new UserService(); // Hardcoded dependency!
  
  getUsers() {
    return this.userService.findAll();
  }
}
```

In NestJS, we use **Constructor Injection**:
```typescript
// GOOD: Loosely coupled. Easy to test.
@Controller('users')
export class UserController {
  // We tell NestJS what we need in the constructor. NestJS provides it automatically.
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.findAll();
  }
}
```

### The IoC Container
NestJS has a built-in IoC container. When the app starts, it:
1. Looks at all your classes and their `@Injectable()` decorators.
2. Looks at the `providers` array in your `@Module()`.
3. Analyzes the constructor parameters of your controllers and services.
4. Instantiates the dependencies and injects them precisely where needed. By default, these are **Singletons** (one instance shared across the entire app).

## 💻 Code Examples & Walkthroughs

### 1. Basic Constructor Injection
```typescript
import { Injectable } from '@nestjs/common';

@Injectable() // Marks this class as a provider that can be injected
export class DatabaseService {
  query(sql: string) {
    return `Executing: ${sql}`;
  }
}

@Injectable()
export class UserService {
  // NestJS automatically creates DatabaseService and passes it in
  constructor(private readonly db: DatabaseService) {}

  findAll() {
    return this.db.query('SELECT * FROM users');
  }
}
```

### 2. Custom Providers
Sometimes you don't want to inject a class. You want to inject a string, an object, or conditionally decide what to inject.

#### `useValue` (Injecting constants)
```typescript
// module.ts
@Module({
  providers: [
    {
      provide: 'API_KEY', // A string token
      useValue: 'super_secret_key_123',
    },
  ],
})
export class AppModule {}

// service.ts
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ApiService {
  constructor(@Inject('API_KEY') private readonly apiKey: string) {}
}
```

#### `useFactory` (Dynamic injection based on logic/async tasks)
```typescript
const databaseProvider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async (configService: ConfigService) => {
    const connection = await createDbConnection(configService.get('DB_URL'));
    return connection;
  },
  inject: [ConfigService], // Tells Nest to pass ConfigService into the factory function
};
```

#### `useClass` (Swapping implementations)
Useful for testing or changing behavior based on environments.
```typescript
const paymentProvider = {
  provide: PaymentService,
  useClass: process.env.NODE_ENV === 'production' 
    ? StripePaymentService 
    : MockPaymentService,
};
```

## ⚠️ Common Mistakes

1. **Forgetting `@Injectable()`**: If a class is meant to be injected, it MUST have the `@Injectable()` decorator. Otherwise, NestJS won't register its metadata.
2. **Circular Dependencies**: Service A injects Service B, and Service B injects Service A. NestJS will throw an error. You have to use `forwardRef()` to resolve this, but it usually indicates a flaw in your architectural design.
3. **Forgetting to Export/Import Modules**: If Service A is in Module A, and you want to use it in Module B, you MUST export Service A from Module A, and import Module A into Module B.

## 🔐 Production Considerations
- **Scope**: By default, providers are Singletons (created once). If you change the scope to `Scope.REQUEST` (created for every incoming HTTP request), it can severely impact performance and memory usage. Only use request-scoped providers when absolutely necessary (e.g., multi-tenant DB connections per request).

## 🏋️ Exercises
1. Create a `LoggerService` and inject it into a `ProductsController`.
2. Use `useValue` to provide an array of allowed roles (`['admin', 'moderator']`) using a custom string token, and inject it into a service.
3. Create a Circular Dependency intentionally, observe the NestJS error, and then fix it by refactoring the shared logic into a third service.

## ✅ Summary Checklist
- [ ] I understand what Inversion of Control is.
- [ ] I can write Constructor Injection using standard classes.
- [ ] I know how to use `@Inject()` with custom string tokens.
- [ ] I understand the difference between `useValue`, `useClass`, and `useFactory`.
