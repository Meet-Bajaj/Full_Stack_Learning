# Lesson 7: Adapter Pattern

## 🎯 Learning Objectives
- Adapt incompatible interfaces.
- Wrap third-party libraries to protect the domain.
- Implement database and storage adapters.

## 🧠 Mental Model & Real-World Analogy
**Analogy:** A travel power adapter. You travel from the US (flat pins) to Europe (round pins). Your laptop plug doesn't fit the wall socket. You plug your laptop into the adapter, and the adapter into the wall. 

**Mental Model:** A structural pattern that allows objects with incompatible interfaces to collaborate.

## ❓ WHY does it exist?
When you integrate third-party libraries (e.g., AWS S3 SDK, Stripe SDK), you don't want their specific data structures polluting your business logic. The Adapter wraps the external library and exposes an interface your application expects.

## 🏗️ Implementation

```typescript
// 1. The Target Interface (What our app expects)
interface StorageAdapter {
  upload(fileName: string, data: Buffer): Promise<string>;
}

// 2. The Adaptee (Incompatible 3rd Party Library)
class AWSS3Bucket {
  putObject(params: { Bucket: string, Key: string, Body: Buffer }): Promise<void> {
    // AWS specifics...
    return Promise.resolve();
  }
}

// 3. The Adapter
class S3StorageAdapter implements StorageAdapter {
  constructor(private s3: AWSS3Bucket) {}

  async upload(fileName: string, data: Buffer): Promise<string> {
    await this.s3.putObject({
      Bucket: 'my-bucket',
      Key: fileName,
      Body: data
    });
    return `https://s3.aws.com/my-bucket/${fileName}`;
  }
}
```

## ⚠️ Common Mistakes
- **Leaking external types:** If your Adapter interface uses an AWS-specific class in its method signature, it fails its purpose. Keep the interface pure.

## 🚀 Exercises
1. Wrap a third-party caching library (like Redis) in a generic `CacheAdapter`.

## ✅ Summary and Checklist
- [ ] Isolate third-party dependencies.
- [ ] Map incompatible interfaces.
