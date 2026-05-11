import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactPathways } from "@/components/sections/contact-pathways";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Three ways to reach Fieldforce: book a demo, talk to engineering, or contact support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title={
          <>
            One platform.
            <br />
            <span className="text-[var(--color-text-2)]">Three ways to reach us.</span>
          </>
        }
        body="Pick the path that matches your question. Sales gets demo requests; engineering gets architecture questions; support gets existing-customer issues."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
      />

      <section className="py-[clamp(56px,8vw,96px)]">
        <div className="shell">
          <ContactPathways />
        </div>
      </section>

      <section className="py-[clamp(56px,8vw,96px)] border-t border-[var(--color-line-subtle)]">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-3)]">
              ── BOOK A DEMO ──
            </p>
            <h2 className="display-lg mt-5">A senior engineer will respond within 24 hours.</h2>
            <p className="mt-5 max-w-[44ch] text-[16px] leading-[1.6] text-[var(--color-text-2)]">
              Tell us a bit about your network. The first call is technical: we'll
              talk architecture, integrations, and what 24-hour go-live looks
              like for your shape of operation.
            </p>
            <ul className="mt-7 flex flex-col gap-3 text-[14px] text-[var(--color-text-2)]">
              {[
                "Walk through the platform on your workflow",
                "Discuss integration with your existing OSS/BSS, ERP, NOC",
                "Pricing tailored to your site count and verticals",
                "30-day pilot with a clear success criterion",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <svg viewBox="0 0 16 16" className="mt-1 h-3 w-3 flex-shrink-0 text-[var(--color-accent)]" aria-hidden>
                    <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(56px,8vw,96px)] border-t border-[var(--color-line-subtle)]">
        <div className="shell">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { city: "Arlington, VA", desc: "Headquarters",        meta: "ARLINGTON" },
              { city: "Munich, Germany", desc: "European operations", meta: "MUNICH" },
              { city: "Karachi, Pakistan", desc: "Engineering hub",   meta: "KARACHI" },
            ].map((o) => (
              <div
                key={o.city}
                className="rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-6"
              >
                <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--color-text-3)]">
                  {o.meta}
                </p>
                <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.01em]">{o.city}</h3>
                <p className="mt-1 text-[13.5px] text-[var(--color-text-2)]">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
