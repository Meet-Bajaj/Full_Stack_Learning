# VPS MCQs

*Note: Representative sample covering all difficulty levels.*

## Beginner
**1. Why is it dangerous to run applications as the `root` user?**
A) It uses more RAM.
B) If the application is compromised, the attacker has complete control over the entire server.
C) The `root` user cannot run Node.js.
D) It slows down network speed.
**Answer:** B

**2. What does an A Record do in DNS?**
A) Maps a domain to an IPv6 address.
B) Maps a domain name to an IPv4 address.
C) Handles email routing.
D) Provides an alias for another domain name.
**Answer:** B

## Intermediate
**3. You want to securely copy a file from your local machine to your VPS. Which command should you use?**
A) `scp ./file.txt user@server_ip:/path/to/destination`
B) `ssh copy ./file.txt user@server_ip`
C) `ftp ./file.txt`
D) `mv ./file.txt user@server_ip:/path/to/destination`
**Answer:** A

**4. What is the purpose of UFW?**
A) To manage Docker containers.
B) To act as a web server.
C) To manage network firewall rules.
D) To monitor server memory.
**Answer:** C

## Advanced
**5. You need to back up a PostgreSQL database daily and send it to S3 without manual intervention. What is the best approach?**
A) Write a cron job that executes `pg_dump` and then uses the AWS CLI to upload the dump.
B) Take a daily DigitalOcean Snapshot.
C) Copy the `/var/lib/postgresql/data` directory while the database is running.
D) Use `pg_restore` daily.
**Answer:** A
**Explanation:** Direct file copying while the DB is running (C) causes corruption. Snapshots (B) aren't granular. A cron job with `pg_dump` is the correct approach.

## Production
**6. Your VPS disk is suddenly 100% full, causing the database to crash. What is the most likely culprit and solution?**
A) RAM is full; add a swap file.
B) Docker containers have accumulated huge logs; run `docker system prune` and configure log rotation.
C) A DDoS attack; install a WAF.
D) Nginx configuration is wrong; run `systemctl restart nginx`.
**Answer:** B
