# Grateful Dev — Portfolio app

My personal portfolio site built with Next.js and TypeScript.

## Tech Stack

- **Next.js 16.1.4** (App Router)
- **React 19.2.3**
- **TypeScript 5**
- **CSS Modules**
- **Tailwind CSS 4** (base/reset via PostCSS)
- **Framer Motion 12** — animations
- **HeroIcons 2** — icon library
- **ESLint 9** with Next.js config
- **Storybook 10** (`nextjs-vite`) — component development
- **Vitest 4 + Playwright** — Storybook visual/interaction tests
- **Chromatic** — visual regression testing
- **Vercel** — deployment

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

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Home — animated title cycling through role names, links to Resume and Projects |
| `/resume` | Resume index with links to Experience, Skills, Education |
| `/resume/experience` | Work experience list with detail modal (parallel route) |
| `/resume/skills` | Skills section |
| `/resume/education` | Education section |
| `/projects` | All projects; filter by Web Apps, Mobile Apps, Design |
| `/projects/[slug]` | Dynamic project detail page |
| `/skills` | Skills page grouped by proficiency level |
| `/about` | About page (in progress) |

## Features

- Scroll-driven header: logo scales down as the user scrolls, using `useTransform` from Framer Motion
- Back navigation in header with animated context-aware button
- `ScrollContext` shares a single `MotionValue<number>` across the component tree without re-renders
- `ProjectContext` tracks the active project for modal/detail routing
- Resume experience detail rendered as a parallel route (`@modal`)
- Projects filterable by category with `all`, `web-apps`, `mobile-apps`, `design`
- Internal API routes serve all data (projects, resume, skills, about)
- Hubble feed proxy route — forwards ESA RSS XML for nebulae imagery
- Component-driven development with Storybook; a11y and docs addons enabled
- Storybook visual & interaction testing via Vitest + Playwright + Chromatic

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` automatically trigger a new deployment.