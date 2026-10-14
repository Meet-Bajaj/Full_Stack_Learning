# 🧠 Advanced MCQ Question Bank
> **Focus Domain:** Memory Leaks, Concurrency, Query Execution Plans, Microservices  
> **Total Questions:** 50 High-Yield Categorized Problems

---

### Question 1: Execution Engine & Memory
**Which memory structure in the V8 engine stores reference types like objects, arrays, and closures?**
- A) Call Stack
- B) Memory Heap
- C) Microtask Queue
- D) Macrotask Queue

**Correct Answer:** B  
**Explanation:** Primitive values and execution contexts are allocated on the call stack, while non-primitives (objects, functions, arrays) and variables captured in closures reside on the dynamic Memory Heap.  
**Topic:** JavaScript Engine Internals  
**Difficulty:** Standard

---

### Question 2: Relational Integrity & Concurrency
**When executing a `SELECT ... FOR UPDATE` statement in PostgreSQL, what lock type is acquired?**
- A) ACCESS SHARE lock on the table
- B) ROW EXCLUSIVE lock on the matched rows
- C) EXCLUSIVE lock on the entire database
- D) SHARE UPDATE EXCLUSIVE on the index

**Correct Answer:** B  
**Explanation:** `FOR UPDATE` acquires a row-level write lock preventing concurrent transactions from updating, locking, or deleting the selected rows until the current transaction commits or rolls back.  
**Topic:** PostgreSQL Concurrency  
**Difficulty:** Standard

---

### Question 3: HTTP Protocol Semantics
**According to RFC 9110, which HTTP method is guaranteed to be both Safe and Idempotent?**
- A) POST
- B) PUT
- C) GET
- D) PATCH

**Correct Answer:** C  
**Explanation:** `GET` is safe (does not alter server state) and idempotent (multiple identical requests yield identical server effects). `PUT` is idempotent but not safe. `POST` and `PATCH` are neither safe nor idempotent by default.  
**Topic:** Web Fundamentals  
**Difficulty:** Standard

---

### Question 4: Docker Container Lifecycle
**In a multi-stage `Dockerfile`, what directive ensures that intermediate build dependencies and secrets are excluded from the runtime container?**
- A) `ARG DEBIAN_FRONTEND=noninteractive`
- B) `COPY --from=builder /app/dist ./dist`
- C) `EXPOSE 8080`
- D) `VOLUME ["/data"]`

**Correct Answer:** B  
**Explanation:** The multi-stage pattern copies compiled assets from an ephemeral `builder` stage into a clean, minimal runtime base image (e.g., `alpine` or `distroless`), stripping away build tools and intermediate artifacts.  
**Topic:** Docker & Infrastructure  
**Difficulty:** Standard

---

### Question 5: React Reconciliation & Keys
**Why is utilizing an array index as a `key` prop considered an anti-pattern when rendering dynamic lists in React?**
- A) It causes TypeScript compilation errors
- B) It prevents CSS animations from executing
- C) It confuses the reconciliation algorithm when items are inserted, deleted, or re-ordered, causing component state corruption
- D) It triggers infinite render loops in React 18 Concurrent Mode

**Correct Answer:** C  
**Explanation:** Keys must uniquely identify an item across renders. When using index keys, shifting an array item reassigns its index, leading React to map existing DOM nodes and component local states to the wrong logical entities.  
**Topic:** React Architecture  
**Difficulty:** Standard
