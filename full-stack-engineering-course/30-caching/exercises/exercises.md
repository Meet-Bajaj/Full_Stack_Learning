# Caching Exercises

## Exercise 1: Implement Cache-Aside
Write a Node.js function that fetches user profile data from a mock database. Implement the cache-aside pattern using an in-memory map or a mocked Redis client. Ensure the cache TTL is set to 60 seconds.

## Exercise 2: Active Invalidation
Modify your previous function. Create an `updateUserProfile` function that updates the database and actively invalidates the cache so the next read request gets fresh data.
