# Lesson 05: Users and Groups

## Learning Objectives
By the end of this lesson, you will be able to:
- Understand the Linux multi-user architecture.
- Create, modify, and delete users and groups.
- Manage root privileges securely using `sudo`.
- Understand the roles of `/etc/passwd` and `/etc/shadow`.

---

## 1. The Multi-User Philosophy

Linux was designed from the ground up to support multiple users logged in simultaneously over a network. Every process and file belongs to a specific user. 

### The `root` User
`root` is the ultimate administrator. It can bypass all file permissions and run any command.
**Best Practice:** Never log in directly as `root`. If you make a typo as `root` (e.g., `rm -rf /`), the system will blindly obey and destroy itself. Instead, log in as a standard user and use `sudo` (SuperUser DO) for specific administrative tasks.

---

## 2. Managing Users

- **Create a user:** `sudo useradd -m johndoe`
  - The `-m` flag tells Linux to create a home directory (`/home/johndoe`).
- **Set a password:** `sudo passwd johndoe`
- **Modify a user:** `sudo usermod -s /bin/zsh johndoe` (changes their default shell).
- **Delete a user:** `sudo userdel -r johndoe`
  - The `-r` flag removes their home directory.

### Where is user data stored?
- `/etc/passwd`: Contains user information (username, user ID, home directory, shell). *It does NOT contain passwords anymore.*
- `/etc/shadow`: Contains the heavily hashed passwords. Only `root` can read this file.

---

## 3. Managing Groups

Groups allow you to assign permissions to multiple users at once.

- **Create a group:** `sudo groupadd developers`
- **Add a user to a group:** `sudo usermod -aG developers johndoe`
  - **CRITICAL:** Always use `-aG` (append group). If you only use `-G`, the user will be removed from all other groups they belong to!
- **View a user's groups:** `groups johndoe`

---

## 4. The `sudo` Command

`sudo` allows permitted users to execute a command as `root`. 
To grant a user `sudo` privileges on Ubuntu/Debian, you add them to the `sudo` group. On CentOS/RedHat, it's the `wheel` group.

```bash
sudo usermod -aG sudo johndoe
```

### The `visudo` Command
The rules governing who can use `sudo` and what commands they can run without a password are defined in `/etc/sudoers`.
**Never edit `/etc/sudoers` directly with nano/vim.** Always use the command `sudo visudo`. It checks for syntax errors before saving. If you introduce a syntax error in the sudoers file, you might lock yourself out of admin privileges forever!

## Summary
- `root` is God. Do not use it directly.
- Use `useradd`, `usermod`, and `groupadd` to manage access.
- Always use `-aG` when adding users to a group.
- Grant admin rights by adding users to the `sudo` group.
