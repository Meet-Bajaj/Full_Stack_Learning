# NestJS Multiple Choice Question Bank

> **Note:** A curated subset of the core NestJS MCQ assessment.

## Beginner Level

**1. What is the main purpose of the `@Injectable()` decorator in NestJS?**
- A) To define the route prefix for a controller.
- B) To mark a class as a Provider that can be managed by the Nest IoC container.
- C) To validate incoming request bodies.
- D) To export a module globally.
**Correct Answer:** B
**Explanation:** `@Injectable()` tells NestJS that the class should be treated as a provider, allowing it to be injected into controllers or other services.

**2. Which of the following is executed FIRST in the NestJS request lifecycle?**
- A) Guards
- B) Interceptors
- C) Middleware
- D) Pipes
**Correct Answer:** C
**Explanation:** The lifecycle order is: Middleware -> Guards -> Interceptors (pre-controller) -> Pipes -> Controller -> Interceptors (post-controller) -> Exception Filters.

## Intermediate Level

**3. You want to extract the query string `?sort=asc` from an incoming request. Which decorator should you use in your controller method?**
- A) `@Param('sort')`
- B) `@Body('sort')`
- C) `@Query('sort')`
- D) `@Req('sort')`
**Correct Answer:** C
**Explanation:** `@Query()` is specifically used to extract URL query string parameters. `@Param()` is for route path variables (e.g., `/:id`).

**4. You have a `UsersModule` and an `OrdersModule`. You want to use `UsersService` inside `OrdersService`. What must you do?**
- A) Just import `UsersService` at the top of the file and use `new UsersService()`.
- B) Place `UsersService` in the `providers` array of `OrdersModule`.
- C) Put `UsersService` in the `exports` array of `UsersModule`, and put `UsersModule` in the `imports` array of `OrdersModule`.
- D) Make `OrdersModule` global.
**Correct Answer:** C
**Explanation:** Providers are encapsulated by default. To share them, the host module must export them, and the receiving module must import the host module.

## Advanced & Production Level

**5. How do you inject a custom value (like a string or configuration object) instead of a class instance?**
- A) Using `useValue` or `useFactory` in the module's provider array, combined with `@Inject('TOKEN')` in the constructor.
- B) It is impossible; NestJS only injects classes.
- C) By passing it as a parameter to the `Module()` decorator.
- D) By extending the `Injectable` interface.
**Correct Answer:** A
**Explanation:** Custom providers allow you to use string tokens. You define them using `{ provide: 'MY_TOKEN', useValue: 'my_value' }` and inject them using `@Inject('MY_TOKEN')`.

**6. When using `FileInterceptor` to handle file uploads in a serverless environment (like AWS Lambda), what is the most critical architectural consideration?**
- A) The file must be saved using `dest: './uploads'` locally.
- B) You must use `ValidationPipe` to parse the binary.
- C) Serverless environments have ephemeral storage; you should process the file in memory (`buffer`) and upload it directly to cloud storage like S3.
- D) Interceptors do not work in serverless environments.
**Correct Answer:** C
**Explanation:** Serverless containers are destroyed after execution. Saving files to the local disk will result in data loss. You must upload streams/buffers directly to persistent cloud storage.
