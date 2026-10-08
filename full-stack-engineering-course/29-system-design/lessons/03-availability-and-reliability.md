# Lesson 3: Availability and Reliability

## 1. Learning Objectives
- Define availability and calculate uptime percentages (the "nines").
- Identify single points of failure (SPOF).
- Design redundancy and failover mechanisms.

## 2. Availability (Uptime)
Availability is the percentage of time a system is operational. It is usually measured in "nines".

| Nines | Availability % | Downtime per year | Downtime per month |
|-------|----------------|-------------------|--------------------|
| 2     | 99%            | 3.65 days         | 7.31 hours         |
| 3     | 99.9%          | 8.77 hours        | 43.83 minutes      |
| 4     | 99.99%         | 52.6 minutes      | 4.38 minutes       |
| 5     | 99.999%        | 5.26 minutes      | 26.3 seconds       |

### Mental Model
Availability is like a restaurant. If it's closed during posted hours, it's unavailable. Reliability is whether the food is cooked correctly when you order it. A system can be available but unreliable (returning errors or bad data).

## 3. Single Points of Failure (SPOF)
A SPOF is a part of a system that, if it fails, will stop the entire system from working.
- **Example:** A single load balancer in front of 100 servers. If the load balancer dies, the 100 servers are useless.

## 4. Redundancy and Failover
To eliminate SPOFs, you introduce **redundancy** (having multiple copies or backups).
- **Active-Passive Redundancy:** A primary server handles traffic. A standby server sits idle. If primary fails, a heartbeat monitor triggers failover to the standby.
- **Active-Active Redundancy:** Both servers handle traffic simultaneously. If one fails, the other takes the full load.

## 5. Best Practices & Production Considerations
- Implement automated health checks.
- Plan for catastrophic failures (e.g., entire data center goes down). Distribute across Multi-AZ (Availability Zones) in AWS.
- Implement rate limiting to prevent DDoS attacks from bringing down availability.

## 6. Summary and Checklist
- [ ] Understand the "nines" of availability.
- [ ] Identify SPOFs in a given architecture diagram.
- [ ] Differentiate between active-passive and active-active setups.
