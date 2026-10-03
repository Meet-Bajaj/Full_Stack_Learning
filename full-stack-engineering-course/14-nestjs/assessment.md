# NestJS Module Assessment

## Part 1: Architecture & Theory

**1. The Request Lifecycle**
You have an endpoint `PATCH /users/:id/role`. 
You have applied:
- A global `LoggerMiddleware`
- A method-level `ParseIntPipe` on `:id`
- A controller-level `AuthGuard`
- A method-level `RolesGuard`
- A method-level `TransformInterceptor`
List the exact order in which these 5 elements will execute, including when the Controller method executes.

**2. Dependency Injection Architecture**
You are building an e-commerce platform. The `OrdersService` needs to check if a user is valid, which requires `UsersService`. Write out the minimum code required for `OrdersModule`, `UsersModule`, and the constructors of both services to achieve this without circular dependency errors.

## Part 2: Practical Coding

**Task:** Build an Event Ticketing System
Build a NestJS application with the following specifications:
1. **Modules:** `Users`, `Events`, `Tickets`, `Auth`.
2. **Database:** Use Prisma or TypeORM. An Event has many Tickets. A User has many Tickets.
3. **Authentication:** Implement JWT. Only logged-in users can buy a Ticket.
4. **Authorization:** Implement a custom `@Roles('admin')` decorator. Only Admins can Create/Update/Delete Events.
5. **Validation:** Use DTOs and `ValidationPipe`. When creating an event, `availableSeats` must be a positive integer, and `date` must be a valid future ISO date.
6. **Exception Handling:** Write a global Exception Filter that catches any unhandled errors and ensures the client receives a standardized `{ status: false, error: '...', timestamp: '...' }` object, preventing Express from leaking HTML stack traces.
7. **Documentation:** Document the `POST /events` endpoint using Swagger decorators, specifying the expected body and possible response codes (201, 400, 403).

**Evaluation Criteria:**
- Strict TypeScript usage (no `any`).
- Clean separation of concerns (no business logic in controllers).
- Correct implementation of module imports/exports.
- Correct Guard implementation and metadata reflection.
