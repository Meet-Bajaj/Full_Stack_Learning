# Lesson 4: Application Scaling

## Learning Objectives
- Implement caching layers to reduce database load.
- Understand Content Delivery Networks (CDNs).
- Utilize asynchronous processing and worker services.
- Understand when to break a monolith into microservices.

## Caching
The fastest database query is the one you don't make. Caching stores frequently accessed, relatively static data in memory (Redis/Memcached).
- **Read-Through Cache**: The app asks the cache for data. If it's not there (cache miss), the app fetches it from the DB, saves it to the cache, and returns it.
- **Cache Invalidation**: The hardest problem in computer science. When data changes in the DB, you must delete the stale data in the cache.

## Content Delivery Networks (CDNs)
A CDN (like Cloudflare or AWS CloudFront) is a geographically distributed network of proxy servers.
If your server is in New York, a user in Tokyo will experience high latency just from the physical distance (speed of light).
A CDN caches your static assets (HTML, CSS, JS, Images) on an "Edge Node" in Tokyo. The user downloads from Tokyo instead of New York.

## Asynchronous Processing
If a user registers, you might need to:
1. Save user to DB.
2. Send a welcome email.
3. Generate a default avatar.
4. Ping a CRM system.

If you do all this synchronously in the HTTP request, it might take 3 seconds. The user is waiting.
**Solution**: The HTTP request only saves the user and pushes a message ("UserCreated") to a Message Queue (like RabbitMQ or AWS SQS). It immediately returns a 200 OK.
Background **Worker Services** listen to the queue and handle the email, avatar, and CRM asynchronously.

## Microservices
When a monolithic codebase gets too large and hundreds of engineers are stepping on each other's toes, you split the app into smaller, independent services (Auth Service, Billing Service, etc.).
- **Pros**: Independent deployment, independent scaling, technology flexibility.
- **Cons**: Massively increased operational complexity (requires robust observability and orchestration like Kubernetes).

## Summary
Application scaling involves moving work away from the main synchronous request thread—either by caching it, putting it on a CDN, or pushing it to a background worker.

## Completion Checklist
- [ ] I can explain what a cache miss is.
- [ ] I know how a CDN reduces latency.
- [ ] I understand the benefit of a message queue.
