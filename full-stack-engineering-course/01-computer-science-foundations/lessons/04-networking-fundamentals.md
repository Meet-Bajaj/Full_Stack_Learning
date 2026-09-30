# Lesson 04: Networking Fundamentals

## Learning Objectives
- Understand the basic structure of the Internet.
- Explain IP Addresses and the Domain Name System (DNS).
- Describe the TCP/IP suite and the difference between TCP and UDP.
- Understand the Client-Server model.

## Prerequisites
- Basic understanding of how computers process data (Lessons 01-03).

## Concept Explanation
The Internet is simply a global network of interconnected computers. To make this massive system work, computers use standard rules called **protocols**.

### IP Addresses
Every device connected to the internet needs a unique address, called an IP (Internet Protocol) address. 
- IPv4 looks like: `192.168.1.1`
- Because we ran out of IPv4 addresses, we now use IPv6: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

### DNS (Domain Name System)
Humans are bad at remembering IP addresses. DNS acts like the phonebook of the internet. It translates human-readable domain names (like `google.com`) into IP addresses (like `142.250.190.46`).

### TCP/IP
Data is sent across the internet in small chunks called **packets**.
- **IP (Internet Protocol)**: Handles the routing of packets from the source to the destination.
- **TCP (Transmission Control Protocol)**: Sits on top of IP. It ensures that all packets arrive successfully and in the correct order. If a packet is lost, TCP requests it again. Reliable, but a bit slower.
- **UDP (User Datagram Protocol)**: Alternative to TCP. It just sends the packets and doesn't care if they arrive. Faster, but unreliable. (Used for live video streaming or gaming).

### The Client-Server Model
- **Client**: The device requesting information (your laptop's web browser, your phone's Instagram app).
- **Server**: A powerful computer running constantly, waiting to serve data upon request.

## WHY it exists
Networking protocols exist so that devices built by different manufacturers, running different OSs, in different countries, can all communicate flawlessly.

## Mental Model & Real-World Analogy
**The Postal Service Analogy**
- **IP Address**: Your home's mailing address.
- **DNS**: The contact list in your phone (maps names to addresses).
- **Packets**: If you want to mail a 1000-page book, but the post office only accepts 1-page letters, you have to split the book into 1000 numbered envelopes (packets).
- **TCP**: Sending each envelope via certified mail. You demand a receipt for every envelope. If one goes missing, you resend it. The receiver puts them in order based on the numbers.
- **UDP**: Throwing all 1000 envelopes in the mailbox and hoping for the best.

## Common Mistakes
- **Confusing the Internet with the World Wide Web**: The Internet is the physical network of cables and computers (TCP/IP). The Web is just one service that runs *on top* of the internet (HTTP). Email and online gaming run on the internet, but are not the Web.
- **Thinking DNS changes happen instantly**: DNS records are cached. When you change a domain's IP address, it can take hours to propagate globally.

## Exercises
1. Open your terminal/command prompt and ping a website: `ping google.com`. What IP address responded?
2. Why is video conferencing usually built on UDP instead of TCP?

## Summary
The internet routes data using IP addresses, translating names via DNS, and ensuring reliable data transfer using TCP. The client-server model dictates how our personal devices request data from centralized machines.

## Completion Checklist
- [ ] I can explain what an IP address is.
- [ ] I understand the purpose of DNS.
- [ ] I can describe the difference between TCP and UDP.
- [ ] I understand the Client-Server relationship.
