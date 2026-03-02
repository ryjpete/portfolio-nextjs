# Grateful Dev — Portfolio app

My personal portfolio site built with Next.js and TypeScript.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19+**
- **TypeScript**
- **CSS Modules**
- **Tailwind CSS** (base/reset utility)
- **ESLint, TurboPack, Vercel**

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

## Project Structure

```
src/
  app/           # Pages, layouts, and API routes
  components/    # Reusable UI components
  config/        # Site-wide configuration (navigation, etc.)
  context/       # React context providers
  hooks/         # Custom React hooks
  providers/     # App-level providers
  styles/        # Global styles, color tokens, typography
  utils/         # Utility functions
public/
  assets/        # Static images and media
```

## Features

- Animated background that changes per route
- Scroll-shrinking header logo
- Project modal with URL routing
- Resume page pulling from a static API route

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` automatically trigger a new deployment.