# 02 - Project Setup

## Learning Objectives
- Initialize a Next.js project.
- Understand the directory structure.
- Configure TypeScript and Tailwind CSS.

## Creating a Project
To create a new Next.js app, run:
```bash
npx create-next-app@latest
```
You will be prompted to select options. Recommended setup: TypeScript (Yes), ESLint (Yes), Tailwind CSS (Yes), `src/` directory (Optional, No for this course), App Router (Yes).

## Directory Structure
- `app/`: Contains your application's routing and pages.
- `public/`: Static assets like images and fonts.
- `next.config.mjs`: Configuration file for Next.js.
- `tailwind.config.ts`: Tailwind configuration.

## TypeScript Integration
Next.js provides excellent TypeScript support. When you run `next dev` for the first time, Next.js will automatically configure `tsconfig.json` and create a `next-env.d.ts` file.
