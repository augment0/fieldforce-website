import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureSplit } from "@/components/sections/feature-split";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Testimonial } from "@/components/sections/testimonial";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Engineering & construction | Industries",
  description:
    "Built for E&C and field service contractors. Multi-customer ops, mobile-first crews, low upfront investment, fast time-to-value. Run more jobs with the same crews.",
};

export default function EngineeringConstructionPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/industries", label: "Industries" }]} current="Engineering & Construction" />

      <PageHero
        eyebrow="INDUSTRIES / ENGINEERING & CONSTRUCTION"
        title={
          <>
            Run more jobs.
            <br />
            <span className="text-[var(--color-text-2)]">With the same crews.</span>
          </>
        }
        body="E&C contractors and field service firms are the backbone of every infrastructure rollout — and the most underserved by software. Most platforms target the operator, not the contractor. Fieldforce gives multi-customer service providers the same operating leverage the operators have."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/pricing", label: "See pricing" }}
      />

      <StatBar
        items={[
          { value: "1M+",   label: "field workers in addressable market" },
          { value: "Mobile-first", label: "crews actually use it" },
          { value: "Multi-customer", label: "one platform, every contract" },
          { value: "Days",  label: "to first live crew on platform" },
        ]}
      />

      <FeatureSplit
        eyebrow="THE SMB E&C PAIN"
        title={<>Built for the firms <span className="text-[var(--color-text-2)]">running the rollout.</span></>}
        body={
          <p>
            Contractors don't need a six-figure ERP implementation. They need a
            mobile-first crew tool, a way to bill correctly, and visibility into
            margin per job. Fieldforce delivers all three on day one — without an
            18-month deployment or a seven-figure check.
          </p>
        }
        bullets={[
          "Crew dispatch with offline-capable mobile app",
          "Multi-customer ops — one platform, every contract",
          "Photo-evidenced closure for fast billing approval",
          "Margin per job tracked in real time",
          "Low upfront investment, flexible SaaS pricing",
        ]}
        cta={{ href: "/pricing", label: "See pricing" }}
        visual={<JobMargin />}
      />

      <FeatureSplit
        reverse
        eyebrow="WHAT YOUR CUSTOMERS SEE"
        title={<>Carrier-grade evidence. <span className="text-[var(--color-text-2)]">Operator-grade audit.</span></>}
        body={
          <p>
            When you bill an operator, they want evidence. When you bill a
            tower-co, they want lease-grade audit trails. Fieldforce gives you
            both — so your invoices land paid, not disputed.
          </p>
        }
        bullets={[
          "CV-validated closure evidence (Evidence module)",
          "Audit-grade work-order packs auto-generated",
          "OSS/BSS-compatible job records for telecom customers",
          "Multi-tenant data isolation per customer contract",
        ]}
        cta={{ href: "/platform/evidence", label: "How Evidence works" }}
        visual={<EvidenceFeed />}
      />

      <FeatureGrid
        eyebrow="WHAT YOU GET"
        title={<>The operating leverage <span className="text-[var(--color-text-2)]">the big operators have.</span></>}
        columns={3}
        items={[
          { title: "Mobile-first field app",  body: "Offline-capable, GPS-aware, photo-evidenced. Built for crews — not adapted from a desk app." },
          { title: "Multi-customer ops",       body: "One platform, every contract. Data isolation per customer. Bill from one source." },
          { title: "Margin per job",           body: "Real-time visibility into job profitability. Stop bleeding on the wrong work." },
          { title: "Fast billing approvals",    body: "Photo-evidenced closure means customers approve invoices faster. Cash flow accelerates." },
          { title: "Workflow builder",          body: "Build your SOPs once, run them across every crew and every customer. Don't redesign per job." },
          { title: "Low upfront",                body: "SaaS pricing. No implementation services tax. First crew live in days." },
        ]}
      />

      <Testimonial
        quote={
          <>
            We went from <strong className="font-semibold">spreadsheets and group chats to one platform</strong> across all six of our enterprise customers. Invoices land paid. Our crews actually like the app.
          </>
        }
        name="Operations Lead"
        role="E&C contractor · US Southeast"
        initials="EC"
      />

      <FAQ
        eyebrow="CONTRACTOR QUESTIONS"
        title="What service providers ask up front."
        items={[
          { q: "What's the pricing model for SMBs?",       a: <>Flexible SaaS with per-crew or per-site tiers. No seven-figure minimum, no implementation tax. See <a className="text-[var(--color-accent)] underline-offset-2 hover:underline" href="/pricing">pricing</a>.</> },
          { q: "Can we run multiple customers on one account?", a: <>Yes — multi-customer ops with data isolation per contract. One platform, separate billing per customer.</> },
          { q: "Will my crews actually use it?",                a: <>Yes — the field app is offline-first, photo-led, and designed by people who've been on a tower. Crews prefer it to the paper / WhatsApp stack.</> },
          { q: "How does this differ from ServiceMax or Salesforce FS?", a: <>Both target legacy field-service; both lock you into a CRM data model. Fieldforce is built for infrastructure work — sites, assets, evidence — and bills from one platform across every customer.</> },
        ]}
      />

      <CtaBand
        eyebrow="BUILT FOR THE FIRMS DOING THE WORK"
        title={<>Run more jobs <span className="grad-text">with the same crews.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/pricing", label: "See pricing" }}
      />
    </>
  );
}

function JobMargin() {
  return (
    <div className="flex flex-col gap-2 font-mono text-[12px]">
      {[
        { id: "JOB-1102", cust: "Operator A",  margin: 32, tone: "ok" },
        { id: "JOB-1103", cust: "Tower-co B",  margin: 41, tone: "best" },
        { id: "JOB-1104", cust: "Operator A",  margin: 19, tone: "warn" },
        { id: "JOB-1105", cust: "Smart-city C", margin: 28, tone: "ok" },
        { id: "JOB-1106", cust: "Operator A",  margin: 12, tone: "low" },
      ].map((r) => (
        <div
          key={r.id}
          className="grid grid-cols-[88px_1fr_70px] items-center gap-3 rounded-md border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] px-3 py-[10px]"
        >
          <span className="text-[var(--color-text-3)]">{r.id}</span>
          <span className="text-[var(--color-text-2)]">{r.cust}</span>
          <span
            className={
              r.tone === "best"
                ? "text-right text-[var(--color-accent)]"
                : r.tone === "warn"
                  ? "text-right text-[var(--color-warn)]"
                  : r.tone === "low"
                    ? "text-right text-[var(--color-danger)]"
                    : "text-right text-[var(--color-text)]"
            }
          >
            {r.margin}%
          </span>
        </div>
      ))}
    </div>
  );
}

function EvidenceFeed() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { l: "Closure photo · CV pass",         t: "✓" },
        { l: "GPS attestation · in-zone",       t: "✓" },
        { l: "Signature captured",               t: "✓" },
        { l: "Safety attestation filed",         t: "✓" },
      ].map((m) => (
        <div
          key={m.l}
          className="rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] p-4"
        >
          <div className="font-display text-[22px] font-semibold leading-none tracking-[-0.022em] text-[var(--color-accent)]">
            {m.t}
          </div>
          <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-[var(--color-text-3)]">
            {m.l}
          </div>
        </div>
      ))}
    </div>
  );
}
