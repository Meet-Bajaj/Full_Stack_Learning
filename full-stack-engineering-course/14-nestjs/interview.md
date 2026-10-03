# NestJS Interview Questions

## Junior Level
**1. What are the core building blocks of a NestJS application?**
*Answer:* The three main building blocks are Modules (grouping related code together), Controllers (handling HTTP incoming requests and returning responses), and Providers/Services (handling complex business logic and state).

**2. What is the purpose of `@Injectable()`?**
*Answer:* It is a decorator that marks a class as a Provider. This tells the NestJS Inversion of Control (IoC) container that it should manage the instantiation of this class and can inject it into the constructors of other classes.

**3. Explain the difference between `ParseIntPipe` and `ValidationPipe`.**
*Answer:* `ParseIntPipe` is used for data transformation (converting a string route parameter into a JavaScript number). `ValidationPipe` is used for data validation, typically working alongside DTOs and `class-validator` to ensure incoming request bodies match a strict schema.

## Mid Level
**4. Explain the NestJS Request Lifecycle.**
*Answer:* When a request hits a NestJS app, it goes through: Middleware -> Guards -> Interceptors (Pre-Controller) -> Pipes -> Controller -> Interceptors (Post-Controller) -> Exception Filters (if an error was thrown).

**5. What is the difference between Middleware and Guards?**
*Answer:* Middleware runs first and only has access to the raw Express `req` and `res` objects. It is "dumb" regarding the application's execution context. Guards run after middleware and have access to the `ExecutionContext`. They know exactly which class and method will be executed next, making them the correct choice for Authorization (RBAC) because they can read route metadata.

**6. How do you resolve a Circular Dependency in NestJS?**
*Answer:* If Service A needs Service B, and Service B needs Service A, you can use the `forwardRef()` utility function provided by NestJS in both constructors. However, a circular dependency is usually a sign of bad architectural design, and the shared logic should ideally be extracted into a third Service C.

## Senior Level
**7. Explain how Custom Providers work and why you would use `useValue` or `useFactory`.**
*Answer:* By default, Nest instantiates classes. But sometimes you want to inject a constant string, a configuration object, or an instance created asynchronously. 
- `useValue` is used to inject constant values (like an array of allowed roles).
- `useFactory` is used to inject values dynamically (like connecting to a database asynchronously using connection strings from a ConfigService).
- `useClass` is used to swap implementations (e.g., using `MockPaymentService` instead of `StripePaymentService` in testing environments).

**8. How do you handle database connection pooling and graceful shutdown in a NestJS Microservice?**
*Answer:* Connection pooling is usually handled by the ORM (like Prisma or TypeORM). To prevent connection leaks, the NestJS application must implement Graceful Shutdown by enabling `app.enableShutdownHooks()`. When the server receives a `SIGTERM` signal, Nest triggers the `OnApplicationShutdown` lifecycle events in all modules, where the database provider can explicitly call `await db.$disconnect()`.
