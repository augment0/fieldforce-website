/**
 * Single source of truth for the site's routes and navigation copy.
 * Imported by Nav, MegaMenu, Footer, Sitemap. Edit here, ripple everywhere.
 */

export type NavLink = {
  href: string;
  label: string;
  description?: string;
  /** Optional micro-icon glyph for mega-menu cells. */
  icon?: "site" | "asset" | "work" | "evidence" | "intel" | "agent" | "vertical" | "doc";
};

export type NavGroup = {
  label: string;
  items: NavLink[];
};

export const platformGroups: NavGroup[] = [
  {
    label: "Primitives",
    items: [
      { href: "/platform/sites",    label: "Sites",    description: "One source of truth per location.", icon: "site" },
      { href: "/platform/assets",   label: "Assets",   description: "Towers, chargers, gateways, splices.", icon: "asset" },
      { href: "/platform/work",     label: "Work",     description: "Schedule, dispatch, close with evidence.", icon: "work" },
      { href: "/platform/evidence", label: "Evidence", description: "CV-verified field work.", icon: "evidence" },
    ],
  },
  {
    label: "Capabilities",
    items: [
      { href: "/platform/agents",    label: "Intelligence", description: "Six agents that act, not just observe.", icon: "intel" },
      { href: "/platform/analytics", label: "Analytics",    description: "Numbers your CFO trusts.",              icon: "intel" },
      { href: "/platform/mobile",    label: "Mobile",       description: "Built for the field, not adapted to it.", icon: "agent" },
    ],
  },
  {
    label: "Trust + integration",
    items: [
      { href: "/platform/integrations", label: "Integrations", description: "OSS/BSS, ERP, OCPP, MQTT.", icon: "intel" },
      { href: "/platform/security",     label: "Security",     description: "SOC 2, ISO 27001, RBAC.", icon: "doc" },
      { href: "/changelog",             label: "Changelog",    description: "Public release log.",     icon: "doc" },
    ],
  },
];

export const solutionsGroups: NavGroup[] = [
  {
    label: "By industry",
    items: [
      { href: "/solutions/telecom",   label: "Telecom & 5G",      description: "Carrier-scale build & ops.", icon: "vertical" },
      { href: "/solutions/ev-energy", label: "EV & Energy",       description: "Charging networks & energy assets.", icon: "vertical" },
      { href: "/solutions/iot",       label: "IoT & Networks",    description: "Distributed device fleets.", icon: "vertical" },
    ],
  },
  {
    label: "By role",
    items: [
      { href: "/solutions/telecom#mobile-operators",  label: "Mobile operators",   description: "5G, fiber, densification." },
      { href: "/solutions/telecom#tower-companies",   label: "Tower companies",    description: "Site lifecycle, leasing." },
      { href: "/solutions/telecom#msps",              label: "MSPs & service",    description: "Multi-customer ops." },
      { href: "/solutions/telecom#oems",              label: "OEMs",               description: "Field commissioning." },
    ],
  },
];

/** The flat top-level nav. */
export const topNav: Array<{
  href: string;
  label: string;
  /** If present, this item opens a mega-menu instead of routing. */
  groups?: NavGroup[];
}> = [
  { href: "/platform",  label: "Platform",  groups: platformGroups },
  { href: "/solutions", label: "Solutions", groups: solutionsGroups },
  { href: "/customers", label: "Customers" },
  { href: "/pricing",   label: "Pricing" },
  { href: "/docs",      label: "Docs" },
];

/** Footer columns mirror nav and expand to third-tier links. */
export const footerCols: NavGroup[] = [
  {
    label: "PLATFORM",
    items: [
      { href: "/platform/sites",        label: "Sites" },
      { href: "/platform/assets",       label: "Assets" },
      { href: "/platform/work",         label: "Work" },
      { href: "/platform/evidence",     label: "Evidence" },
      { href: "/platform/agents",       label: "Agents" },
      { href: "/platform/integrations", label: "Integrations" },
      { href: "/platform/security",     label: "Security" },
    ],
  },
  {
    label: "SOLUTIONS",
    items: [
      { href: "/solutions/telecom",   label: "Telecom & 5G" },
      { href: "/solutions/ev-energy", label: "EV & Energy" },
      { href: "/solutions/iot",       label: "IoT & Networks" },
      { href: "/solutions/telecom#tower-companies", label: "Tower companies" },
      { href: "/solutions/telecom#msps",            label: "MSPs & service providers" },
    ],
  },
  {
    label: "RESOURCES",
    items: [
      { href: "/docs",         label: "Docs" },
      { href: "/changelog",    label: "Changelog" },
      { href: "/blog",         label: "Blog" },
      { href: "/customers",    label: "Case studies" },
      { href: "/trust/status", label: "Status" },
    ],
  },
  {
    label: "COMPANY",
    items: [
      { href: "/about",                          label: "About" },
      { href: "/careers",                        label: "Careers" },
      { href: "/trust",                          label: "Trust center" },
      { href: "/contact",                        label: "Contact" },
      { href: "mailto:engineering@fieldforce.com", label: "engineering@" },
    ],
  },
];
