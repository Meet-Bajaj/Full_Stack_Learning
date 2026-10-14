# Lesson 01: System Design Interview Framework

## Learning Objectives
- Understand the expectations of a system design interview.
- Master a step-by-step framework for tackling any design problem.
- Learn how to manage time effectively during the interview.

## 1. What is a System Design Interview?
Unlike coding interviews that have a clear right/wrong answer, system design interviews are open-ended conversations. They evaluate your ability to architect systems that are scalable, reliable, and maintainable.

## 2. The 5-Step Framework

### Step 1: Requirements Gathering (5-10 mins)
Never start designing immediately. Clarify the scope.
- **Functional Requirements:** What does the system actually do? (e.g., "Users can upload a video", "Users can view a timeline").
- **Non-Functional Requirements:** What are the constraints? (e.g., Highly available, low latency, consistency vs. availability).
- **Scale Estimation (Back-of-the-envelope):** Estimate DAU (Daily Active Users), read/write ratio, and storage requirements.

### Step 2: High-Level Design (10-15 mins)
Draw the core components.
- Client -> Load Balancer -> Web Servers -> Database.
- Identify the main APIs.

### Step 3: Deep Dive (15-20 mins)
The interviewer will ask you to zoom in on specific bottlenecks.
- How do we handle database replication?
- Where should we introduce caching?
- Do we need a message queue for asynchronous tasks?

### Step 4: Trade-offs (5 mins)
Discuss what you compromised on. CAP theorem (Consistency, Availability, Partition Tolerance) is relevant here.

## Summary & Checklist
- [ ] Understand the difference between functional and non-functional requirements.
- [ ] Memorize the 5-step framework.
- [ ] Practice back-of-the-envelope estimations.
