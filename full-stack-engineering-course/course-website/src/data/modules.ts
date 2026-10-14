import { Module } from '../types';

export const modules: Module[] = [
  {
    "id": "00-orientation",
    "name": "Orientation & Course Guide",
    "phase": "Phase 1: Foundations",
    "description": "Course map, tooling setup, developer mindset, and learning methodologies.",
    "estimatedHours": 2
  },
  {
    "id": "01-computer-science-foundations",
    "name": "Computer Science Foundations",
    "phase": "Phase 1: Foundations",
    "description": "Hardware architecture, binary, OS processes, networking, and Big O notation.",
    "estimatedHours": 15
  },
  {
    "id": "02-programming-fundamentals",
    "name": "Programming Fundamentals",
    "phase": "Phase 1: Foundations",
    "description": "Language-agnostic variables, memory, control flow, functions, and collections.",
    "estimatedHours": 20
  },
  {
    "id": "03-javascript",
    "name": "JavaScript Deep Dive",
    "phase": "Phase 1: Foundations",
    "description": "V8 internals, execution context, closures, event loop, promises, and modern ES.",
    "estimatedHours": 40
  },
  {
    "id": "04-typescript",
    "name": "TypeScript Mastery",
    "phase": "Phase 1: Foundations",
    "description": "Type system, generics, utility types, discriminated unions, and compiler configuration.",
    "estimatedHours": 25
  },
  {
    "id": "05-git",
    "name": "Git Version Control",
    "phase": "Phase 1: Foundations",
    "description": "Object model, branching, rebasing, merge conflicts, stashing, and reflog.",
    "estimatedHours": 15
  },
  {
    "id": "06-github",
    "name": "GitHub & Collaboration",
    "phase": "Phase 1: Foundations",
    "description": "Pull requests, code review etiquette, branch protection, and automated workflows.",
    "estimatedHours": 10
  },
  {
    "id": "07-web-fundamentals",
    "name": "Web & Network Fundamentals",
    "phase": "Phase 2: Web & Frontend",
    "description": "HTTP/1.1 to HTTP/3, TLS handshakes, DNS resolution, cookies, and CORS.",
    "estimatedHours": 15
  },
  {
    "id": "08-html",
    "name": "HTML5 & Accessibility",
    "phase": "Phase 2: Web & Frontend",
    "description": "Semantic markup, WCAG compliance, forms, validation, and browser rendering.",
    "estimatedHours": 15
  },
  {
    "id": "09-css",
    "name": "CSS3 & Tailwind CSS",
    "phase": "Phase 2: Web & Frontend",
    "description": "Box model, Flexbox, CSS Grid, animations, utility-first CSS, and responsive layouts.",
    "estimatedHours": 25
  },
  {
    "id": "10-react",
    "name": "React Architecture",
    "phase": "Phase 2: Web & Frontend",
    "description": "JSX, hooks deep dive, reconciliation, custom hooks, and TanStack Query.",
    "estimatedHours": 40
  },
  {
    "id": "11-nextjs",
    "name": "Next.js App Router",
    "phase": "Phase 2: Web & Frontend",
    "description": "Server components, streaming, server actions, ISR, dynamic routing, and caching.",
    "estimatedHours": 35
  },
  {
    "id": "12-nodejs",
    "name": "Node.js Runtime Architecture",
    "phase": "Phase 3: Backend & APIs",
    "description": "Libuv event loop phases, non-blocking I/O, streams, buffers, and child processes.",
    "estimatedHours": 30
  },
  {
    "id": "13-express",
    "name": "Express.js Framework",
    "phase": "Phase 3: Backend & APIs",
    "description": "Middleware pipeline, REST routing, error handling, Zod validation, and security.",
    "estimatedHours": 25
  },
  {
    "id": "14-nestjs",
    "name": "NestJS Enterprise Architecture",
    "phase": "Phase 3: Backend & APIs",
    "description": "Dependency injection, modular architecture, pipes, guards, interceptors, and DTOs.",
    "estimatedHours": 35
  },
  {
    "id": "15-rest-api",
    "name": "REST API Architecture",
    "phase": "Phase 3: Backend & APIs",
    "description": "Resource modeling, HTTP semantics, cursor pagination, rate limiting, and OpenAPI.",
    "estimatedHours": 20
  },
  {
    "id": "16-authentication",
    "name": "Authentication Systems",
    "phase": "Phase 3: Backend & APIs",
    "description": "Password hashing (Argon2/Bcrypt), JWTs, refresh tokens, sessions, and OAuth2.",
    "estimatedHours": 20
  },
  {
    "id": "17-authorization",
    "name": "Authorization & Access Control",
    "phase": "Phase 3: Backend & APIs",
    "description": "RBAC, ABAC, CASL policies, IDOR vulnerabilities, and permission middleware.",
    "estimatedHours": 15
  },
  {
    "id": "18-mongodb",
    "name": "MongoDB & Document Stores",
    "phase": "Phase 4: Databases & Storage",
    "description": "BSON, aggregation framework, indexing, schema design, and transactions.",
    "estimatedHours": 25
  },
  {
    "id": "19-sql",
    "name": "Relational Databases & SQL",
    "phase": "Phase 4: Databases & Storage",
    "description": "Relational algebra, JOINs, subqueries, CTEs, ACID guarantees, and normalization.",
    "estimatedHours": 25
  },
  {
    "id": "20-postgresql",
    "name": "PostgreSQL Deep Dive",
    "phase": "Phase 4: Databases & Storage",
    "description": "JSONB, GIN indexes, full-text search, MVCC, explain plans, and tuning.",
    "estimatedHours": 30
  },
  {
    "id": "21-prisma",
    "name": "Prisma ORM",
    "phase": "Phase 4: Databases & Storage",
    "description": "Type-safe schemas, relational queries, migrations, connection pooling, and NestJS.",
    "estimatedHours": 20
  },
  {
    "id": "22-redis",
    "name": "Redis In-Memory Store",
    "phase": "Phase 4: Databases & Storage",
    "description": "Data structures, cache-aside, pub/sub, distributed locks, and rate limiters.",
    "estimatedHours": 25
  },
  {
    "id": "23-minio",
    "name": "MinIO & S3 Object Storage",
    "phase": "Phase 4: Databases & Storage",
    "description": "Buckets, presigned URLs, multipart uploads, policies, and file validation.",
    "estimatedHours": 15
  },
  {
    "id": "24-docker",
    "name": "Docker & Containerization",
    "phase": "Phase 5: DevOps & Deployment",
    "description": "Images, multi-stage builds, volumes, bridge networks, and security hardening.",
    "estimatedHours": 25
  },
  {
    "id": "25-docker-compose",
    "name": "Docker Compose Multi-Service",
    "phase": "Phase 5: DevOps & Deployment",
    "description": "Service orchestration, health checks, environment variables, and persistence.",
    "estimatedHours": 15
  },
  {
    "id": "26-testing",
    "name": "Testing Pyramid & Quality",
    "phase": "Phase 6: Quality & Security",
    "description": "Unit testing (Vitest), integration tests, E2E (Playwright), and mocking.",
    "estimatedHours": 30
  },
  {
    "id": "27-security",
    "name": "Application Security & OWASP",
    "phase": "Phase 6: Quality & Security",
    "description": "OWASP Top 10, XSS, CSRF, SQLi, CSP headers, rate limiting, and sanitization.",
    "estimatedHours": 25
  },
  {
    "id": "28-performance",
    "name": "Performance Optimization",
    "phase": "Phase 6: Quality & Security",
    "description": "Core Web Vitals, profiling, bundle splitting, query tuning, and caching.",
    "estimatedHours": 20
  },
  {
    "id": "29-system-design",
    "name": "System Design Architecture",
    "phase": "Phase 7: Architecture & Systems",
    "description": "Scalability, CAP theorem, load balancing, sharding, and high availability.",
    "estimatedHours": 30
  },
  {
    "id": "30-caching",
    "name": "Advanced Caching Strategies",
    "phase": "Phase 7: Architecture & Systems",
    "description": "Cache-aside, write-through, cache stampede mitigation, and TTL invalidation.",
    "estimatedHours": 15
  },
  {
    "id": "31-message-queues",
    "name": "Message Queues & Event Streaming",
    "phase": "Phase 7: Architecture & Systems",
    "description": "BullMQ, AMQP, RabbitMQ, Kafka streaming, and event-driven patterns.",
    "estimatedHours": 15
  },
  {
    "id": "32-background-jobs",
    "name": "Background Job Processing",
    "phase": "Phase 7: Architecture & Systems",
    "description": "Workers, retry backoff, dead letter queues, and scheduled cron jobs.",
    "estimatedHours": 15
  },
  {
    "id": "33-websockets",
    "name": "WebSockets & Socket.IO",
    "phase": "Phase 7: Architecture & Systems",
    "description": "Bidirectional protocols, rooms, namespaces, Redis adapter, and connection states.",
    "estimatedHours": 15
  },
  {
    "id": "34-real-time-systems",
    "name": "Real-Time System Architectures",
    "phase": "Phase 7: Architecture & Systems",
    "description": "Server-Sent Events, presence tracking, live feeds, and collaborative syncing.",
    "estimatedHours": 15
  },
  {
    "id": "35-ci-cd",
    "name": "CI/CD & GitHub Actions",
    "phase": "Phase 5: DevOps & Deployment",
    "description": "Automated linting, test suites, container builds, and deployment gates.",
    "estimatedHours": 20
  },
  {
    "id": "36-linux",
    "name": "Linux Server Administration",
    "phase": "Phase 5: DevOps & Deployment",
    "description": "Filesystem hierarchy, permissions, systemd services, SSH keys, and firewall.",
    "estimatedHours": 20
  },
  {
    "id": "37-nginx",
    "name": "Nginx Reverse Proxy & Load Balancer",
    "phase": "Phase 5: DevOps & Deployment",
    "description": "Virtual hosts, SSL termination, upstream clusters, gzip, and rate limits.",
    "estimatedHours": 15
  },
  {
    "id": "38-vps",
    "name": "VPS Provisioning & Production",
    "phase": "Phase 5: DevOps & Deployment",
    "description": "Cloud servers, DNS A/CNAME records, security hardening, and backups.",
    "estimatedHours": 15
  },
  {
    "id": "39-cloud",
    "name": "Cloud Infrastructure & AWS",
    "phase": "Phase 5: DevOps & Deployment",
    "description": "IaaS, VPC networking, managed RDS/S3, ECS, and Terraform IaC.",
    "estimatedHours": 15
  },
  {
    "id": "40-deployment",
    "name": "Production Deployment Strategies",
    "phase": "Phase 5: DevOps & Deployment",
    "description": "Zero-downtime, blue-green deployment, rolling updates, and rollback runbooks.",
    "estimatedHours": 20
  },
  {
    "id": "41-monitoring",
    "name": "Monitoring & Metrics",
    "phase": "Phase 5: DevOps & Deployment",
    "description": "Prometheus metrics, four golden signals, Grafana dashboards, and alert thresholds.",
    "estimatedHours": 15
  },
  {
    "id": "42-logging",
    "name": "Structured Production Logging",
    "phase": "Phase 5: DevOps & Deployment",
    "description": "JSON logging with Pino, correlation IDs, centralized ELK/Loki log aggregation.",
    "estimatedHours": 10
  },
  {
    "id": "43-observability",
    "name": "Observability & OpenTelemetry",
    "phase": "Phase 5: DevOps & Deployment",
    "description": "Distributed tracing, span propagation, Jaeger visualization, and APM analysis.",
    "estimatedHours": 15
  },
  {
    "id": "44-scalability",
    "name": "Application Scalability",
    "phase": "Phase 7: Architecture & Systems",
    "description": "Horizontal scaling, statelessness, database read replicas, and partitioning.",
    "estimatedHours": 20
  },
  {
    "id": "45-distributed-systems",
    "name": "Distributed Systems Patterns",
    "phase": "Phase 7: Architecture & Systems",
    "description": "Sagas, two-phase commit, outbox pattern, Raft consensus, and idempotency.",
    "estimatedHours": 25
  },
  {
    "id": "46-software-architecture",
    "name": "Software Architecture Paradigms",
    "phase": "Phase 7: Architecture & Systems",
    "description": "Clean Hexagonal architecture, Domain-Driven Design, and Modular Monoliths.",
    "estimatedHours": 25
  },
  {
    "id": "47-design-patterns",
    "name": "Design Patterns in TypeScript",
    "phase": "Phase 7: Architecture & Systems",
    "description": "Repository, Factory, Strategy, Observer, Adapter, and Decorator patterns.",
    "estimatedHours": 20
  },
  {
    "id": "48-clean-code",
    "name": "Clean Code & Refactoring",
    "phase": "Phase 7: Architecture & Systems",
    "description": "SOLID principles, code smells, cognitive complexity, and readability rules.",
    "estimatedHours": 15
  },
  {
    "id": "49-code-quality",
    "name": "Code Quality & Governance",
    "phase": "Phase 7: Architecture & Systems",
    "description": "ESLint configs, Prettier hooks, PR review templates, and quality metrics.",
    "estimatedHours": 15
  },
  {
    "id": "50-advanced-backend",
    "name": "Advanced Backend Engineering",
    "phase": "Phase 7: Architecture & Systems",
    "description": "Pessimistic/optimistic locking, domain events, graceful shutdown, and caching.",
    "estimatedHours": 25
  },
  {
    "id": "51-advanced-frontend",
    "name": "Advanced Frontend Engineering",
    "phase": "Phase 7: Architecture & Systems",
    "description": "Fiber reconciliation, DOM virtualization, complex forms with Zod, and Web Vitals.",
    "estimatedHours": 25
  },
  {
    "id": "52-interview-preparation",
    "name": "Technical Interview Preparation",
    "phase": "Phase 8: Professional Readiness",
    "description": "Top coding patterns, behavioral STAR framework, and tech-specific question bank.",
    "estimatedHours": 30
  },
  {
    "id": "53-system-design-interviews",
    "name": "System Design Interview Mastery",
    "phase": "Phase 8: Professional Readiness",
    "description": "Frameworks, estimation, API design, data modeling, and whiteboard architecture.",
    "estimatedHours": 25
  },
  {
    "id": "54-capstone-projects",
    "name": "Production Capstone Projects",
    "phase": "Phase 8: Professional Readiness",
    "description": "E-Commerce platform, Project Management SaaS, and Global LMS specifications.",
    "estimatedHours": 80
  },
  {
    "id": "55-real-world-projects",
    "name": "Professional Engineering Workflow",
    "phase": "Phase 8: Professional Readiness",
    "description": "20-step lifecycle from product requirement document to scaled production rollout.",
    "estimatedHours": 60
  }
];
