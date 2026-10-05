# Lesson 13: Security

## 1. Introduction and Learning Objectives
Database security happens at multiple layers: Network, Authentication, Authorization, and Row-Level.

**Learning Objectives:**
- Understand `pg_hba.conf`.
- Manage Roles and Permissions (`GRANT`/`REVOKE`).
- Understand Row-Level Security (RLS).

---

## 2. Network and Authentication (pg_hba.conf)

The `pg_hba.conf` (Host-Based Authentication) file acts as the firewall for Postgres. It controls which IP addresses are allowed to connect, which users they can connect as, and which authentication method is required.

*Example pg_hba.conf line:*
`host    mydatabase    myuser    192.168.1.100/32    scram-sha-256`
*(Allows `myuser` to connect to `mydatabase` from IP `192.168.1.100` requiring a password).*

---

## 3. Roles and Permissions

Postgres uses the concept of "Roles" (which act as both users and groups).
Never use the superuser (`postgres`) for your application connection!

```sql
-- Create a read-only role
CREATE ROLE readonly_analyst WITH LOGIN PASSWORD 'securepass';

-- Grant access to a schema
GRANT USAGE ON SCHEMA public TO readonly_analyst;

-- Grant read access to tables
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly_analyst;
```

---

## 4. Row-Level Security (RLS)

Normally, if a user has `SELECT` permission on the `orders` table, they can see ALL orders.
Row-Level Security allows you to define policies so that a user can only see rows that belong to them. This is incredibly powerful for multi-tenant applications (like Supabase uses extensively).

```sql
-- Enable RLS on the table
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create a policy: Users can only see orders where user_id matches their current session role name
CREATE POLICY user_only_policy ON orders
    USING (user_id::text = current_user);
```

---

## 5. Summary & Checklist
**Summary:** Secure your Postgres instance by restricting IPs in `pg_hba.conf`, following the principle of least privilege with Role permissions, and utilizing Row-Level Security for complex multi-tenant data isolation.

**Completion Checklist:**
- [ ] I understand the purpose of `pg_hba.conf`.
- [ ] I can create a Role and `GRANT` permissions.
- [ ] I can conceptually explain Row-Level Security (RLS).
