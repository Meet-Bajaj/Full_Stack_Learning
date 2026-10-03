# 17 - Performance

## Learning Objectives
- Measure Core Web Vitals.
- Implement code splitting and lazy loading.
- Understand the Edge Runtime.

## Core Web Vitals (CWV)
Google uses these metrics for search ranking:
- **LCP (Largest Contentful Paint):** Loading performance. Next.js `<Image priority />` helps here.
- **FID/INP (Interaction to Next Paint):** Interactivity. Keep JavaScript bundles small.
- **CLS (Cumulative Layout Shift):** Visual stability. `next/image` and `next/font` prevent CLS.

## Code Splitting and Lazy Loading
Next.js automatically code-splits per route. However, you can also lazy-load specific Client Components to reduce the initial bundle size using `next/dynamic`.

```tsx
import dynamic from 'next/dynamic'

// The HeavyChart component will not be included in the initial JS bundle
const HeavyChart = dynamic(() => import('../components/HeavyChart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false, // Optional: Disable SSR for this component entirely
})

export default function Page() {
  return <HeavyChart />
}
```

## Bundle Analysis
To analyze what is taking up space in your client bundle, install `@next/bundle-analyzer`.

```bash
npm i @next/bundle-analyzer
```
Configure `next.config.js` and run `ANALYZE=true npm run build` to generate an interactive treemap of your bundle.

## Edge Runtime
By default, Next.js API Routes and Server Components run on the standard Node.js runtime. You can opt into the **Edge Runtime** (based on V8 isolates, very fast cold starts) for specific routes if you don't need native Node APIs.

```tsx
export const runtime = 'edge'; // 'nodejs' is the default
```

## Completion Checklist
- [ ] Analyze the production bundle of a Next.js app.
- [ ] Lazy load a heavy component using `next/dynamic`.
- [ ] Optimize an image causing poor LCP using the `priority` prop.
