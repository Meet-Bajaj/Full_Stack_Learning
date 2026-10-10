# Lesson 6: Containers in the Cloud

## Cloud Container Registries
Before deploying containers, you must store their images in a registry. AWS Elastic Container Registry (ECR) is the AWS equivalent of Docker Hub.

## Amazon ECS (Elastic Container Service)
ECS is a highly scalable, high-performance container orchestration service that supports Docker containers. It is AWS's proprietary alternative to Kubernetes, often simpler to set up for straightforward architectures.

## AWS Fargate
Fargate is a serverless compute engine for containers. When using ECS (or EKS) with Fargate, you don't need to provision or manage EC2 instances. You simply specify the CPU and memory required by your container, and AWS handles the underlying infrastructure.

## Typical Container Deployment Flow
1. Developer pushes code to GitHub.
2. CI/CD pipeline builds the Docker image.
3. Pipeline pushes the image to ECR.
4. Pipeline updates the ECS Task Definition with the new image tag.
5. ECS orchestrates rolling out the new containers behind the ALB.
