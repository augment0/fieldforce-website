# Fieldforce — getfieldforce.com

The production marketing site. **Next.js 15 + React 19 + Tailwind v4 + Motion + GSAP + Lenis.**
Dark-default, restraint-by-default, calibrated against tryprofound.com / Linear / Supabase.

```
fieldforce-site/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # nav + footer + Lenis provider
│   ├── page.tsx                  # homepage (composes sections)
│   ├── globals.css               # tokens via Tailwind v4 @theme
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── motion/                   # Reveal, Parallax, CountUp, LenisProvider, …
│   ├── ui/                       # Button, Eyebrow, Tabs (Radix-based)
│   ├── layout/                   # Nav, Footer, SkipLink
│   ├── illustrations/            # Constellation, agent vizzes, use-case art
│   └── sections/                 # Hero, Manifesto, TrustBar, Platform, Agents, …
├── lib/
│   ├── utils.ts                  # cn() + format helpers
│   └── motion.ts                 # shared variants & easings
├── docs/ARCHITECTURE.md          # decisions and rationale
├── public/
└── …configs (tsconfig, postcss, biome, next)
```

## Quick start

```bash
pnpm install         # or npm i / yarn / bun
pnpm dev             # next dev with Turbopack — http://localhost:3000
pnpm build           # production build
pnpm typecheck       # tsc --noEmit
pnpm lint            # biome check
pnpm format          # biome format --write
```

**Requires Node 20.10+** and a package manager. We recommend `pnpm`.

## What's working in v0.1

- **Homepage** — fully composed from section components, with all motion patterns wired
- **Nav + Footer** — sticky glass nav, mobile sheet, footer with status pill
- **Animation stack** — Lenis smooth scroll, Motion (Framer) for declarative work, GSAP/ScrollTrigger registered and ready for orchestrated sequences
- **Design tokens** — defined once in `app/globals.css` via Tailwind v4 `@theme`. Change one line, ripple everywhere.

## What's intentionally not here yet

| Page | Template to use | Notes |
|---|---|---|
| `/platform` | `Section` + `ProductCard` | Reuses `Platform` section's product card and primitive cards |
| `/platform/agents` | `Tabs` + `agent-vizzes` | Six sub-pages: `dispatch`, `forecast`, `evidence`, `reconcile`, `permit`, `copilot` |
| `/solutions/[vertical]` | `Section` + `UseCases` | Three: `telecom`, `ev-energy`, `iot` |
| `/customers` + `/customers/[slug]` | MDX content collections | Add Velite next |
| `/pricing`, `/trust`, `/changelog`, `/docs`, `/blog`, `/company/*` | various | See `docs/ARCHITECTURE.md` |

Each maps to one of the four template families in the design direction doc.

## Where to start when extending

1. **Adding a new page** — drop a new `app/{route}/page.tsx`. Compose existing section components from `components/sections/`. Use `<Reveal>` for entry animation.
2. **Adding a new component** — co-locate the file by domain: motion → `components/motion/`, UI primitive → `components/ui/`, illustration → `components/illustrations/`.
3. **Adding a new agent** — extend the `data` map in `components/sections/agents.tsx` and the corresponding `Viz*` component in `components/illustrations/agent-vizzes.tsx`.
4. **Adding/changing tokens** — edit the `@theme` block in `app/globals.css`. Tailwind utilities pick up the new value automatically (`bg-[var(--color-accent)]`, `text-[var(--color-text)]`, etc.).
5. **Adding a complex scroll moment** — use GSAP/ScrollTrigger. The provider is wired (`LenisProvider` ticks both Lenis and ScrollTrigger). See `docs/ARCHITECTURE.md` for an example pattern.

## Performance budget

Lighthouse target: **≥ 95** across the board on a Vercel deploy.

- Total client JS on `/` should stay **< 150 KB gzipped**.
- LCP < 1.8s on mobile, FCP < 1.0s.
- CLS < 0.05 (Geist via `next/font` prevents font-flash).
- Hero constellation generation should run in < 5ms (tested on M1).

If you add a new dependency, run `pnpm build` and check the page-size report. Reject anything that pushes us past the budget without a clear product reason.

## Accessibility

- WCAG 2.2 AA is the floor.
- Focus rings always visible (`:focus-visible` outline on accent).
- Tab navigation works on every interactive element.
- All decorative SVG marked `aria-hidden`.
- Reduced-motion respected at the system level (`useReducedMotion` in motion components, `prefers-reduced-motion` in CSS).

## Deploy

**Vercel** is the recommended target. Connect this repo, the `next build` step is auto-detected. Expect ~Lighthouse 100 out of the box.

Cloudflare Pages, Netlify, or self-hosted Node also work — just set Node to 20.10+.
