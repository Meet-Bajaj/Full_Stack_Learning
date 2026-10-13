# Lesson 10: Advanced SEO

## Learning Objectives
- Implement dynamic metadata for Next.js routes.
- Generate structured data (JSON-LD) for rich snippets.
- Optimize Web Vitals for better search rankings.

## Why it Exists
Search Engines rely on metadata, speed, and structured information to index pages correctly. Without technical SEO, even the best applications will not receive organic traffic.

## Dynamic Metadata (Next.js App Router)
```tsx
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await fetchProduct(params.id);
 
  return {
    title: `${product.name} | Store`,
    description: product.description,
    openGraph: {
      images: [product.imageUrl],
    },
  };
}
```

## Structured Data (JSON-LD)
Helps Google display Rich Snippets (like star ratings and prices).
```tsx
export default function ProductPage({ product }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
  };

  return (
    <section>
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>{product.name}</h1>
    </section>
  );
}
```

## Checklist
- [ ] Add basic meta tags (Title, Description)
- [ ] Add OpenGraph (OG) tags for social media previews
- [ ] Implement JSON-LD for Products/Articles
