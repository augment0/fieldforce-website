# Architecture & decisions

This doc explains *why* the site is built the way it is. Read it once before
making structural changes.

---

## 1. The stack, and why each piece

### Next.js 15 (App Router) + React 19

- **Server Components by default.** Marketing pages should be HTML-shaped on
  arrival; only client components ship JS. Every section in `components/sections/`
  is currently `"use client"` because it animates, but the rest of the site
  (future MDX pages, listings, docs) will ship as RSCs and stay tiny.
- **The talent pool is bigger.** Every senior frontend engineer can read a
  Next.js codebase. Astro and SvelteKit are excellent but not the default.
- **The platform is integrated.** `next/font`, `next/image`, OG image generation,
  edge runtime — all reduce build complexity.

### Tailwind v4

- **Tokens live in `@theme`** inside `app/globals.css` — no `tailwind.config.ts`
  for design tokens. One source of truth.
- **CSS variables underneath.** Tokens are `--color-*` variables, so anything
  outside Tailwind (raw CSS, inline styles) can reference the same values.
- **Container queries native.** When we add layouts that adapt to *parent*
  width (e.g. a card that resizes inside a sidebar), `@container` works without
  config.

### Motion (formerly Framer Motion) + GSAP + Lenis

Three tools, three jobs:

1. **Motion** — declarative, React-idiomatic. Use for: entry animation,
   layout animation, scroll-linked transforms via `useScroll/useTransform`,
   gestures. **First reach.**
2. **GSAP + ScrollTrigger** — imperative, frame-perfect. Use for: pinned
   sections, multi-layer scroll choreography, complex timelines. **Reach
   second**, only when Motion can't express the moment cleanly.
3. **Lenis** — smooth-scroll baseline. Used by Linear / Stripe / Frame.io.
   Two lines to add, makes the whole page feel calmer.

`LenisProvider` ties Lenis to GSAP's ticker so ScrollTrigger and Lenis share
one frame loop. Without this, scroll-driven GSAP gets out of sync with the
smoothed scroll position. **Don't remove this wiring** unless you're also
removing Lenis.

### Radix UI

Headless, accessible primitives. We use it for `Tabs`. We will use it for
`Dialog` (the demo modal) and `Tooltip` and `DropdownMenu` as we grow. Don't
build your own popover — Radix already solved focus management.

### Geist font (via `geist` package + `next/font`)

Self-hosted, subsetted, zero-flash. The `--font-geist-sans` and
`--font-geist-mono` CSS variables are wired into the Tailwind tokens, so
`font-sans` / `font-mono` utilities just work.

---

## 2. The component layering

```
components/
├── motion/         ← cross-cutting motion primitives
├── ui/             ← visual primitives (Button, Eyebrow, Tabs)
├── illustrations/  ← inline SVGs (Constellation, agent vizzes, use-case art)
├── layout/         ← Nav, Footer, SkipLink
└── sections/       ← homepage sections, composed of the above
```

Each layer can only depend on the layers above it (motion → ui → illustrations
→ layout → sections). Avoid creating cycles. If a section needs a new visual
primitive, lift it into `ui/`; if it needs a new motion utility, lift it into
`motion/`.

### The motion primitives (the real architectural value)

| File | Pattern |
|---|---|
| `lenis-provider.tsx` | App-wide smooth scroll. **Mount once** in `app/layout.tsx`. |
| `reveal.tsx` | Wraps children with `whileInView` fade-up. **The default entry animation.** |
| `parallax.tsx` | Scroll-linked Y translate. Wrap any element you want drifting at scroll-relative speed. |
| `pointer-tilt.tsx` | Pointer-following parallax. Used on the hero constellation. |
| `count-up.tsx` | Number ticks up once on viewport entry. Used for the live metrics row. |
| `scroll-progress.tsx` | Top-of-page progress bar. Optional; not currently mounted. |

If you find yourself reaching for `useScroll`/`useTransform` in three sections,
extract a primitive. The motion language must stay consistent across the site.

---

## 3. Conventions

### Section components

- **One per file**, in `components/sections/`.
- **Always wrapped in a semantic `<section>`.**
- **Always start with `"use client"`** (sections animate; this is the line
  where the React tree becomes interactive).
- **Imports look like:**
  ```ts
  import { motion } from "motion/react";
  import { Reveal } from "@/components/motion/reveal";
  import { Eyebrow } from "@/components/ui/eyebrow";
  ```
- **Compose, don't restyle.** A new section should be 80% existing components.

### Naming

- Files: kebab-case (`agent-vizzes.tsx`, `customer-story.tsx`).
- Components: PascalCase (`Agents`, `VizDispatch`).
- Tokens in CSS: `--color-*`, `--radius-*`, `--ease-*`. No abbreviations.

### Color & motion rules

- **One brand accent: `--color-accent`** (#6FE4D9). No purple, no rainbow,
  no "AI gradient." See the design brief for full do-not list.
- **Indigo (`--color-indigo`) is for atmosphere only** — radial glows under
  hero/finale. Never used as an interactive color.
- **No drop shadows on cards.** Use surface + border + (optional) gradient ring
  via mask-composite. This is what the gradient-ring trick in `Platform`'s
  product card and the metrics row in `Hero` is doing.
- **Motion respects reduced-motion.** Always. `useReducedMotion()` in
  components; `@media (prefers-reduced-motion: reduce)` in CSS.

---

## 4. When to use what

### Need an entry animation?

```tsx
import { Reveal } from "@/components/motion/reveal";
<Reveal>{/* content */}</Reveal>
<Reveal delay={0.1}>{/* later sibling */}</Reveal>
```

### Need a scroll-driven transform?

```tsx
import { Parallax } from "@/components/motion/parallax";
<Parallax intensity={-0.05}>{/* drifts up as it scrolls past */}</Parallax>
```

### Need a complex scroll-orchestrated moment? (e.g. pin a section, reveal layers in sequence)

Use GSAP + ScrollTrigger. Pattern:

```tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function PinnedReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=600",
          pin: true,
          scrub: 1,
        },
      })
      .from(".layer-1", { opacity: 0, y: 40 })
      .from(".layer-2", { opacity: 0, y: 40 }, "-=0.2");
    }, ref);
    return () => ctx.revert();
  }, []);
  return <div ref={ref}>...</div>;
}
```

`gsap.context(..., ref)` is critical — it scopes the animations and lets
`ctx.revert()` clean them up on unmount. Don't forget the cleanup.

### Need accessibility primitives? (Tabs, Dialog, Dropdown, Tooltip, Popover)

Reach for **Radix UI** before you reach for anything else. We already have
`@radix-ui/react-tabs`. Add new packages by feature, not bulk.

---

## 5. Performance posture

- **Server Components stay server-side.** Only mark a component `"use client"`
  if it needs interactivity, hooks, or refs. This is the lever that keeps
  total JS small as the site grows.
- **Animations are transform/opacity only.** Never animate `width`, `height`,
  `top`, etc. — they trigger layout.
- **The constellation is generated client-side once at mount.** It's
  deterministic (seeded PRNG), so SSR could pre-render it, but the cost is so
  low it's not worth the complexity.
- **Cap third-party scripts.** No GA4, no chat widgets, no marketing pixels in
  v1. Add Plausible or PostHog for analytics; both ~1KB.
- **Image strategy** (when we add photos): always use `next/image`, always
  set explicit `width`/`height` to prevent CLS.

---

## 6. Accessibility commitments

- **WCAG 2.2 AA is the floor**, AAA on body text.
- **Skip-link** at the top of `<body>`, focus-trapped to `#main`.
- **Focus rings always visible** (`:focus-visible` in `globals.css`).
- **Decorative SVG** marked `aria-hidden` (the constellation, all
  illustrations).
- **Tab/keyboard nav** works on every interactive element. The agents tabs use
  Radix Tabs which gives us arrow-key navigation for free.
- **Reduced-motion** is honored everywhere. Components check
  `useReducedMotion()`; the CSS file resets all animations under
  `prefers-reduced-motion: reduce`.

---

## 7. Open questions / future work

- **MDX content collections**. When we add `/blog` and `/customers`, set up
  [Velite](https://velite.js.org/) or [`fumadocs`](https://fumadocs.vercel.app/).
  Velite is the lighter pick.
- **OG image generation** (`@vercel/og`). When the launch announcement ships,
  add `app/opengraph-image.tsx` that renders the constellation against a
  vertical-tinted background.
- **Internationalization**. Not yet. When we localize, use `next-intl` and
  segment by route group: `app/[locale]/...`.
- **3D constellation**. The current SVG version is fine. If we want a true
  3D moment for the hero (à la Vercel's homepage), port to `react-three-fiber`
  + `@react-three/drei`. Budget: a serious 1-week scope; protect the
  performance budget with care.
- **Form backend**. The "Book a demo" CTA points to `#demo` placeholder.
  When we wire it, use Server Actions + Zod validation, post to a CRM (HubSpot
  or Salesforce) via API.
- **Status page**. Embed Statuspage.io or Instatus into `/trust/status`.

---

## 8. The single most important rule

**Restraint is the architecture.**

It's tempting to add an animation library, a 3D effect, or a feature flag for
every section. Resist. The site is already in the top decile of dark-mode
SaaS sites because of what we *don't* ship: no carousels, no cookie banner
covering 1/3 of the screen, no drop shadows, no "AI gradient," no purple, no
3D rocketship.

If a future change makes the site louder, it makes the brand quieter. If it
makes the brand louder, it makes the site quieter. **Pick wisely.**
