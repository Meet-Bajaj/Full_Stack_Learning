# Lesson 7: Backups and Disaster Recovery

## The Importance of Backups
Hardware fails. Humans make mistakes. You *must* have backups of your application data (database) and any user-uploaded files.

## Database Backups
For PostgreSQL, use `pg_dump`.

```bash
# Backup
pg_dump -U postgres -F c my_database > my_database_backup.dump

# Restore
pg_restore -U postgres -d my_database -1 my_database_backup.dump
```

## Automated Backups with Cron
Create a bash script to dump the database and sync it to off-site storage (like AWS S3 or a separate backup server).

```bash
#!/bin/bash
DATE=$(date +%Y-%m-%d)
pg_dump -U postgres my_db > /backups/db_$DATE.sql
aws s3 cp /backups/db_$DATE.sql s3://my-backup-bucket/
```

Schedule it with cron (`crontab -e`):
```cron
# Run every day at 2 AM
0 2 * * * /path/to/backup.sh
```

## VPS Snapshots
Most providers offer full server snapshots. These are exact images of the server disk at a point in time. They are great for recovering from a botched OS upgrade, but they are *not* a substitute for granular database backups. Snapshots often require shutting down the server for a few minutes.
