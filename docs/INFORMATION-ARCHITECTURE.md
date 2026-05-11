# Information Architecture

The complete sitemap, page hierarchy, and routing plan for fieldforce.com.

---

## 1. Top-level structure

```
fieldforce.com
│
├── /                                Homepage
│
├── /platform                        Platform overview
│   ├── /platform/sites
│   ├── /platform/assets
│   ├── /platform/work
│   ├── /platform/evidence
│   ├── /platform/integrations
│   └── /platform/security
│
├── /platform/agents                 Agents parent (Intelligence layer)
│   ├── /agents/dispatch
│   ├── /agents/forecast
│   ├── /agents/evidence
│   ├── /agents/reconcile
│   ├── /agents/permit
│   └── /agents/copilot
│
├── /solutions                       Solutions parent
│   ├── /solutions/telecom           (Mobile Operators · Tower Co. · MSPs · OEMs)
│   ├── /solutions/ev-energy         (Charging · Battery storage · Utilities)
│   └── /solutions/iot               (Smart Cities · Private 5G · Industrial)
│
├── /customers                       Logo wall + filterable case studies
│   └── /customers/[slug]
│
├── /pricing                         Three-tier pricing
│
├── /trust                           Trust center
│   └── /trust/status                Live status page
│
├── /changelog                       Public release log
│
├── /docs                            Public developer docs (concept, API, recipes)
│
├── /blog                            Editorial
│   └── /blog/[slug]
│
├── /about                           About / company story
├── /careers                         Open roles
│   └── /careers/[slug]              Individual role pages
├── /contact                         Three-path contact
└── /demo                            Demo request form
```

---

## 2. Page hierarchy & template family

Every page is one of four templates. Stop, breathe, pick one before writing.

| Template | Used for | Anatomy |
|---|---|---|
| **A — Narrative** | Home, Platform overview, Solutions parents, Agents parent, About, Careers parent | Hero → manifesto/lede → trust → narrative sections → finale CTA |
| **B — Reference** | Each agent, each primitive, each solution sub-page | Hero → "How it works" 3-step → live demo → specs/integrations → FAQ → CTA |
| **C — Document** | Pricing, Trust, Security, Legal, Status | Header → tabular content → CTA |
| **D — Content** | Blog post, customer case study, career detail, changelog entry | Header → article body → related → CTA |

The five reference inner pages we ship in v1 demonstrate one of each template (Platform = A, Solutions/Telecom = A, Pricing = C, Customers = listing+D, Contact = C+form).

---

## 3. URL & routing conventions

- **Hyphen-cased routes only** — `/ev-energy`, never `/evEnergy`.
- **Sub-pages live under their parent** when the parent is a logical hub: `/platform/sites`, `/platform/agents`. *Exception:* the six agent detail pages live at `/agents/[slug]` (not `/platform/agents/[slug]`) because those URLs ship in marketing collateral and short URLs win.
- **Listing index = `/parent/`**; **detail = `/parent/[slug]`**. Always.
- **No `.html`, no trailing slashes** — Next App Router default is correct.
- **Redirect old URLs** — keep `/solutions/mobile-operators`, `/solutions/service-providers` (current site) → `/solutions/telecom` with a 301.

---

## 4. Page → CTA map

Every page has exactly one **primary CTA** and one **secondary CTA**. These sit in the page's hero and final-band.

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| `/` | Book a demo | See the platform |
| `/platform` | Book a demo | Talk to engineering |
| `/platform/agents` | Book a demo | View an agent → /agents/dispatch |
| `/agents/[slug]` | Book a demo | Back to all agents |
| `/solutions/[vertical]` | Book a demo | Talk to engineering |
| `/customers` | Book a demo | Read a case study |
| `/customers/[slug]` | Book a demo | More case studies |
| `/pricing` | Book a demo | Talk to engineering |
| `/trust` | Download SOC 2 report | Contact security@ |
| `/changelog` | Subscribe to RSS | Book a demo |
| `/docs` | Talk to engineering | Book a demo |
| `/blog` | Book a demo | Subscribe |
| `/blog/[slug]` | Book a demo | More posts |
| `/about` | Open roles | Book a demo |
| `/careers` | Apply | Email recruiting |
| `/careers/[slug]` | Apply for this role | Other roles |
| `/contact` | Book a demo | Talk to engineering / Support |
| `/demo` | Submit form | (none) |

This map is **canonical**. When marketing wants to change a CTA, change it here, then in code.

---

## 5. Homepage → inner-page flow

The homepage is the entry; every section hands off to a deeper page.

| Homepage section | Hands off to |
|---|---|
| Hero "See the platform" | `/platform` |
| Hero "Book a demo" | `/demo` |
| Trust bar logos (eventually clickable) | `/customers/[slug]` |
| Platform card "Meet the agents" | `/platform/agents` |
| Intelligence section per-tab "Read how Dispatch works" | `/agents/dispatch` (etc.) |
| Use-cases card "Telecom solutions" | `/solutions/telecom` |
| Use-cases card "EV & energy" | `/solutions/ev-energy` |
| Use-cases card "IoT solutions" | `/solutions/iot` |
| Customer story (eventual link) | `/customers/smartsky` |
| Comparison table (no CTA) | — |
| Finale "Book a demo" | `/demo` |
| Finale "Talk to engineering" | `mailto:engineering@fieldforce.com` |

Every inner page returns to the homepage via the brand mark in the nav.

---

## 6. Page → page navigation patterns

### Forward navigation (drill-in)

1. **Hub → spoke**. Solutions parent has three clear cards routing to the verticals; Platform has cards routing to primitives; Agents has cards routing to each agent. Always card-grid layouts at hub level.
2. **Inline links inside content**. `/agents/dispatch` mentions "Forecast pairs with Dispatch to..." with an inline link. These keep readers in flow.

### Lateral navigation (between siblings)

- Agent pages: a **persistent left rail** lists the six agents; clicking switches without leaving the section.
- Solution sub-pages: a **breadcrumb** (`Solutions / Telecom / Mobile Operators`) plus a "Other verticals" footer band before the final CTA.
- Customer cases: a **3-up "Related case studies"** band before the final CTA.
- Blog posts: a **2-up "Related reading"** band before the final CTA.

### Backward navigation

- **Breadcrumbs** on every page deeper than two levels (`/agents/dispatch`, `/customers/smartsky`, `/careers/[role]`).
- **Brand mark** in nav always returns to `/`.

---

## 7. Footer information architecture

Mirrors the nav, but expands. Four columns + brand-and-status block.

```
PLATFORM                SOLUTIONS               RESOURCES               COMPANY
Sites                   Telecom & 5G            Docs                    About
Assets                  EV & Energy             Changelog               Careers
Work                    IoT & Networks          Blog                    Trust center
Evidence                Tower companies         Guides                  Contact
Agents                  MSPs & service          Status                  engineering@
Integrations            providers
Security
```

Plus a **bottom strip**:
- Copyright + offices (Arlington · Munich · Karachi)
- Legal: Privacy / Terms / DPA
- Compliance line: SOC 2 Type II · ISO 27001 · GDPR

The brand block on the left has the live status pill (`● All systems operational`).

---

## 8. The route plan, finalized

```
/                              page.tsx          [ DONE ]
/platform                      page.tsx          [ DONE - reference ]
/platform/sites                page.tsx          [ skeleton ]
/platform/assets               page.tsx          [ skeleton ]
/platform/work                 page.tsx          [ skeleton ]
/platform/evidence             page.tsx          [ skeleton ]
/platform/integrations         page.tsx          [ skeleton ]
/platform/security             page.tsx          [ skeleton ]
/platform/agents               page.tsx          [ skeleton ]
/agents/[slug]                 page.tsx          [ skeleton — dynamic ]
/solutions                     page.tsx          [ skeleton ]
/solutions/telecom             page.tsx          [ DONE - reference ]
/solutions/ev-energy           page.tsx          [ skeleton ]
/solutions/iot                 page.tsx          [ skeleton ]
/customers                     page.tsx          [ DONE - reference ]
/customers/[slug]              page.tsx          [ skeleton — dynamic ]
/pricing                       page.tsx          [ DONE - reference ]
/trust                         page.tsx          [ skeleton ]
/trust/status                  page.tsx          [ skeleton — embed Statuspage ]
/changelog                     page.tsx          [ skeleton ]
/docs                          page.tsx          [ skeleton — links to docs site ]
/blog                          page.tsx          [ skeleton ]
/blog/[slug]                   page.tsx          [ skeleton — dynamic ]
/about                         page.tsx          [ skeleton ]
/careers                       page.tsx          [ skeleton ]
/careers/[slug]                page.tsx          [ skeleton — dynamic ]
/contact                       page.tsx          [ DONE - reference ]
/demo                          page.tsx          [ skeleton ]

/not-found.tsx                                   [ DONE ]
/error.tsx                                       [ DONE ]
/loading.tsx                                     [ DONE ]
```

Reference pages are exemplars; skeletons compose the same components and are ready for content.

---

## 9. Internationalization & future scale

Not in v1. When we localize:

```
app/
└── [locale]/
    ├── (the same routes)
```

Use `next-intl`. Default locale `en`, second locale most likely `de` (Munich office) or `ar` (Middle East operator base — DISH, Zain, Etisalat). Plan for **30% English-length expansion** in headlines and buttons.
