# Module 41 Interview Questions

## Junior Level
1. **Question**: What is the difference between a Liveness probe and a Readiness probe?
   *Expected Answer*: Liveness checks if the app is running; if it fails, the orchestrator restarts the app. Readiness checks if the app can serve traffic (e.g., DB is connected); if it fails, the orchestrator stops sending traffic but does not restart the app.
2. **Question**: Why shouldn't you use `console.log` for application monitoring in production?
   *Expected Answer*: It's not structured (hard to parse), it's synchronous in some environments, and it lacks log levels and metric aggregation capabilities.

## Mid Level
3. **Question**: Can you explain the Four Golden Signals of monitoring?
   *Expected Answer*: Latency (time to serve), Traffic (request volume), Errors (failure rate), and Saturation (resource utilization).
4. **Question**: How would you prevent "alert fatigue" on your team?
   *Expected Answer*: Ensure alerts are actionable, base them on user symptoms rather than system causes, delete flaky alerts, and route non-critical issues to tickets rather than paging on-call engineers.

## Senior Level
5. **Question**: Suppose you have a microservice that processes background jobs. How would you design the monitoring and alerting for this service?
   *Expected Answer*: Focus on queue depth (saturation), processing latency per job (latency), job failure rate (errors), and job throughput (traffic). I would alert if queue depth grows continuously (indicating workers can't keep up) or if the error rate spikes.
6. **Question**: Explain how Distributed Tracing works and how you would implement it across a Polyglot architecture (e.g., Node.js, Go, and Python services).
   *Expected Answer*: Tracing relies on passing a context (Trace ID, Span ID) across service boundaries, usually via HTTP headers. To implement it across polyglot services, I would use a vendor-agnostic standard like OpenTelemetry, which provides SDKs for all major languages to automatically inject and extract these headers, and send the span data to a centralized collector like Jaeger.
