# Lesson 03: Technical Planning

## Learning Objectives
- Convert product requirements into technical architecture.
- Select the right tools and databases for the job.
- Learn how to structure an RFC (Request for Comments) document.

## 1. The Architecture Design Doc (RFC)
Before writing code for a complex feature, senior engineers write a document proposing the solution.

**RFC Structure:**
1. **Context & Goals:** Why are we doing this?
2. **Proposed Solution:** High-level overview.
3. **Architecture Diagram:** How components interact.
4. **Database Schema Changes:** New tables, migrations.
5. **API Contract:** Endpoints, request/response bodies.
6. **Alternatives Considered:** Why didn't we use approach X?

## 2. Choosing the Right Technology

- **Relational (PostgreSQL):** Default choice. Strong schema, ACID, complex queries.
- **Document (MongoDB):** Fast iteration, unstructured data, schema-less.
- **Key-Value (Redis):** Caching, rate limiting, pub/sub. Extremely fast.
- **Search (Elasticsearch):** Text search, logs, analytics.

## 3. Estimation
Estimating software is notoriously hard.
- Break tasks down into the smallest possible units (usually no larger than 2 days of work).
- Account for testing, code review, and deployment time, not just typing code.

## Summary & Checklist
- [ ] Understand the structure of an RFC.
- [ ] Know when to use different database types.
