# Lesson 1: Background Processing Fundamentals

## 1. Learning Objectives
- Identify use cases for background jobs.
- Differentiate between sync and async execution paths.

## 2. Why Background Jobs?
In a web application, the HTTP request/response cycle must be fast. If a task takes longer than a few hundred milliseconds, it should be moved to the background.

**Common Use Cases:**
- Sending transactional emails.
- Generating reports (PDFs, CSV exports).
- Processing uploaded media (compressing images, transcoding video).
- Syncing data with third-party APIs (e.g., Salesforce, Stripe).

## 3. Summary and Checklist
- [ ] Audit an application and identify synchronous bottlenecks that should be backgrounded.
