# Lesson 1: Logging Fundamentals

## Learning Objectives
- Understand the primary purpose of logging in a software system.
- Differentiate between standard log levels (Debug, Info, Warn, Error).
- Explain the benefits of structured logging over plain text logging.

## Why Do We Log?
When a system fails or behaves unexpectedly, you need a trail of breadcrumbs to figure out what happened. Logs are the chronological record of events that occurred within your application. While metrics tell you *that* there is a problem, logs are usually what you use to figure out *why* it happened.

## The Mental Model
Think of logging as a flight data recorder (black box) for an airplane. During normal operation, it silently records thousands of data points. If a crash or anomaly occurs, investigators use that data to reconstruct exactly what the plane was doing leading up to the event.

## Log Levels
Log levels allow you to categorize the severity and intent of a log message, enabling filtering and routing.

1. **DEBUG**: Detailed information, typically of interest only when diagnosing problems. Not usually enabled in production.
2. **INFO**: Confirmation that things are working as expected. High-level milestones (e.g., "Server started", "User logged in").
3. **WARN**: An indication that something unexpected happened, or indicative of some problem in the near future (e.g., "Disk space low"), but the software is still working as expected.
4. **ERROR**: Due to a more serious problem, the software has not been able to perform some function. Requires attention.
5. **FATAL/CRITICAL**: Severe error that causes early termination of the program.

## Plain Text vs. Structured Logging

**Plain Text Log:**
`[2023-10-27 10:00:00] INFO User 123 failed to login from IP 192.168.1.1`
*Problem*: If you want to search for all failed logins from a specific IP, you have to write complex Regex to parse the text.

**Structured Log (JSON):**
```json
{
  "timestamp": "2023-10-27T10:00:00Z",
  "level": "info",
  "event": "login_failed",
  "userId": 123,
  "ip_address": "192.168.1.1"
}
```
*Benefit*: Machines can easily parse JSON. Log management systems (like Elasticsearch or Splunk) can index these fields, allowing you to run queries like `level: info AND event: login_failed AND ip_address: 192.168.1.1` instantaneously.

## Summary
Logging is essential for post-incident debugging. Embracing structured logging from day one makes your logs searchable, indexable, and infinitely more valuable.

## Completion Checklist
- [ ] I can define the standard log levels.
- [ ] I understand why structured logging is preferred in modern systems.
- [ ] I know the difference between logs and metrics.
