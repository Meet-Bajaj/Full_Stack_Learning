# Lesson 3: OpenTelemetry (OTel)

## Learning Objectives
- Understand what OpenTelemetry is and why it exists.
- Differentiate between auto-instrumentation and manual instrumentation.
- Understand the role of the OpenTelemetry Collector.

## The Standardization Problem
Historically, if you wanted to use DataDog for observability, you used the DataDog SDK in your code. If you switched to New Relic, you had to rewrite all your instrumentation code. 

**OpenTelemetry (OTel)** solves this. It is a vendor-neutral standard (and set of SDKs/APIs) for generating, collecting, and exporting telemetry data (Metrics, Logs, and Traces). You instrument your code once using OTel, and you can send the data to any backend (Jaeger, Prometheus, DataDog, etc.) via configuration.

## Auto vs. Manual Instrumentation

### Auto-Instrumentation
OTel provides libraries that automatically monkey-patch popular frameworks (like Express.js, PostgreSQL drivers, HTTP modules). Just by requiring the auto-instrumentation package at the top of your file, OTel will automatically create traces and spans for incoming HTTP requests and outgoing database queries without you writing any custom span code.

### Manual Instrumentation
When you need business-specific context, you use manual instrumentation.

```typescript
import { trace } from '@opentelemetry/api';

const tracer = trace.getTracer('my-service-tracer');

async function processPayment(amount: number) {
  // Start a custom span
  return tracer.startActiveSpan('processPayment', async (span) => {
    try {
      span.setAttribute('payment.amount', amount); // Add custom tags
      
      const result = await someExternalApi(amount);
      span.setStatus({ code: SpanStatusCode.OK });
      return result;
    } catch (error) {
      span.recordException(error);
      span.setStatus({ code: SpanStatusCode.ERROR });
      throw error;
    } finally {
      span.end(); // CRITICAL: Always end the span
    }
  });
}
```

## The OpenTelemetry Collector
Instead of your application sending data directly to vendors, it sends it to an OTel Collector running in your infrastructure.
The Collector acts as a proxy that can:
- **Receive** data in various formats.
- **Process** it (filter out PII, sample data to reduce volume, batch data).
- **Export** it to multiple destinations simultaneously (e.g., send Traces to Jaeger and Metrics to Prometheus).

## Summary
OpenTelemetry provides a unified, vendor-agnostic way to instrument applications, future-proofing your observability strategy and reducing vendor lock-in.

## Completion Checklist
- [ ] I understand the problem OpenTelemetry solves.
- [ ] I can describe the difference between auto and manual instrumentation.
- [ ] I know what the OTel Collector does.
