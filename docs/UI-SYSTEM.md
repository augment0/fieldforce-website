# UI system

The reusable component library, design tokens, and behavior patterns
underneath the entire site.

---

## 1. The token system (single source of truth)

All tokens live in `app/globals.css` under `@theme`. Tailwind v4 picks them up
automatically; raw CSS references via `var(--name)`.

### Color

```
SURFACE
  --color-bg-base       page background
  --color-bg-raised     cards (1 level)
  --color-bg-elevated   dialogs, hover lifts
  --color-bg-inset      code blocks, disabled fields

LINES
  --color-line-subtle   hairlines
  --color-line          default borders
  --color-line-strong   focused borders, hover targets

TEXT
  --color-text          headings, body
  --color-text-2        secondary copy
  --color-text-3        captions, mono labels
  --color-text-4        disabled

ACCENT
  --color-accent        primary brand color (teal)
  --color-accent-soft   hover state
  --color-accent-deep   pressed state
  --color-accent-glow   atmospheric glows + button shadows

INDIGO (atmospheric only — never interactive)
  --color-indigo
  --color-indigo-glow

SEMANTIC (inside product UI mocks only — never marketing chrome)
  --color-warn
  --color-danger
```

### Radius

```
--radius-xs  4px       chips, tiny tags
--radius-sm  6px       buttons (sm), code blocks
--radius-md  10px      buttons (default), cards (sm)
--radius-lg  14px      cards, panels
--radius-xl  20px      large cards, the product mock
```

### Typography (Geist via next/font)

```
--font-sans   var(--font-geist-sans)
--font-mono   var(--font-geist-mono)

DISPLAY (uses .display-xl / .display-lg utility classes)
  display-xl   clamp(44, 7.4vw, 96)px / 600 / -0.025em / 0.98
  display-lg   clamp(36, 5.4vw, 68)px / 600 / -0.022em / 1.04

BODY
  body-lg      clamp(17, 1.4vw, 19)px / 400 / 1.55
  body-md      16px / 400 / 1.55  (root)
  body-sm      14px / 400 / 1.5

MONO (eyebrow + system)
  eyebrow      12px / 500 / 0.12em letter-spacing / uppercase
  mono-body    13px / 400 / used for IDs, labels, code
```

Two weights per screen. Never more.

### Spacing

```
4   8   12   16   24   32   48   64   96   128   160   192
```

No arbitrary values. If a designer wants 22px, force the choice between 24 or 16.

---

## 2. Layout primitives

| Class | What it does |
|---|---|
| `.shell` | Max-width 1240px container with 32/20px gutters. Used at every section root. |
| `.shell-narrow` | Max-width 760px variant for editorial content (manifesto, articles). |
| `.grid-bg` | The 80×80px grid background pattern, used behind heros and finale. |
| `.grad-text` | The white→accent gradient text style. Applied to one phrase per section, max. |

Vertical rhythm:

```css
section { padding: clamp(96px, 12vw, 160px) 0; }
section--tight { padding: clamp(72px, 9vw, 120px) 0; }   /* trust bar, story */
section--hero  { padding: clamp(64px, 9vw, 120px) 0 clamp(48px, 6vw, 80px); }
```

Section-to-section gap is the section padding itself — no `margin: 0 auto` between siblings.

---

## 3. The component catalog

### `components/ui/`

| Component | Purpose | Variants |
|---|---|---|
| `Button` | Primary CTA + ghost CTA | `primary`, `ghost`; sizes `sm` / `md` / `lg` |
| `Eyebrow` | Mono uppercase section label with em-dash leader | `align="start" \| "center"`, optional `withTrail` |
| `Tabs` | Radix-wrapped tabs (used in agents demo) | — |
| `Accordion` | Radix-wrapped accordion (FAQs) | — |
| `Badge` | Small uppercase tag | `default`, `accent`, `warn` |
| `Card` | Generic surface card with optional gradient ring | `default`, `accent` |
| `Breadcrumb` | Path of links above page hero | — |
| `SectionShell` | Standard `<section>` with vertical rhythm | `tone="default" \| "hero" \| "atmospheric"` |
| `LinkArrow` | Inline link with right-arrow that animates on hover | — |
| `LogoWall` | Monochrome customer logos with hover-lift | — |

### `components/motion/`

(Existing — see `ARCHITECTURE.md` for details.)

### `components/sections/` — *the inner-page building blocks*

| Component | What it renders | Used on |
|---|---|---|
| `PageHero` | Hero with eyebrow + headline + subhead + 2 CTAs + optional visual slot | every inner page |
| `FeatureGrid` | N-column grid of feature cards (icon + title + body) | platform, solutions, agents |
| `FeatureSplit` | Two-column "text + product UI" alternating sections | platform sub-pages, agent details |
| `StatBar` | 3–5 metric strip with mono labels | platform, solutions, about |
| `IntegrationGrid` | Categorized logo+caption grid | platform/integrations, solutions |
| `FAQ` | Accordion with 4–6 questions | every inner page |
| `CtaBand` | Mid-page or final-page CTA, with atmospheric glow | every inner page |
| `Testimonial` | Pull-quote with attribution | platform, solutions, about |
| `PricingTable` | Three-column tier comparison | pricing |
| `SecurityGrid` | Compliance badges + certification details | trust, security |
| `Timeline` | Vertical timeline (release log, company history) | changelog, about |
| `CaseStudyCard` | Tile for `/customers` listing | customers |
| `ArticleCard` | Tile for `/blog` and `/changelog` listing | blog, changelog |
| `JobCard` | Row for `/careers` listing | careers |
| `TeamGrid` | 3- or 4-column member cards | about |
| `ContactPathways` | Three-tile contact splitter (sales / engineering / support) | contact |
| `RelatedRow` | "Related cases / posts" 2- or 3-up before final CTA | customers/[slug], blog/[slug] |

---

## 4. Behavior patterns

### Hover states

- **Buttons**: 1px translate-up, hue shift to `--color-accent-soft`. No scale.
- **Cards**: border lifts to `--color-line-strong`, slight `-translate-y-[2px]`.
- **Nav links**: underline animates from left at 70% width.
- **Inline links inside body copy**: underline-offset 3px, color shift to `--color-accent`.
- **Links with arrows**: gap widens from 6px → 10px on hover; arrow translates 3px right.

### Focus states

Always **2px solid `--color-accent`, 3px offset, `--radius-xs` corner**. Visible on every focusable element. Never `outline: none` without a replacement.

### Loading states (data-driven content)

- **Skeleton over spinner**, always. A pulsing `--color-bg-elevated` block at the same dimensions as the eventual content.
- Skeleton animation: 1.6s pulse, 30% → 70% → 30% opacity.
- For paginated lists, skeleton 3–6 rows then transition to real content.

### Empty states

A standard empty pattern is provided as `<EmptyState>`:

```
─── icon (32px, accent-tinted) ───
Headline (heading-md)
Subhead — one sentence, mute (text-2)
[ Primary action ]    Secondary action →
```

Use cases:

- `/customers` (no filtered results): "No matches for that filter. *Reset filters →*"
- `/blog` (no posts in category): "No posts in this category yet."
- `/changelog` (no entries this month): rare, but: "Quiet month. Subscribe for updates."
- `/careers` (no open roles): "No open roles right now. *Tell us your story →*"

### Error boundaries

- `app/error.tsx` — catches client-side errors. Shows the brand mark, a calm "something broke" message, a "Try again" button, and a link to `/contact`.
- `app/not-found.tsx` — 404 page. Same calm tone. Suggests three top destinations.

### Section transitions

- Default entry animation: **fade-up 14px, 800ms, `--ease-out-emphatic`**, fired once via `IntersectionObserver`. Wrap with `<Reveal>`.
- For grids: **stagger children at 60–80ms**. Wrap with `motion.div variants={fadeUpStagger()}`.
- For long-form copy: word-by-word illumination via scroll-linked opacity (manifesto pattern). Reserve for one section per page.

---

## 5. Responsive content rules

| Element | Mobile (< 640) | Tablet (640–1024) | Desktop (≥ 1024) |
|---|---|---|---|
| Container padding | 20px | 32px | 32px |
| Headline (display-xl) | 44px | 64px | 88–96px |
| Body | 16px | 16px | 16–17px |
| Multi-col grids | 1 col | 2 cols | 3–5 cols |
| Image-heavy heroes | Stack: text → image | Stack | Side-by-side 7/5 |
| Mega-menu | Sheet | Sheet | Hover dropdown |
| Buttons in CTA bands | Full-width | Auto + side-by-side | Inline |
| Code/dashboard mocks | Horizontal scroll | Horizontal scroll OK | Final layout |

---

## 6. Accessibility checklist (per page)

Before merging any new page, verify:

- [ ] One `<h1>`, in semantic order down to `<h3>`. No skipped levels.
- [ ] All decorative SVG marked `aria-hidden`.
- [ ] All actionable icons (chevrons, arrows in buttons) have a sibling text label or `aria-label`.
- [ ] Color is **never the only signal** — pair with icon, weight, or text.
- [ ] Body text contrast ≥ 7:1; secondary ≥ 4.5:1.
- [ ] Focus order matches visual order — test with `Tab` from top.
- [ ] All animation honors `prefers-reduced-motion: reduce`.
- [ ] Form fields have explicit `<label>` (or `aria-label`).
- [ ] Form errors are inline + announced via `aria-live="polite"`.
- [ ] `<title>` is unique and descriptive (set via `metadata` export).

---

## 7. Composition example: a typical inner page

```tsx
export default function SolutionTelecomPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/solutions", label: "Solutions" }]} />
      <PageHero
        eyebrow="SOLUTIONS / TELECOM"
        title={<>Build the network. Run the network.<br/>One platform.</>}
        body="From 5G site builds to fiber drops..."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/contact", label: "Talk to engineering" }}
        visual={<TelecomHeroIllo />}
      />
      <StatBar items={[{ value: "$10B+", label: "assets" }, ...]} />
      <FeatureSplit ... />
      <Agents />                {/* reused from homepage */}
      <FeatureGrid ... />
      <Testimonial ... />
      <IntegrationGrid ... />
      <FAQ items={[...]} />
      <CtaBand
        title="See Fieldforce on your network."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
      />
    </>
  );
}
```

This is the pattern. Inner pages are mostly orchestration + content; behavior lives in shared components.

---

## 8. Maintenance: what NOT to add

- **No 6th nav item**, no exit-intent modals, no cookie banner that covers >1/3 of the screen, no sticky bottom CTA bar, no scroll-jacking, no auto-playing video with sound, no carousels.
- **No drop shadows** on cards. Surface + border + (optional) gradient ring only.
- **No 3D isometric office illustrations**, no hexagons, no globe-with-glowing-lines, no AI-brain illustrations.
- **No third-party widgets** that ship more than 5KB. Especially chat widgets.

If a future change makes the site louder, it makes the brand quieter. The constraint is the brand.
