# Monitoring Cheatsheet

## The Four Golden Signals
1. **Latency**: The time it takes to service a request. Track successful and failed request latency separately.
2. **Traffic**: Demand placed on the system (e.g., HTTP requests/second).
3. **Errors**: Rate of failed requests (e.g., HTTP 500s).
4. **Saturation**: Utilization of most constrained resources (CPU, memory, DB connections).

## Health Checks
- **Liveness (`/health/live`)**: Is the process running? (Failing restarts the container). Keep it lightweight.
- **Readiness (`/health/ready`)**: Can it serve traffic? (Failing stops traffic routing). Check DB and cache connections here.

## Prometheus Metric Types
- **Counter**: Only goes up (or resets to 0). Use for total requests, total errors.
- **Gauge**: Goes up and down. Use for CPU usage, memory, active connections.
- **Histogram**: Samples observations into buckets. Use for request durations (latency).

## Alerting Best Practices
- Alert on symptoms (user pain), not causes (high CPU).
- Every page must be actionable.
- Provide runbooks for every alert.
- Avoid alert fatigue by deleting flaky alerts.
