# Platform content strategy

The complete content system for every platform page on fieldforce.com.
Reads top-to-bottom; navigates by H2.

> **Companion docs.** [INFORMATION-ARCHITECTURE.md](./INFORMATION-ARCHITECTURE.md) defines
> the full sitemap. [UI-SYSTEM.md](./UI-SYSTEM.md) defines the components and tokens. This
> doc covers what *goes inside* each platform page — message stack, section flow,
> feature explanation, AI framing, CTA architecture, and cross-linking.

---

# PART I — Research & framework

## 1. What modern platform sites do (calibration)

A focused scan of how leading platform brands organize inner pages in 2026:

| Brand | How they organize the platform IA | What they nail |
|---|---|---|
| **Linear** | 6 capability pages: *Planning · Building · AI · Insights · Mobile · Customer Requests*. Each is a one-line value-prop capability page with sub-features cross-linked. AI is a dedicated module, not sprinkled. | Restraint. One verb per page. AI as a peer to Planning/Building, not sub-feature. |
| **Datadog** | 7 capability categories: *Observability · Security · Digital Experience · Software Delivery · Service Management · AI · Platform Capabilities*. Each category gets a one-line value prop + sub-products grid. | "Intelligence embedded in workflows" — Bits AI agents threaded *through* other categories, not just standalone. |
| **Vercel** | Three groupings: *Core deployment & monitoring · Infrastructure & configuration · Account*. AI/agent products listed as peers to deploy/observe products. | Tightly bounded scope. Each item is a verb. |
| **Profound** *(prior research)* | 4 platform modules around an interactive demo. Manifesto-as-positioning. | Naming the paradigm shift. |

**Patterns to adopt:**

1. **Capability pages are short and verb-led.** One sharp value prop, one big visual or product mock, 3–5 supporting sections, one FAQ, one CTA. ~600–900 words on screen.
2. **AI gets its own dedicated page** *and* is threaded through every other capability page where it does work. Both/and, not either/or.
3. **Cross-link aggressively** between capability and primitive pages. The reader's mental model is "I want to do X" → leads them to "X is composed of A, B, C."
4. **Trust beats live in a fixed slot per page** — usually a logo strip, a stat trio, and one named integration class.

**Patterns to reject:**

- "Solutions for [persona]" pages that duplicate capability pages with different headlines. The buyer can read; they want different *information*, not the same words rearranged.
- Endless "Why us" tables that compare us to nameless competitors. We do this once on the homepage; on platform pages it's noise.
- AI mentioned in every paragraph. The brand promise is intelligence; demonstrating it once concretely beats name-dropping it ten times.

---

## 2. Reconciled platform pages IA

Mapping the requested page list to our existing structure, with three new pages added (`Analytics`, `Mobile`, `Automation` is folded into `Intelligence`):

```
PLATFORM
├── /platform                       Platform overview
├── /platform/sites                 Sites — primitive
├── /platform/assets                Assets — primitive
├── /platform/work                  Work — primitive   (= Deployment Management)
├── /platform/evidence              Evidence — primitive
├── /platform/agents                Intelligence — capability   (= AI Operations · Workflow Automation · Infrastructure Intelligence)
│   └── /agents/{slug}              Six agent detail pages
├── /platform/analytics             Analytics & Insights — capability   [NEW]
├── /platform/mobile                Mobile Operations — capability        [NEW]
├── /platform/integrations          Integrations
└── /platform/security              Security & trust

SOLUTIONS
├── /solutions                      Solutions parent
├── /solutions/telecom              Telecom & 5G   (Network Operations folds in here)
├── /solutions/ev-energy            EV & Energy
└── /solutions/iot                  IoT & Networks of Things
```

**Why these consolidations:**

| Requested page | Maps to | Reason |
|---|---|---|
| AI Operations | `/platform/agents` | The Agents page *is* AI Operations — keeps one canonical AI surface. Renaming it dilutes the brand's named-agent advantage (Dispatch, Forecast, Evidence…). |
| Infrastructure Intelligence | `/platform/agents` | Same surface. "Intelligence" is the section eyebrow on the Agents page. |
| Deployment Management | `/platform/work` | "Work" is our primitive name; "Deployment Management" is what buyers Google. Solve this in copy + SEO, not by adding a duplicate page. |
| Workflow Automation | `/platform/agents` | Workflow automation in our world *is* what agents do. A separate page would be empty — no specific "automation engine" to explain. |
| Network Operations | `/solutions/telecom` (sub-section) | Network ops is a *use mode* of telecom buyers, not a horizontal capability. Surfaced as a deep section + anchor link, not a page. |

**Why the three new pages:**

- **Analytics & Insights** — every modern platform has one. The buyer asks "what do I see?" — needs a clear answer. Maps to "AI Analytics & Reporting" on the legacy site, evolved into a real capability page.
- **Mobile Operations** — the mobile app is one of the strongest under-marketed product surfaces (per legacy site research). It deserves a destination that explains the field-grade mobile experience as a deliberate capability, not a checkbox.
- *Workflow Automation* requested but folded — see above.

---

## 3. Content principles (the voice rules)

All platform pages follow the same five rules. If a draft violates one, rewrite.

### 3.1 Verb-led, not adjective-led

> ❌ "Powerful, intelligent platform for managing every aspect of your network."
> ✅ "Schedule the next crew. Validate the last photo. Predict next week's breach."

### 3.2 Specificity is the credibility

Every claim is paired with the verb it does and the artifact it produces.

> ❌ "AI-powered insights."
> ✅ "Flags sites that will miss SLA 11 days before they do."

The proof line under every AI claim is non-negotiable. Numbers, not adjectives.

### 3.3 The 7-second test

A first-time visitor on any platform page should be able to answer three questions in 7 seconds: **what is this** · **who is it for** · **what's the next thing to do**.

If the hero doesn't answer all three, the hero is wrong.

### 3.4 AI without buzzwords

| Don't | Do |
|---|---|
| "AI-powered platform" | "Schedules 12,000 crew-days a month — and reschedules them when a permit slips" |
| "Predictive insights" | "Flags sites that will miss SLA 11 days before they do" |
| "Intelligent automation" | "Reads 9 vendor invoice formats, reconciles them against the work order, and flags variance over 4%" |

Every page has an "intelligence" beat. The beat names the agent (`Dispatch`, `Forecast`, `Evidence`, `Reconcile`, `Permit`, `Copilot`), the verb, and the result.

### 3.5 Trust beats live in fixed positions

Every platform page has:

1. A **stat strip** below the hero (3–4 metrics with mono labels)
2. A **named integration class** somewhere mid-page (1 line, 6–10 integrations)
3. A **proof inline** in any section with an AI claim
4. One **customer voice** — either a pull-quote testimonial or a named operator referenced in a stat

Trust isn't a section; it's a texture.

---

## 4. Content architecture — how every page is built

**Universal section flow** (omit only when a page genuinely doesn't need a section; add only when explicitly justified):

```
1.  HERO              — eyebrow → headline → subhead → 2 CTAs → optional visual
2.  STAT STRIP        — 3–4 metrics with mono labels
3.  THE PROBLEM       — name what's broken in this domain (1 paragraph + 4 bullets)
4.  THE PRIMITIVE/    — what Fieldforce does. Big product UI mock or
    THE CAPABILITY      live demo. The single most important section.
5.  HOW IT WORKS      — 3 numbered steps with mini-illustrations
6.  AGENTS AT WORK    — which agents touch this surface and how
7.  USE CASES         — 2–4 concrete operator scenarios
8.  CUSTOMER VOICE    — one pull-quote
9.  INTEGRATIONS      — named systems, categorized
10. FAQ               — 4–6 real discovery-call questions
11. CTA BAND          — atmospheric closer; primary + "talk to engineering"
```

Hero, primitive section, and CTA are mandatory. Others are template defaults — drop with reason.

---

# PART II — Page blueprints

For each page: URL, template, audience, job-to-be-done, hero copy, section flow, AI beat, trust beats, CTA, internal links.

---

## /platform — Platform overview

**Template:** Narrative (Template A · primary capability hub)
**Audience:** Senior buyer evaluating Fieldforce as a system
**Job:** Convince a serious evaluator that Fieldforce is one coherent platform, not a feature catalog.

### Hero

```
EYEBROW   ── THE PLATFORM ──
HEADLINE  One platform.
          Sites, assets, work, evidence, intelligence.
SUBHEAD   Fieldforce is built around five primitives — the same five whether
          you're deploying 5G small cells in Munich, commissioning chargers
          in Texas, or provisioning 8,400 IoT gateways across six metros.
PRIMARY   Book a demo
SECONDARY Talk to engineering
VISUAL    Network constellation (the brand mark)
```

### Section flow

1. **Stat strip** — `$10B+ assets · 12,000+ sites · 23 countries · 24h first site live`
2. **The five primitives** — 5 cards (Sites, Assets, Work, Evidence — and Intelligence accent-tinted as the entry to /agents)
3. **A work order, end-to-end** — `FeatureSplit` with the synthetic site dashboard. *"From site acquisition to close-out, every team — RF, civil, integration, NOC, finance — sees the same timeline in their language."*
4. **Intelligence layer** — embed the Agents demo from the homepage (5-tab agent demo)
5. **Integrations strip** — categorized, with footnote "If it's already in your stack, we read from it"
6. **FAQ** — 5 discovery-call questions (already drafted)
7. **CTA band** — *"The networks of the future won't run themselves. Fieldforce will."*

### AI messaging beat

The Intelligence section names the five agents and shows one in action. The platform overview doesn't try to explain AI — it shows that AI is a citizen of the platform, with its own primitive slot ("Intelligence") alongside the four operational primitives.

### Trust beats

- $10B+ stat in the hero subhead chain
- 12,000+ sites + 23 countries in the stat strip
- 5 named operators referenced inline in the work-order example
- SOC 2 / ISO 27001 in the FAQ

### CTAs

- **Primary:** Book a demo (→ `/demo`)
- **Secondary:** Talk to engineering (→ `mailto:engineering@fieldforce.com`)
- **Inline:** "Meet the agents" → `/platform/agents`

### Internal links out

→ `/platform/sites`, `/platform/assets`, `/platform/work`, `/platform/evidence` (5 primitive cards)
→ `/platform/agents` (multiple)
→ `/platform/integrations`
→ `/platform/security`
→ `/solutions/telecom`, `/ev-energy`, `/iot` (where "every infrastructure" claim lands)

### Internal links in

← `/` (homepage hero "See the platform" CTA)
← Every other platform page (breadcrumb + nav)

---

## /platform/sites — Sites primitive

**Template:** Reference (Template B)
**Audience:** Operations directors, RF engineers, site-acquisition leads
**Job:** Convince that Fieldforce's "site" object is the right primitive for *their* network shape.

### Hero

```
EYEBROW   ── PRIMITIVE / SITES ──
HEADLINE  Every location.
          One timeline.
SUBHEAD   Sites are the spine of Fieldforce. A site is a location with permits,
          leases, history, photos, work orders, and assets — all on one timeline
          that every team reads.
PRIMARY   Book a demo
SECONDARY All primitives → /platform
```

### Section flow

1. **The model** — what a Site object actually contains: identity, geography, permits, leases, history, evidence, child assets, work timeline. Visual: an annotated site-detail screenshot.
2. **One timeline** — visual + body. *"Acquisition · Build · Operations — the same timeline, in chronological order, every team reads it."*
3. **Cross-vertical, by design** — short side-by-side: a 5G small cell vs. an EV depot vs. a smart-city cabinet — same Site shape, different child assets.
4. **Sites at scale** — performance proof: "Operators run up to 28,000 active sites in a single Fieldforce tenant."
5. **What touches a Site** — agents and integrations: Permit, Dispatch, Evidence, Reconcile + GIS, ERP, NOC.
6. **FAQ** — 4 site-modeling questions
7. **CTA**

### AI beat

Permit and Dispatch agents are featured here as the agents that act *on* sites most directly. One sentence each, link to their detail pages.

### CTAs

- Primary: Book a demo
- Secondary: All primitives (back to `/platform`)
- Inline: "How Permit tracks a site through approval" → `/agents/permit`

### Internal links

→ `/agents/permit`, `/agents/dispatch`, `/platform/evidence`
→ `/platform/integrations` (GIS section anchor)
→ `/solutions/telecom`, `/ev-energy`, `/iot` (where Sites get vertical-specific)

← `/platform`, footer Platform column

---

## /platform/assets — Assets primitive

**Template:** Reference
**Audience:** Asset managers, network planners, finance/CFO offices
**Job:** Convince that Fieldforce models *their* assets with enough fidelity to be the system of record.

### Hero

```
EYEBROW   ── PRIMITIVE / ASSETS ──
HEADLINE  Every asset.
          Modeled, monitored, maintained.
SUBHEAD   Assets in Fieldforce aren't just inventory rows. Each one has a
          model, a state, a history, and a relationship to the work that
          touches it.
PRIMARY   Book a demo
SECONDARY All primitives → /platform
```

### Section flow

1. **Asset hierarchy** — A tower contains sectors; a sector contains radios; a radio has a firmware version. Visual: collapsing tree of one tower asset, expanded.
2. **Polymorphic by design** — the same hierarchy works for chargers (depot → connector → circuit), gateways (cabinet → device → sensor), batteries (string → cell). Three side-by-side abstract diagrams.
3. **Live state** — telemetry sync from your existing pipeline (MQTT, SNMP, OCPP). Asset state is queryable, joinable, and audit-logged.
4. **Lifecycle** — warranty, depreciation, end-of-life flagging. Visual: an asset's lifecycle timeline.
5. **What touches an Asset** — Forecast (failure prediction), Evidence (install verification), Reconcile (replacement-spend reconciliation).
6. **FAQ** — 4 modeling questions ("How do we model a multi-tenant tower?", "What happens when an asset's model changes?")
7. **CTA**

### AI beat

Forecast lives here. *"Forecast scores every asset's failure probability daily — `[N]`-day median lead time on telecom radios, `[N]` days on EVSE, `[N]` days on IoT gateways."*

### CTAs

- Primary: Book a demo
- Secondary: Forecast agent → `/agents/forecast`

### Internal links

→ `/agents/forecast`, `/agents/evidence`, `/agents/reconcile`
→ `/platform/integrations` (telemetry section anchor)
→ `/solutions/telecom`, `/ev-energy`, `/iot`

← `/platform`, footer

---

## /platform/work — Work (Deployment Management)

**Template:** Reference
**Audience:** VPs of network deployment, ops directors, MSP leaders
**Job:** Convince that Fieldforce manages real-world deployment work — at the scale and complexity their team actually runs.

### Hero

```
EYEBROW   ── PRIMITIVE / WORK ──
HEADLINE  Every job.
          Closed with evidence.
SUBHEAD   A work order in Fieldforce is more than a ticket. It's a typed
          workflow with required evidence, dispatched against permits, and
          reconciled against vendor invoices.
PRIMARY   Book a demo
SECONDARY All primitives → /platform
```

### Section flow

1. **Stat strip** — `2.34M work orders YTD · 18–24% crew-day waste eliminated · 24h first site live`
2. **Typed workflows** — A work order has a *type* (site acquisition, deployment, splice, charger commission, sensor install). Each type has its required steps, evidence, and approvers.
3. **From schedule to close** — visual: a work order moving through 6 states (created → permits → scheduled → dispatched → field-verified → reconciled → closed). Each transition is logged, agent-touched, or human-approved.
4. **Deployment at scale** — multi-vendor coordination, multi-crew dispatch, parts/inventory linking, dependency graphs.
5. **Agents at work** — Dispatch (re-routes), Permit (gates), Evidence (validates close), Reconcile (matches spend).
6. **Integrations** — named ITSM, ERP, OSS/BSS systems with payload examples.
7. **FAQ** — 5 deployment-buyer questions ("How do we handle multi-vendor deployments?", "Can we customize the work-order types per region?")
8. **CTA**

### AI beat

This is the page where four of the six agents appear by name. Each gets a one-paragraph integration story and a link to its detail page. AI here = "the agents that close work."

### CTAs

- Primary: Book a demo
- Secondary: Talk to engineering
- Inline: per-agent links (4)

### Internal links

→ `/agents/dispatch`, `/agents/permit`, `/agents/evidence`, `/agents/reconcile`
→ `/platform/sites` (work happens at sites)
→ `/platform/evidence` (work closes with evidence)
→ `/platform/integrations` (ITSM, ERP)
→ `/solutions/telecom`, `/ev-energy`, `/iot`

← `/platform`, `/platform/sites`, footer

---

## /platform/evidence — Evidence primitive

**Template:** Reference
**Audience:** QA managers, compliance officers, ops VPs concerned with audit
**Job:** Convince that Fieldforce makes "what happened in the field" verifiable, queryable, and audit-grade.

### Hero

```
EYEBROW   ── PRIMITIVE / EVIDENCE ──
HEADLINE  Verified field work.
          Or it doesn't close.
SUBHEAD   Evidence is the primitive that ties claims to reality. Every photo,
          GPS pin, signature, and test result is captured, validated, and
          joined to the work order it belongs to.
PRIMARY   Book a demo
SECONDARY Evidence agent → /agents/evidence
```

### Section flow

1. **The shape of evidence** — types: photos, GPS, signatures, test results, scanned barcodes, vendor docs. Each has its validators.
2. **Computer vision on every photo** — 94% first-pass QA, vs. 71% human-only. Show two sample photos: one validated, one flagged.
3. **Geofence + timestamp on every event** — *"Where it happened, when it happened. Both checked. Both immutable."*
4. **Audit-grade trail** — every evidence event is signed, queryable, and exportable for SOC 2 / ISO audits.
5. **Agents at work** — Evidence (validation), Copilot (querying evidence), Forecast (uses evidence to refine models).
6. **Integrations** — Photo storage, identity, compliance frameworks.
7. **FAQ** — 4 audit/compliance questions
8. **CTA**

### AI beat

Evidence agent is the named AI here. *"Trained on 2.4M field photos from the customer base. Detects splice closures, antenna placement, hazards, and missing safety gear at 94% accuracy."*

### CTAs

- Primary: Book a demo
- Secondary: Evidence agent (deep dive)

### Internal links

→ `/agents/evidence`, `/agents/copilot`, `/agents/forecast`
→ `/platform/security` (audit log lives there)
→ `/platform/work` (evidence closes work)

← `/platform`, `/platform/work`, `/platform/security`, footer

---

## /platform/agents — Intelligence (= AI Operations · Workflow Automation · Infrastructure Intelligence)

**Template:** Narrative + reference hybrid
**Audience:** Every senior technical buyer; this is the page that proves the AI claim
**Job:** Make the AI promise *provable* with a single page someone can scroll through and walk away convinced.

### Hero

```
EYEBROW   ── PLATFORM / INTELLIGENCE ──
HEADLINE  Intelligence that operates.
          Not just observes.
SUBHEAD   Most "AI" in infrastructure software summarizes dashboards. Ours
          takes action. Six agents work alongside your team — scheduling,
          validating, predicting, reconciling — so the network gets smarter
          every shift.
PRIMARY   Book a demo
SECONDARY View Dispatch → /agents/dispatch
```

### Section flow

1. **The shift** — short manifesto: *"Dashboards summarize the past. Agents act on the present. Fieldforce ships agents."*
2. **The agent family** — 6 cards (Dispatch · Forecast · Evidence · Reconcile · Permit · Copilot). Each: one-line job, proof number, link to detail page.
3. **Live demo** — embed the 5-tab Agents component from the homepage with all five visualizations.
4. **How agents act** — three principles in plain language:
   - **Read** — agents read your live state (sites, assets, work, telemetry)
   - **Decide** — agents score, predict, route based on rules you set
   - **Act** — agents take action under approval gates you control
5. **Approval & audit** — *"Every agent action is logged, reversible, and gated by your rules."* This is the section that wins security/IT review.
6. **AI architecture** — one diagram + 4 sentences: where models run (your region), how customer data is used (fine-tunes per tenant; no cross-tenant leakage), what happens to model decisions (logged + queryable).
7. **What's coming** — roadmap teaser (next 2 agents). Builds confidence the family expands.
8. **FAQ** — 5 AI-buyer questions ("Can agents act without approval?", "Where does inference run?", "What if the model is wrong?")
9. **CTA**

### AI messaging — the canonical page

This is where AI gets its full treatment. Other pages reference it; this page *is* it. Every claim paired with a verb and a number. Every agent named. Every action gated.

### Trust beats

- 6 named agents with proof numbers
- Live audit log mention (links to `/platform/security`)
- Region-pinned inference mention (links to `/platform/security#residency`)
- Customer-data isolation mention (per-tenant fine-tuning)

### CTAs

- Primary: Book a demo
- Secondary: View Dispatch (most-shipped agent)
- Inline: 5 more agent detail pages

### Internal links

→ `/agents/{dispatch,forecast,evidence,reconcile,permit,copilot}`
→ `/platform/security` (audit + residency)
→ `/platform/integrations` (agents read from your stack)
→ `/changelog` (roadmap context)

← `/`, `/platform`, every other platform page (the AI beat links back here)

---

## /platform/analytics — Analytics & Insights *(NEW)*

**Template:** Reference
**Audience:** CFO/CIO/CTO offices, strategic leadership, business operations
**Job:** Convince that Fieldforce produces actionable, trustworthy operational and financial insight — not just dashboards.

### Hero

```
EYEBROW   ── PLATFORM / ANALYTICS ──
HEADLINE  Numbers your teams trust.
          Numbers your CFO trusts.
SUBHEAD   Every metric in Fieldforce is sourced — back to the work order, the
          asset, the photo, the invoice. Analytics here aren't reports about
          the system; they're the system.
PRIMARY   Book a demo
SECONDARY Talk to engineering
```

### Section flow

1. **The dashboard story** — visual: a real (synthetic) executive dashboard with 4 KPIs, 1 map, 1 trend chart. Each KPI sourced down to the rows.
2. **Source-of-truth, by design** — *"The same number the CFO sees is the same number the field team submitted. No reconciliation gap."*
3. **Three layers of insight**:
   - **Operational** — sites in motion, crew utilization, SLA risk
   - **Financial** — spend vs. budget, vendor variance, asset depreciation
   - **Strategic** — vertical comparison, market-by-market efficiency, year-over-year trends
4. **Build any view, in SQL** — *"For analysts who want the raw graph, we expose every metric and every event in SQL. Connect Looker, Tableau, Hex, or your warehouse."*
5. **Forecasted, not just reported** — Forecast agent feeds risk scores and projections directly into dashboards.
6. **Export anywhere** — webhook to Snowflake/BigQuery/Databricks. Daily / hourly / on-event sync. Audit-logged.
7. **Trust + governance** — read-only views by default; row-level RBAC; every export logged.
8. **FAQ** — 4 BI-buyer questions ("Can our data team write custom dashboards?", "Does this replace our BI tool?", "What's the SQL latency?")
9. **CTA**

### AI beat

Forecast is the AI presence here. *"Forecasted SLA risk, forecasted vendor velocity, forecasted asset failure — surfaced in your dashboards, not in a separate AI tool."*

### CTAs

- Primary: Book a demo
- Secondary: Talk to engineering

### Internal links

→ `/agents/forecast`, `/agents/copilot`
→ `/platform/integrations` (warehouse exports)
→ `/platform/security` (RBAC)

← `/platform`, footer

---

## /platform/mobile — Mobile Operations *(NEW)*

**Template:** Reference
**Audience:** Field operations leads, MSP managers, contractor coordinators
**Job:** Convince that Fieldforce's mobile experience is the strongest in the category — built for cold weather, dropped connections, and gloved hands.

### Hero

```
EYEBROW   ── PLATFORM / MOBILE ──
HEADLINE  Built for the field.
          Not adapted to it.
SUBHEAD   The Fieldforce mobile app is the work order, the camera, the
          checklist, the dispatch radio — running on iOS and Android, online
          or offline, in the cold and in the dark.
PRIMARY   Book a demo
SECONDARY Download — App Store / Play Store
```

### Section flow

1. **What field crews actually need** — the four jobs the app solves:
   - See your day (today's work, with permits, parts, dependencies)
   - Document the work (photos, signatures, geofence, test results)
   - Close the work (with evidence pre-validated by Evidence agent on-device)
   - Stay in sync (offline-first, syncs when reconnected)
2. **Offline-first, by design** — *"Designed for tower climbers, fiber techs, and rural EV installers. Drop a connection at 3pm, sync at 6pm. Nothing is lost."*
3. **Photos + Evidence on-device** — CV runs locally to flag missing closures *before* the crew leaves the site.
4. **Bilingual + accessible** — English, Spanish, Arabic, Urdu, German out of the box. Larger touch targets for gloved hands. High-contrast mode for outdoor sun.
5. **Dispatch on the move** — push notifications when Dispatch reroutes; one-tap acknowledgment.
6. **Built into the platform** — same data model as the web app. No mobile/desktop drift.
7. **For contractor crews** — limited-scope identity per contractor; no full-tenant access; auto-revoke at job close.
8. **FAQ** — 4 field-buyer questions
9. **CTA**

### AI beat

Evidence agent runs *on-device* CV. Dispatch agent re-routes through the app. Both named, both linked.

### CTAs

- Primary: Book a demo
- Secondary: App Store / Play Store badges (secondary actions)

### Internal links

→ `/agents/evidence`, `/agents/dispatch`
→ `/platform/security` (contractor identity)

← `/platform`, footer, every solution page

---

## /platform/integrations — Integrations

**Template:** Reference
**Audience:** Solutions architects, IT directors, integration leads
**Job:** Answer "does it plug into our stack?" in a single page.

### Hero

```
EYEBROW   ── PLATFORM / INTEGRATIONS ──
HEADLINE  If it's already in your stack,
          we read from it.
SUBHEAD   Fieldforce reads from your existing systems and writes back to them.
          We're not trying to replace your CRM or ERP. We're trying to be the
          system of record for the field — the layer between them.
PRIMARY   Book a demo
SECONDARY Integration recipes → /docs
```

### Section flow

1. **The 9 integration categories** — categorized grid (already drafted). ERP · OSS/BSS · ITSM · GIS · Identity · Charging · Telemetry · Standards · Communication.
2. **Reads from. Writes back. Logged.** — diagram: customer system ↔ Fieldforce ↔ field. Bi-directional sync, retry, reconciliation.
3. **Open API + webhooks** — REST + GraphQL + event webhooks. OpenAPI spec auto-published. Versioned with 12-month deprecation policy.
4. **Custom integrations in 1–4 weeks** — for non-listed systems, the engineering team builds. Pricing transparent.
5. **What we don't do** — *"We don't replace your CRM, your ERP, your NOC, or your data warehouse. We integrate with them. We're the field layer; they're the system layer."*
6. **Pre-built recipes** — link to /docs/recipes (4–8 popular ones)
7. **FAQ** — 5 integration-buyer questions
8. **CTA**

### AI beat

*"Agents read from your integrations and write back to them. Reconcile parses your ERP's invoice format; Forecast reads your NOC's telemetry; Dispatch writes work-order state into ServiceNow. AI doesn't bypass your stack — it operates through it."*

### CTAs

- Primary: Book a demo
- Secondary: See recipes (→ `/docs`)
- Inline: per-category anchors

### Internal links

→ `/docs` (recipes, API)
→ `/platform/security` (identity, audit)
→ all solution pages (vertical integrations called out)

← `/platform`, every solution page

---

## /platform/security — Security & trust

**Template:** Document (Template C)
**Audience:** Security teams, compliance officers, IT/CIO offices
**Job:** Answer the security review before it's asked.

### Hero

```
EYEBROW   ── PLATFORM / SECURITY ──
HEADLINE  Security as architecture.
          Not policy.
SUBHEAD   SOC 2 Type II, ISO 27001, region-pinned residency, immutable audit
          log on every action — agent or human. Built so your security team
          can say yes.
PRIMARY   Trust center → /trust
SECONDARY Request SOC 2 → mailto:security@…
```

### Section flow

1. **Compliance grid** — 6 cards: SOC 2 Type II · ISO 27001 · GDPR · PCI DSS · NEVI · AFIR. Each with status badge.
2. **Architecture grid** — 6 cards: Encryption · Identity & RBAC · Audit log · Residency · Sub-processors · Vulnerability disclosure.
3. **The audit log** — *"Every action — agent action, user action, API call — logged, signed, queryable for SOC 2 audit."* Show a sample log entry.
4. **AI security model** — *"Agents act under approval rules you set. No agent action is unbound. Every model decision is logged with its inputs and confidence."*
5. **Customer-managed keys** — Enterprise tier supports BYOK in your KMS.
6. **Resources** — link to trust center for downloads (DPA, sub-processor list, VPAT, security pack).
7. **FAQ** — 5 security-team questions
8. **CTA**

### AI beat

*"Every agent action is logged, gated, reversible. We treat AI like any other privileged actor — with named identity, scoped permissions, and a complete audit trail."* This is the AI claim that wins enterprise.

### Trust beats

The whole page is trust beats. Real audit log sample, real compliance badges, real downloadable artifacts.

### CTAs

- Primary: Trust center (→ `/trust`)
- Secondary: Email security@

### Internal links

→ `/trust`, `/trust/status`
→ `/platform/agents` (the AI security model)

← Every page (footer trust pill, "Security" footer link)

---

## /solutions — Industry Solutions parent

**Template:** Narrative
**Audience:** Vertical-specific buyers landing here from search or social
**Job:** Hand off to the correct vertical page in <5 seconds.

### Hero

```
EYEBROW   ── SOLUTIONS ──
HEADLINE  One platform.
          Every infrastructure.
SUBHEAD   Telecom today, EV and IoT next. Same primitives — sites, assets,
          work, evidence — running every operator, in every vertical, on one
          platform.
PRIMARY   Book a demo
SECONDARY See the platform → /platform
```

### Section flow

1. **The three worlds** — three large tiles (Telecom, EV & Energy, IoT). Each links to its vertical page.
2. **Why one platform** — short editorial: *"Operators used to need three platforms. Modern infrastructure groups need one — because the primitives are the same and the ops team is the same."*
3. **Cross-vertical proof** — strip showing operators that run Fieldforce across multiple verticals (Engro, others)
4. **Use cases by role** — small grid: Mobile operators · Tower companies · MSPs · OEMs · CPOs · Smart cities · Private 5G ops
5. **CTA band**

### Internal links

→ `/solutions/telecom`, `/ev-energy`, `/iot`
→ `/platform`

← `/`, mega-menu

---

## /solutions/telecom — Telecom & 5G *(network operations folds in)*

**Template:** Narrative (vertical)
**Audience:** Mobile operators, tower companies, MSPs, OEMs, NOC managers
**Job:** Convince a telecom buyer that Fieldforce was built for *their* network.

(This page is already shipped at full content fidelity — see `app/solutions/telecom/page.tsx`. The content blueprint below is the authoritative reference.)

### Hero

```
EYEBROW   ── SOLUTIONS / TELECOM ──
HEADLINE  Build the network. Run the network.
          One platform.
SUBHEAD   From 5G site builds to fiber drops to small-cell densification,
          Fieldforce is how operators deploy at carrier scale and run at
          carrier reliability. DISH, Veon, Zain, and operators in 23
          countries trust Fieldforce with $10B+ of network assets.
```

### Section flow

1. Stat strip ($10B · 12K sites · 23 countries · 94% QA)
2. **The problem** — 4 honest pain points, named
3. **For mobile operators** — FeatureSplit + bullets + CTA
4. **For tower companies** — FeatureSplit reverse + bullets + CTA
5. **Network operations** *(folds in here)* — "Where deployment becomes operations" — short editorial: *"The same platform that built your network operates it. NOC integration, SLA-aware ops, predictive maintenance — without a second tool."*
6. **What you get** — 6-feature grid
7. **Customer voice** — pull-quote
8. **Telecom-native integrations** — TM Forum APIs, OSS/BSS, GIS
9. **Discovery FAQ** — 5 questions
10. **CTA band**

### Internal anchors (for /platform pages to link in)

- `#mobile-operators`
- `#tower-companies`
- `#network-operations`
- `#msps`
- `#oems`

### Internal links

→ `/platform/agents`, `/platform/work`, `/platform/integrations`
→ `/customers/{dish,veon,zain,smartsky}`

← `/`, `/solutions`, mega-menu, every platform page (links from "telecom" mention)

---

## /solutions/ev-energy — EV & Energy

**Template:** Narrative (vertical)
**Audience:** Charging network operators, fleet electrification leads, utility DER managers
**Job:** Convince an EV/energy buyer that telecom-grade rollout muscle is exactly what their charging program needs.

### Hero

```
EYEBROW   ── SOLUTIONS / EV & ENERGY ──
HEADLINE  The deployment OS for charging
          networks and energy assets.
SUBHEAD   Same platform that runs $10B+ of telecom infrastructure — purpose-
          built for the new physics of EV and energy. Commission chargers in
          days, not quarters. Operate them at telecom-grade reliability.
```

### Section flow

1. Stat strip (downtime · failure lead time · margin recovery · first site live)
2. **The problem** — 4 EV-specific pain points (power-gated planning, OCPP coordination, reactive ops, untrusted unit economics)
3. **What you get** — Commissioning · Depot operations · Energy asset mgmt · Utility coordination
4. **Same primitives, new physics** — short editorial: how the Site/Asset/Work/Evidence model maps to chargers, DERs, batteries
5. **Customer voice** — strongest EV reference (or telecom credibility transfer until landed)
6. **EV-native integrations** — OCPP, ISO 15118, OpenADR, OEMs, NEVI/AFIR
7. **Discovery FAQ** — 5 EV-buyer questions
8. **CTA band**

### Internal links

→ `/platform/agents`, `/platform/integrations` (charging protocols)
→ `/customers/engro` (or strongest EV ref when ready)

← `/`, `/solutions`, mega-menu

### Content gap (high-priority)

This page needs a real EV customer voice before launch. Even a small reference is better than launching without one. Surface this in launch checklist.

---

## /solutions/iot — IoT & Networks of Things

**Template:** Narrative (vertical)
**Audience:** Smart-city ops, private 5G operators, industrial IoT leads
**Job:** Convince that Fieldforce is the missing operations layer for distributed device fleets.

### Hero

```
EYEBROW   ── SOLUTIONS / IoT ──
HEADLINE  Every gateway, sensor, and node.
          One platform.
SUBHEAD   From smart-city deployments to private 5G networks to industrial
          IoT, Fieldforce is how operators run distributed device fleets at
          scale — without standing up a new ops team for every fleet.
```

### Section flow

1. Stat strip
2. **Three operating shapes** — Smart cities · Private 5G · Industrial IoT
3. **The IoT operations gap** — *"Device platforms run the device. We run the fleet operation around it. Both matter."*
4. **What you get** — Provisioning · Health · Maintenance · Compliance
5. **OT/IT separation** — section for industrial buyers
6. **IoT-native integrations** — Soracom, Particle, AWS IoT, MQTT, etc.
7. **Discovery FAQ** — 4 IoT-buyer questions
8. **CTA band**

### Internal links

→ `/platform/agents`, `/platform/integrations`
→ `/customers/{smart-city customer when landed}`

### Content gap

Same as EV — needs a real customer reference for IoT. Acknowledge in launch checklist.

---

# PART III — Navigation, linking, and conversion

## 1. Updated mega-menu architecture

Reflecting the platform IA above, the mega-menu's "Platform" group now reads:

```
PLATFORM
┌─────────────────────────┬──────────────────────────┬──────────────────────────┐
│ PRIMITIVES              │ CAPABILITIES             │ TRUST + INTEGRATION      │
│ ─────                   │ ─────                    │ ─────                    │
│ ◐ Sites                 │ ✦ Intelligence           │ ◐ Integrations           │
│   One source of truth     6 agents that act          OSS/BSS, ERP, OCPP, MQTT │
│                                                                              │
│ ▣ Assets                │ ◓ Analytics              │ ◓ Security & trust       │
│   Towers → splices        Numbers your CFO trusts    SOC 2, ISO, residency   │
│                                                                              │
│ ⊕ Work                  │ ◑ Mobile                 │ ────────────────         │
│   Schedule → close        Built for the field        What's new?             │
│                                                                              │
│ ✓ Evidence              │                          │ → /changelog             │
│   CV-verified                                      │                          │
└─────────────────────────┴──────────────────────────┴──────────────────────────┘
```

Three columns: **Primitives** (data shapes) · **Capabilities** (what the platform does as a system) · **Trust + Integration** (the cross-cutting concerns). The Solutions mega-menu stays as-is.

This is a small but important update to `lib/routes.ts` — three platform groups instead of two. The 3-column mega-menu component already supports it.

---

## 2. Internal linking strategy — the cross-link graph

A platform page's job isn't just to inform — it's to hand off readers correctly. Each page is a *hub* with 5–9 cross-links. The complete graph:

```
                          /platform
                              │
            ┌─────────┬───────┼────────┬──────────┐
            │         │       │        │          │
       /sites    /assets   /work  /evidence  /agents
          │         │       │        │          │
          │         └───┐ ┌─┘        │          │
          │             │ │          │          │
          │            /work uses Sites + Assets + Evidence
          │
          │  ←  /agents/permit, /agents/dispatch
          │
       /assets ← /agents/forecast, /agents/evidence
       /work   ← /agents/dispatch, /agents/permit, /agents/evidence, /agents/reconcile
       /evidence ← /agents/evidence, /agents/copilot, /agents/forecast

       /agents (all) ↔ /platform/security (audit + governance)
       /agents (all) ↔ /platform/integrations (read/write surface)
       /agents (all) ↔ /platform/analytics (forecast feeds dashboards)

       Every solution page links INTO 3–5 platform pages
       Every platform page links OUT to 1–3 solution pages
```

### The four required cross-link slots on every platform page

1. **In the hero or hero-adjacent CTA** — primary "Book a demo," secondary "Talk to engineering" (canonical) or to a peer page.
2. **In the "Agents at work" section** — links to 1–3 agent detail pages.
3. **In the "Integrations" or "What touches this" section** — link to `/platform/integrations` and 1 solution.
4. **In the final CTA band** — primary "Book a demo," secondary "Talk to engineering."

If a platform page doesn't link into both the agent layer and the solution layer, it's stuck — fix it.

---

## 3. Conversion pathways — the three primary flows

### Path A — The buyer (warm)

```
[LinkedIn / event / intro]
   ↓
/                       Homepage (7s positioning)
   ↓
/solutions/<vertical>   "Built for me" recognition
   ↓
/platform               "It's a real platform"
   ↓
/customers/<case>       "It works for operators like us"
   ↓
/demo                   Book
```

**5 minutes, 5 clicks.** Optimize this path: every step has a clear next destination, every page has a "Book a demo" visible at every scroll depth.

### Path B — The engineer (cold)

```
[Google: "OCPP integration platform"]
   ↓
/docs/recipes/ocpp      Tactical landing
   ↓
/platform/integrations  "Real integration story"
   ↓
/platform/agents        "Modern AI architecture"
   ↓
/changelog              "They ship"
   ↓
mailto:engineering@…    Talk
```

Engineers won't book a demo cold. They want a developer-grade entry point. The "Talk to engineering" CTA wins this path.

### Path C — The champion (sharing internally)

```
[Slack: "check this out"]
   ↓
/platform/<specific>    Atomic, paste-able
   ↓
/pricing                "What does it cost?"
   ↓
/trust                  "Will security approve?"
   ↓
[forward to boss]
```

Every platform page must pass the "paste-into-Slack and convince someone" test. That requires:

- Strong, self-contained heroes (no "see homepage for context")
- One clear takeaway above the fold
- A page-specific CTA (not just generic)

---

## 4. SEO surface mapping (light)

Each page targets one primary intent + 2–3 secondary intents:

| Page | Primary intent | Secondary intents |
|---|---|---|
| `/platform` | "infrastructure operations platform" | "telecom deployment platform," "field operations software" |
| `/platform/sites` | "site lifecycle management" | "5G site management," "telecom site tracker" |
| `/platform/assets` | "telecom asset management" | "EV charger asset management," "IoT device fleet" |
| `/platform/work` | "field service work order" | "telecom deployment workflow," "5G dispatch software" |
| `/platform/evidence` | "field photo verification" | "computer vision QA," "site inspection software" |
| `/platform/agents` | "AI agents for infrastructure" | "AIOps for field operations," "agentic infrastructure platform" |
| `/platform/analytics` | "telecom operations analytics" | "infrastructure KPI dashboard" |
| `/platform/mobile` | "field service mobile app" | "telecom field crew app," "EV technician app" |
| `/platform/integrations` | "telecom integration ServiceNow / Oracle / SAP" | "OCPP integration platform" |
| `/platform/security` | "SOC 2 telecom platform" | "ISO 27001 field operations software" |

Not optimizing for these directly drives content choices — the right title tag, h1, first paragraph, and one canonical phrase per page.

---

## 5. Content rollout sequence

Don't author all 14 platform pages at once. Sequence:

**Phase 1 — Reference set (already shipped)**
- `/platform` (full)
- `/platform/work` *(promote from skeleton — it's the most-searched)*
- `/platform/agents` (full content)
- `/platform/integrations` (already in good shape)
- `/platform/security` (already in good shape)

**Phase 2 — Primitives (4 weeks)**
- `/platform/sites` *(promote)*
- `/platform/assets` *(promote)*
- `/platform/evidence` *(promote)*
- 6 × `/agents/[slug]` to full reference fidelity (Dispatch first; it ships in every demo)

**Phase 3 — New capabilities (4 weeks)**
- `/platform/analytics` *(NEW)*
- `/platform/mobile` *(NEW)*

**Phase 4 — Solution depth**
- EV customer reference landed → `/solutions/ev-energy` lifts to full
- IoT customer reference landed → `/solutions/iot` lifts to full

**Through every phase:** changelog cadence holds (every 2 weeks). Customer cases land at 1 per month. Engineering blog posts at 1 per month.

---

# Appendix — Ready-to-paste hero copy table

For copywriters and PMs needing to drop content into the existing component scaffold without re-reading the doc:

| URL | Eyebrow | Headline (line 1) | Headline (line 2) |
|---|---|---|---|
| `/platform` | THE PLATFORM | One platform. | Sites, assets, work, evidence, intelligence. |
| `/platform/sites` | PRIMITIVE / SITES | Every location. | One timeline. |
| `/platform/assets` | PRIMITIVE / ASSETS | Every asset. | Modeled, monitored, maintained. |
| `/platform/work` | PRIMITIVE / WORK | Every job. | Closed with evidence. |
| `/platform/evidence` | PRIMITIVE / EVIDENCE | Verified field work. | Or it doesn't close. |
| `/platform/agents` | PLATFORM / INTELLIGENCE | Intelligence that operates. | Not just observes. |
| `/platform/analytics` | PLATFORM / ANALYTICS | Numbers your teams trust. | Numbers your CFO trusts. |
| `/platform/mobile` | PLATFORM / MOBILE | Built for the field. | Not adapted to it. |
| `/platform/integrations` | PLATFORM / INTEGRATIONS | If it's already in your stack, | we read from it. |
| `/platform/security` | PLATFORM / SECURITY | Security as architecture. | Not policy. |
| `/solutions` | SOLUTIONS | One platform. | Every infrastructure. |
| `/solutions/telecom` | SOLUTIONS / TELECOM | Build the network. Run the network. | One platform. |
| `/solutions/ev-energy` | SOLUTIONS / EV & ENERGY | The deployment OS for charging | networks and energy assets. |
| `/solutions/iot` | SOLUTIONS / IoT | Every gateway, sensor, and node. | One platform. |

This table is the fastest way to verify that the whole platform speaks one voice: every line is verb-led, specific, and in the same engineering register. If a future page doesn't fit the table, the page (or its title) is wrong.
