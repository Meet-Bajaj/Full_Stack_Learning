# Module 51 Multiple Choice Questions (MCQs)

**Q1: Why does React need the Virtual DOM?**
- A) Direct DOM manipulation is slow; batching diffs in memory is faster.
- B) Browsers don't support writing HTML with JavaScript natively.
- C) It is required for TypeScript compilation.
- D) To manage global state securely.
**Correct Answer:** A
**Explanation:** The DOM itself is fast, but repainting/reflowing the browser is slow. The V-DOM calculates minimal changes needed, reducing expensive repaints.

**Q2: When should you use `useCallback`?**
- A) On every function created inside a component to save memory.
- B) Only when passing a function as a prop to a child wrapped in `React.memo` or using it in a hook's dependency array.
- C) To cache the result of an expensive calculation.
- D) To fetch data asynchronously.
**Correct Answer:** B
**Explanation:** Overusing `useCallback` is bad for performance. It's best used to maintain referential equality for child components that rely on `React.memo` to skip renders.

**Q3: In TanStack Query, what does `staleTime` control?**
- A) How long inactive data stays in memory before garbage collection.
- B) How many times a failed query will retry.
- C) How long data is considered fresh before a background refetch is triggered.
- D) The timeout for the HTTP request.
**Correct Answer:** C
**Explanation:** Stale time dictates if the cached data can be used *without* making a network request to refetch. `gcTime` dictates how long it stays in memory.

**Q4: What is the main benefit of Next.js Incremental Static Regeneration (ISR)?**
- A) It compiles the React app into WebAssembly.
- B) It updates static pages in the background after a timeout, combining the speed of SSG with dynamic data.
- C) It sends a tiny fraction of JavaScript to the client.
- D) It bypasses CORS restrictions.
**Correct Answer:** B
**Explanation:** ISR allows you to update static pages after you've built your site, avoiding full site rebuilds for data changes.

*(This is a representative set of high-quality MCQs for Module 51).*
