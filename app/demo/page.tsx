import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "Book a demo",
  description: "A senior engineer will respond within 24 hours.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="BOOK A DEMO"
        title={<>A senior engineer <span className="text-[var(--color-text-2)]">will respond within 24 hours.</span></>}
        body="Tell us a bit about your network. The first call is technical: we'll talk architecture, integrations, and what 24-hour go-live looks like for your shape of operation."
        primaryCta={{ href: "#demo-form", label: "Skip to form" }}
        secondaryCta={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
      />

      <SectionShell tone="tight">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-3)]">
              ── WHAT TO EXPECT ──
            </p>
            <ol className="mt-6 flex flex-col gap-6">
              {[
                {
                  title: "We respond within a business day",
                  body: "A senior product engineer reaches out, not an SDR.",
                },
                {
                  title: "First call is technical",
                  body: "Architecture, integrations, and what your first site looks like — no slideware.",
                },
                {
                  title: "30-day pilot if it's a fit",
                  body: "Up to 50 sites, real data, real success criteria. If we don't hit it, you don't pay.",
                },
              ].map((s, i) => (
                <li key={i} className="grid grid-cols-[28px_1fr] gap-4">
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-[var(--color-line)] bg-[var(--color-bg-elevated)] font-mono text-[12px] text-[var(--color-accent)]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold tracking-[-0.005em]">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-[1.55] text-[var(--color-text-2)]">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.05}>
            <ContactForm />
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}
