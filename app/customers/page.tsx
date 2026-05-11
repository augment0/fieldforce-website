import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CaseStudyList, type CaseStudy } from "@/components/sections/case-study-list";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "How operators in 23 countries deploy and run their networks on Fieldforce. $10B+ in network assets managed.",
};

const cases: CaseStudy[] = [
  {
    slug: "smartsky",
    customer: "SmartSky Networks",
    vertical: "Telecom",
    headline: "Four systems retired. Crew-day waste cut 22%.",
    metric: { value: "22%", label: "crew-day saved" },
  },
  {
    slug: "dish",
    customer: "DISH",
    vertical: "Telecom",
    headline: "Nationwide 5G build, on one timeline.",
    metric: { value: "11d", label: "SLA lead time" },
  },
  {
    slug: "veon",
    customer: "Veon",
    vertical: "Telecom",
    headline: "Multi-country ops on one platform.",
    metric: { value: "9", label: "countries unified" },
  },
  {
    slug: "zain",
    customer: "Zain",
    vertical: "Telecom",
    headline: "MENA-region rollout at carrier scale.",
    metric: { value: "$1.2B", label: "assets managed" },
  },
  {
    slug: "engro",
    customer: "Engro",
    vertical: "EV & Energy",
    headline: "Charger commissioning, telecom-grade.",
    metric: { value: "94%", label: "first-pass QA" },
  },
  {
    slug: "kelly",
    customer: "Kelly Services",
    vertical: "IoT",
    headline: "Distributed device fleet, one queue.",
    metric: { value: "8,400", label: "gateways monitored" },
  },
];

const verticals: Array<CaseStudy["vertical"]> = ["Telecom", "EV & Energy", "IoT"];

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="CUSTOMERS"
        title={
          <>
            $10B+ of network assets.
            <br />
            <span className="text-[var(--color-text-2)]">Run on Fieldforce.</span>
          </>
        }
        body="Operators in 23 countries deploy and run their networks on Fieldforce — across 5G, fiber, EV charging, energy, smart cities, and private networks. Here's what they've shipped."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/solutions/telecom", label: "See solutions" }}
      />

      <section className="py-[clamp(64px,8vw,112px)]">
        <div className="shell">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-3)]">
                Filter by industry
              </span>
              <div className="flex flex-wrap gap-2">
                {[null, ...verticals].map((v) => (
                  <button
                    key={v ?? "all"}
                    type="button"
                    aria-pressed={v === null}
                    className="rounded-full border border-[var(--color-line)] bg-[var(--color-bg-raised)] px-3 py-[5px] font-mono text-[11.5px] uppercase tracking-[0.1em] text-[var(--color-text-2)] transition-colors hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text)] aria-[pressed=true]:border-[rgba(111,228,217,0.3)] aria-[pressed=true]:bg-[var(--color-accent-glow)] aria-[pressed=true]:text-[var(--color-accent)]"
                  >
                    {v ?? "All"}
                  </button>
                ))}
              </div>
              <span className="ml-auto font-mono text-[11.5px] tracking-[0.04em] text-[var(--color-text-3)]">
                {cases.length} case studies
              </span>
            </div>
          </Reveal>
          <CaseStudyList items={cases} />
        </div>
      </section>

      <CtaBand
        eyebrow="JOIN THEM"
        title={<>Your network deserves <span className="grad-text">a story like these.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/pricing", label: "See pricing" }}
      />
    </>
  );
}
