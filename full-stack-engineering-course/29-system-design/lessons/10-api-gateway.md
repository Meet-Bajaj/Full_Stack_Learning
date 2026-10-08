# Lesson 10: API Gateway

## 1. Learning Objectives
- Understand the role of an API Gateway in a microservices architecture.
- Identify gateway responsibilities: routing, rate limiting, and auth.

## 2. What is an API Gateway?
Instead of mobile or web clients talking directly to 50 different microservices, they talk to a single entry point: The API Gateway.

### Responsibilities
1. **Routing:** Maps `/api/billing` to the Billing Service.
2. **Authentication:** Validates JWTs before passing requests to backend services.
3. **Rate Limiting:** Prevents abuse by throttling IPs.
4. **Aggregation:** Combines responses from 3 different services into one payload for the client.

## 3. Summary and Checklist
- [ ] Compare an API Gateway to a Load Balancer.
- [ ] Explain the backend-for-frontend (BFF) pattern.
