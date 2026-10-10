# Module 41 Exercises

## Exercise 1: Implement Health Checks
**Objective:** Add robust liveness and readiness endpoints to a provided Express.js starter template.

**Task:**
1. Open `src/index.ts`.
2. Add a `GET /health/live` endpoint that returns a 200 OK with `{"status": "UP"}`.
3. Add a `GET /health/ready` endpoint.
4. In the readiness endpoint, attempt to connect to the provided PostgreSQL database. If successful, return 200 OK. If the connection fails, catch the error and return a 503 Service Unavailable status with the error details.

## Exercise 2: Instrumenting with Prometheus
**Objective:** Track HTTP request latency using a Histogram.

**Task:**
1. Install `prom-client`.
2. Create a `client.Histogram` named `http_request_duration_seconds`.
3. Add a middleware to your Express app that starts a timer before calling `next()`.
4. Listen for the `res.on('finish')` event to stop the timer and record the duration.
5. Add a `GET /metrics` endpoint to expose the collected metrics.

## Exercise 3: Debugging an Alert
**Scenario:** You receive a PagerDuty alert: `CRITICAL: High Error Rate on Checkout Service`.
**Task:**
Review the provided simulated Grafana dashboard screenshots and application logs in the `exercise-3-assets` folder.
Write a brief incident report answering:
1. When did the incident start?
2. Which specific database query is failing?
3. What is the root cause based on the logs?
4. What immediate mitigation step would you take?
