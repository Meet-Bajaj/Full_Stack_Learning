# Lesson 11: Distributed Locks

To ensure only one process performs an action across multiple servers, use Redis locking via `SETNX` (Set if Not eXists). The Redlock algorithm handles distributed consensus across multiple Redis nodes.
