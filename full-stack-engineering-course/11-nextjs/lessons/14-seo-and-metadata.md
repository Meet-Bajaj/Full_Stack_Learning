# 14 - SEO and Metadata

## Learning Objectives
- Implement the Metadata API for SEO.
- Generate dynamic metadata based on fetched data.
- Create sitemaps and robots.txt.

## Static Metadata
You can define static metadata by exporting a `metadata` object from a `layout.tsx` or `page.tsx`.

```tsx
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Store',
  description: 'Buy awesome products',
  openGraph: {
    title: 'My Store',
    images: ['/og-image.png'],
  },
}
```

## Dynamic Metadata
For dynamic routes (e.g., a product page), export a `generateMetadata` function.

```tsx
import type { Metadata } from 'next'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch data
  const product = await fetch(`https://api.example.com/products/${params.id}`).then(r => r.json())
 
  return {
    title: product.title,
    description: product.description,
  }
}
```
*Note:* Next.js automatically dedupes `fetch` requests, so you can fetch the product in `generateMetadata` and again in your component without making two network requests!

## Sitemaps and Robots
Next.js allows you to generate these dynamically using `sitemap.ts` and `robots.ts` files in the `app` directory.

```ts
// app/sitemap.ts
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://acme.com',
      lastModified: new Date(),
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
    },
  ]
}
```

## Completion Checklist
- [ ] Add static metadata to the root layout.
- [ ] Implement `generateMetadata` for a dynamic route.
- [ ] Generate a `sitemap.ts` file.
