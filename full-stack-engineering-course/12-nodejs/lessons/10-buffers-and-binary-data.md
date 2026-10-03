# Lesson 10: Buffers and Binary Data

JavaScript originally had no mechanism for reading or manipulating streams of binary data. Node.js introduced the `Buffer` class to handle raw binary data outside the V8 heap.

## What is a Buffer?
A Buffer is a chunk of memory allocated outside of the V8 JavaScript engine. It is a fixed-length sequence of bytes. Think of it as an array of integers ranging from 0 to 255.

Buffers are returned anytime you interact with streams or the file system without specifying an encoding (like `'utf8'`).

## Creating Buffers

```javascript
// 1. Allocate a buffer of 10 bytes (filled with zeros)
const buf1 = Buffer.alloc(10);

// 2. Create a buffer from a string
const buf2 = Buffer.from('Hello World');

// 3. Create a buffer from an array of bytes
const buf3 = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]); // 'Hello'
```

## Encodings
By default, Node uses UTF-8 encoding when converting between Buffers and strings.

```javascript
const buf = Buffer.from('Hello');
console.log(buf); // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString('utf8')); // Hello
console.log(buf.toString('hex')); // 48656c6c6f
console.log(buf.toString('base64')); // SGVsbG8=
```

Base64 encoding is commonly used to embed images directly in HTML/CSS or to pass binary data inside JSON payloads.

## Working with Buffers
Since a Buffer is array-like, you can iterate over it and access indices.
```javascript
const buf = Buffer.from('Hi');
console.log(buf[0]); // 72 (ASCII for 'H')
console.log(buf[1]); // 105 (ASCII for 'i')
```

**Note:** The `Buffer` class is globally available in Node.js, so you do not need to `require('buffer')`.

## Summary Checklist
- [ ] Understand what a Buffer represents.
- [ ] Convert strings to Buffers and vice-versa.
- [ ] Convert binary data to Base64.
