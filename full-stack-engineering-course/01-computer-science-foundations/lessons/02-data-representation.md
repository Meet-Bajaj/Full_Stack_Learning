# Lesson 02: Data Representation

## Learning Objectives
- Understand how computers use binary (base-2) to represent all data.
- Convert simple numbers between binary, decimal, and hexadecimal systems.
- Explain how text is represented using ASCII and Unicode (UTF-8).
- Understand how images and audio are converted to digital formats.

## Prerequisites
- Completion of Lesson 01 (How Computers Work).

## Concept Explanation
Deep down, computer hardware only understands two states: on and off (high voltage and low voltage). These are represented as **1** and **0**. A single 1 or 0 is called a **Bit** (Binary Digit).
- 8 Bits = 1 **Byte**
- A Byte can hold 256 different values (2^8).

### Number Systems
- **Decimal (Base-10)**: What humans use. Digits 0-9.
- **Binary (Base-2)**: What computers use. Digits 0-1.
- **Hexadecimal (Base-16)**: Used by programmers as shorthand for binary. Digits 0-9, A-F. (One hex digit represents exactly 4 bits).

### Representing Text
Since computers only know numbers, we need a mapping system to represent text.
- **ASCII**: Early standard. 7 bits per character. Can only represent English letters, numbers, and basic symbols (128 total). For example, capital 'A' is the number 65 (binary: `01000001`).
- **Unicode / UTF-8**: Modern standard. A flexible system that uses 1 to 4 bytes per character, allowing it to represent characters from all human languages, plus emojis! (🍔 = U+1F354).

### Representing Images and Audio
- **Images**: Made up of pixels (picture elements). Each pixel's color is defined by numbers representing Red, Green, and Blue (RGB). An 8-bit per channel RGB image uses 3 bytes per pixel.
- **Audio**: Sound waves are continuous (analog). Computers take "samples" of the sound wave thousands of times per second (e.g., 44,100 times for CDs) and record the amplitude as a number.

## WHY it exists
Understanding data representation is crucial when dealing with file sizes, network transfer speeds, character encoding bugs (like seeing weird `` characters on a website), and color codes in CSS (`#FFFFFF`).

## Mental Model & Real-World Analogy
**The Light Switch Analogy**
Imagine you want to send messages to your neighbor using a single lightbulb in your window.
- 1 bulb (1 bit) = 2 messages (On = "Yes", Off = "No")
- 2 bulbs (2 bits) = 4 messages (Off-Off, Off-On, On-Off, On-On)
- 8 bulbs (1 byte) = 256 possible messages! You can agree that "On-Off-On-Off-On-On-On-On" means "Send pizza". This is exactly how ASCII mapping works.

## Code Examples (CSS Hex Colors)
In web development, we often use hexadecimal to represent colors:
`#FF0000` -> Red is `FF` (255 in decimal, max value). Green is `00` (0). Blue is `00` (0).

## Common Mistakes
- **Confusing Bits and Bytes in Networking**: Internet speeds are usually advertised in Mega*bits* per second (Mbps), but file sizes are in Mega*bytes* (MB). 100 Mbps = 12.5 MB/s.
- **Assuming all characters are 1 byte**: In UTF-8, an English letter is 1 byte, but an emoji or a Chinese character might be 3 or 4 bytes. This affects string length calculations in programming!

## Exercises
1. Convert the binary number `1010` to decimal. (Hint: 8s place + 2s place).
2. Write down the RGB hex code for pure blue.
3. Why does an image that is 1920x1080 pixels with standard RGB color take up roughly 6 Megabytes of RAM uncompressed? (Calculate: 1920 * 1080 * 3 bytes).

## Summary
Everything in a computer—numbers, text, images, video—is eventually translated into zeros and ones. We use standard encodings like UTF-8 and RGB to interpret those numbers meaningfully.

## Completion Checklist
- [ ] I understand the difference between a bit and a byte.
- [ ] I can explain what UTF-8 is and why it replaced ASCII.
- [ ] I know how hexadecimal is used in web development (colors).
