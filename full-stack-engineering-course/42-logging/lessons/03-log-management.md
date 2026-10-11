# Lesson 3: Log Management and Aggregation

## Learning Objectives
- Understand the need for centralized log management in distributed systems.
- Explain the components of the ELK stack (Elasticsearch, Logstash, Kibana).
- Implement basic log rotation and retention policies.

## Why Centralized Log Management?
If you have one server, you can SSH into it and `tail -f /var/log/app.log`. 
If you have 50 microservices running across 200 Kubernetes pods, SSHing to check logs is impossible. Furthermore, containers are ephemeral—when a container dies, its local files (including logs) are destroyed.

Centralized log management systems aggregate logs from all instances into a single, searchable database.

## The ELK Stack
The ELK Stack (now often called the Elastic Stack) is the most famous open-source log management solution.

1. **E - Elasticsearch**: A powerful, distributed search and analytics engine. It stores the logs and makes them quickly searchable.
2. **L - Logstash**: A server-side data processing pipeline. It ingests logs from multiple sources simultaneously, transforms them (e.g., parsing a plain text log into JSON), and then sends them to Elasticsearch. (Fluentd or Filebeat are often used instead of Logstash today).
3. **K - Kibana**: A data visualization dashboard. It allows you to search Elasticsearch and build charts and graphs based on your logs.

## Log Rotation and Retention
Logs consume disk space quickly. 
- **Log Rotation**: The process of closing an active log file and opening a new one based on size (e.g., every 100MB) or time (e.g., daily). Old files are often compressed (gzipped).
- **Log Retention**: Deciding how long to keep logs. You might keep raw logs for 14 days, aggregated logs for 30 days, and archive older logs to cheap, slow storage (like AWS S3) for compliance (e.g., 7 years).

## Best Practices
- Never let your application write directly to a log management database over the network (it blocks the event loop).
- Applications should write to `stdout` / `stderr`.
- A separate daemon process (like a sidecar container running Fluentbit) should read `stdout` and forward the logs to the aggregator asynchronously.

## Summary
Centralized logging transforms log data from scattered text files into a powerful, searchable database, essential for maintaining large-scale distributed systems.

## Completion Checklist
- [ ] I can explain the problem that centralized logging solves.
- [ ] I know what the ELK stack stands for.
- [ ] I understand why applications should log to stdout instead of direct network calls.
