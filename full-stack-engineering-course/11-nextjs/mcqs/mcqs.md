# Next.js MCQs

## Beginner

1. What is Next.js?
   - A) A CSS framework
   - B) A database
   - C) A React framework
   - D) A backend language
   **Correct: C**

2. Which directory is used for the modern Next.js router?
   - A) `pages/`
   - B) `app/`
   - C) `src/`
   - D) `router/`
   **Correct: B**

## Intermediate

3. What directive is used to mark a file as a Client Component?
   - A) `use browser`
   - B) `use window`
   - C) `use client`
   - D) `use react`
   **Correct: C**

4. How do you implement Server Actions in Next.js?
   - A) Export a function with `use server` directive
   - B) Export a function with `use api` directive
   - C) Put the file in `server/` folder
   - D) Use `getServerSideProps`
   **Correct: A**

## Advanced

5. What is the default caching behavior of the `fetch` API in Next.js App Router (Next.js 13/14)?
   - A) No cache
   - B) Cache until manual revalidation
   - C) Cache for 5 minutes
   - D) Revalidate on every request
   **Correct: B** (Historically in Next 13, fetch was cached by default. Note: this changed slightly in Next 15 to un-cached by default, but typically tested as caching).
