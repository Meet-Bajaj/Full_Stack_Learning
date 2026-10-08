# Lesson 6: Caching Patterns

## 1. Learning Objectives
- Apply caching to different layers of the stack.
- Implement API response caching and Session caching.

## 2. API Response Caching
Caching the entire JSON response of an endpoint.
```javascript
// Express middleware example
app.get('/api/trending', cacheMiddleware('5 minutes'), async (req, res) => {
    // This only runs if cache misses
    const data = await getTrendingHeavyComputation();
    res.json(data);
});
```

## 3. Session Caching
In a horizontally scaled environment, user sessions must be stored externally. Redis is the industry standard for this because it's fast and automatically handles TTL (expiring idle sessions).

## 4. Computed Data Caching
Don't just cache raw DB rows. Cache the results of heavy CPU computations (e.g., generating a PDF report or a complex aggregate dashboard).

## 5. Summary and Checklist
- [ ] Implement Express middleware for API caching.
- [ ] Setup Redis for Express Session storage.
