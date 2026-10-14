# Project 02: Project Management SaaS

## Project Overview
Build a multi-tenant project management SaaS application similar to Trello or Linear.

## Tech Stack
- **Frontend:** Next.js, Tailwind, React DnD (for drag and drop), React Hook Form.
- **Backend:** NestJS or Express, PostgreSQL, Prisma, Redis.

## Core Features
- **Workspaces:** Users can create workspaces and invite members via email.
- **Boards & Tasks:** Kanban boards with columns (To Do, In Progress, Done). Drag and drop functionality.
- **Real-Time:** When one user moves a task, other users viewing the board see the update instantly (WebSockets).
- **Role-Based Access Control:** Admin vs Member permissions within a workspace.

## API Specifications
- `POST /api/workspaces`
- `POST /api/workspaces/:id/invites`
- `GET /api/boards/:id`
- `PATCH /api/tasks/:id` (Update status, triggers WebSocket event).

## Infrastructure
- Deploy using Docker to AWS EC2 or DigitalOcean.
- Setup a CI/CD pipeline using GitHub Actions to run tests on every PR.
