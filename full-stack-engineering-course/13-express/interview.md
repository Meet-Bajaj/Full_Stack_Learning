# Express.js Interview Questions

## Junior Level
**1. What is Express.js and how does it relate to Node.js?**
*Answer:* Express is a minimalist web framework that sits on top of Node.js's native `http` module. Node.js provides the runtime to execute JavaScript on the server and handle basic networking. Express abstracts the complex low-level HTTP handling (like routing, parsing data chunks, and setting headers) into a simple API.

**2. What is middleware?**
*Answer:* Middleware are functions that have access to the request object (`req`), response object (`res`), and the `next` function in the application's request-response cycle. They can execute any code, modify the request/response, end the request cycle, or call `next()` to pass control to the next middleware.

**3. How do you extract data from an incoming POST request?**
*Answer:* You use `req.body`. However, Express does not parse the body by default. You must first register a body parser middleware, such as `app.use(express.json())` for JSON data or `express.urlencoded()` for form data.

## Mid Level
**4. How does Express handle asynchronous errors?**
*Answer:* In Express 4.x, if an asynchronous route handler (async/await) throws an error, Express will not catch it automatically, causing the app to crash or hang. You must either wrap the await calls in a `try/catch` block and pass the error to `next(err)`, use an async wrapper function, or use the `express-async-errors` package. (Express 5 natively supports async error handling).

**5. What is the difference between `app.use()` and `app.get()`?**
*Answer:* `app.use()` mounts middleware for all HTTP methods (GET, POST, PUT, etc.) at the specified path (or all paths if no path is given). `app.get()` mounts a handler specifically and exclusively for the HTTP GET method on the exact specified route.

**6. Explain how to implement a global error handler.**
*Answer:* A global error handler is a middleware function defined with exactly four arguments: `(err, req, res, next)`. It must be placed at the very bottom of the middleware stack (after all routes). When `next(err)` is called from any route, Express skips all regular middleware and jumps straight to this error handler.

## Senior Level
**7. How would you structure a scalable Express application?**
*Answer:* I would avoid putting logic in `server.js` or fat controllers. I would use a layered architecture: 
1. **Routes**: Define endpoints and apply middleware.
2. **Controllers**: Handle HTTP req/res, extract parameters, and call services.
3. **Services**: Contain pure business logic (no knowledge of HTTP).
4. **Data Access (Models/Repositories)**: Handle DB interactions.
This makes the app highly testable and loosely coupled.

**8. How do you handle high CPU load and concurrency in an Express production app?**
*Answer:* Since Node.js is single-threaded, a CPU-intensive task blocks the event loop. To handle high traffic, I would use a process manager like PM2 in Cluster Mode to spawn multiple instances of the Express app (one per CPU core). For actual CPU-heavy tasks (like video processing), I would offload them to a message queue (RabbitMQ/Redis) and a separate worker pool rather than doing it in the HTTP request lifecycle.

**9. What security headers should you implement in an Express app?**
*Answer:* I would use the `helmet` package to automatically set crucial headers:
- `Strict-Transport-Security` (HSTS) to force HTTPS.
- `X-Content-Type-Options: nosniff` to prevent MIME-sniffing.
- `X-Frame-Options` to prevent Clickjacking.
- I would also configure CORS properly to restrict allowed origins, and implement rate limiting using `express-rate-limit`.
