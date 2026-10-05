# Lesson 6: Sorted Sets

Similar to Sets, but every string is associated with a floating-point score. Used for leaderboards.
- `ZADD leaderboard 100 "alice" 200 "bob"`
- `ZRANGE leaderboard 0 -1 WITHSCORES`
