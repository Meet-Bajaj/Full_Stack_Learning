# Software Architecture Exercises

## 1. Architecture Decision Record (ADR)
**Scenario:** Your team is building a new e-commerce platform. You expect high traffic during Black Friday. You must choose between a Monolithic Architecture and a Microservices Architecture.
**Task:** Write an ADR documenting your choice, including context, decision, and consequences (positive and negative).

## 2. Bounded Context Mapping
**Scenario:** A University system manages Students, Courses, Grades, and Billing. 
**Task:** Identify the Bounded Contexts. For each context, define what the "Student" entity looks like and which attributes it holds.

## 3. Hexagonal Architecture Implementation
**Task:** Define a primary port (interface) for a `NotificationService` and write two secondary adapters for it: one for AWS SES (Email) and one for Twilio (SMS). Write a small core service that uses this port.

## 4. API Gateway Aggregation
**Task:** Write pseudo-code for an API Gateway controller that receives a request for `/api/dashboard`, fetches data concurrently from `UserService`, `OrderService`, and `RecommendationService`, and aggregates the response.
