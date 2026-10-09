# Lesson 06: NestJS WebSockets

## Learning Objectives
By the end of this lesson, you will be able to:
- Integrate WebSockets into a NestJS application.
- Use `@WebSocketGateway` and `@SubscribeMessage` decorators.
- Apply standard NestJS concepts (Guards, Pipes, Interceptors) to WebSocket events.

---

## 1. Introduction to NestJS Gateways

In NestJS, WebSockets are handled by **Gateways**. A gateway is simply a class annotated with `@WebSocketGateway()`. By default, NestJS abstracts the underlying library, allowing you to use either `socket.io` (default) or `ws`.

### Installation
```bash
npm i @nestjs/websockets @nestjs/platform-socket.io
```

---

## 2. Creating a Gateway

Let's create a basic Chat Gateway.

```typescript
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'chat'
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  // Gives us direct access to the Socket.IO server instance
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('sendMessage')
  handleMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ): void {
    console.log(`Message from ${client.id}: ${data}`);
    
    // Broadcast to all clients
    this.server.emit('newMessage', data);
  }
}
```
*Note: Ensure you provide `ChatGateway` in your module's `providers` array!*

---

## 3. Acknowledgements and Returning Data

Instead of manually emitting a response, NestJS allows you to simply `return` data from a handler. This automatically utilizes Socket.IO's acknowledgement callback mechanism.

```typescript
@SubscribeMessage('createRoom')
handleCreateRoom(@MessageBody() roomName: string): any {
  // Do database stuff...
  
  // This is sent back to the client as an acknowledgement response
  return { event: 'roomCreated', data: { id: 123, name: roomName } };
}
```

---

## 4. Applying Guards and Pipes

The beauty of NestJS is that you can reuse your existing validation pipes and authentication guards for WebSockets!

### Using Validation Pipes
You can use the built-in `ValidationPipe` to validate incoming WebSocket message bodies using DTOs and `class-validator`.

```typescript
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { IsString, IsNotEmpty } from 'class-validator';

class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  text: string;
}

@UsePipes(new ValidationPipe())
@SubscribeMessage('chat')
handleChat(@MessageBody() data: CreateMessageDto) {
  // If data fails validation, NestJS automatically intercepts it.
  // Warning: By default, exceptions in WS kill the connection or swallow errors unless handled with WsException filters.
}
```

### Authentication Guards
You can protect WebSocket endpoints using Guards.

```typescript
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';

@Injectable()
export class WsAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const client = context.switchToWs().getClient();
    const token = client.handshake.auth.token;
    
    if (token === 'secret-jwt') {
      client.user = { id: 1, name: 'Admin' };
      return true;
    }
    
    throw new WsException('Unauthorized');
  }
}

// Applying the guard
@UseGuards(WsAuthGuard)
@SubscribeMessage('secureData')
handleSecureData() {
  return "This is protected";
}
```

---

## Summary
- NestJS Gateways encapsulate Socket.IO/ws logic in OOP classes.
- Decorators like `@SubscribeMessage` map events to methods.
- You can leverage existing NestJS ecosystem features (Pipes, Guards) to validate and secure WebSocket channels seamlessly.
