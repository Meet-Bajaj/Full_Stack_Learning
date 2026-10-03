# Lesson 09: CORS and Security

## 🎯 Learning Objectives
- Understand the Same-Origin Policy and Cross-Origin Resource Sharing (CORS).
- Configure the `cors` middleware properly.
- Secure Express apps using `helmet`.
- Prevent brute-force attacks using rate limiting.

## 🧠 Mental Model: The Bouncer at the Border
- **CORS**: Imagine a strict border guard. By default, browsers don't allow a website at `frontend.com` to fetch data from `api.backend.com` (Same-Origin Policy). The server has to explicitly give the browser a "Visa" (CORS headers) saying, "Yes, `frontend.com` is allowed to talk to me."
- **Helmet**: Putting a helmet on your app hides identifying information (like the "X-Powered-By: Express" header) and adds shields (security headers) to block common web attacks like XSS.
- **Rate Limiting**: A turnstile that only allows a person to enter 5 times per minute, stopping DDoS attacks and brute-force password guessing.

## 📖 Concept Explanation

### 1. CORS Setup
By default, browsers block cross-origin AJAX requests. To fix this, use the `cors` package.

```javascript
const cors = require('cors');

// ALLOW ALL (Dangerous in production, fine for public APIs)
app.use(cors());

// ALLOW SPECIFIC ORIGINS (Recommended)
const corsOptions = {
  origin: ['https://myfrontend.com', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // Required if you are sending cookies across domains!
};

app.use(cors(corsOptions));
```

### 2. Helmet
Helmet is a collection of middleware functions that set security-related HTTP headers. It's an absolute must for production.

```javascript
const helmet = require('helmet');

// Just call it at the top of your middleware stack
app.use(helmet());
```
*What it does:*
- Removes `X-Powered-By` (so hackers don't know you use Express).
- Sets `X-Content-Type-Options` to `nosniff`.
- Sets `Strict-Transport-Security` (forces HTTPS).

### 3. Rate Limiting
To prevent abuse, limit how many requests an IP can make in a given timeframe.

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window`
  message: 'Too many requests from this IP, please try again after 15 minutes',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
});

// Apply to all requests
app.use(limiter);

// Or apply to specific routes (like login to prevent brute force)
const loginLimiter = rateLimit({ windowMs: 60 * 1000, max: 5 });
app.post('/login', loginLimiter, loginController);
```

## ⚠️ Common Mistakes
1. **Misunderstanding CORS:** CORS protects the *browser*, not the server. Postman or cURL can always bypass CORS because they aren't browsers. CORS is not a replacement for authentication!
2. **Global Rate Limits behind a Proxy:** If your Express app is behind a reverse proxy (like Nginx, Heroku, or AWS ALB), `req.ip` will be the proxy's IP, not the user's. Everyone will share the same rate limit! 
   **Fix:** Add `app.set('trust proxy', 1);` before setting up rate limiting.

## 🏋️ Exercises
1. Setup an Express app that blocks all requests *except* those coming from `http://localhost:5173` (default Vite port).
2. Create a `/forgot-password` route that is heavily rate-limited (max 3 requests per hour per IP).

## ✅ Summary Checklist
- [ ] I understand what CORS is and how to configure whitelists.
- [ ] I always use Helmet in production apps.
- [ ] I know how to apply global and route-specific rate limits.
- [ ] I know how to handle proxies when rate-limiting.
