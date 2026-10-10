# Lesson 5: Cloud Networking

## Virtual Private Cloud (VPC)
A VPC is your private, isolated section of the AWS cloud. You control the IP address range, subnets, route tables, and network gateways.

## Subnets
- **Public Subnet:** Has a route to the Internet Gateway (IGW). Resources here (like Load Balancers) can be accessed from the internet.
- **Private Subnet:** No direct route to the internet. Resources here (like Databases and Backend Servers) are secure.

## NAT Gateway
If a server in a private subnet needs to download an update from the internet, it sends traffic through a Network Address Translation (NAT) Gateway located in the public subnet.

## Security Groups
Stateful virtual firewalls attached to instances (e.g., EC2, RDS). You define rules (e.g., "Allow port 80 from anywhere", "Allow port 5432 only from the Backend Security Group").

## Load Balancers
- **Application Load Balancer (ALB):** Layer 7 (HTTP/HTTPS). Routes traffic based on path (`/api`) or host.
- **Network Load Balancer (NLB):** Layer 4 (TCP/UDP). Used for extreme performance and non-HTTP traffic.
