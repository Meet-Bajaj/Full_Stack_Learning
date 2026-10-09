# Lesson 1: Nginx Fundamentals

## What is Nginx?
Nginx (pronounced "engine-x") is open-source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. It started as a web server designed for maximum performance and stability.

## Web Server vs Reverse Proxy
- **Web Server:** Serves static content (HTML, CSS, JS, images) directly to the client.
- **Reverse Proxy:** Sits between the client and backend servers, forwarding requests to the appropriate backend server and returning the response to the client.

## Event-Driven Architecture
Unlike Apache, which creates a new thread or process for each request, Nginx uses an asynchronous, event-driven approach. This allows Nginx to handle thousands of concurrent connections with a very low memory footprint.

## Real-World Analogy
Think of Nginx as a highly efficient receptionist in a large office building. Instead of personally walking every visitor to their destination (Apache), the receptionist simply checks their ID and points them to the right elevator (event-driven), allowing them to handle many more visitors at once.
