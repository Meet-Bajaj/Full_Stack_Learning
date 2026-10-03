# NestJS Projects

## Project 1: Task Management API
**Difficulty:** Beginner
**Goal:** Master Modules, Controllers, Services, and DTO Validation.

### Requirements:
- Build a CRUD API for `Tasks` (title, description, status).
- Enforce strict typing with TypeScript interfaces.
- Use `class-validator` to ensure `status` can only be 'OPEN', 'IN_PROGRESS', or 'DONE'.
- Implement a custom Pipe to validate the task ID format.
- Store data in memory (Array).

---

## Project 2: Blog Platform API
**Difficulty:** Intermediate
**Goal:** Integrate a Database, JWT Authentication, and Swagger.

### Requirements:
- **Database:** Use Prisma or TypeORM to connect to PostgreSQL.
- **Entities:** User (1-to-many) -> Posts.
- **Auth:** Implement JWT authentication. Passwords must be hashed.
- **Guards:** Only logged-in users can create posts. A user can only edit their own post.
- **Docs:** Fully document the API using `@nestjs/swagger`.

---

## Project 3: E-Commerce Microservices Simulation
**Difficulty:** Advanced
**Goal:** Implement advanced architectural concepts, RBAC, File Uploads, and E2E testing.

### Requirements:
- **RBAC:** Implement a `RolesGuard`. Only 'Admin' users can create or delete Products.
- **Uploads:** Products must have an image. Use `FileInterceptor` and validate that it's a JPEG/PNG under 2MB.
- **Interceptors:** Create a global interceptor that normalizes all responses into a standard `{ data, timestamp, path }` format.
- **Configuration:** Use `ConfigModule` and Joi to strictly validate environment variables on startup.
- **Testing:** Write E2E tests for the authentication and product creation flows, maintaining a minimum 80% coverage.
