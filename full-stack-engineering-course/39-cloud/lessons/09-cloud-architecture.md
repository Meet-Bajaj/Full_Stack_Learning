# Lesson 9: Cloud Architecture Patterns

## The AWS Well-Architected Framework
A set of best practices for designing cloud systems, based on 6 pillars:
1. Operational Excellence
2. Security
3. Reliability
4. Performance Efficiency
5. Cost Optimization
6. Sustainability

## High Availability (HA) Pattern
Deploying resources across multiple Availability Zones.
- **Compute:** Auto Scaling Group spanning 3 AZs.
- **Database:** RDS Multi-AZ (primary in AZ A, synchronous standby in AZ B).
- **Network:** Application Load Balancer distributing traffic across the AZs.

## Disaster Recovery (DR) Patterns
- **Backup & Restore:** Cheapest, slowest recovery (RTO). Data is backed up to S3.
- **Pilot Light:** Minimal core services (DB) run in a secondary region. Compute is only scaled up during a disaster.
- **Warm Standby:** A scaled-down version of a fully functional environment is always running.
- **Multi-Site Active/Active:** Zero downtime. Traffic is actively served from multiple regions simultaneously. Most expensive.
