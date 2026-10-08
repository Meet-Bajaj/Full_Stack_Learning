# Module 32 Assessment

## Part 1: Code Review
Review the following BullMQ worker setup. Identify why it might cause the Express API to become unresponsive under heavy load, and propose a fix using Sandboxed processors.

## Part 2: Scheduling Logic
Write the exact BullMQ configuration object to schedule a job that:
- Retries 5 times on failure.
- Uses exponential backoff.
- Runs every Sunday at 3:00 AM.
