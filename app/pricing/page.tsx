import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { PricingTable } from "@/components/sections/pricing-table";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three tiers — Operator, Network, Enterprise — with transparent first-tier pricing. First site live in 24 hours.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="PRICING"
        title={
          <>
            Per site, per month.
            <br />
            <span className="text-[var(--color-text-2)]">No SI engagement.</span>
          </>
        }
        body="Three tiers, scaled by site count and capability. The first tier is publicly priced; higher tiers are quoted because the unit economics depend on your network shape — but we always tell you what's included."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
      />

      <PricingTable
        title="Find the tier that fits your network."
        body="Every tier includes the full Sites · Assets · Work · Evidence platform. Higher tiers add agents, integrations, and dedicated support."
        tiers={[
          {
            name: "Operator",
            price: "$24",
            cadence: "/ site / month",
            description: "For service companies, MSPs, and operators with up to 250 active sites.",
            cta: { href: "/demo", label: "Start with Operator" },
            features: [
              "All five primitives — Sites, Assets, Work, Evidence, Intelligence",
              "Mobile + web apps for unlimited field users",
              "API access (read + write)",
              "Standard integrations (Okta, Slack, ServiceNow)",
              "Email support, 9×5 in your region",
              "SOC 2 Type II + GDPR + ISO 27001",
            ],
          },
          {
            name: "Network",
            price: "Quote",
            cadence: "annual",
            description: "For carriers, tower-cos, and CPOs with hundreds-to-thousands of sites.",
            cta: { href: "/demo", label: "Talk to sales" },
            features: [
              "Everything in Operator",
              "All AI agents — Dispatch, Forecast, Evidence, Reconcile, Permit, Copilot",
              "Custom integrations (OSS/BSS, OCPP, custom NMS)",
              "Region-pinned data residency (US, EU, MENA, APAC)",
              "Single sign-on, RBAC, audit log API",
              "Dedicated success engineer",
            ],
            highlighted: true,
            badge: "MOST OPERATORS",
          },
          {
            name: "Enterprise",
            price: "Quote",
            cadence: "annual",
            description: "For tier-1 carriers, multi-vertical operators, and infrastructure groups.",
            cta: { href: "/demo", label: "Talk to enterprise" },
            features: [
              "Everything in Network",
              "Multi-tenant org structure (subsidiaries, JVs, BU walls)",
              "On-premise or air-gapped deploy options",
              "Custom agent training on your data",
              "VPAT, full security review pack",
              "24×7 critical-incident response",
            ],
          },
        ]}
        fineprint="All tiers: First site live in 24 hours. Annual contracts. Multi-year discount available. SOC 2 + ISO 27001 audited."
      />

      <FAQ
        eyebrow="PRICING QUESTIONS"
        title="Read this before sales."
        items={[
          { q: "What counts as a 'site'?", a: <>A discrete location with one or more managed assets. A cell tower, an EV charger, a smart-city cabinet, or a private-network core all count as one site each. Sub-assets within a site (chargers in a depot, sensors on a tower) don't add to your site count.</> },
          { q: "Is there a setup fee?", a: <>No. The first site goes live in 24 hours, hands-on supported by our team. No SI partner needed for any tier.</> },
          { q: "How does pricing change as we scale?", a: <>Per-site cost decreases at volume thresholds (250, 1000, 5000 sites). The Network and Enterprise tiers include volume tiers built into your contract.</> },
          { q: "Do you charge for users?", a: <>No. Field-user seats are unlimited at every tier. We don't tax you for adding crews.</> },
          { q: "Can we trial Fieldforce before committing?", a: <>Yes. Standard offer is a 30-day pilot on up to 50 sites with a clear success criteria. If we don't hit it, you don't pay.</> },
          { q: "What about contracts and procurement?", a: <>Standard MSA + DPA. We work with most major procurement frameworks. Public-sector contracts (NEVI, GSA) on Network tier and above.</> },
        ]}
      />

      <CtaBand
        eyebrow="GET YOUR QUOTE"
        title={<>Ready to see <span className="grad-text">your numbers?</span></>}
        body="Tell us about your network — site count, verticals, integrations — and we'll send a tailored quote within 48 hours."
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "mailto:sales@fieldforce.com", label: "Email sales" }}
      />
    </>
  );
}
