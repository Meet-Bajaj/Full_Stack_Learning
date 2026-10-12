# Lesson 1: Architecture Fundamentals

## 🎯 Learning Objectives
By the end of this lesson, you will be able to:
1. Define software architecture and differentiate it from software design.
2. Identify core quality attributes (non-functional requirements) of a system.
3. Understand how to make architectural trade-offs.
4. Document architectural decisions using Architecture Decision Records (ADRs).

## 🧠 Mental Model & Real-World Analogy
**Analogy:** Building a house.
- **Architecture** is the blueprint: How many rooms? Where are the load-bearing walls? Where does the plumbing go? (High-level, hard to change later).
- **Design** is interior decorating: What color are the walls? Where does the sofa go? (Low-level, easier to change).

**Mental Model:** Software architecture is the set of fundamental decisions about the system that are hard to change later. It's about recognizing the critical paths and structural boundaries.

## ❓ WHY does Architecture exist?
Without architecture, systems become "Big Balls of Mud" — deeply entangled, fragile, and impossible to scale or modify safely. Architecture provides:
1. **Structure:** Clear boundaries and responsibilities.
2. **Communication:** A common language for the development team.
3. **Quality Attributes:** Guaranteeing performance, security, and scalability.

## 🏗️ Architecture vs. Design

| Software Architecture | Software Design |
|-----------------------|-----------------|
| High-level abstractions (Services, DBs) | Low-level abstractions (Classes, Functions) |
| Hard to change later | Easier to refactor |
| Focuses on NFRs (Scalability, Security) | Focuses on Functional Requirements |
| System boundaries and integrations | Internal component structure |

## ⚙️ Quality Attributes (Non-Functional Requirements - NFRs)
Architecture is mostly about satisfying NFRs. Common ones include:
- **Scalability:** Handling load increases.
- **Availability:** System uptime (e.g., 99.99%).
- **Maintainability:** Ease of modifying the code.
- **Security:** Protecting against unauthorized access and data breaches.
- **Performance:** Response times and throughput.

## ⚖️ Trade-offs
There are no perfect architectures, only trade-offs. 
*Example:* Increasing **Security** (e.g., adding multiple encryption layers) often decreases **Performance**. 
*Example:* Moving to Microservices increases **Scalability** but decreases **Maintainability/Simplicity** due to distributed system complexities.

## 📝 Architecture Decision Records (ADRs)
An ADR is a short text document that captures an important architectural decision made along with its context and consequences.

### Example ADR Template
```markdown
# ADR 1: Use PostgreSQL as Primary Database

**Date:** 2023-10-25
**Status:** Accepted

**Context:**
We need a relational database to store user and order data with strong ACID guarantees.

**Decision:**
We will use PostgreSQL.

**Consequences:**
- Positive: Strong relational integrity, good JSON support, wide ecosystem.
- Negative: Requires scaling vertically initially, master-slave setup needed for high availability.
```

## ⚠️ Common Mistakes
- **Over-engineering:** Using microservices for a simple CRUD app with 10 users. Keep it simple until you need complexity.
- **Ignoring NFRs:** Focusing only on features and ignoring security and performance until production.
- **Resume-driven development:** Choosing a technology just because it's trendy.

## ✅ Summary and Checklist
- [ ] Understand architecture vs. design.
- [ ] Identify key quality attributes.
- [ ] Recognize architectural trade-offs.
- [ ] Know how to write an ADR.
