# Lesson 11: Backups and Recovery

## 1. Introduction and Learning Objectives
"A database is only as good as its backups." Knowing how to write queries is useless if you lose all user data in a crash.

**Learning Objectives:**
- Use `pg_dump` and `pg_restore` for logical backups.
- Conceptually understand Continuous Archiving and PITR (Point-in-Time Recovery).

---

## 2. Logical Backups (pg_dump)

`pg_dump` extracts a PostgreSQL database into a script file or archive file. It's called a "logical" backup because it generates the SQL commands (`CREATE TABLE`, `INSERT`) needed to recreate the database.

**Creating a backup:**
```bash
# Dump as a custom format file (compressed, best for restoring)
pg_dump -U username -Fc -d mydatabase > backup.dump

# Dump as plain SQL script
pg_dump -U username -d mydatabase > backup.sql
```

**Restoring a backup:**
```bash
pg_restore -U username -d my_new_database backup.dump
```

---

## 3. Physical Backups and PITR

`pg_dump` is a snapshot of the database at a specific moment. If you back up at midnight, and the server crashes at 11:59 PM the next day, you lose 24 hours of data.

**Point-in-Time Recovery (PITR)** solves this.
Postgres records every single transaction in the WAL (Write-Ahead Log). 
1. You take a physical base backup (a copy of the actual binary files on disk) once a week.
2. You configure Postgres to archive the WAL files continuously (e.g., to an S3 bucket).
3. **Disaster Strikes:** You restore the base backup, then replay the WAL files exactly up to the millisecond before the crash. 

*(Tools like `pgBackRest` or `WAL-G` are industry standards for managing PITR).*

---

## 4. Summary & Checklist
**Summary:** Use `pg_dump` for migrating data, creating staging environments, or backing up small databases. For production enterprise databases, implement physical backups with WAL archiving (PITR) to guarantee zero data loss.

**Completion Checklist:**
- [ ] I know how to use `pg_dump`.
- [ ] I know the difference between a logical backup and a physical backup.
- [ ] I understand what Point-in-Time Recovery (PITR) and the WAL are.
