# Lesson 4: Documentation

## 🎯 Learning Objectives
- Write an effective project `README.md`.
- Document APIs using OpenAPI/Swagger.
- Maintain Architecture Decision Records (ADRs).
- Know when to use inline code comments.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** An instruction manual for a complex appliance. If you buy a TV, you need a quick-start guide (README), a detailed spec sheet for integrations (API Docs), and an explanation of why certain internal parts were used (ADRs).

**Mental Model:** Documentation is the memory of your project. It prevents institutional knowledge from disappearing when a senior developer leaves the company.

## ❓ WHY does it exist?
Without documentation, onboarding takes weeks instead of days. API consumers have to guess how to use your system. Architectural choices look like mistakes to future developers because they lack context.

## 🏗️ Core Documentation Types

### 1. The README.md
The front page of your repository. It MUST include:
- What the project does.
- Prerequisites (Node version, DB setup).
- How to start the app locally (`npm run dev`).
- How to run tests.
- Environment variables required.

### 2. API Documentation (OpenAPI/Swagger)
Never document REST APIs manually in a markdown file. Use tools like Swagger (often integrated via NestJS decorators or tsoa) to generate interactive documentation automatically from code.

### 3. Architecture Decision Records (ADRs)
When you make a big choice (e.g., Switching from MongoDB to PostgreSQL), write an ADR.
- **Context:** Why are we making a change?
- **Decision:** What did we decide?
- **Consequences:** What are the pros/cons we accepted?

### 4. Code Comments
As learned in the Clean Code module, reserve comments for the "Why", not the "What", and use JSDoc for public functions.

## ⚠️ Common Mistakes
- **Stale Documentation:** A README that tells you to run `npm start` when the project moved to Yarn 2 years ago. If you update the process, update the docs.
- **Writing a novel:** Nobody wants to read 50 pages of setup. Automate setup via Docker, and keep the README concise.

## 🚀 Exercises
1. Write a comprehensive README for a given Express.js project.
2. Write an ADR documenting the decision to use GraphQL instead of REST.

## ✅ Summary and Checklist
- [ ] Every project needs a README.
- [ ] Automate API documentation.
- [ ] Record major decisions in ADRs.
