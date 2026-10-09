# Module 34: Real-Time Systems Assessment

## Part 1: Conceptual Architecture
1. Contrast a Request-Response Architecture with an Event-Driven Architecture. Provide a real-world software example where Request-Response fails but Event-Driven succeeds.
2. What is the fundamental difference between Server-Sent Events (SSE) and WebSockets?

## Part 2: Implementation Decision
You are building a live dashboard for a cryptocurrency exchange. Prices update up to 5,000 times a second.
1. Should you use WebSockets or SSE for this? Justify your answer.
2. Write a conceptual pseudocode block showing how the backend server should handle the 5,000 incoming price updates per second before sending data to the browser client.

## Part 3: Notification Systems
Explain the architectural flow of a push notification in a microservices environment.
Start from the trigger (User A likes User B's photo in the `Social Service`) and end at the notification appearing on User B's locked iPhone screen. Be sure to mention the roles of Message Brokers and third-party gateways (APNs/FCM).

## Part 4: Code Challenge
Write a basic Express.js route for an SSE endpoint that sends the current server memory usage (`process.memoryUsage()`) to the client every 2 seconds. Ensure you include the correct HTTP headers required for SSE to function.
