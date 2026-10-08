# Message Queues Exercises

## Exercise 1: Setup a Work Queue
Using BullMQ and Node.js, create a producer script that adds 10 "send-email" jobs to a queue. Create a consumer script that processes these jobs with a simulated 2-second delay for each.

## Exercise 2: Implementing Retries
Modify your BullMQ worker to simulate a random failure (e.g., 50% chance to throw an Error). Configure the queue to retry failed jobs up to 3 times with exponential backoff.
