# Lesson 02: Modules in NestJS

## 🎯 Learning Objectives
- Understand what a Module is and its role in organizing a NestJS application.
- Learn how to use the `@Module()` decorator.
- Differentiate between Feature Modules, Shared Modules, and Global Modules.

## 🧠 Mental Model: The University Departments
Think of a NestJS application as a University.
- The **AppModule** is the University itself (the root module).
- **Feature Modules** are the specific departments: Mathematics Department (`MathModule`), Science Department (`ScienceModule`).
- Each department has its own professors (**Providers/Services**) and classrooms (**Controllers**).
- By default, the Science department cannot use the Math department's professors. If they want to, the Math department must **export** that professor, and the Science department must **import** the Math department.

## 📖 Concept Explanation

### The `@Module()` Decorator
A module is a class annotated with a `@Module()` decorator. The decorator takes a single object whose properties describe the module.

```typescript
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [], // Other modules this module depends on
  controllers: [UsersController], // Controllers instantiated in this module
  providers: [UsersService], // Services instantiated in this module
  exports: [UsersService] // Services made available to OTHER modules that import this one
})
export class UsersModule {}
```

### Feature Modules
A feature module simply organizes code relevant to a specific feature, keeping code boundaries clean. For example, all user-related code goes into `UsersModule`.

### Shared Modules
In NestJS, modules are **singletons** by default. This means you can share the exact same instance of a provider between multiple modules.
If `OrdersModule` needs to verify a user, it imports `UsersModule`.

```typescript
@Module({
  imports: [UsersModule], // Now OrdersModule can inject UsersService!
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
```

### Global Modules
Sometimes, importing a module everywhere (like a Database or Configuration module) is tedious. You can make a module global using the `@Global()` decorator.

```typescript
import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
```
*Note: Global modules should be registered only once (usually in the root `AppModule`). Overusing them ruins the modular architecture.*

## ⚠️ Common Mistakes
1. **Forgetting to Export:** "I imported `AuthModule` into `UsersModule`, but Nest says `AuthService` is not a known provider!" -> You forgot to put `AuthService` in the `exports: []` array of `AuthModule`.
2. **Circular Dependencies:** Module A imports Module B, and Module B imports Module A. Use `forwardRef()` to resolve this, or better yet, refactor the shared logic into a Module C.

## 🏋️ Exercises
1. Use the Nest CLI to generate a `Products` module: `nest g module products`.
2. Generate a Service inside the Products module, export it, and import the Products module into the root `AppModule`.

## ✅ Summary Checklist
- [ ] I can define a module using the `@Module` decorator.
- [ ] I know how to export a provider so other modules can use it.
- [ ] I understand when and how to use `@Global()`.
