# Lesson 11: Shell Scripting

## Learning Objectives
By the end of this lesson, you will be able to:
- Write basic Bash scripts to automate server tasks.
- Use variables, conditionals, and loops in Bash.
- Schedule recurring scripts using `cron`.

---

## 1. The Shebang and Execution

A shell script is just a text file containing CLI commands.
1. Create a file: `nano backup.sh`
2. The first line must be the **Shebang** `#!/bin/bash`. This tells the system which interpreter to use.

```bash
#!/bin/bash
echo "Starting backup process..."
tar -czf backup.tar.gz /var/www/html
echo "Backup complete!"
```

3. Make it executable: `chmod +x backup.sh`
4. Run it: `./backup.sh`

---

## 2. Variables and Arguments

### Variables
No spaces are allowed around the equals sign!
```bash
#!/bin/bash
DESTINATION="/tmp/backups"
DATE=$(date +%Y-%m-%d)
FILENAME="backup-$DATE.tar.gz"

echo "Saving to $DESTINATION/$FILENAME"
```

### Arguments
Scripts can accept arguments passed via the CLI (e.g., `./greet.sh Alice`).
- `$1` is the first argument, `$2` is the second, etc.
- `$0` is the name of the script itself.

```bash
#!/bin/bash
echo "Hello, $1!"
```

---

## 3. Conditionals (If Statements)

Bash syntax for conditions is notoriously strict with spaces. You must have spaces inside the `[ ]` brackets.

```bash
#!/bin/bash
FILE="/var/www/index.html"

if [ -f "$FILE" ]; then
    echo "$FILE exists."
else
    echo "$FILE does not exist."
fi
```
*Common flags: `-f` (is file), `-d` (is directory), `-z` (is string empty).*

---

## 4. Scheduling Tasks with Cron

To run scripts automatically (e.g., a DB backup every night at 2 AM), use the `cron` daemon.

Edit the crontab: `crontab -e`

**Cron Syntax (5 asterisks):**
`Minute Hour DayOfMonth Month DayOfWeek command`

Examples:
- `0 2 * * * /home/ubuntu/backup.sh` (Runs at 2:00 AM every day)
- `*/5 * * * * /usr/bin/node /var/www/script.js` (Runs every 5 minutes)

## Summary
- Bash scripts automate repetitive CLI tasks.
- Variables cannot have spaces around the `=`.
- `cron` is the standard Linux tool for scheduling recurring tasks.
