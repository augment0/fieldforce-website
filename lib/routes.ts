/**
 * Single source of truth for the site's routes and navigation copy.
 * Imported by Nav, MegaMenu, Footer, Sitemap. Edit here, ripple everywhere.
 *
 * Information Architecture (v3 — lifecycle-led, AI-first):
 *
 *   Why Fieldforce → positioning (what makes us different)
 *   Platform       → what we do, organized by infrastructure lifecycle
 *                    (Plan → Build → Operate → Monetize) + modules + AI agents
 *   Industries     → who we serve, grouped by macro-narrative
 *                    (Digital Infrastructure · Energy & Mobility · Smart & Connected)
 *   Customers      → proof ($10B+ assets, DISH, Veon, Zain, SmartSky, ...)
 *   Resources      → learn, support, ROI
 *
 * Pattern inspired by Sitetracker's "What We Do / Who We Serve" structure,
 * adapted for an AI-first infrastructure operations platform.
 */

export type NavLink = {
  href: string;
  label: string;
  description?: string;
  icon?: NavIcon;
};

export type NavIcon =
  | "site"
  | "asset"
  | "work"
  | "evidence"
  | "intel"
  | "agent"
  | "vertical"
  | "doc"
  | "outcome"
  | "plan"
  | "build"
  | "operate"
  | "monetize";

export type NavGroup = {
  label: string;
  items: NavLink[];
};

/**
 * Featured top-row card (e.g. a lifecycle stage) shown above the column
 * grid in a mega-menu. Same shape as NavLink but `description` is required
 * because these cards always show their tagline.
 */
export type FeaturedCard = {
  href: string;
  label: string;
  description: string;
  icon: NavIcon;
};

/**
 * Right-rail promotional callout inside a mega-menu. Used to spotlight
 * the AI agent fleet, a flagship case study, or a new product launch.
 */
export type WhatsNew = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta?: string;
  /** Optional accent label (e.g. "NEW", "FEATURED"). */
  tag?: string;
};

/**
 * Full mega-menu configuration for a top-nav item.
 *   - `featured` (optional) — top row of large cards (lifecycle stages).
 *   - `groups`             — the column grid of links.
 *   - `whatsNew` (optional) — right-rail promo callout.
 */
export type MegaMenu = {
  featured?: {
    label: string;
    items: FeaturedCard[];
  };
  groups: NavGroup[];
  whatsNew?: WhatsNew;
};

export type TopNavItem = {
  href: string;
  label: string;
  /** When present, the item opens a mega-menu instead of routing on hover. */
  menu?: MegaMenu;
};

/* ─────────────────────────────────────────────────────────────
   PLATFORM — Lifecycle (featured) + Modules + Intelligence + What's New.
   This is the heart of the new IA: the lifecycle row tells buyers
   "we cover every stage of infrastructure operations".
   ───────────────────────────────────────────────────────────── */
const lifecycle: FeaturedCard[] = [
  {
    href: "/platform/plan",
    label: "Plan & Design",
    description: "Align sites, leases, permits, and capital for handoff.",
    icon: "plan",
  },
  {
    href: "/platform/build",
    label: "Build & Deploy",
    description: "Execute builds with schedule, cost, and quality control.",
    icon: "build",
  },
  {
    href: "/platform/operate",
    label: "Operate & Maintain",
    description: "Coordinate field crews to meet SLAs at carrier reliability.",
    icon: "operate",
  },
  {
    href: "/platform/monetize",
    label: "Monitor & Monetize",
    description: "Track asset condition, lease portfolios, financial impact.",
    icon: "monetize",
  },
];

const platformMenu: MegaMenu = {
  featured: {
    label: "Lifecycle",
    items: lifecycle,
  },
  groups: [
    {
      label: "Modules",
      items: [
        { href: "/platform/sites",        label: "Sites",        description: "Locations & lease lifecycle in one record.", icon: "site" },
        { href: "/platform/assets",       label: "Assets",       description: "Towers, chargers, gateways, splices.",       icon: "asset" },
        { href: "/platform/work",         label: "Work",         description: "Schedule, dispatch, close with evidence.",   icon: "work" },
        { href: "/platform/evidence",     label: "Evidence",     description: "CV-verified field work.",                    icon: "evidence" },
        { href: "/platform/mobile",       label: "Field App",    description: "Built for the field, not adapted to it.",   icon: "agent" },
        { href: "/platform/analytics",    label: "Analytics",    description: "Numbers your CFO trusts.",                  icon: "intel" },
        { href: "/platform/integrations", label: "Integrations", description: "OSS/BSS, ERP, OCPP, MQTT.",                 icon: "intel" },
        { href: "/platform/security",     label: "Security",     description: "SOC 2, ISO 27001, RBAC.",                   icon: "doc" },
      ],
    },
    {
      label: "Intelligence",
      items: [
        { href: "/platform/agents",            label: "AI Agents",      description: "Six agents that act, not just observe.", icon: "intel" },
        { href: "/agents/dispatch",            label: "Dispatch Agent", description: "Re-routes crews against risk in real time.", icon: "agent" },
        { href: "/agents/forecast",            label: "Forecast Agent", description: "Surfaces SLA breaches 11 days early.",   icon: "agent" },
        { href: "/agents/evidence",            label: "Evidence Agent", description: "Computer-vision QA on every closure.",   icon: "agent" },
        { href: "/agents/reconcile",           label: "Reconcile Agent", description: "Vendor invoices matched to actual work.", icon: "agent" },
        { href: "/agents/permit",              label: "Permit Agent",   description: "Tracks every permit, escalates the slip.", icon: "agent" },
        { href: "/agents/copilot",             label: "Copilot",        description: "NL → SQL across your ops data fabric.",   icon: "agent" },
      ],
    },
  ],
  whatsNew: {
    eyebrow: "AI-FIRST PLATFORM",
    title: "Meet the agent fleet",
    description:
      "Six production AI agents that act on your field data — dispatch, forecast, evidence, reconcile, permit, copilot.",
    href: "/platform/agents",
    cta: "Explore the agents",
    tag: "New",
  },
};

/* ─────────────────────────────────────────────────────────────
   INDUSTRIES — grouped by macro-narrative, not a flat list.
   ───────────────────────────────────────────────────────────── */
const industriesMenu: MegaMenu = {
  groups: [
    {
      label: "Digital Infrastructure",
      items: [
        { href: "/industries",                   label: "Overview",                description: "Every digital infra vertical, one platform.",   icon: "vertical" },
        { href: "/industries/telecom",           label: "Telecom & 5G",            description: "Carrier-scale build & ops.",                    icon: "vertical" },
        { href: "/industries/fiber-networks",    label: "Fiber Networks",          description: "FTTH builds, span-by-span evidence.",           icon: "vertical" },
        { href: "/industries/tower-companies",   label: "Tower Companies",         description: "Site lifecycle, lease lifecycle.",              icon: "vertical" },
        { href: "/industries/private-networks",  label: "Private 5G & Enterprise", description: "CBRS, on-prem RAN, enterprise networks.",       icon: "vertical" },
        { href: "/industries/data-centers",      label: "Data Centers",            description: "From real estate to fit-out to operations.",    icon: "vertical" },
      ],
    },
    {
      label: "Energy & Mobility",
      items: [
        { href: "/industries/ev-energy",         label: "EV Charging Networks",    description: "CPOs scaling from 1k to 100k chargers.",         icon: "vertical" },
        { href: "/industries/ev-energy#energy",  label: "Energy & Renewables",     description: "Solar, storage, microgrids, DERs.",              icon: "vertical" },
      ],
    },
    {
      label: "Smart & Connected",
      items: [
        { href: "/industries/smart-cities",            label: "Smart Cities",                description: "Streetlights, sensors, cabinets, signage.",  icon: "vertical" },
        { href: "/industries/iot",                     label: "IoT & Connected Devices",     description: "Distributed device fleets, one platform.",  icon: "vertical" },
        { href: "/industries/engineering-construction", label: "Engineering & Construction", description: "E&C and field service contractors.",         icon: "vertical" },
      ],
    },
  ],
  whatsNew: {
    eyebrow: "CUSTOMER STORY",
    title: "Four systems retired, 22% saved",
    description:
      "SmartSky digitized asset management and field operations across the network — and cut crew-day waste by 22%.",
    href: "/customers",
    cta: "Read the story",
    tag: "Featured",
  },
};

/* ─────────────────────────────────────────────────────────────
   RESOURCES — learn, support, ROI.
   ───────────────────────────────────────────────────────────── */
const resourcesMenu: MegaMenu = {
  groups: [
    {
      label: "Learn",
      items: [
        { href: "/blog",               label: "Blog",              description: "Field notes & engineering posts.",     icon: "doc" },
        { href: "/resources/webinars", label: "Webinars & events", description: "Live sessions and recordings.",        icon: "doc" },
        { href: "/resources/roi",      label: "ROI calculator",    description: "Estimate impact for your network.",    icon: "outcome" },
      ],
    },
    {
      label: "Build with",
      items: [
        { href: "/docs",                                label: "Docs",        description: "Developer & API reference.",         icon: "doc" },
        { href: "https://helpdesk.getfieldforce.com/",  label: "Help Center", description: "Product help & how-tos.",            icon: "doc" },
        { href: "/changelog",                           label: "Changelog",   description: "Public release log.",                icon: "doc" },
        { href: "/pricing",                             label: "Pricing",     description: "Plans, tiers, and what's included.", icon: "doc" },
      ],
    },
    {
      label: "Company",
      items: [
        { href: "/about",   label: "About us", description: "Who we are & where we're going.", icon: "doc" },
        { href: "/careers", label: "Careers",  description: "Open roles, hybrid & remote.",   icon: "agent" },
        { href: "/trust",   label: "Trust",    description: "SOC 2, ISO 27001, residency.",  icon: "doc" },
        { href: "/contact", label: "Contact",  description: "Talk to sales, partners, press.", icon: "doc" },
      ],
    },
  ],
  whatsNew: {
    eyebrow: "JUST LAUNCHED",
    title: "ROI calculator",
    description:
      "Model deployment time, cost, and lease leakage savings on your network in 5 minutes.",
    href: "/resources/roi",
    cta: "Run the model",
    tag: "New",
  },
};

/* ─────────────────────────────────────────────────────────────
   TOP NAV — 5 items, Sitetracker-pattern, AI-first adaptation.
   ───────────────────────────────────────────────────────────── */
export const topNav: TopNavItem[] = [
  { href: "/why",         label: "Why Fieldforce" },
  { href: "/platform",    label: "Platform",      menu: platformMenu },
  { href: "/industries",  label: "Industries",    menu: industriesMenu },
  { href: "/customers",   label: "Customers" },
  { href: "/resources",   label: "Resources",     menu: resourcesMenu },
];

/* ─────────────────────────────────────────────────────────────
   FOOTER — mirrors nav, expanded to third-tier links.
   ───────────────────────────────────────────────────────────── */
export const footerCols: NavGroup[] = [
  {
    label: "PLATFORM",
    items: [
      { href: "/why",                 label: "Why Fieldforce" },
      { href: "/platform/plan",       label: "Plan & Design" },
      { href: "/platform/build",      label: "Build & Deploy" },
      { href: "/platform/operate",    label: "Operate & Maintain" },
      { href: "/platform/monetize",   label: "Monitor & Monetize" },
      { href: "/platform/agents",     label: "AI Agents" },
      { href: "/platform/integrations", label: "Integrations" },
      { href: "/platform/security",   label: "Security" },
    ],
  },
  {
    label: "INDUSTRIES",
    items: [
      { href: "/industries/telecom",                  label: "Telecom & 5G" },
      { href: "/industries/fiber-networks",           label: "Fiber Networks" },
      { href: "/industries/tower-companies",          label: "Tower Companies" },
      { href: "/industries/private-networks",         label: "Private 5G & Enterprise" },
      { href: "/industries/data-centers",             label: "Data Centers" },
      { href: "/industries/ev-energy",                label: "EV Charging & Energy" },
      { href: "/industries/iot",                      label: "IoT & Connected Devices" },
      { href: "/industries/smart-cities",             label: "Smart Cities" },
      { href: "/industries/engineering-construction", label: "Engineering & Construction" },
    ],
  },
  {
    label: "RESOURCES",
    items: [
      { href: "/customers",                          label: "Customer stories" },
      { href: "/blog",                               label: "Blog" },
      { href: "/resources/webinars",                 label: "Webinars" },
      { href: "/resources/roi",                      label: "ROI calculator" },
      { href: "https://helpdesk.getfieldforce.com/", label: "Help Center" },
      { href: "/docs",                               label: "Docs" },
      { href: "/changelog",                          label: "Changelog" },
      { href: "/trust/status",                       label: "Status" },
    ],
  },
  {
    label: "COMPANY",
    items: [
      { href: "/about",                            label: "About" },
      { href: "/about#leadership",                 label: "Leadership" },
      { href: "/about#advisory-board",             label: "Advisory board" },
      { href: "/careers",                          label: "Careers" },
      { href: "/trust",                            label: "Trust center" },
      { href: "/contact",                          label: "Contact" },
      { href: "mailto:engineering@fieldforce.com", label: "engineering@" },
    ],
  },
];
