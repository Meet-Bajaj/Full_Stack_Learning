# Lesson 2: AWS Fundamentals

## AWS Overview
Amazon Web Services (AWS) is the largest cloud provider. It offers over 200 fully featured services from data centers globally.

## Core Services Glossary
- **Compute:** EC2 (Virtual Machines), Lambda (Serverless), ECS/EKS (Containers).
- **Storage:** S3 (Object), EBS (Block - attached to EC2), EFS (File).
- **Database:** RDS (Relational), DynamoDB (NoSQL), ElastiCache (Redis/Memcached).
- **Networking:** VPC (Virtual Private Cloud), Route 53 (DNS), CloudFront (CDN), ALB/NLB (Load Balancers).
- **Security:** IAM (Identity and Access Management).

## Regions and Availability Zones (AZs)
- **Region:** A physical location around the world where AWS clusters data centers (e.g., `us-east-1` N. Virginia).
- **Availability Zone (AZ):** One or more discrete data centers with redundant power, networking, and connectivity in an AWS Region (e.g., `us-east-1a`, `us-east-1b`). Deploying across multiple AZs ensures high availability.

## IAM (Identity and Access Management)
Never use your AWS Root Account for daily tasks. Create an IAM User with precise permissions (Principle of Least Privilege).
