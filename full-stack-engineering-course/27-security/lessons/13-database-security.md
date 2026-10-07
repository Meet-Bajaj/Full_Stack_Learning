# Lesson 13: Database Security

## Learning Objectives
- Enforce network access control.
- Implement encryption at rest.
- Secure database connections.

## Access Control
Your database should NEVER be exposed to the public internet. It should reside in a private subnet, accessible only by your application servers (or via a Bastion host/VPN for admin access).

## Encryption
- **At Rest**: Use AWS KMS or native DB encryption so physical disk theft yields no data.
- **In Transit**: Always enforce TLS/SSL for database connections.

## Principle of Least Privilege
The database user your application uses should only have DML permissions (SELECT, INSERT, UPDATE, DELETE). It should not be a superuser or have schema modification (DDL) permissions.
