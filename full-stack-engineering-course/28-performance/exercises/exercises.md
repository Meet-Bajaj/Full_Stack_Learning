# Module 28 Exercises

## Exercise 1: Profiling the Event Loop
You are given a Node.js script that blocks the event loop with a large JSON parse. Move the parsing logic to a Worker Thread and measure the difference using `autocannon`.

## Exercise 2: Implementing React.lazy()
Take a monolithic React application and split the routing using `React.lazy()` and `Suspense`. Measure the bundle size difference before and after.

## Exercise 3: Load Testing with k6
Write a k6 script to simulate 100 concurrent users hitting a `/products` endpoint for 30 seconds. Analyze the p95 response time.
