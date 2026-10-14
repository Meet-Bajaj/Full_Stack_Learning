# 📖 Glossary of Technical Terms

A comprehensive glossary of terms used throughout this course, organized alphabetically.

---

## A

**ACID** — Atomicity, Consistency, Isolation, Durability. Properties that guarantee reliable database transactions.

**API (Application Programming Interface)** — A set of rules and protocols that allows software applications to communicate with each other.

**API Gateway** — A server that acts as a single entry point for a set of microservices, handling routing, rate limiting, and authentication.

**Aggregation** — Combining multiple rows/documents into summary results (COUNT, SUM, AVG, etc.).

**Async/Await** — JavaScript syntax for handling asynchronous operations using Promises in a synchronous-looking style.

**Authentication (AuthN)** — Verifying WHO a user is (identity verification).

**Authorization (AuthZ)** — Determining WHAT a verified user is allowed to do (access control).

## B

**Bcrypt** — A password hashing function designed to be computationally expensive to resist brute-force attacks.

**Blue-Green Deployment** — A deployment strategy using two identical environments, switching traffic between them for zero-downtime releases.

**BullMQ** — A Node.js library for creating robust job queues backed by Redis.

**Buffer** — A temporary storage area for binary data in Node.js, used for streams and file operations.

## C

**Cache** — A high-speed storage layer that stores frequently accessed data to reduce latency and database load.

**Cache-Aside (Lazy Loading)** — A caching pattern where the application checks the cache first, and loads from the database on cache miss.

**CAP Theorem** — States that a distributed system can provide at most two of: Consistency, Availability, and Partition tolerance.

**CI/CD** — Continuous Integration / Continuous Delivery (or Deployment). Automating build, test, and deployment processes.

**Circuit Breaker** — A pattern that stops making requests to a failing service, allowing it time to recover.

**Closure** — A function that retains access to variables from its enclosing scope even after the outer function has returned.

**Container** — A lightweight, standalone, executable package that includes everything needed to run a piece of software.

**CORS (Cross-Origin Resource Sharing)** — A security mechanism that controls which domains can access resources on a web server.

**CRUD** — Create, Read, Update, Delete. The four basic operations for data management.

**CSP (Content Security Policy)** — An HTTP header that controls which resources the browser is allowed to load, preventing XSS attacks.

**CSRF (Cross-Site Request Forgery)** — An attack that tricks users into submitting unintended requests to a web application they're authenticated with.

**CSS (Cascading Style Sheets)** — A style sheet language for describing the presentation of HTML documents.

**CTE (Common Table Expression)** — A temporary named result set in SQL defined using the WITH clause.

## D

**Dead Letter Queue (DLQ)** — A queue that stores messages that could not be processed successfully after multiple retries.

**Dependency Injection (DI)** — A design pattern where objects receive their dependencies from an external source rather than creating them internally.

**DNS (Domain Name System)** — The system that translates human-readable domain names (like google.com) into IP addresses.

**Docker** — A platform for building, shipping, and running applications in containers.

**Docker Compose** — A tool for defining and running multi-container Docker applications using a YAML configuration file.

**Dockerfile** — A text file containing instructions for building a Docker image.

**DOM (Document Object Model)** — A programming interface for web documents that represents the page structure as a tree of objects.

**DRY (Don't Repeat Yourself)** — A software principle aimed at reducing repetition of code and logic.

## E

**Event Loop** — The mechanism in Node.js that handles asynchronous operations by processing events and callbacks in a single thread.

**Event-Driven Architecture** — An architecture pattern where system behavior is determined by events (significant changes in state).

**Express.js** — A minimal and flexible Node.js web application framework providing routing, middleware, and HTTP handling.

## F

**Foreign Key** — A column (or set of columns) in a table that references the primary key of another table, establishing a relationship.

**Full-Text Search** — A technique for searching text content in a database, supporting relevance ranking and linguistic features.

## G

**GIN Index** — Generalized Inverted Index in PostgreSQL, optimized for composite values like arrays, JSONB, and full-text search.

**Git** — A distributed version control system for tracking changes in source code.

**GitHub Actions** — GitHub's CI/CD platform for automating build, test, and deployment workflows.

**GraphQL** — A query language for APIs that allows clients to request exactly the data they need.

**Guard** — In NestJS, a class that determines whether a request should be handled by a route handler (used for authentication/authorization).

## H

**Hash Index** — A database index using a hash table, optimized for equality comparisons.

**HATEOAS** — Hypermedia as the Engine of Application State. A REST constraint where responses include links to related resources.

**Health Check** — An endpoint that reports the operational status of an application and its dependencies.

**HTTP (HyperText Transfer Protocol)** — The foundation protocol for data communication on the web.

**HTTPS** — HTTP with TLS/SSL encryption for secure communication.

## I

**Idempotency** — The property where performing an operation multiple times produces the same result as performing it once.

**Index** — A database structure that improves the speed of data retrieval operations at the cost of additional storage and write overhead.

**Interceptor** — In NestJS, a class that can transform the response or add extra logic before/after route handler execution.

**ISR (Incremental Static Regeneration)** — A Next.js feature that allows static pages to be updated after build time.

## J

**JOIN** — A SQL operation that combines rows from two or more tables based on related columns.

**JSON (JavaScript Object Notation)** — A lightweight data interchange format that is easy for humans to read and machines to parse.

**JSONB** — PostgreSQL's binary JSON data type that supports indexing and efficient querying.

**JSX** — A syntax extension for JavaScript used in React that looks like HTML but compiles to function calls.

**JWT (JSON Web Token)** — A compact, URL-safe token format for securely transmitting claims between parties.

## K

**Kubernetes (K8s)** — An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.

## L

**Load Balancer** — A device or software that distributes incoming network traffic across multiple servers.

**LRU (Least Recently Used)** — A cache eviction policy that removes the least recently accessed items first.

## M

**Microservices** — An architectural style where an application is composed of small, independent services communicating over a network.

**Middleware** — Software that sits between the client request and the route handler, processing requests and responses in a pipeline.

**Migration** — A version-controlled change to a database schema, allowing incremental updates and rollbacks.

**MinIO** — An S3-compatible object storage server, used for storing files, images, and other binary data.

**MongoDB** — A document-oriented NoSQL database that stores data in flexible, JSON-like (BSON) documents.

**MVCC (Multi-Version Concurrency Control)** — PostgreSQL's mechanism for handling concurrent access without locking, using row versioning.

## N

**NestJS** — A progressive Node.js framework for building efficient, scalable server-side applications using TypeScript and dependency injection.

**Next.js** — A React framework for building full-stack web applications with server-side rendering, static generation, and API routes.

**Nginx** — A high-performance web server, reverse proxy, and load balancer.

**Node.js** — A JavaScript runtime built on Chrome's V8 engine for building server-side applications.

**Normalization** — The process of organizing database tables to reduce redundancy and improve data integrity.

## O

**OAuth 2.0** — An authorization framework that enables third-party applications to obtain limited access to a web service.

**ORM (Object-Relational Mapping)** — A technique that maps database tables to programming language objects (e.g., Prisma).

**OWASP** — Open Web Application Security Project. An organization focused on improving software security.

## P

**Pagination** — Dividing a large result set into smaller pages for efficient data transfer and display.

**Pipe** — In NestJS, a class that transforms or validates input data before it reaches a route handler.

**PostgreSQL** — An advanced open-source relational database system known for reliability, feature robustness, and performance.

**Presigned URL** — A URL with embedded authentication, granting temporary access to a private object in storage.

**Primary Key** — A unique identifier for each row in a database table.

**Prisma** — A modern TypeScript-first ORM for Node.js that provides type-safe database access.

**Promise** — A JavaScript object representing the eventual completion or failure of an asynchronous operation.

**Pub/Sub** — A messaging pattern where publishers send messages to a channel and subscribers receive them.

## R

**RBAC (Role-Based Access Control)** — An authorization model where access is determined by the user's assigned role.

**React** — A JavaScript library for building user interfaces using a component-based architecture.

**Redis** — An in-memory data structure store used as a database, cache, message broker, and queue.

**Replica** — A copy of a database that stays synchronized with the primary, used for read scaling and high availability.

**REST (Representational State Transfer)** — An architectural style for designing networked applications using HTTP methods and resource-oriented URLs.

**Reverse Proxy** — A server that sits between clients and backend servers, forwarding requests and providing load balancing, SSL termination, and caching.

## S

**Saga Pattern** — A pattern for managing distributed transactions through a sequence of local transactions with compensating actions.

**Server Component (React)** — A React component that renders on the server, reducing client-side JavaScript and enabling direct data access.

**Sharding** — Distributing data across multiple databases to handle large datasets and high throughput.

**Socket.IO** — A library enabling real-time, bidirectional communication between web clients and servers.

**SOLID** — Five design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.

**SQL (Structured Query Language)** — The standard language for managing and querying relational databases.

**SSG (Static Site Generation)** — Pre-rendering pages at build time for optimal performance and SEO.

**SSR (Server-Side Rendering)** — Rendering pages on the server for each request, providing fresh data and SEO benefits.

**Stream** — A sequence of data made available over time, used for processing large files or real-time data without loading everything into memory.

## T

**TanStack Query** — A data-fetching and state management library for React that handles caching, refetching, and synchronization.

**TCP (Transmission Control Protocol)** — A reliable, connection-oriented network protocol ensuring ordered data delivery.

**TLS (Transport Layer Security)** — A cryptographic protocol for secure communication over a network (successor to SSL).

**Transaction** — A sequence of database operations that either all succeed (commit) or all fail (rollback).

**TTL (Time To Live)** — The duration for which a cached value or record remains valid before expiring.

**TypeScript** — A typed superset of JavaScript that compiles to plain JavaScript, adding static type checking.

## V

**Virtual DOM** — React's in-memory representation of the real DOM, used for efficient UI updates through reconciliation.

**Volume** — Persistent storage in Docker that survives container restarts and can be shared between containers.

**VPS (Virtual Private Server)** — A virtualized server providing dedicated resources within a shared physical server.

## W

**WebSocket** — A protocol providing full-duplex communication channels over a single TCP connection.

**Worker Thread** — A Node.js mechanism for running CPU-intensive tasks in parallel without blocking the event loop.

## X

**XSS (Cross-Site Scripting)** — A security vulnerability where attackers inject malicious scripts into web pages viewed by other users.

## Z

**Zod** — A TypeScript-first schema validation library for runtime data validation and type inference.

**Zero-Downtime Deployment** — A deployment strategy that ensures the application remains available throughout the update process.

---

*This glossary covers the key terms used throughout the course. Each term is explained in depth within the relevant module.*
