# Lesson 7: Kubernetes Fundamentals

## What is Kubernetes (K8s)?
Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Amazon EKS is the managed AWS service for Kubernetes.

## Core Concepts
- **Pods:** The smallest deployable unit. Usually contains one container (e.g., a Node.js app), but can contain multiple tightly coupled containers.
- **Deployments:** Manages the desired state of Pods. If you want 3 replicas of your app, the Deployment ensures 3 are always running. Handles rolling updates.
- **Services:** Provides a stable IP address and DNS name to a set of Pods. Since Pod IP addresses change when they are recreated, Services ensure other components can always find them.
- **Namespaces:** Virtual clusters within a single physical cluster, useful for isolating environments (dev, staging, prod) or teams.

## When to Use Kubernetes
Kubernetes is incredibly powerful but highly complex. Use it when:
- You have a large microservices architecture.
- You need extreme scalability and self-healing.
- You want to remain cloud-agnostic (not locked into AWS ECS).
Avoid it for simple monolithic applications or small teams without dedicated DevOps resources.
