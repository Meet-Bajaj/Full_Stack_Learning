# Lesson 7: Zero-Downtime Deployment

## The Problem with Basic Deployments
When you restart a server or a Docker container, there is a window of a few seconds (or minutes) where your application is unavailable to users. This is unacceptable for high-traffic production sites.

## Blue-Green Deployment
1. You have a "Blue" environment running v1 (live).
2. You deploy v2 to an identical "Green" environment (idle).
3. Once v2 is fully running and passes health checks, you update the load balancer/Nginx to route all traffic to the "Green" environment.
4. "Blue" is spun down.
Result: Zero downtime.

## Rolling Updates
Used heavily in Kubernetes and Docker Swarm. Instead of replacing everything at once, instances are updated one by one. If you have 5 containers, one is updated while the other 4 serve traffic.

## Graceful Shutdowns
Before an application is killed, it needs to:
1. Stop accepting new requests.
2. Finish processing active requests.
3. Close database connections cleanly.
In Node.js, you listen for `SIGINT` and `SIGTERM` signals to handle this process.
