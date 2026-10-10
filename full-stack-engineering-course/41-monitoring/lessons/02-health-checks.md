# Lesson 2: Health Checks

## Learning Objectives
- Differentiate between Liveness and Readiness probes.
- Implement robust health check endpoints in a Node.js application.
- Understand how to check database and dependency health safely.

## Why Do We Need Health Checks?
Load balancers and container orchestrators (like Kubernetes) need a way to know if an application instance is healthy enough to receive traffic. If an instance is deadlocked or has lost its database connection, routing traffic to it will result in errors. Health checks provide an automated way to signal the state of an application.

## The Mental Model
Think of health checks like a pulse check and a readiness interview.
- **Pulse Check (Liveness)**: "Are you alive?" If the answer is no, the system terminates the process and starts a new one.
- **Readiness Interview (Readiness)**: "Are you ready to work?" A worker might be alive but still putting on their uniform (e.g., loading caches, establishing DB connections). If they aren't ready, you don't assign them tasks (route traffic) yet.

## Liveness vs. Readiness

### Liveness Probe (`/health/live`)
- **Purpose**: To determine if the application is running.
- **Action on Failure**: The orchestrator restarts the container.
- **Implementation**: Usually a simple endpoint that returns HTTP 200 OK unconditionally as long as the HTTP server is responsive.

### Readiness Probe (`/health/ready`)
- **Purpose**: To determine if the application is ready to accept traffic.
- **Action on Failure**: The orchestrator stops sending traffic to this instance but *does not* restart it.
- **Implementation**: Checks downstream dependencies like databases, caches, and third-party APIs.

## Implementation Example (Express.js)

```typescript
import express from 'express';
import { checkDatabaseConnection } from './db';

const app = express();

// Liveness Check: Is the process running and the event loop unblocked?
app.get('/health/live', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Readiness Check: Can we actually serve user requests?
app.get('/health/ready', async (req, res) => {
  try {
    // Check critical dependencies
    const dbStatus = await checkDatabaseConnection();
    
    if (dbStatus.isConnected) {
      res.status(200).json({ status: 'READY', dependencies: { db: 'UP' } });
    } else {
      res.status(503).json({ status: 'NOT_READY', dependencies: { db: 'DOWN' } });
    }
  } catch (error) {
    res.status(503).json({ status: 'NOT_READY', error: error.message });
  }
});
```

## Common Mistakes & Best Practices
- **Mistake**: Making liveness probes too complex. If a liveness probe checks a database and the database goes down, all your application instances will fail their liveness checks and be restarted simultaneously, causing an outage.
- **Best Practice**: Liveness probes should be extremely lightweight.
- **Best Practice**: Readiness probes should have timeouts. If checking a dependency takes too long, fail the probe quickly.
- **Security**: Be careful not to expose sensitive internal IP addresses or credential information in health check payloads.

## Summary
Health checks are the communication bridge between your application and your infrastructure. Properly distinguishing between liveness and readiness prevents outages and ensures smooth deployments.

## Completion Checklist
- [ ] I understand the difference between liveness and readiness.
- [ ] I can implement basic health check endpoints.
- [ ] I know why liveness probes should not check databases.
