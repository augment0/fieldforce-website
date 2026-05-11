import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { ArrowIcon } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Industries — Digital infrastructure, energy & mobility, smart & connected",
  description:
    "Fieldforce powers infrastructure operations across telecom, fiber, towers, private 5G, data centers, EV charging, energy, IoT, smart cities, and E&C contractors. Grouped by the narrative buyers actually buy on.",
};

type IndustryCard = {
  href: string;
  label: string;
  description: string;
  tag?: string;
};

type ThemeBlock = {
  eyebrow: string;
  title: string;
  lede: string;
  cards: IndustryCard[];
};

const themes: ThemeBlock[] = [
  {
    eyebrow: "DIGITAL INFRASTRUCTURE",
    title: "Build and operate the connective tissue of the modern world.",
    lede: "Wireless, wireline, and connected ecosystems — at carrier scale, in 23 countries.",
    cards: [
      { href: "/industries/telecom",          label: "Telecom & 5G",            description: "Mobile operators, 5G densification, fiber drops, small-cells.",  tag: "Flagship" },
      { href: "/industries/fiber-networks",   label: "Fiber Networks",          description: "FTTH builds, span-by-span evidence, OSP construction." },
      { href: "/industries/tower-companies",  label: "Tower Companies",         description: "Site lifecycle, lease lifecycle, multi-tenant orchestration." },
      { href: "/industries/private-networks", label: "Private 5G & Enterprise", description: "CBRS, on-prem RAN, campus and industrial networks." },
      { href: "/industries/data-centers",     label: "Data Centers",            description: "Real estate to fit-out to operations — AI-era scale.",            tag: "New" },
    ],
  },
  {
    eyebrow: "ENERGY & MOBILITY",
    title: "Power the energy transition with operational scale.",
    lede: "Charging networks, renewables, energy assets — telecom-grade reliability for the new energy stack.",
    cards: [
      { href: "/industries/ev-energy",        label: "EV Charging Networks",    description: "CPOs scaling from 1k to 100k chargers. NEVI-ready." },
      { href: "/industries/ev-energy#energy", label: "Energy & Renewables",     description: "Solar, storage, microgrids, DERs, utilities." },
    ],
  },
  {
    eyebrow: "SMART & CONNECTED",
    title: "Run the distributed, intelligent infrastructure of cities and enterprises.",
    lede: "Smart cities, IoT fleets, and the contractors building them — one platform across them all.",
    cards: [
      { href: "/industries/smart-cities",             label: "Smart Cities",                description: "Streetlights, sensors, traffic, signage, public infra." },
      { href: "/industries/iot",                      label: "IoT & Connected Devices",     description: "Distributed device fleets, edge gateways, industrial IoT." },
      { href: "/industries/engineering-construction", label: "Engineering & Construction",  description: "E&C contractors and field service firms — multi-customer ops." },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES"
        title={
          <>
            Built for the operators
            <br />
            <span className="grad-text">deploying the modern world.</span>
          </>
        }
        body="Fieldforce powers infrastructure operations across three macro-narratives — Digital Infrastructure, Energy & Mobility, and Smart & Connected. Same primitives. Same AI agents. Every vertical at carrier reliability."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform", label: "See the platform" }}
      />

      <StatBar
        items={[
          { value: "$10B+",   label: "infrastructure assets" },
          { value: "12,000+", label: "sites under management" },
          { value: "23",      label: "countries" },
          { value: "10",      label: "verticals served" },
        ]}
      />

      {themes.map((theme, ti) => (
        <section
          key={theme.eyebrow}
          className={
            ti === 0
              ? "py-[clamp(80px,10vw,140px)]"
              : "border-t border-[var(--color-line-subtle)] py-[clamp(80px,10vw,140px)]"
          }
        >
          <div className="shell">
            <Reveal>
              <header className="mb-12 max-w-[760px]">
                <Eyebrow>{theme.eyebrow}</Eyebrow>
                <h2 className="display-lg mt-5">{theme.title}</h2>
                <p className="mt-5 max-w-[58ch] text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-[var(--color-text-2)]">
                  {theme.lede}
                </p>
              </header>
            </Reveal>

            <div
              className={
                theme.cards.length >= 4
                  ? "grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                  : "grid gap-4 md:grid-cols-2"
              }
            >
              {theme.cards.map((c) => (
                <Reveal key={c.href}>
                  <Link
                    href={c.href}
                    className="group relative flex h-full flex-col gap-3 rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-7 transition-[border-color,transform] duration-200 hover:-translate-y-[2px] hover:border-[var(--color-line-strong)]"
                  >
                    {c.tag && (
                      <span className="absolute right-5 top-5 rounded-full border border-[rgba(111,228,217,0.3)] bg-[var(--color-accent-glow)] px-2.5 py-[3px] font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-accent)]">
                        {c.tag}
                      </span>
                    )}
                    <h3 className="text-[20px] font-semibold tracking-[-0.018em]">{c.label}</h3>
                    <p className="text-[14.5px] leading-[1.55] text-[var(--color-text-2)]">
                      {c.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-[6px] pt-2 text-[13.5px] font-medium text-[var(--color-accent)] transition-[gap] group-hover:gap-[10px]">
                      Explore <ArrowIcon />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        eyebrow="ONE PLATFORM. EVERY INDUSTRY."
        title={
          <>
            Or run all three macro-narratives <span className="grad-text">on one platform.</span>
          </>
        }
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/customers", label: "See customers" }}
      />
    </>
  );
}
