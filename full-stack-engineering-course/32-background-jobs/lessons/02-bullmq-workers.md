# Lesson 2: BullMQ Workers

## 1. Learning Objectives
- Configure BullMQ worker concurrency.
- Utilize Sandboxed processors.
- Monitor job lifecycles using events.

## 2. Concurrency
By default, a BullMQ Worker processes one job at a time. You can increase throughput by adjusting concurrency.
```typescript
const worker = new Worker('Emails', processor, { concurrency: 10 });
```

## 3. Sandboxed Processors
If a background job is CPU-intensive (like image processing), it will block Node.js's single thread, freezing the worker.
- **Solution:** Sandboxed processors run the job logic in a separate Node.js process. You point the Worker to a file path instead of passing a function.

## 4. Summary and Checklist
- [ ] Understand the impact of CPU-bound tasks on Node's event loop.
- [ ] Setup a sandboxed worker.
