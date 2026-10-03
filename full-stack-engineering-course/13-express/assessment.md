# Express.js Module Assessment

## Part 1: Architecture & Theory

**1. The Request Lifecycle**
Describe the exact sequence of events that occurs when a `POST /api/users` request with a JSON payload arrives at an Express server that uses `express.json()`, an authentication middleware, a validation middleware, a route handler, and a global error handler.

**2. Debugging Memory Leaks**
You notice your Express app's memory usage steadily increases over 24 hours until the container crashes with an Out Of Memory (OOM) error. Name two common patterns in Express that cause memory leaks and how you would diagnose them.

## Part 2: Practical Coding

**Task:** Build a Secure File Upload Microservice
Build an Express API with the following specifications:
1. An endpoint `POST /upload` that accepts a single image file (`avatar`).
2. The endpoint must be protected by a JWT (simulate validation).
3. Use Multer. The file must be an image (png/jpg) and cannot exceed 1MB.
4. If validation fails (e.g., file too large, wrong type, or invalid token), return a structured JSON error response using a global error handler.
5. Save the file to an `/images` directory and return a URL `http://localhost:3000/images/<filename>` that successfully serves the static image.

**Evaluation Criteria:**
- Proper use of Router and separation of concerns.
- Correct Multer configuration (fileFilter and limits).
- Use of `express.static`.
- Correct 4-argument error handling middleware.
- Security headers implemented (Helmet).
