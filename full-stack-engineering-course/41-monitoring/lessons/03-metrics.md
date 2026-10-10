# Lesson 3: Metrics

## Learning Objectives
- Understand how metrics differ from logs.
- Identify the core metric types in Prometheus: Counters, Gauges, and Histograms.
- Instrument a Node.js application using `prom-client`.
- Understand the role of Grafana in visualizing metrics.

## What Are Metrics?
Metrics are numerical measurements taken over time. Unlike logs (which record discrete events), metrics aggregate data to give you a high-level view of your system's behavior. A single log entry might say "User X logged in at 10:00 AM." A metric would say "150 users logged in between 10:00 AM and 10:05 AM."

## The Mental Model
Imagine a car's dashboard. 
- The speedometer shows a **Gauge** (current speed).
- The odometer shows a **Counter** (total miles driven).
- A report of your average speed over the last 10 trips is similar to a **Histogram** (distribution of values).

## Prometheus Metric Types

1. **Counter**: A cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart. Use cases: Number of requests served, tasks completed, or errors.
2. **Gauge**: A metric that represents a single numerical value that can arbitrarily go up and down. Use cases: Temperatures, current memory usage, number of active connections.
3. **Histogram**: Samples observations (usually things like request durations or response sizes) and counts them in configurable buckets. It also provides a sum of all observed values.

## Instrumenting Node.js with `prom-client`

```typescript
import express from 'express';
import client from 'prom-client';

const app = express();

// Enable default metrics (CPU, memory, etc.)
client.collectDefaultMetrics();

// Define a custom Counter
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});

// Middleware to count requests
app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.route ? req.route.path : req.path,
      status: res.statusCode
    });
  });
  next();
});

// Expose metrics endpoint for Prometheus to scrape
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});
```

## Grafana Dashboards
Prometheus collects and stores the metrics, but Grafana visualizes them. Grafana connects to Prometheus as a data source and allows you to create rich, interactive dashboards using PromQL (Prometheus Query Language).

## Summary
Metrics provide the high-level quantitative data needed to understand system behavior at scale. By instrumenting your code with Counters, Gauges, and Histograms, you make your application's state observable.

## Completion Checklist
- [ ] I can explain the difference between a Counter and a Gauge.
- [ ] I know how to expose a `/metrics` endpoint in Node.js.
- [ ] I understand the relationship between Prometheus and Grafana.
