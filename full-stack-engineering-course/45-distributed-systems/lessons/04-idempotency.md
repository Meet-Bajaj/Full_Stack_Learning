# Lesson 4: Idempotency

## Learning Objectives
- Define idempotency in the context of APIs and distributed systems.
- Understand why retries make idempotency mandatory.
- Implement idempotency using Idempotency Keys.

## What is Idempotency?
An operation is idempotent if executing it multiple times has the same effect as executing it exactly once.

- **Idempotent**: `x = 5` (Running it 10 times still results in `x = 5`).
- **Not Idempotent**: `x = x + 5` (Running it 10 times results in `x + 50`).

In HTTP:
- `GET`, `PUT`, `DELETE` are defined as idempotent.
- `POST` is not idempotent (submitting a form twice usually creates two records).

## The Retry Problem
Imagine a payment API: `POST /api/charge`.
1. Client sends request to charge $100.
2. Server charges the credit card successfully.
3. Server attempts to send the HTTP 200 OK response back.
4. The network drops the response packet.
5. Client gets a timeout. Client assumes the charge failed.
6. Client retries. Server charges the card *again*. The user is billed $200.

Because networks are unreliable, clients *must* retry. Therefore, your APIs *must* be safe to retry.

## Idempotency Keys
To solve this, the client generates a unique ID (UUID) for the operation, called an Idempotency Key, and sends it in the header:
`Idempotency-Key: 1234-abcd`

**Server Logic:**
1. Check the database: Have we seen `1234-abcd` before?
2. If YES: Look up the saved response from the previous attempt and return it immediately (do not charge the card again).
3. If NO: Process the charge, save the response to the DB linked to `1234-abcd`, and return the response to the client.

Stripe popularized this pattern for payment APIs.

## Summary
Idempotency is the cornerstone of reliable distributed systems. By designing endpoints that can be safely retried, you eliminate a massive category of distributed state bugs.

## Completion Checklist
- [ ] I can define what makes an operation idempotent.
- [ ] I understand how network timeouts cause duplicate operations.
- [ ] I know how to implement an Idempotency Key.
