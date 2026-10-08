# Lesson 4: Error Handling

## 1. Learning Objectives
- Configure retries and exponential backoff.
- Implement robust error monitoring.

## 2. Exponential Backoff
If an external API is down, retrying immediately is useless. Backoff increases the delay between each retry (e.g., 1s, 2s, 4s, 8s).

## 3. Worker Event Listeners
You must listen for failed jobs to log them or alert the team.
```typescript
worker.on('failed', (job, err) => {
  console.error(`Job ${job.id} failed with error ${err.message}`);
  // Send to Sentry / Datadog
});
```

## 4. Summary and Checklist
- [ ] Never let a job fail silently. Always hook into the `failed` event.
