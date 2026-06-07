# Orbit — AI Course Explorer & Learning Dashboard

A personalised AI learning dashboard built as an internship application project for Pexcera.

**Stack:** React 18, TypeScript, Tailwind CSS, Framer Motion, Vite

---

## Screens

### Course Explorer
Browse and filter AI courses by track and level. Demonstrates skeleton loading states, error states with retry, responsive grid layout, and real filter logic with a custom `useCourses` hook.

### Learning Path Visualizer
Track-based roadmap with three node states: completed, in-progress, and locked. Framer Motion staggered entrance animations and animated progress bars.

### Learner Dashboard
Progress overview with animated SVG rings, streak stats, and the current active course. Page transitions via Framer Motion `AnimatePresence`.

---

## Technical decisions

- **Strict TypeScript** — zero `any`, every component and hook is fully typed
- **Skeleton screens** — 1.5s simulated fetch delay with matching skeleton layout
- **Error states** — explicit error UI with retry, not a blank screen
- **Mobile-first** — tested at 375px, no horizontal scroll on any screen
- **Flat design** — no gradients, consistent color system via Tailwind
- **Performance** — LCP under 2.5s, CLS under 0.1 (Lighthouse)

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Build & deploy

```bash
# Verify no TypeScript errors
npx tsc --noEmit

# Build for production
npm run build

# Deploy to Vercel (requires Vercel CLI)
vercel --prod
```
