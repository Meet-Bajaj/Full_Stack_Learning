# Lesson 04: Providers & Services

## 🎯 Learning Objectives
- Understand the role of Services in isolating business logic.
- Learn how the `@Injectable()` decorator works.
- Differentiate between Controller layer and Provider layer.

## 🧠 Mental Model: The Engineers
If the Controller is the receptionist handling the HTTP paperwork, the **Service** is the engineer sitting in the back office. The engineer doesn't know what HTTP is, doesn't care about route parameters, and doesn't know if the data came from a mobile app or a web browser. The engineer just receives raw data, applies complex business rules, talks to the database (or other APIs), and returns the result to the receptionist.

## 📖 Concept Explanation

### What is a Provider?
In NestJS, a "Provider" is any class that can be injected as a dependency. Services, Repositories, Factories, and Helpers are all considered Providers.

### Creating a Service
A Service is just a plain TypeScript class annotated with the `@Injectable()` decorator. This decorator tells NestJS's IoC container that this class can be managed and injected into other classes.

```typescript
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = []; // In-memory database for now

  // Business logic to create a cat
  create(cat: Cat) {
    this.cats.push(cat);
  }

  // Business logic to retrieve cats
  findAll(): Cat[] {
    return this.cats;
  }
}
```

### Injecting the Service into a Controller
Once the service is created, we inject it into the Controller via **Constructor Injection**.

```typescript
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  // NestJS automatically instantiates CatsService and passes it here!
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() cat: Cat) {
    this.catsService.create(cat);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
```

### Registering the Provider
NestJS won't know about your service unless you register it in the module.

```typescript
@Module({
  controllers: [CatsController],
  providers: [CatsService], // Register it here!
})
export class CatsModule {}
```

## ⚠️ Common Mistakes
1. **Forgetting to register the Provider:** If you create a service but don't add it to the `providers` array of your `@Module()`, NestJS will throw an error when starting the application: `Nest can't resolve dependencies of the CatsController`.
2. **Putting HTTP logic in Services:** Never pass the Express `req` or `res` objects into your Service. Pass only the *extracted data* (like strings or DTO objects). Services should be completely decoupled from the transport layer.

## 🏋️ Exercises
1. Generate a service using the CLI: `nest g service users`.
2. Create an interface `User` and write a service that implements an array-based in-memory CRUD operations for users.

## ✅ Summary Checklist
- [ ] I understand the separation of concerns between Controllers and Services.
- [ ] I know how to mark a class as a Provider using `@Injectable()`.
- [ ] I know how to register a Provider in a Module.
