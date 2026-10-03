# Lesson 04: Request & Response Objects

## 🎯 Learning Objectives
- Deeply understand the `req` (Request) object and its key properties.
- Deeply understand the `res` (Response) object and its methods for sending data.
- Learn about Content Negotiation.

## 🧠 Mental Model: The Order Slip and The Serving Tray
- **`req` (Request)** is the **Order Slip** the waiter hands to the kitchen. It has the table number (`IP address`), the requested dish (`URL`), dietary restrictions (`Headers`), and the payment/voucher (`Cookies`/`Body`).
- **`res` (Response)** is the **Serving Tray**. The kitchen places the cooked food on it (`res.send`), adds napkins/cutlery (`Headers`), and sets the status flag to green (Success) or red (Failure) (`res.status`).

## 📖 Concept Explanation

### The Request Object (`req`)
The `req` object represents the HTTP request and has properties for the query string, parameters, body, headers, etc.

#### Key Properties:
- `req.body`: Contains key-value pairs of data submitted in the request body (requires `express.json()` or `express.urlencoded()` middleware).
- `req.params`: Route parameters (e.g., `/:id`).
- `req.query`: Query string parameters (e.g., `?search=hello`).
- `req.headers`: HTTP headers sent by the client.
- `req.ip`: The remote IP address of the client.
- `req.cookies`: Cookies sent by the client (requires `cookie-parser` middleware).
- `req.method` & `req.path`: The HTTP method and the URL path.

```javascript
app.post('/profile/:id', (req, res) => {
  console.log('ID:', req.params.id);
  console.log('Body:', req.body);
  console.log('Auth Header:', req.headers['authorization']);
  res.send('Profile updated');
});
```

### The Response Object (`res`)
The `res` object is used to send the HTTP response back to the client.

#### Key Methods:
- `res.send()`: Sends the HTTP response (can be a string, Buffer, or object).
- `res.json()`: Sends a JSON response. Automatically sets the `Content-Type` header to `application/json`.
- `res.status(code)`: Sets the HTTP status code (can be chained: `res.status(404).json({ error: 'Not found' })`).
- `res.redirect([status,] path)`: Redirects the client to a different URL.
- `res.cookie(name, value, [options])`: Sets a cookie on the client's browser.
- `res.clearCookie(name, [options])`: Clears a cookie.
- `res.sendFile(path)`: Transfers a file at the given absolute path.

```javascript
app.get('/download', (req, res) => {
  // Chain status and json
  res.status(200).cookie('session_id', '12345', { httpOnly: true }).json({ 
    success: true,
    message: 'Data fetched successfully'
  });
});
```

### Content Negotiation
Sometimes an endpoint can return HTML to a browser but JSON to a mobile app. You can use `req.accepts()` or `res.format()` to handle this.
```javascript
app.get('/data', (req, res) => {
  res.format({
    'text/plain': () => res.send('hey'),
    'text/html': () => res.send('<p>hey</p>'),
    'application/json': () => res.send({ message: 'hey' }),
    default: () => res.status(406).send('Not Acceptable')
  });
});
```

## ⚠️ Common Mistakes
- **Forgetting Body Parsers:** Accessing `req.body` will yield `undefined` if you forgot to include `app.use(express.json())`.
- **Double Responses:** Calling `res.json()` and then trying to call `res.send()` again later in the same function will cause an "ERR_HTTP_HEADERS_SENT" crash. ALWAYS `return res.json(...)` if it's inside an `if` block.

## 🏋️ Exercises
1. Write an endpoint that extracts an authentication token from `req.headers` and echoes it back in a JSON response.
2. Write an endpoint that sets a secure cookie named `theme` with the value `dark`, and returns a `201 Created` status.

## ✅ Summary Checklist
- [ ] I can confidently extract data from `req.body`, `req.params`, and `req.query`.
- [ ] I understand the difference between `res.send()` and `res.json()`.
- [ ] I know how to chain HTTP status codes with the response payload.
