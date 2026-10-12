# Lesson 9: API Gateway Pattern

## 🎯 Learning Objectives
- Understand the role of an API Gateway in microservices.
- Learn the BFF (Backend for Frontend) pattern.
- Implement routing, rate limiting, and aggregation.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A hotel receptionist. Guests don't go directly to the kitchen for food, the laundry for clean sheets, or the maintenance guy for a broken AC. They talk to the receptionist, who routes their request to the right place or gathers the info for them.

**Mental Model:** A single entry point for all clients, sitting in front of your internal microservices.

## ❓ WHY does it exist?
In a microservices architecture, a client application might need to talk to 10 different services to load a single page. This causes heavy network traffic and exposes internal architecture. An API Gateway solves this by aggregating requests and providing a unified API.

## 🏗️ Core Responsibilities
1. **Routing:** Forwarding `/api/users` to the User Service and `/api/orders` to the Order Service.
2. **Aggregation:** Calling User, Order, and Review services, combining the data, and sending one response to the client.
3. **Cross-Cutting Concerns:**
   - Authentication (verifying JWTs).
   - Rate Limiting.
   - CORS.
   - Logging and Analytics.

### The BFF Pattern (Backend for Frontend)
Instead of one massive API Gateway for all clients, you create one gateway per client type.
- `Mobile API Gateway` (Optimized for small payloads).
- `Web API Gateway` (Larger payloads, more data).

## ⚠️ Common Mistakes
- **Putting Business Logic in the Gateway:** The gateway should only route and aggregate. It shouldn't calculate taxes or validate domain rules.
- **Single Point of Failure:** If the API Gateway goes down, the entire system is inaccessible. It must be highly available.

## 🔒 Security/Performance Considerations
- The API Gateway is the ideal place to implement IP blocking, DDoS protection, and SSL termination.

## 🚀 Exercises
1. Set up an API Gateway using NGINX, Express, or Kong.
2. Write an aggregation endpoint that fetches data from three different mock services concurrently and combines them.

## ✅ Summary and Checklist
- [ ] Understand API Gateway routing and aggregation.
- [ ] Implement a BFF for a specific client type.
- [ ] Keep business logic out of the Gateway.
