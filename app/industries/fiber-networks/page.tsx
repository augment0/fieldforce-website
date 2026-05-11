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
  title: "Fiber Networks | Industries",
  description:
    "Build and run FTTH, OSP, and middle-mile fiber networks at scale. Span-by-span evidence, route management, splice tracking, and AI-driven dispatch — purpose-built for fiber operators.",
};

export default function FiberNetworksPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/industries", label: "Industries" }]} current="Fiber Networks" />

      <PageHero
        eyebrow="INDUSTRIES / FIBER NETWORKS"
        title={
          <>
            FTTH, OSP, middle-mile.
            <br />
            <span className="grad-text">Span-by-span evidence.</span>
          </>
        }
        body="Fiber operators need more than a project tracker — they need a platform that understands routes, splice closures, civil work, and the difference between aerial and underground. Fieldforce gives ISPs, telcos, and middle-mile operators a fiber-native operating system on top of the same primitives that run telecom and EV."
        primaryCta={{ href: "/demo", label: "Talk to a fiber expert" }}
        secondaryCta={{ href: "/industries/telecom", label: "See telecom" }}
        visual={<RouteMock />}
      />

      <StatBar
        items={[
          { value: "Span-by-span", label: "evidence on every drop" },
          { value: "94%",          label: "first-pass splice QA" },
          { value: "12,000+",      label: "sites in production" },
          { value: "23",           label: "countries" },
        ]}
      />

      <FeatureSplit
        eyebrow="ROUTE & PERMIT"
        title={<>Routes, permits, ROWs — <span className="text-[var(--color-text-2)]">on one record.</span></>}
        body={
          <p>
            FTTH builds break on permits and right-of-way more than on
            engineering. Track every route segment, every jurisdiction, every
            permit type — with the Permit agent flagging slips before crews
            roll.
          </p>
        }
        bullets={[
          "Per-segment route management with GIS context",
          "ROW and easement tracking with audit trail",
          "Per-jurisdiction permit catalog with SLA timers",
          "Permit agent escalates slips against the build schedule",
        ]}
        cta={{ href: "/agents/permit", label: "Permit agent" }}
        visual={<PermitMatrix />}
      />

      <FeatureSplit
        reverse
        eyebrow="SPLICE & CLOSURE EVIDENCE"
        title={<>Every splice. <span className="text-[var(--color-text-2)]">CV-validated.</span></>}
        body={
          <p>
            The Evidence agent runs computer vision on every splice closure,
            OTDR trace, and cabinet seal. Sites don't close until the evidence
            agrees. Rework rates drop 30–50%; first-pass QA hits 94%.
          </p>
        }
        bullets={[
          "Splice closure photo validation via CV",
          "OTDR trace capture and verification",
          "Cabinet seal evidence with geo-stamp",
          "Audit pack auto-generated per drop",
        ]}
        cta={{ href: "/platform/evidence", label: "How Evidence works" }}
        visual={<SpliceFeed />}
      />

      <FeatureGrid
        eyebrow="WHAT FIBER OPERATORS GET"
        title={<>Built for fiber. <span className="text-[var(--color-text-2)]">Not adapted from a generic PM tool.</span></>}
        columns={3}
        items={[
          { title: "Route management",     body: "Per-segment design, ROW tracking, GIS-aware visualization." },
          { title: "Aerial + underground",   body: "Both build types in one workflow with type-specific evidence rules." },
          { title: "Splice tracking",       body: "Per-splice closure with CV-validated photos and OTDR traces." },
          { title: "Customer drops",         body: "FTTH home connects with subscriber milestone tracking." },
          { title: "Vendor coordination",    body: "Civil, locate, splicing, integration vendors on one queue." },
          { title: "OSP construction",       body: "Pole attachments, conduit, micro-trenching workflows." },
        ]}
      />

      <Testimonial
        quote={
          <>
            We went from <strong className="font-semibold">tracking splice closures in spreadsheets to having every drop CV-validated.</strong> Customer activations sped up, dispute rates collapsed.
          </>
        }
        name="Operations Lead"
        role="Regional ISP"
        initials="FN"
      />

      <FAQ
        eyebrow="FIBER OPERATOR QUESTIONS"
        title="What FTTH and OSP leaders ask up front."
        items={[
          { q: "How does this compare to Render Networks or VETRO?",  a: <>Render is fiber-only and lacks the platform breadth — operators expanding into wireless or smart-city work need a second tool. VETRO is design-focused. Fieldforce is fiber-native AND infrastructure-complete, so you don't outgrow it.</> },
          { q: "Do you support pole attachments and make-ready?",       a: <>Yes — pole attachment tracking, make-ready workflows, and joint-use coordination with telecom/utility partners.</> },
          { q: "How does the Evidence agent handle OTDR traces?",       a: <>OTDR traces captured in-app, attached to the splice record, validated against tolerance thresholds. Anomalies escalated to network engineering.</> },
          { q: "Can we run telecom + fiber on the same instance?",       a: <>Yes — many customers run wireless + fiber + small-cell densification on one platform. Same primitives, different workflows.</> },
        ]}
      />

      <CtaBand
        eyebrow="FIBER BUILT RIGHT"
        title={<>Every drop. <span className="grad-text">Every span. Every splice.</span></>}
        primary={{ href: "/demo", label: "Talk to a fiber expert" }}
        secondary={{ href: "/industries/telecom", label: "See telecom" }}
      />
    </>
  );
}

function RouteMock() {
  return (
    <div className="grid aspect-[1.1/1] place-items-center rounded-[14px] border border-[var(--color-line)] bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_70%),var(--color-bg-inset)] p-8">
      <svg viewBox="0 0 200 200" className="h-auto w-full max-w-[300px]" aria-hidden>
        <defs>
          <linearGradient id="fiberGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#6FE4D9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6FE4D9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M20 100 Q60 60 100 100 T180 100" stroke="#6FE4D9" strokeWidth="1.5" fill="none" />
        <path d="M20 130 Q60 90 100 130 T180 130" stroke="#6FE4D9" strokeWidth="1" fill="none" opacity="0.6" />
        <path d="M20 70 Q60 30 100 70 T180 70" stroke="#6FE4D9" strokeWidth="1" fill="none" opacity="0.6" />
        {[35, 75, 115, 155].map((x) => (
          <g key={x}>
            <circle cx={x} cy="100" r="3" fill="#6FE4D9" />
            <circle cx={x} cy="100" r="6" fill="none" stroke="#6FE4D9" strokeWidth="0.5" opacity="0.4" />
          </g>
        ))}
      </svg>
    </div>
  );
}

function PermitMatrix() {
  return (
    <div className="font-mono text-[12px]">
      <div className="grid grid-cols-[1fr_80px_80px] gap-3 border-b border-[var(--color-line-subtle)] px-4 py-3 text-[var(--color-text-3)]">
        <span>SEGMENT</span>
        <span className="text-right">ROW</span>
        <span className="text-right">PERMIT</span>
      </div>
      {[
        ["Route 412 · north",  "✓",   "filed"],
        ["Route 412 · mid",    "✓",   "approved"],
        ["Route 412 · south",  "✓",   "slipping"],
        ["Route 413 · drop",   "—",   "pending"],
        ["Route 414 · aerial", "✓",   "approved"],
      ].map((r) => (
        <div key={r[0]} className="grid grid-cols-[1fr_80px_80px] gap-3 border-b border-[var(--color-line-subtle)] px-4 py-3 last:border-b-0">
          <span className="text-[var(--color-text-2)]">{r[0]}</span>
          <span className={r[1] === "✓" ? "text-right text-[var(--color-accent)]" : "text-right text-[var(--color-text-3)]"}>{r[1]}</span>
          <span
            className={
              r[2] === "slipping"
                ? "text-right text-[var(--color-warn)]"
                : r[2] === "pending"
                  ? "text-right text-[var(--color-text-3)]"
                  : "text-right text-[var(--color-accent)]"
            }
          >
            {r[2]}
          </span>
        </div>
      ))}
    </div>
  );
}

function SpliceFeed() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { l: "Splice 0412 · CV", t: "✓ pass" },
        { l: "OTDR 0412 · trace", t: "✓ in tol" },
        { l: "Closure seal · geo", t: "✓ in zone" },
        { l: "Drop 0414 · cust ID", t: "✓ verified" },
      ].map((m) => (
        <div key={m.l} className="rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] p-4">
          <div className="font-display text-[15px] font-semibold leading-none tracking-[-0.01em] text-[var(--color-accent)]">
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
