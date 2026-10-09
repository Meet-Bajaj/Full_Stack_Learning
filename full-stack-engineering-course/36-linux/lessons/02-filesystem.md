# Lesson 02: The Linux Filesystem

## Learning Objectives
By the end of this lesson, you will be able to:
- Navigate the Linux directory hierarchy.
- Understand absolute vs. relative paths.
- Know the purpose of critical system directories (`/etc`, `/var`, `/home`).

---

## 1. The Directory Tree (Everything is a File)

Windows uses drive letters (`C:\`, `D:\`). 
Linux uses a single unified directory tree starting at the **Root**, denoted by a single forward slash `/`.

Even hardware devices (hard drives, USBs) are mounted as folders within this single tree. In Linux, the philosophy is "Everything is a file."

### Absolute vs Relative Paths
- **Absolute Path:** Always starts from the root `/`. E.g., `/var/www/html/index.html`. It doesn't matter where you currently are; this path is universally correct.
- **Relative Path:** Starts from your current location. If you are in `/var/www/`, the relative path to the file is `html/index.html` or `./html/index.html`. 
  - `.` means "current directory"
  - `..` means "parent directory" (go up one level).

---

## 2. Navigating the CLI

- `pwd` (Print Working Directory): Tells you exactly where you are.
- `ls` (List): Shows the files and folders in the current directory.
  - `ls -l`: Long format (shows permissions, owner, size, date).
  - `ls -a`: Shows hidden files (files starting with a dot, like `.env`).
- `cd` (Change Directory): Move to a different folder.
  - `cd /var/log` (Absolute move)
  - `cd ..` (Move up one folder)
  - `cd ~` (Move to your home directory)
  - `cd -` (Jump back to the previous directory you were in)

---

## 3. Important System Directories

You don't need to memorize everything, but you must know these:

| Directory | Purpose | What an Engineer does here |
|-----------|---------|----------------------------|
| `/` | The Root. | Never put your project files here directly. |
| `/home` | Contains folders for regular users. E.g., `/home/meet/`. | Where you might clone git repos for personal testing. |
| `/etc` | System configuration files. | Where you edit Nginx configs (`/etc/nginx`) or SSH configs. |
| `/var` | Variable data (files that grow in size). | Logs (`/var/log/nginx/error.log`) and web files (`/var/www`). |
| `/tmp` | Temporary files. Erased on reboot. | Dumping temporary DB backups before downloading them. |
| `/usr/bin` | Where installed executable binaries (commands) live. | Where `node`, `npm`, and `git` executables are stored. |
| `/root` | The home directory for the ultimate superuser (root). | Usually restricted. |

## Summary
- The filesystem is a single tree starting at `/`.
- Use `pwd`, `cd`, and `ls` to navigate.
- Know where to look for configs (`/etc`) and logs (`/var/log`).
