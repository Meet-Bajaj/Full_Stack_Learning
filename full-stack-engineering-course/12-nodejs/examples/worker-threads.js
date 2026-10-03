/**
 * Worker Threads Demo
 * Offloads CPU-intensive tasks to a background thread to avoid blocking the event loop.
 */
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  // Main Thread
  console.log('Main thread started.');
  
  // Create a new worker
  const worker = new Worker(__filename, {
    workerData: { num: 40 } // Pass data to worker (calculate 40th Fibonacci)
  });
  
  worker.on('message', (result) => {
    console.log(`Main thread received result: ${result}`);
  });
  
  worker.on('error', (err) => console.error('Worker error:', err));
  worker.on('exit', (code) => {
    if (code !== 0) console.error(`Worker stopped with exit code ${code}`);
  });
  
  console.log('Main thread is free to do other work while the worker computes...');
  
} else {
  // Worker Thread
  const calculateFibonacci = (n) => {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  };
  
  const result = calculateFibonacci(workerData.num);
  
  // Send result back to main thread
  parentPort.postMessage(result);
}
