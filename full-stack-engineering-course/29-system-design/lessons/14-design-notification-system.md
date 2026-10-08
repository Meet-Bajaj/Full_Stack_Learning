# Lesson 14: Design a Notification System

## 1. Learning Objectives
- Architect a system to send Push, Email, and SMS at scale.
- Implement queues for rate limiting and retry logic.

## 2. Architecture

```mermaid
flowchart TD
    Auth[Auth Service] -->|Event| API[Notification API]
    Billing[Billing Service] -->|Event| API
    
    API --> Queue1[SMS Queue]
    API --> Queue2[Email Queue]
    
    Queue1 --> Worker1[SMS Workers]
    Queue2 --> Worker2[Email Workers]
    
    Worker1 --> Twilio[Twilio API]
    Worker2 --> SendGrid[SendGrid API]
```

## 3. Dealing with Third-Party APIs
Third-party APIs (Twilio, APNS) go down or rate limit you.
- Never call them synchronously.
- Always use queues to buffer requests.
- Implement exponential backoff for retries.

## 4. Summary and Checklist
- [ ] Understand the fan-out pattern for notifications.
- [ ] Design a system that doesn't drop notifications on failure.
