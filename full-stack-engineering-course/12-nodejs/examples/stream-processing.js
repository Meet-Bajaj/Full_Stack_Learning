/**
 * Stream Processing Demo
 * Reads a large file, transforms the data (uppercase), and writes to another file.
 */
const fs = require('fs');
const { Transform } = require('stream');

// Create a custom transform stream
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

// To test this, create a dummy input.txt file first
// fs.writeFileSync('input.txt', 'hello world\nthis is a stream test');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

console.log('Starting stream processing...');

// Pipeline: Read -> Transform -> Write
readStream
  .pipe(upperCaseTransform)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('Stream processing completed successfully.');
  })
  .on('error', (err) => {
    console.error('An error occurred:', err);
  });
