# Express.js Multiple Choice Question Bank

> **Note:** This represents a core sample of the 100-question bank. It includes scenario-based and conceptual questions spanning Beginner to Production levels.

## Beginner Level

**1. What is the primary purpose of the `next()` function in Express middleware?**
- A) To skip the current request and move to the next client.
- B) To pass control to the next middleware function in the stack.
- C) To immediately send the response back to the client.
- D) To throw an error and trigger the error handler.
**Correct Answer:** B
**Explanation:** Express is a routing and middleware web framework. Calling `next()` tells Express that the current middleware has finished its task and control should be passed to the next function in the queue.

**2. Which of the following is the correct way to extract a route parameter named "id" in `app.get('/users/:id')`?**
- A) `req.query.id`
- B) `req.body.id`
- C) `req.params.id`
- D) `req.id`
**Correct Answer:** C
**Explanation:** Route parameters are captured in the `req.params` object. Query strings use `req.query`, and POST bodies use `req.body`.

## Intermediate Level

**3. Look at the following code. What will happen if a request is made to `GET /test`?**
```javascript
app.use((req, res, next) => {
  res.send('Global Middleware');
  next();
});
app.get('/test', (req, res) => {
  res.send('Test Route');
});
```
- A) The client receives 'Global Middleware' and the server throws an "ERR_HTTP_HEADERS_SENT" error.
- B) The client receives 'Test Route'.
- C) The client receives both strings concatenated together.
- D) The application crashes on startup.
**Correct Answer:** A
**Explanation:** The middleware sends a response but then calls `next()`. The `/test` route also tries to send a response. You cannot send two responses to a single HTTP request. 

**4. How does Express identify an Error-Handling Middleware?**
- A) By the function name `errorHandler`.
- B) By passing exactly 4 arguments to the function: `(err, req, res, next)`.
- C) By placing it at the very top of the `app.js` file.
- D) By throwing an error inside `app.use()`.
**Correct Answer:** B
**Explanation:** Express exclusively uses the arity (number of arguments) of the middleware function to determine if it is an error handler. It must have exactly 4 parameters.

## Advanced & Production Level

**5. You are running an Express app using `express-rate-limit` behind an NGINX reverse proxy. You notice that ALL users are being blocked simultaneously after a few requests. What is the likely cause?**
- A) The `windowMs` configuration is too short.
- B) The app is not trusting the proxy, so `req.ip` resolves to the NGINX server's IP for every user.
- C) NGINX is overriding the rate limit headers.
- D) The `express-rate-limit` package is not compatible with reverse proxies.
**Correct Answer:** B
**Explanation:** Behind a proxy, `req.ip` will be the proxy's IP. You must use `app.set('trust proxy', 1)` so Express knows to look at the `X-Forwarded-For` header to identify the actual client IP.

**6. Which of the following is NOT a good practice for production Express applications?**
- A) Using `process.env.PORT` instead of a hardcoded port.
- B) Running the application using `node server.js` directly.
- C) Using PM2 to cluster the application across multiple CPU cores.
- D) Compressing API responses using the `compression` middleware.
**Correct Answer:** B
**Explanation:** Running `node server.js` directly means if the app crashes, it stays down. In production, you must use a process manager like PM2 or Docker restart policies to ensure the app restarts automatically.
