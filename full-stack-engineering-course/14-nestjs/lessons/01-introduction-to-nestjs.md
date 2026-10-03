# Lesson 01: Introduction to NestJS

## 🎯 Learning Objectives
- Understand why NestJS was created to solve Express's architectural shortcomings.
- Grasp the Angular-inspired architecture of NestJS.
- Understand the role of TypeScript and Decorators in NestJS.

## 🧠 Mental Model: The Lego Kit vs. The Factory
- **Express.js** is a box of random Lego bricks. You can build anything, but if you don't have a plan, you'll end up with a messy, fragile structure that only the original builder understands.
- **NestJS** is a modern automotive factory. It provides a highly opinionated, structured assembly line. It tells you exactly where the engines (Services) go, where the doors (Controllers) go, and how the wiring (Dependency Injection) connects everything. It limits some freedom to guarantee consistency, scalability, and testability.

## 📖 Concept Explanation

### What is NestJS?
NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses modern JavaScript, is built with and fully supports **TypeScript**, and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

### Why use NestJS over Express?
In Express, architecture is entirely up to the developer. Across 5 different Express projects, you will find 5 completely different folder structures and architectures. 
NestJS introduces **structure**. It provides out-of-the-box support for:
- Dependency Injection (DI).
- Modular architecture.
- Seamless integration with GraphQL, WebSockets, and Microservices.
- Enforced TypeScript typing.

*Note: NestJS actually uses Express under the hood by default! It is simply an architectural wrapper around it.*

### Core Building Blocks
1. **Modules**: Group related code together (e.g., `UsersModule`).
2. **Controllers**: Handle incoming HTTP requests and return responses.
3. **Providers (Services)**: Handle complex business logic and are injected into controllers.

### The Power of Decorators
NestJS relies heavily on TypeScript decorators. A decorator is a function prefixed with `@` that attaches metadata to a class, method, or property.

```typescript
// Example of NestJS Decorators
@Controller('users') // Tells Nest this class handles routes starting with /users
export class UsersController {
  
  @Get(':id') // Handles GET /users/:id
  findOne(@Param('id') id: string) {
    return `This action returns user #${id}`;
  }
}
```

## ⚠️ Common Mistakes
- **Fighting the framework:** Express developers often try to use standard `req` and `res` objects inside NestJS controllers. While possible via `@Req()` and `@Res()`, it defeats the purpose of NestJS's abstraction. Let NestJS handle the response!

## 🏋️ Exercises
1. Install the NestJS CLI globally (`npm i -g @nestjs/cli`) and generate a new project (`nest new project-name`).
2. Open `src/main.ts` and `src/app.controller.ts` and map out how the application boots up.

## ✅ Summary Checklist
- [ ] I understand the architectural differences between Express and NestJS.
- [ ] I know what a Decorator is and how NestJS uses them.
- [ ] I can generate a new NestJS project using the CLI.
