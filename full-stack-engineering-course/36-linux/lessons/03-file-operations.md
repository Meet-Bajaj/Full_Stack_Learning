# Lesson 03: File Operations

## Learning Objectives
By the end of this lesson, you will be able to:
- Create, move, copy, and delete files and directories.
- View and search inside text files quickly from the command line.
- Search for files across the system.

---

## 1. Creating and Modifying

- **`mkdir folder_name`**: Make a directory.
  - *Tip:* `mkdir -p nested/folder/path` creates parent directories if they don't exist.
- **`touch filename.txt`**: Creates an empty file (or updates the timestamp if it exists).
- **`cp source destination`**: Copy a file.
  - *Tip:* `cp -r folder_a folder_b` (Recursive: copies a folder and all its contents).
- **`mv source destination`**: Move a file. This is also how you rename files!
  - `mv old.txt new.txt` (Renames).
- **`rm filename`**: Remove (delete) a file. *Warning: There is no Recycle Bin in Linux.*
  - *Tip:* `rm -rf folder_name` (Recursive Force: deletes a folder and everything inside it without asking. Be very careful!).

---

## 2. Viewing File Contents

When you need to look at an error log, opening it in a text editor (like `nano` or `vim`) is slow. 

- **`cat file.txt`**: Concatenates and prints the entire file to the screen. Bad for large logs.
- **`less file.txt`**: Opens the file in a scrollable viewer. Press `q` to quit, `/` to search.
- **`head -n 20 file.txt`**: Shows the first 20 lines of a file.
- **`tail -n 20 file.txt`**: Shows the last 20 lines.
  - **`tail -f error.log`**: **(CRITICAL)** "Follows" the file. It prints the end of the file and stays open, updating live as new lines are added. Essential for debugging live server issues.

---

## 3. Searching for Data

### Searching for Files (`find`)
`find` searches the filesystem tree for files matching criteria.
- `find /var/www -name "*.html"` (Finds all HTML files in `/var/www`).

### Searching inside Files (`grep`)
`grep` searches text for matching patterns.
- `grep "Error" /var/log/syslog` (Prints all lines containing "Error").
- `grep -r "API_KEY" /var/www/project` (Recursively searches all files in the folder for the string).
- `grep -i "error" file.txt` (Case-insensitive search).

---

## 4. Piping `|`

One of the most powerful features of Linux is the Pipe `|`. It takes the output of the command on the left and passes it as the input to the command on the right.

- `ls -l /var/log | grep "nginx"` (Lists all files, but only shows lines containing "nginx").
- `cat app.log | grep "Exception" | wc -l` (`wc -l` counts lines. This translates to: "Count how many exceptions are in the log file").

## Summary
- Use `cp`, `mv`, `rm` for file management.
- Use `tail -f` to watch live logs.
- Use `grep` to find text within files, and combine commands using the `|` pipe.
