# Lesson 8: Terraform Fundamentals

## Infrastructure as Code (IaC)
Clicking through the AWS console is prone to human error and cannot be version-controlled. IaC tools allow you to define your infrastructure in code.

## What is Terraform?
Terraform (by HashiCorp) is the industry standard for IaC. It uses HashiCorp Configuration Language (HCL) and can manage infrastructure across multiple cloud providers (AWS, GCP, Azure).

## Core Concepts
- **Providers:** Plugins that interact with cloud APIs (e.g., `hashicorp/aws`).
- **Resources:** The actual infrastructure objects (e.g., `aws_instance`, `aws_db_instance`).
- **State File (`terraform.tfstate`):** Crucial concept. Terraform keeps track of what it has created in this file. When you run Terraform again, it compares your code to the state file to determine what needs to be changed.

## Basic Workflow
1. `terraform init`: Downloads providers and initializes the working directory.
2. `terraform plan`: Shows you what changes will be made *before* making them. (Like a dry-run).
3. `terraform apply`: Executes the changes against the cloud provider.
4. `terraform destroy`: Tears down all resources defined in the configuration.
