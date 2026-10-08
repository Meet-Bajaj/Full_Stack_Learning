# Lesson 2: BullMQ

## 1. Learning Objectives
- Setup BullMQ with Redis in a Node.js application.
- Create queues, add jobs, and process jobs.
- Configure job options like retries and delays.

## 2. What is BullMQ?
BullMQ is a fast, reliable, Redis-based queue for Node.js. It handles job scheduling, retries, and concurrency.

## 3. Adding Jobs (Producer)
```typescript
import { Queue } from 'bullmq';

const emailQueue = new Queue('Emails', { connection: { host: 'localhost', port: 6379 } });

async function sendWelcomeEmail(userId) {
  // Add a job to the queue
  await emailQueue.add('welcome-email', { userId }, {
    delay: 5000, // wait 5 seconds before processing
    attempts: 3, // retry up to 3 times on failure
    backoff: { type: 'exponential', delay: 1000 } // exponential backoff
  });
}
```

## 4. Processing Jobs (Consumer)
```typescript
import { Worker } from 'bullmq';

const worker = new Worker('Emails', async job => {
  if (job.name === 'welcome-email') {
    const { userId } = job.data;
    console.log(`Sending email to user ${userId}`);
    // Await email sending logic here
  }
}, { connection: { host: 'localhost', port: 6379 } });
```

## 5. Summary and Checklist
- [ ] Install and configure BullMQ and Redis.
- [ ] Implement exponential backoff for failing jobs.
