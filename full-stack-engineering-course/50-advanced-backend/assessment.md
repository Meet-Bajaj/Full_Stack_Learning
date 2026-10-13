# Module 50 Assessment

## Section 1: Theory
1. What is the benefit of dependency inversion in Clean Architecture?
2. Explain what happens during a cache stampede and how to resolve it.
3. Why are idempotency keys essential in financial transactions?

## Section 2: Code Debugging
Identify the issue in this graceful shutdown logic:
```javascript
process.on('SIGTERM', () => {
  process.exit(0);
});
```
*Answer: It kills the process instantly, dropping all in-flight requests and failing to close database connections gracefully. It should call `server.close()` and await DB disconnects before exiting.*

## Section 3: Architecture Problem
**Scenario**: You are designing a high-traffic e-commerce checkout API. Users are double-clicking the "Buy" button, causing them to be charged twice. Additionally, inventory is sometimes oversold.
**Task**: Describe the architecture changes needed to fix this, specifying which tools/patterns from this module you would use.
