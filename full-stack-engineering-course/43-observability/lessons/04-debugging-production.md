# Lesson 4: Debugging in Production

## Learning Objectives
- Use Logs, Metrics, and Traces in conjunction to debug real-world incidents.
- Understand the basics of incident response.
- Explain the value of a blameless post-mortem culture.

## The Debugging Workflow
When an alert fires (e.g., "Checkout Error Rate > 5%"):
1. **Acknowledge**: Acknowledge the alert so others know you are looking at it.
2. **Metrics (Triage)**: Look at the Grafana dashboard. Is it a sudden spike? Are all servers affected, or just one pod? Is CPU/Memory also spiking?
3. **Traces (Locate)**: Open Jaeger. Look at the traces for the failing requests. Which specific microservice is taking too long or returning the error? (e.g., The trace shows the Auth Service is returning a 500).
4. **Logs (Diagnose)**: Open Kibana. Search for logs from the Auth Service during that exact minute, filtering by the specific `trace_id`. The log reveals: "Connection to Redis timed out".
5. **Mitigate**: Stop the bleeding. If Redis is down, can you fall back to a database? Can you restart the Redis node? Mitigation is about restoring service, not fixing the root cause.
6. **Resolve**: Fix the underlying code/infrastructure issue later.

## Incident Response
During a major outage (Severity 1):
- **Incident Commander (IC)**: The person in charge of coordinating the response. They do not debug; they manage the communication and the people debugging.
- **SME (Subject Matter Expert)**: The engineers actively looking at logs and code.
- **Communications Lead**: The person writing status updates for the public status page or internal stakeholders.

## Blameless Post-Mortems
After every incident, you write a document explaining what happened, why it happened, and how to prevent it.

**Crucial Rule**: It must be blameless. You do not say "Bob pushed a bad config." You say "The deployment pipeline allowed a malformed config to reach production without validation."
Assuming everyone did the best they could with the information they had at the time fosters a culture where engineers aren't afraid to report mistakes, which makes the system safer overall.

## Summary
Debugging production is a structured process of moving from high-level indicators (metrics) down to specific execution paths (traces) and finally to the exact line of failing code (logs), followed by a cultural process of learning from the failure.

## Completion Checklist
- [ ] I can describe a typical triage workflow using the three pillars.
- [ ] I understand the role of an Incident Commander.
- [ ] I know why post-mortems must be blameless.
