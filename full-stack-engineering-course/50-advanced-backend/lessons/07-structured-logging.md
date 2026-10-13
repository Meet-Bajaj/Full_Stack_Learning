# Lesson 7: Structured Logging

## Learning Objectives
- Implement JSON logging using Pino.
- Understand Log Correlation and Correlation IDs.
- Correlate logs across microservices.

## Why it Exists
Standard `console.log` produces unstructured text that is impossible to search or analyze effectively at scale in tools like Datadog, ELK, or CloudWatch. Structured JSON logging allows querying by fields. Correlation IDs allow you to trace a single request's path through multiple services.

## Mental Model
Unstructured logging is like a diary entry: "Today I served a request, it failed."
Structured logging is like a police report form: `{"event": "request_failed", "userId": 123, "timestamp": "...", "errorCode": 500}`.

## Implementation (Pino & Correlation ID)
```typescript
import pino from 'pino';
import { v4 as uuidv4 } from 'uuid';
import { AsyncLocalStorage } from 'async_hooks';

const logger = pino();
const asyncLocalStorage = new AsyncLocalStorage<string>();

// Middleware
export function requestTracer(req, res, next) {
  const traceId = req.headers['x-correlation-id'] || uuidv4();
  
  asyncLocalStorage.run(traceId, () => {
    logger.info({ msg: 'Request started', path: req.path, method: req.method, traceId });
    next();
  });
}

// Usage deep in a service
export function doWork() {
  const traceId = asyncLocalStorage.getStore();
  logger.info({ msg: 'Doing work', traceId });
}
```

## Checklist
- [ ] Set up Pino logger
- [ ] Use `AsyncLocalStorage` to propagate trace IDs without prop drilling
- [ ] Pass `x-correlation-id` to downstream services
