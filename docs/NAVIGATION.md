# Navigation system

How navigation behaves across desktop, tablet, and mobile. Read before
modifying `components/layout/nav.tsx`.

---

## 1. The navigation surface

```
[BRAND]    Platform ▾    Solutions ▾    Customers    Pricing    Docs    Talk to engineering    [Book a demo]
```

Five top-level items. No more. Adding a sixth is rejected at design review unless one comes off.

| Item | Behavior |
|---|---|
| **Platform** | Mega-menu, three columns: *Primitives · Agents · Cross-cutting* |
| **Solutions** | Mega-menu, two columns: *By industry · By role* |
| **Customers** | Direct link to `/customers` (no menu) |
| **Pricing** | Direct link to `/pricing` (no menu) |
| **Docs** | Direct link to `/docs` (no menu) |

The right side has two CTAs: a quiet "Talk to engineering" link (engineering credibility move) and the primary "Book a demo" button.

---

## 2. Desktop behavior

### Sticky chrome

- Sticky at top of viewport (z-100).
- **Translucent base** at top of page: `rgba(8,9,12,0.55)` + `backdrop-filter: blur(14px) saturate(140%)`. The page bleeds through.
- **Solid + bordered after 8px scroll**: background increases to `rgba(8,9,12,0.82)` and a 1px hairline appears at the bottom edge. Transition: 300ms.

### Mega-menu trigger

- **Hover-open** with 80ms delay (prevents accidental triggers on quick mouse passes).
- **Click-open** as fallback for keyboard/tap users.
- **Outside-click closes**, **Esc closes**, **route change closes**.
- Menu is rendered into a portal with a 1px-line connection to the trigger so the visual continuity reads.

### Mega-menu content layout

Two-or-three column grid inside the menu, max-width 960px, centered under the trigger:

```
┌──────────────────────────────────────────────────────────────────┐
│  PRIMITIVES              AGENTS                  CROSS-CUTTING   │
│  ─────                   ─────                   ─────           │
│  ◐ Sites                 ✦ Dispatch              ◐ Integrations  │
│    One source of truth     AI scheduler            Oracle, SAP… │
│                                                                  │
│  ▣ Assets                ✦ Forecast              ◐ Security      │
│    …                       …                       …            │
│                                                                  │
│  ⊕ Work                  ✦ Evidence              ────────────── │
│    …                       …                       What's new?  │
│                                                                  │
│  ✓ Evidence              ✦ Reconcile               [→ /changelog│
│    …                       …                                    │
│                                                                  │
│                          ✦ Permit                                │
│                          ✦ Copilot                              │
└──────────────────────────────────────────────────────────────────┘
```

Each item is a **column-flex unit** with an icon, a label, and a one-line description. Hover lifts background fill subtly (`rgba(255,255,255,0.04)`) and tints the icon to accent.

### Active state

The current section is **underlined** (1px accent line, 6px below the link). A small accent-glow halo (8px) lifts the chip background.

### Animations

- Mega-menu open: **fade + 8px translate-down**, 220ms, `var(--ease-out-emphatic)`.
- Mega-menu close: **fade**, 160ms.
- Hover lifts inside menu: 120ms color change only (no transform).

---

## 3. Mobile behavior (< 1024px)

The mega-menu collapses to a **full-screen sheet** that slides down from below the nav.

### Toggle button

- A **3-line hamburger** in the right-hand action area.
- Animates to **× on open** (Linear-style transform).
- 38×38px hit area, 1px border.

### Sheet layout

- **Top-down slide-in**, 320ms, `var(--ease-out-emphatic)`.
- Body `overflow: hidden` while open.
- `Esc` closes; tapping the toggle again closes; tapping a link closes.

### Sheet content

```
PLATFORM                                                ▾  ← collapsible group
   Sites · Assets · Work · Evidence
   Agents (chevron link to /platform/agents)
   Integrations · Security

SOLUTIONS                                                ▾
   Telecom · EV & Energy · IoT
   By role: Operators · Tower co · MSPs · OEMs

Customers
Pricing
Docs
─────────
Talk to engineering
[ Book a demo ]
```

Top-level items are large (22px) for touch targets. Sub-items reveal on chevron tap (`<details>` pattern, native; gracefully accessible).

### Spacing

- Each row has **18px vertical padding**.
- Subitem rows are **16px font, 12px padding**, indented 16px.
- 1px hairlines between rows.

---

## 4. Breakpoints

```
Mobile    < 640px       Single-column layouts everywhere; sheet menu; full-width CTAs
Tablet     640–1024px   Some 2-col layouts; sheet menu still active
Desktop    1024–1280px  Mega-menu; mostly final layout; some 2-col instead of 3
Wide       ≥ 1280px     Final layout, full 3-col grids, max content width 1240px
```

Container max-width tops at **1240px** with **32px gutters** (20px on mobile).

The mega-menu activates at `lg` (≥ 1024px). Below that, the sheet is used.

---

## 5. Footer navigation

The footer mirrors the nav structure but is **always visible** (not collapsible). It expands the link surface to include third-tier items (e.g. Tower companies, MSPs) that don't earn space in the nav.

Layout: **brand block + 4-column links** on desktop; **brand stack + 2-column links** on tablet; **brand stack + single column** on mobile.

The "All systems operational" pill in the brand block links to `/trust/status`.

---

## 6. Sticky element rules

Only **two** elements are allowed to be sticky:

1. **The nav** — always.
2. **In-page section nav** (used on /platform, /trust, /pricing) — sticky relative to the article container, not the viewport. Disappears when the article scrolls past.

**No sticky CTA bars at the bottom** of the viewport. They pin attention but cheapen the brand. The final CTA at the end of every page does this job better.

---

## 7. Keyboard navigation

- `Tab` moves through nav items in visual order.
- `Enter` or `Space` opens a mega-menu.
- `Escape` closes any open menu.
- `Arrow Down` from a top-level item moves into the mega-menu.
- `Arrow Right/Left` between top-level items when the menu is open.
- All this comes for free from `@radix-ui/react-navigation-menu`. **Don't reimplement it.**

---

## 8. Skip link

A `Skip to content` link is the first focusable element on every page. Hidden until focused, then floats top-left with the brand styling. Targets `#main`.

---

## 9. Active route detection

The nav reads `usePathname()` from Next.js and applies `data-active` to:

- The matching top-level link (e.g. `/solutions/telecom` → marks "Solutions" active).
- The matching item inside a mega-menu when open.

Active visual: a 1px accent underline, 6px below the link, scale-x animated in from left.

---

## 10. Accessibility checklist (nav-specific)

- [ ] `<nav aria-label="Primary">` and `<nav aria-label="Mobile">` distinguish the two
- [ ] Brand link has `aria-label="Fieldforce home"` for screen readers
- [ ] Toggle button has `aria-expanded`, `aria-controls`, and a label that switches between "Open menu" / "Close menu"
- [ ] Mega-menu uses Radix's NavigationMenu primitive — focus management is built in
- [ ] Sheet menu uses `role="dialog"` semantics with focus trap
- [ ] All icons in the menu are decorative (`aria-hidden`); link text is the accessible name
