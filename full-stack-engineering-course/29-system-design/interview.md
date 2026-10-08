# System Design Interview Framework

## The 4-Step Framework
1. **Understand the Goal (10 mins)**
   - Clarify functional vs non-functional requirements.
   - Define scale (DAU, request rate, storage size).
2. **Propose High-Level Design (10 mins)**
   - Draw the core components (Client -> LB -> Web -> DB).
   - Get buy-in from the interviewer.
3. **Deep Dive (15 mins)**
   - Address the specific bottlenecks (e.g., "How do we scale the DB?", "How do we handle cache invalidation?").
4. **Wrap Up (5 mins)**
   - Discuss trade-offs and alternative approaches.

## Common Questions
- Junior: "How would you scale a simple 3-tier web app?"
- Mid: "Design a URL shortener."
- Senior: "Design a globally distributed chat system like WhatsApp."
