# Lesson 7: Profiling

## Learning Objectives
- Profile frontend code using Chrome DevTools.
- Profile Node.js using Chrome Inspector.
- Read Flame Graphs.

## Chrome DevTools (Performance Tab)
Record a session and analyze the timeline. Look for:
- Long Tasks (blocking the main thread for > 50ms).
- Forced Synchronous Layouts (layout thrashing).

## Node.js Profiling
Run your node app with `--inspect` to attach Chrome DevTools to your backend. You can take Heap Snapshots to find memory leaks, or record CPU profiles to find slow functions.

## Flame Graphs
Visual representation of the call stack. The x-axis shows CPU time spent, the y-axis shows the stack depth. Look for wide blocks!
