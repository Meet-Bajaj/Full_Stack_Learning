# Lesson 2: Distributed Tracing

## Learning Objectives
- Understand the concepts of Traces, Spans, and Trace Context.
- Analyze a distributed trace to identify bottlenecks.
- Understand the architecture of Jaeger.

## The Problem
In a monolithic application, debugging a slow request is straightforward: use a profiler to see which function took the most time.
In a microservices architecture, a request from the client might hit the API Gateway, which calls the Auth Service, which calls the User Service, which queries a Database. If the request is slow, a single profiler won't help because the work is distributed across multiple machines.

## Core Concepts

1. **Trace**: Represents a single user request as it flows through the entire system. A trace is made up of one or more spans.
2. **Span**: Represents a single unit of work within a trace. It has a start time, duration, name, and can have attached key-value pairs (tags). Spans can be nested (a parent span can have child spans).
3. **Trace Context**: The information (like `trace_id` and `span_id`) that must be passed along between services (usually via HTTP headers) to stitch the trace together.

## The Mental Model
Think of a Trace as an entire relay race. 
Think of a Span as a single runner carrying the baton for their leg of the race.
The Trace Context is the baton itself, passed from runner to runner, proving they are all part of the same race.

## Jaeger Architecture
Jaeger is an open-source end-to-end distributed tracing system.
1. **Instrumented Application**: Your code, using OpenTelemetry libraries, generates spans.
2. **Jaeger Agent**: A daemon running locally on the same host/pod as your app. It receives spans over UDP and batches them.
3. **Jaeger Collector**: Receives batches from agents, validates them, and stores them.
4. **Storage**: A database (often Elasticsearch or Cassandra) to store the traces.
5. **Jaeger UI**: The web interface where you search and visualize the waterfall graphs.

## Summary
Distributed tracing is the only scalable way to understand request latency and complex service interactions in a microservices environment.

## Completion Checklist
- [ ] I can define a Trace and a Span.
- [ ] I understand how trace context is passed between services.
- [ ] I can explain the basic architecture of Jaeger.
