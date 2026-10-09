# Lesson 04: Notification Systems

## Learning Objectives
By the end of this lesson, you will be able to:
- Distinguish between Push Notifications, In-App Notifications, and Email/SMS.
- Design a centralized Notification Service architecture.
- Understand the role of third-party providers (FCM, APNs, SendGrid, Twilio).

---

## 1. Types of Notifications

### 1. In-App Notifications
- **What:** The little red bell icon inside a web or mobile app.
- **How:** Delivered via WebSockets, SSE, or API polling. Stored in your database.
- **Rules:** Only visible when the user has the app open.

### 2. Push Notifications
- **What:** System-level alerts that pop up on a phone's lock screen or a desktop OS, even when the app is closed.
- **How:** Delivered via OS-level gateways (Apple Push Notification service (APNs) for iOS/Mac, Firebase Cloud Messaging (FCM) for Android/Web).
- **Rules:** Requires explicit user permission. App relies on device tokens.

### 3. Out-of-Band Notifications
- **What:** Email, SMS, Slack integrations.
- **How:** Delivered via third-party APIs (SendGrid, AWS SES, Twilio).

---

## 2. Notification Service Architecture

In a microservices architecture, you do not want your `Order Service` writing directly to SendGrid and FCM. It creates tight coupling and slows down the transaction.

Instead, build a dedicated **Notification Service**.

### The Workflow
1. **Event Generation:** `Order Service` publishes a message to a RabbitMQ/Kafka topic: 
   `{ type: "ORDER_SHIPPED", userId: 123, data: { trackingNumber: "ABC" } }`
2. **Ingestion:** The `Notification Service` subscribes to this topic.
3. **Preference Evaluation:** `Notification Service` checks the database for User 123's preferences. (Does this user want emails? Are push notifications muted between 10 PM - 6 AM?).
4. **Template Compilation:** It grabs the "Order Shipped" template and injects the `trackingNumber`.
5. **Fan-out Delivery:** It dispatches jobs to specific workers:
   - Worker A saves an In-App notification to the DB and pushes it via WebSocket.
   - Worker B sends an API request to Twilio for SMS.
   - Worker C sends an API request to FCM using the user's saved device token.

---

## 3. Handling Push Notifications (Web Push / FCM)

To send a push notification, the flow involves 3 parties: Your Server, The User's Device, and the Push Provider (Google/Apple).

1. **Registration:**
   - Web App asks user for permission.
   - Browser contacts Push Provider (e.g., FCM) to get a unique `Device Token`.
   - Web App sends `Device Token` to Your Server. You save it in the DB associated with `userId = 123`.
2. **Sending:**
   - Your Server wants to notify User 123.
   - You retrieve their `Device Token` from the DB.
   - Your Server makes an authenticated HTTP POST to FCM:
     ```json
     {
       "to": "device_token_xyz123",
       "notification": {
         "title": "Order Shipped!",
         "body": "Tracking: ABC"
       }
     }
     ```
3. **Delivery:**
   - FCM wakes up the user's device and displays the OS-level notification.

---

## 4. Best Practices for Notifications

1. **Batching/Digest:** If a user gets 50 likes on a post, don't send 50 push notifications. Batch them: "User X and 49 others liked your post."
2. **Idempotency:** Ensure that if your worker retries a failed job, the user doesn't receive the SMS twice.
3. **User Preferences:** Always provide granular opt-outs. If users can't turn off annoying notifications, they will block the app entirely at the OS level.
4. **Timezone Awareness:** Avoid sending promotional SMS/Push alerts at 3:00 AM in the user's local timezone.

## Summary
- A robust notification system abstracts delivery channels away from core business logic using Pub/Sub.
- Push notifications require managing external device tokens and communicating with OS vendors (Apple/Google).
- Respecting user preferences, batching, and idempotency are critical for good user experience.
