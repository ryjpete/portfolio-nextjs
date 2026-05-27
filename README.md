# Grateful Dev — Portfolio app

My personal portfolio site built with Next.js and TypeScript.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **CSS Modules**
- **Tailwind CSS 4** (base/reset utility)
- **Framer Motion** — animations
- **ESLint, Vercel**
- **Storybook 10+** (nextjs-vite) — component development & testing
- **Vitest + Playwright** — Storybook visual/interaction tests
- **HeroIcons** — icon library

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Storybook & Testing Scripts

```bash
npm run storybook        # Start Storybook at localhost:6006
npm run build-storybook  # Build Storybook for deployment
npx vitest               # Run Storybook visual tests via Vitest + Playwright
```

## Project Structure

```
src/
  app/
    api/          # Backend API routes
    (profile)/    # Profile layout group with sub-routes
      about/
      projects/
      resume/
    (project)/    # Project detail layout group
      projects/[slug]/
    home/
    skills/
    layout.tsx    # Root layout with providers
    page.tsx
  components/    # Reusable UI components
  config/        # Site-wide configuration (navigation, etc.)
  context/       # React context providers (ProjectContext, ScrollContext)
  hooks/         # Custom React hooks
  providers/     # App-level providers
  styles/        # Global styles, color tokens, typography
  utils/
public/
  assets/        # Static images and media
.storybook/      # Storybook configuration & preview settings
```

## Features

- Scroll-shrinking header logo with smooth animations
- Project modal with URL routing and ProjectContext integration
- Resume page pulling from static API route
- Component-driven development with Storybook integration
- Storybook visual & interaction testing via Vitest + Playwright

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` automatically trigger a new deployment.