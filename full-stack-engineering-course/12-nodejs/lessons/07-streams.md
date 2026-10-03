# Lesson 7: Streams

## Why Streams?
Imagine trying to read a 5GB video file on a server with 1GB of RAM. If you use `fs.readFile()`, Node tries to load the entire 5GB file into RAM. The server will crash with an `Out of Memory` error.

**Streams** solve this by breaking the data into small chunks (buffers). You process a chunk, send it out, and garbage collect it before loading the next chunk. 

## Types of Streams
1. **Readable**: Streams from which data can be read (e.g., `fs.createReadStream`, HTTP request).
2. **Writable**: Streams to which data can be written (e.g., `fs.createWriteStream`, HTTP response).
3. **Duplex**: Streams that are both Readable and Writable (e.g., TCP sockets).
4. **Transform**: Duplex streams that modify the data as it is written and read (e.g., `zlib.createGzip`).

## Piping
The easiest way to consume streams is using `pipe()`. It connects a Readable stream to a Writable stream.

```javascript
const fs = require('fs');

const readable = fs.createReadStream('input.txt');
const writable = fs.createWriteStream('output.txt');

// Read from input.txt and write directly to output.txt chunk by chunk
readable.pipe(writable);
```

### Modern Piping: `stream/promises`
Using `.pipe()` doesn't automatically handle errors on both ends easily. The modern approach is `pipeline`.

```javascript
const { pipeline } = require('stream/promises');
const fs = require('fs');
const zlib = require('zlib');

async function gzipFile() {
  await pipeline(
    fs.createReadStream('input.txt'),
    zlib.createGzip(),
    fs.createWriteStream('input.txt.gz')
  );
  console.log('Pipeline succeeded');
}
```

## Backpressure
If a Readable stream reads data faster than a Writable stream can write it (e.g., reading from a fast SSD and writing to a slow network connection), memory will fill up. This is called **Backpressure**. `pipe()` and `pipeline()` handle backpressure automatically by pausing the readable stream when the writable stream's internal buffer is full.

## Summary Checklist
- [ ] Understand the RAM benefits of streams.
- [ ] Know the 4 types of streams.
- [ ] Understand how to use `pipeline`.
- [ ] Understand what backpressure is.
