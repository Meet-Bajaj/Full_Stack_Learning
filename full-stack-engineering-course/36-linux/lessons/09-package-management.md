# Lesson 09: Package Management

## Learning Objectives
By the end of this lesson, you will be able to:
- Install, update, and remove software using Advanced Package Tool (APT).
- Manage Personal Package Archives (PPAs).
- Understand the difference between `apt` and `dpkg`.

---

## 1. What is a Package Manager?

Before App Stores existed, Linux had Package Managers. Instead of hunting the web for `.exe` files, you tell the package manager to fetch the software, resolve its dependencies, and install it securely from an official repository.

- **Debian/Ubuntu:** Uses `apt` (Advanced Package Tool).
- **CentOS/RedHat:** Uses `dnf` or `yum`.
- **Alpine (Docker):** Uses `apk`.

*This lesson focuses on Ubuntu's `apt`.*

---

## 2. Basic APT Commands

### Updating the Repository List
Before installing anything, you must sync your local index with the remote servers.
`sudo apt update`
*(Note: This does NOT install new software; it just updates the list of available versions).*

### Upgrading Installed Packages
To actually install the newer versions of your current software (Security patches):
`sudo apt upgrade`

### Installing Software
`sudo apt install nginx`

### Removing Software
- `sudo apt remove nginx` (Removes the software but keeps configuration files).
- `sudo apt purge nginx` (Completely removes the software and deletes configs).
- `sudo apt autoremove` (Cleans up orphaned dependencies that were installed for a package that has since been removed).

---

## 3. `apt` vs `dpkg`

`apt` downloads packages from the internet and handles dependencies automatically.

If someone gives you a raw `.deb` file (like a proprietary software installer), `apt` cannot install it directly. You must use `dpkg` (Debian Package).
`sudo dpkg -i application.deb`

If `dpkg` complains about missing dependencies, you run `sudo apt -f install` immediately afterward to fetch them.

---

## 4. Repositories and PPAs

Sometimes, the software in the official Ubuntu repositories is severely outdated (e.g., Node.js v12 when v20 is out).

To get modern software, you add third-party repositories or PPAs (Personal Package Archives).

Example: Installing modern Node.js via NodeSource PPA:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

## Summary
- Run `sudo apt update` before installing software.
- Run `sudo apt upgrade` regularly for security patches.
- Use PPAs when you need newer versions of software than the official repos provide.
