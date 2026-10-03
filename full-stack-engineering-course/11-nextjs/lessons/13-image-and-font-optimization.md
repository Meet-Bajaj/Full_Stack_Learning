# 13 - Image and Font Optimization

## Learning Objectives
- Use `next/image` to optimize images automatically.
- Use `next/font` to load fonts with zero layout shift.
- Understand Core Web Vitals related to media.

## The Image Component (`next/image`)
Images account for a huge portion of web payload. The native `<img>` tag is unoptimized. Next.js provides `<Image />` which automatically:
- Serves images in modern formats (WebP/AVIF).
- Resizes images based on the device.
- Lazy loads images by default.
- Prevents Cumulative Layout Shift (CLS).

```tsx
import Image from 'next/image'
import profilePic from '../public/me.png' // Static import

export default function Page() {
  return (
    <Image
      src={profilePic}
      alt="Picture of the author"
      placeholder="blur" // Automatically shows a blurred version while loading
    />
  )
}
```

For remote images, you must define the width/height and configure the remote domain in `next.config.mjs`.

## The Font Component (`next/font`)
Custom fonts often cause flashes of unstyled text (FOUT) or layout shifts. `next/font` downloads font files at build time and self-hosts them, eliminating external network requests.

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

// Configure the font
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

## Completion Checklist
- [ ] Replace an `<img>` tag with `<Image>`.
- [ ] Configure a remote image domain in `next.config.mjs`.
- [ ] Implement a custom Google Font using `next/font/google`.
