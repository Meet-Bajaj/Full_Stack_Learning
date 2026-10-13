# Module 50 & 51 Interview Questions

## Module 50: Advanced Backend

### Junior Level
1. **Q: What is a database transaction?**
   *A: A sequence of operations treated as a single logical unit of work. It must adhere to ACID properties (Atomicity, Consistency, Isolation, Durability).*
2. **Q: Explain the difference between Authentication and Authorization.**
   *A: Authentication verifies WHO you are (e.g., login, JWT). Authorization verifies WHAT you are allowed to do (e.g., roles, permissions).*

### Mid Level
3. **Q: What is a race condition, and how do you prevent it in a backend system?**
   *A: A race condition occurs when concurrent processes read/write shared data, leading to inconsistent results. It is prevented using Optimistic Locking (versioning), Pessimistic Locking (DB row locks), or Distributed Locks (Redis).*
4. **Q: Why is an idempotency key important for financial transactions?**
   *A: To prevent double-charging if a network timeout occurs and a client automatically retries a successful payment request.*

### Senior Level
5. **Q: Explain the Saga pattern and compensating transactions.**
   *A: In distributed systems where traditional ACID transactions aren't possible across microservices, a Saga is a sequence of local transactions. If one fails, compensating transactions are triggered to undo the work of previous local transactions.*
6. **Q: How would you design a backend for zero-downtime deployments?**
   *A: Run multiple instances behind a load balancer. Implement health checks (readiness and liveness). On shutdown, capture SIGTERM, stop accepting new requests, finish existing ones, close DB connections gracefully. Do rolling updates so only a percentage of instances are down at once.*

---

## Module 51: Advanced Frontend

### Junior Level
1. **Q: What is the Virtual DOM and why does React use it?**
   *A: An in-memory representation of the real DOM. React diffs the old and new V-DOM to calculate the minimal set of real DOM operations needed, improving performance over raw DOM manipulation.*

### Mid Level
2. **Q: When would you use React Context vs Redux/Zustand?**
   *A: Context is for low-frequency updates like theme or auth state. Redux/Zustand is for high-frequency, complex global state to avoid unnecessary re-renders of the component tree.*
3. **Q: Explain optimistic UI updates.**
   *A: Updating the UI immediately assuming a server request will succeed. If it fails, the UI rolls back to the previous state. This makes the app feel highly responsive.*

### Senior Level
4. **Q: Explain React's Fiber architecture and how it improves rendering.**
   *A: Fiber is React's reconciliation engine. It breaks rendering work into chunks, allowing React to pause, resume, or abort rendering to prioritize high-priority updates (like user input) over low-priority ones (like data fetching), enabling concurrent features.*
5. **Q: How would you debug and fix a severe performance bottleneck in a React application?**
   *A: Use React DevTools Profiler to identify components re-rendering unnecessarily. Look for prop drilling, unstable object/function references causing `React.memo` to fail, or expensive calculations. Fix using `useMemo`, `useCallback`, state colocation, or virtualizing long lists.*
