# Lesson 3: Job Scheduling

## 1. Learning Objectives
- Implement Delayed Jobs.
- Schedule Repeatable (Cron) Jobs.

## 2. Delayed Jobs
Sometimes you want a job to run in the future (e.g., send a "How was your experience?" email 24 hours after a purchase).
```typescript
queue.add('follow-up', { userId: 123 }, { delay: 24 * 60 * 60 * 1000 });
```

## 3. Repeatable Jobs
BullMQ can act as a distributed cron scheduler.
```typescript
// Run every day at midnight
queue.add('daily-report', {}, {
  repeat: { pattern: '0 0 * * *' }
});
```

## 4. Summary and Checklist
- [ ] Replace standard `setInterval` or OS-level `cron` with a distributed queue scheduler for reliability.
