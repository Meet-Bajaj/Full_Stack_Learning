# Lesson 3: Queue Patterns

## 1. Learning Objectives
- Implement Dead Letter Queues (DLQ).
- Understand Fan-out and Priority Queues.

## 2. Dead Letter Queues (DLQ)
What happens if a job fails 3 times? You don't want to lose the data, but you also don't want it blocking the queue forever.
- A DLQ is a special queue where permanently failed jobs are moved. Engineers can inspect the DLQ, fix the bug, and manually retry the jobs.

## 3. Priority Queues
Some jobs are more important than others. For example, a password reset email (Priority 1) should jump ahead of a weekly newsletter email (Priority 10) in the queue.

## 4. Rate-Limited Queues
Third-party APIs (like Twilio or Stripe) have rate limits (e.g., 100 requests per second). You can configure your queue consumers to process a maximum of 100 jobs per second to avoid being blocked by the API.

## 5. Summary and Checklist
- [ ] Design a system that gracefully handles permanent failures using a DLQ.
- [ ] Configure priority levels in BullMQ.
