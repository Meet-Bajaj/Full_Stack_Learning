# Lesson 02: Requirements Engineering

## Learning Objectives
- Differentiate between functional and non-functional requirements.
- Write effective User Stories and Acceptance Criteria.
- Understand MoSCoW prioritization.

## 1. Functional vs Non-Functional

- **Functional Requirements:** What the system should DO. 
  - *Example:* "The system must allow a user to reset their password via email."
- **Non-Functional Requirements:** How the system performs (Security, Reliability, Performance).
  - *Example:* "Password reset emails must be delivered within 5 seconds."

## 2. User Stories and Acceptance Criteria

**Format:** "As a [persona], I want to [action] so that [benefit]."

*User Story:* As a customer, I want to filter products by category so that I can find shoes faster.
*Acceptance Criteria:*
- Given the user is on the catalog page, when they click "Shoes", then only shoe products are displayed.
- The URL should update to include `?category=shoes`.

## 3. MoSCoW Prioritization
When building an MVP, you can't build everything.
- **M (Must have):** Critical for launch (e.g., Payments).
- **S (Should have):** Important, but not fatal if left out for V1 (e.g., Search).
- **C (Could have):** Nice to have (e.g., Dark mode).
- **W (Won't have):** Out of scope for this release.

## Summary & Checklist
- [ ] Write 3 user stories for your next project.
- [ ] Define acceptance criteria for those stories.
