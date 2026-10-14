# Redis Cheat Sheet

## Core Data Types & Commands

### Strings (Key-Value)
Good for caching HTML, API responses, counters.
```bash
SET user:1 "John"
GET user:1
SETEX session:1 3600 "token" # Set with expiry (3600 seconds)
INCR page_views              # Atomic increment
MSET k1 "v1" k2 "v2"         # Set multiple
```

### Lists (Linked Lists)
Good for queues, recent activity streams.
```bash
LPUSH tasks "task1"          # Push to left (head)
RPUSH tasks "task2"          # Push to right (tail)
LPOP tasks                   # Pop from left
RPOP tasks                   # Pop from right
LRANGE tasks 0 -1            # Get all elements
```

### Sets (Unordered, Unique)
Good for tagging, unique visitors, followers.
```bash
SADD tags "web" "tech"       # Add to set
SMEMBERS tags                # Get all members
SISMEMBER tags "web"         # Check if exists (1 or 0)
SINTER set1 set2             # Intersection
```

### Hashes (Map/Object)
Good for storing user profiles, objects.
```bash
HSET user:100 name "Alice" age 30
HGET user:100 name
HGETALL user:100             # Get all keys and values
HDEL user:100 age            # Delete field
HINCRBY user:100 age 1       # Increment field
```

### Sorted Sets (Ordered by Score)
Good for leaderboards, rate limiters, priority queues.
```bash
ZADD leaderboard 100 "player1" 150 "player2"
ZRANGE leaderboard 0 -1      # Get all ascending
ZREVRANGE leaderboard 0 2    # Get top 3 descending
ZSCORE leaderboard "player1" # Get score
```

## Pub/Sub
Real-time messaging pattern (fire and forget).
```bash
# Terminal 1 (Subscriber)
SUBSCRIBE channel_name

# Terminal 2 (Publisher)
PUBLISH channel_name "Hello World"
```

## Key Management
```bash
DEL key1                     # Delete key
EXISTS key1                  # Check if exists
EXPIRE key1 60               # Set TTL to 60 seconds
TTL key1                     # Get remaining TTL (-1 if none, -2 if expired)
KEYS user:*                  # Find keys matching pattern (DO NOT USE IN PROD)
SCAN 0 MATCH user:*          # Safe way to iterate keys in production
```
