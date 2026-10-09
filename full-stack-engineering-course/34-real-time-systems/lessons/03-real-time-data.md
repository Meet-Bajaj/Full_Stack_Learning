# Lesson 03: Real-Time Data & Dashboards

## Learning Objectives
By the end of this lesson, you will be able to:
- Design architecture for real-time live feeds and dashboards.
- Implement data aggregation and throttling strategies.
- Manage user presence and active connections efficiently.

---

## 1. Challenges of Real-Time Dashboards

When building dashboards (financial trading, server monitoring, live analytics), the backend is often receiving thousands of data points per second.

If you push every single data point to the web client via WebSockets or SSE:
1. **Network Saturation:** You waste massive bandwidth.
2. **Client Crash:** The browser's DOM cannot render 1,000 updates per second. The main thread will lock up, and the tab will crash.

### The Solution: Aggregation and Throttling
The server must act as a buffer. Instead of streaming raw firehose data, the server calculates rolling windows (e.g., Candlestick charts in finance) and pushes state updates on a fixed interval (e.g., every 500ms or 1s).

---

## 2. Implementing a Data Aggregator

Imagine a service receiving live trade executions from a stock exchange.

```javascript
// High-frequency internal data source (e.g., Kafka or Redis Pub/Sub)
const rawTradesEmitter = getHighFrequencyTradesStream();

// State buffer
let currentWindowData = {
  volume: 0,
  high: 0,
  low: Infinity,
  lastPrice: 0,
  tradeCount: 0
};

// 1. Ingest Data (Runs thousands of times per second)
rawTradesEmitter.on('trade', (trade) => {
  currentWindowData.volume += trade.amount;
  currentWindowData.tradeCount += 1;
  currentWindowData.lastPrice = trade.price;
  if (trade.price > currentWindowData.high) currentWindowData.high = trade.price;
  if (trade.price < currentWindowData.low) currentWindowData.low = trade.price;
});

// 2. Broadcast Data (Runs twice a second)
setInterval(() => {
  if (currentWindowData.tradeCount > 0) {
    // Push the aggregated snapshot to all connected clients
    io.to('dashboard_room').emit('dashboard_update', currentWindowData);
    
    // Reset buffer
    currentWindowData = { volume: 0, high: 0, low: Infinity, lastPrice: 0, tradeCount: 0 };
  }
}, 500);
```

---

## 3. Presence Systems (Who is Online?)

Dashboards and collaboration tools often show "Who is viewing this right now" or "Online Users".

### Naive Approach (Flawed)
- User connects -> Add to DB (`status: online`)
- User disconnects -> Update DB (`status: offline`)

*Why it fails:* If the server crashes, the disconnect event never fires. Users are stuck permanently "online" in the database.

### Robust Approach: Heartbeats & Redis Expiry
Instead of persistent DB flags, use an in-memory datastore with a Time-To-Live (TTL).

1. Client sends a "ping" or "heartbeat" every 10 seconds.
2. Server receives heartbeat and updates a Redis key with a 15-second expiration.
3. If the user closes the tab or loses connection, the heartbeat stops.
4. Redis automatically expires the key after 15 seconds.
5. The system knows the user is offline.

```javascript
// Server handling heartbeat
socket.on('heartbeat', async ({ userId }) => {
  // SET user:123:online "true" EX 15
  await redis.set(`user:${userId}:online`, 'true', {
    EX: 15 
  });
});

// API to check who is online
async function getOnlineUsers(userIds) {
  // In production, use MGET or a Redis SET
  const statuses = await Promise.all(
    userIds.map(id => redis.get(`user:${id}:online`))
  );
  return userIds.filter((id, index) => statuses[index] !== null);
}
```

---

## Summary
- Real-time dashboards require server-side buffering, throttling, and aggregation to protect the client browser.
- Presence systems should never rely on explicit "disconnect" events written to a persistent database.
- Use TTL (Time-To-Live) cache mechanisms like Redis to track online status robustly.
