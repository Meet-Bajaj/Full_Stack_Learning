# System Design Exercises

## Exercise 1: Identify the Bottleneck
You have a web application with a single Node.js server and a single PostgreSQL database. Traffic spikes 10x during a marketing campaign. The CPU on the Node.js server hits 100%, and requests start timing out, while the DB CPU is at 10%.
- **Task:** Diagram the current architecture and propose a scalable solution to handle the traffic spike without losing availability.

## Exercise 2: Scale the Database
Your e-commerce application has grown to 10 million users. Your single MySQL database is struggling to keep up with the read traffic on the product catalog.
- **Task:** Explain how you would implement read replicas. Diagram the flow of write requests vs read requests.
