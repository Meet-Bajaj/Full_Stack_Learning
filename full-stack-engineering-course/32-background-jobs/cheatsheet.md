# Background Jobs Cheatsheet

## NestJS Decorators
- `@Processor('queue-name')`: Marks a class as a BullMQ worker.
- `@InjectQueue('queue-name')`: Injects the queue instance to add jobs.

## BullMQ Concepts
- **Concurrency:** Number of jobs a worker processes simultaneously.
- **Sandboxed:** Running processors in separate OS processes.
- **Cron Pattern:** `* * * * *` (Minute, Hour, Day of Month, Month, Day of Week).
