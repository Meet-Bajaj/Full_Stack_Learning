# Lesson 04: Permissions

## Learning Objectives
By the end of this lesson, you will be able to:
- Read and interpret Linux file permissions (rwx).
- Understand the Owner, Group, and Other hierarchy.
- Use `chmod` and `chown` to modify access rights.

---

## 1. The Permission Model

Linux is a multi-user system. Security is built into the filesystem. Every file and directory has:
1. An **Owner** (the user who created it).
2. A **Group** (a collection of users).
3. **Others** (everyone else on the system).

If you run `ls -l`, you see something like this:
`-rw-r--r-- 1 ubuntu www-data 1024 Jan 1 index.html`

Let's break down `-rw-r--r--`:
- Character 1: File type. `-` means file, `d` means directory.
- Characters 2-4 (`rw-`): Permissions for the **Owner** (ubuntu). Read, Write, no Execute.
- Characters 5-7 (`r--`): Permissions for the **Group** (www-data). Read only.
- Characters 8-10 (`r--`): Permissions for **Others**. Read only.

### What do R, W, X mean?
- **Read (r):** 
  - File: View contents (`cat`).
  - Directory: List contents (`ls`).
- **Write (w):** 
  - File: Modify contents.
  - Directory: Create/delete files inside it.
- **Execute (x):** 
  - File: Run it as a program/script (`./script.sh`).
  - Directory: Enter the directory (`cd`).

---

## 2. Changing Permissions (`chmod`)

`chmod` (Change Mode) alters permissions. There are two ways to use it: Symbolic and Numeric.

### Numeric Mode (Most Common)
Read = 4, Write = 2, Execute = 1.
You add the numbers together for each class (Owner, Group, Other).

- `7` = 4+2+1 = Read, Write, Execute
- `6` = 4+2+0 = Read, Write
- `5` = 4+0+1 = Read, Execute
- `4` = 4+0+0 = Read only

**Examples:**
- `chmod 755 script.sh`: Owner can do everything (7). Group and Others can read and execute (5). Standard for executable scripts.
- `chmod 644 config.txt`: Owner can read/write (6). Everyone else can only read (4). Standard for text files.
- `chmod 600 .ssh/id_rsa`: Owner can read/write (6). No one else can do anything (0). Standard for private SSH keys!

### Symbolic Mode
- `chmod +x script.sh`: Add execute permission for everyone.
- `chmod u+w file.txt`: Add write permission for the user/owner.
- `chmod go-r file.txt`: Remove read permission from group and others.

---

## 3. Changing Ownership (`chown`)

If Nginx (running as user `www-data`) needs to serve a file owned by `root`, it might get a "Permission Denied" error.

Change the owner and group using `chown owner:group filename`.

- `sudo chown www-data:www-data /var/www/html/index.html`: Changes both user and group to `www-data`.
- `sudo chown -R ubuntu:ubuntu /var/www/project`: Recursive change for a whole folder.

## Summary
- Permissions are split into User, Group, and Other.
- R=4, W=2, X=1.
- `chmod 755` and `chmod 644` are the most common file permissions you will use.
- Use `chown` to give appropriate ownership to web servers or daemon processes.
