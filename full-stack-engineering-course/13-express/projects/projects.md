# Express.js Projects

## Project 1: RESTful Todo API
**Difficulty:** Beginner
**Goal:** Build a basic CRUD API using native Express routing and simple JSON file storage.

### Requirements:
- `GET /todos` - List all tasks. Support query param `?completed=true`.
- `GET /todos/:id` - Get a single task. Handle 404 if not found.
- `POST /todos` - Create a task. Validate `title` is required.
- `PUT /todos/:id` - Update a task.
- `DELETE /todos/:id` - Delete a task.
- Use a global error handler.
- Write data to a `todos.json` file using the `fs` module to persist data.

---

## Project 2: Blog API with Authentication
**Difficulty:** Intermediate
**Goal:** Implement a layered architecture, middleware, database integration, and JWT authentication.

### Requirements:
- **Architecture**: Separate routes, controllers, and services.
- **Database**: Use Prisma or Mongoose.
- **Users**: Register and Login endpoints. Passwords must be hashed with bcrypt.
- **Posts**: Only logged-in users can create, update, or delete posts. 
- **Authorization**: A user can only delete *their own* posts, unless they have the `admin` role.
- **Validation**: Use Zod to validate all incoming request bodies.
- **Security**: Implement Helmet and express-rate-limit.

---

## Project 3: E-Commerce API Simulation
**Difficulty:** Advanced
**Goal:** Build a complex, production-ready system with file uploads, complex queries, and robust testing.

### Requirements:
- **Products**: CRUD for products. Includes image uploads using Multer (save to disk or S3).
- **Filtering**: Advanced filtering for products (`GET /products?price_lt=100&category=electronics`).
- **Cart & Orders**: Users can add items to a cart and "checkout" (simulate a transaction).
- **Testing**: Minimum 70% test coverage using Supertest and Jest.
- **Deployment Ready**: Must include PM2 configuration, Winston for logging, and graceful shutdown handlers.
