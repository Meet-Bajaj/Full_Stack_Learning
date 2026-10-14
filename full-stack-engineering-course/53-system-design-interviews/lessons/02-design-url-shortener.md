# Lesson 02: Design a URL Shortener

## Learning Objectives
- Design a scalable URL shortener like bit.ly.
- Understand Base62 encoding and hashing strategies.
- Discuss caching and database choices for read-heavy systems.

## 1. Requirements Gathering
- **Functional:** Given a long URL, return a much shorter URL. Visiting the short URL redirects to the long URL.
- **Non-Functional:** Highly available, minimal latency for redirects.
- **Scale:** 100 million new URLs per month. 10:1 Read-to-Write ratio.

## 2. The Core Logic: Hashing
How do we generate the short URL?
- **Base62 Encoding:** We can use characters `[a-z, A-Z, 0-9]`, which gives us 62 characters.
- A 7-character Base62 string gives $62^7 = 3.5$ trillion combinations, which is more than enough.

**Approach 1: Hash the long URL**
Use MD5 or SHA-1 on the long URL, then take the first 7 characters.
*Problem:* Collisions. Two different long URLs might hash to the same 7 characters.

**Approach 2: Ticket Server (Auto-increment ID)**
Use a distributed auto-incrementing ID generator (e.g., Twitter Snowflake or a dedicated database sequence). Convert that integer ID to Base62.
*Benefit:* Guaranteed uniqueness. No collisions.

## 3. High-Level Design
```mermaid
flowchart TD
    Client[Client] --> LB[Load Balancer]
    LB --> Web[Web Servers]
    Web --> Cache[Redis Cache]
    Web --> DB[(Database)]
    Web --> TicketGen[Ticket Server (ID Generator)]
```

## 4. Deep Dive
- **Database:** Since we are just mapping an ID to a URL (key-value), a NoSQL database like DynamoDB or Cassandra is a great fit for fast lookups. Relational DBs work too.
- **Caching:** We have a 10:1 read-write ratio. Caching the most frequently accessed short URLs in Redis or Memcached will significantly reduce latency and DB load.
- **Redirects:** Use HTTP `301 (Permanent Redirect)` if you want to reduce load (the browser caches it), or `302 (Temporary Redirect)` if you want to track analytics for every click.

## Summary & Checklist
- [ ] Explain why Base62 is used.
- [ ] Compare hashing vs. Ticket Server approach.
- [ ] Understand the trade-off between 301 and 302 redirects.
