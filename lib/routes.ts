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
      { href: "/platform/sites",    label: "Sites",    description: "Locations & lease lifecycle in one record.", icon: "site" },
      { href: "/platform/assets",   label: "Assets",   description: "Towers, chargers, gateways, splices.",       icon: "asset" },
      { href: "/platform/work",     label: "Work",     description: "Schedule, dispatch, close with evidence.",   icon: "work" },
      { href: "/platform/evidence", label: "Evidence", description: "CV-verified field work.",                    icon: "evidence" },
    ],
  },
  {
    label: "Capabilities",
    items: [
      { href: "/platform/agents",    label: "Intelligence", description: "Six agents that act, not just observe.",    icon: "intel" },
      { href: "/platform/analytics", label: "Analytics",    description: "Numbers your CFO trusts.",                  icon: "intel" },
      { href: "/platform/mobile",    label: "Mobile",       description: "Built for the field, not adapted to it.",   icon: "agent" },
    ],
  },
  {
    label: "Trust + integration",
    items: [
      { href: "/platform/integrations", label: "Integrations", description: "OSS/BSS, ERP, OCPP, MQTT.", icon: "intel" },
      { href: "/platform/security",     label: "Security",     description: "SOC 2, ISO 27001, RBAC.",  icon: "doc" },
      { href: "/changelog",             label: "Changelog",    description: "Public release log.",      icon: "doc" },
    ],
  },
];

export const solutionsGroups: NavGroup[] = [
  {
    label: "By industry",
    items: [
      { href: "/solutions/telecom",          label: "Telecom & 5G",      description: "Carrier-scale build & ops.",            icon: "vertical" },
      { href: "/solutions/ev-energy",        label: "EV & Energy",       description: "Charging networks & energy assets.",    icon: "vertical" },
      { href: "/solutions/iot",              label: "IoT & Networks",    description: "Distributed device fleets.",            icon: "vertical" },
      { href: "/solutions/smart-cities",     label: "Smart Cities",      description: "Streetlights, sensors, cabinets, signage.", icon: "vertical" },
      { href: "/solutions/private-networks", label: "Private Networks",  description: "Private 5G, CBRS, on-prem RAN.",        icon: "vertical" },
    ],
  },
  {
    label: "By role",
    items: [
      { href: "/solutions/telecom#mobile-operators", label: "Mobile operators",   description: "5G, fiber, densification." },
      { href: "/solutions/telecom#tower-companies",  label: "Tower companies",    description: "Site & lease lifecycle." },
      { href: "/solutions/telecom#msps",             label: "MSPs & service",     description: "Multi-customer ops." },
      { href: "/solutions/telecom#oems",             label: "OEMs",               description: "Field commissioning." },
    ],
  },
];

export const resourcesGroups: NavGroup[] = [
  {
    label: "Learn",
    items: [
      { href: "/customers",          label: "Customer stories",  description: "How operators run on Fieldforce.", icon: "evidence" },
      { href: "/blog",               label: "Blog",              description: "Field notes & engineering posts.", icon: "doc" },
      { href: "/resources/webinars", label: "Webinars & events", description: "Live sessions and recordings.",    icon: "doc" },
    ],
  },
  {
    label: "Support & reference",
    items: [
      { href: "https://helpdesk.getfieldforce.com/", label: "Help Center", description: "Product help & how-tos.",     icon: "doc" },
      { href: "/docs",                                label: "Docs",        description: "Developer & API reference.", icon: "doc" },
      { href: "/changelog",                           label: "Changelog",   description: "Public release log.",        icon: "doc" },
      { href: "/pricing",                             label: "Pricing",     description: "Plans, tiers, and what's included.", icon: "doc" },
    ],
  },
];

export const companyGroups: NavGroup[] = [
  {
    label: "About",
    items: [
      { href: "/about",                  label: "About us",       description: "Who we are & where we're going.", icon: "doc" },
      { href: "/about#leadership",       label: "Leadership",     description: "The team building this.",          icon: "agent" },
      { href: "/about#advisory-board",   label: "Advisory board", description: "Operators who guide our roadmap.", icon: "agent" },
    ],
  },
  {
    label: "Join + trust",
    items: [
      { href: "/careers", label: "Careers", description: "Open roles, hybrid & remote.",          icon: "agent" },
      { href: "/trust",   label: "Trust",   description: "SOC 2, ISO 27001, data residency.",    icon: "doc" },
      { href: "/contact", label: "Contact", description: "Talk to sales, partners, or press.",   icon: "doc" },
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
  { href: "/resources", label: "Resources", groups: resourcesGroups },
  { href: "/about",     label: "Company",   groups: companyGroups },
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
      { href: "/platform/analytics",    label: "Analytics" },
      { href: "/platform/mobile",       label: "Mobile" },
      { href: "/platform/integrations", label: "Integrations" },
      { href: "/platform/security",     label: "Security" },
    ],
  },
  {
    label: "SOLUTIONS",
    items: [
      { href: "/solutions/telecom",          label: "Telecom & 5G" },
      { href: "/solutions/ev-energy",        label: "EV & Energy" },
      { href: "/solutions/iot",              label: "IoT & Networks" },
      { href: "/solutions/smart-cities",     label: "Smart Cities" },
      { href: "/solutions/private-networks", label: "Private Networks" },
      { href: "/solutions/telecom#tower-companies", label: "Tower companies" },
      { href: "/solutions/telecom#msps",            label: "MSPs & service providers" },
    ],
  },
  {
    label: "RESOURCES",
    items: [
      { href: "/customers",                          label: "Customer stories" },
      { href: "/blog",                               label: "Blog" },
      { href: "/resources/webinars",                 label: "Webinars" },
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
