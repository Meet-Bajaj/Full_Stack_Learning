# Lesson 10: Rate Limiting

Use Redis to track API usage. A simple fixed-window counter:
1. Key: `rate:ip_address:minute`
2. `INCR` key
3. If 1st increment, set `EXPIRE 60`
4. If value > limit, reject.
