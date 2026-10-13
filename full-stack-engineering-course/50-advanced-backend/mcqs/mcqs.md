# Module 50 Multiple Choice Questions (MCQs)

**Q1: What is the primary purpose of Dependency Inversion in Clean Architecture?**
- A) To make API requests faster
- B) To decouple the core business logic from framework and database details
- C) To reverse the order of database transactions
- D) To prevent CORS errors
**Correct Answer:** B
**Explanation:** Dependency Inversion ensures the high-level domain layer depends on interfaces (ports), while low-level infrastructure implements them, decoupling the domain from tools.

**Q2: In a high-concurrency ticket booking system, two users try to book the last seat. How does Optimistic Locking prevent double booking?**
- A) By locking the entire database table.
- B) By checking a `version` column during the update and failing if it has changed since read.
- C) By queuing requests in RabbitMQ.
- D) By disabling the UI button after one click.
**Correct Answer:** B
**Explanation:** Optimistic locking increments a version field. If another transaction updated the record, the version check fails, raising a concurrent modification error.

**Q3: What happens to a Node.js server if it does not handle SIGTERM gracefully?**
- A) It continues running indefinitely.
- B) It kills active requests immediately, causing broken client experiences and potential data corruption.
- C) The load balancer automatically retries the requests.
- D) The memory footprint doubles.
**Correct Answer:** B
**Explanation:** A hard kill terminates the process immediately, abruptly closing in-flight requests and database connections.

**Q4: Which HTTP method is NOT idempotent by definition?**
- A) GET
- B) PUT
- C) DELETE
- D) POST
**Correct Answer:** D
**Explanation:** Calling POST multiple times creates multiple resources. PUT and DELETE should have the same effect no matter how many times they are called.

*(This is a representative set of high-quality MCQs for Module 50).*
