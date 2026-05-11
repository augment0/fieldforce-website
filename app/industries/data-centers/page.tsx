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
  title: "Data Centers | Industries",
  description:
    "Orchestrate every phase of the data center lifecycle — from real estate and development, to construction and fit-out, to ongoing operations and asset management. Scale faster for AI and cloud demand.",
};

export default function DataCentersPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/industries", label: "Industries" }]} current="Data Centers" />

      <PageHero
        eyebrow="INDUSTRIES / DATA CENTERS"
        title={
          <>
            From real estate to fit-out
            <br />
            <span className="grad-text">to AI-era operations.</span>
          </>
        }
        body="Hyperscalers, colos, and edge operators are building data centers faster than the industry has ever built anything. Fieldforce orchestrates every phase of the data center lifecycle — site selection, construction, fit-out, ongoing operations, and asset management — on one platform that scales with AI and cloud demand."
        primaryCta={{ href: "/demo", label: "Talk to a data center expert" }}
        secondaryCta={{ href: "/platform", label: "See the platform" }}
        visual={<DCDashboard />}
      />

      <StatBar
        items={[
          { value: "MW-scale",  label: "deployments tracked" },
          { value: "24h",       label: "first site live" },
          { value: "1 ledger",  label: "real estate → operations" },
          { value: "Audit-grade", label: "audit trail, day one" },
        ]}
      />

      <FeatureSplit
        eyebrow="REAL ESTATE & DEVELOPMENT"
        title={<>Site selection, capital, permits — <span className="text-[var(--color-text-2)]">in one canvas.</span></>}
        body={
          <p>
            Data center site selection is a multi-dimensional problem: power
            availability, water, fiber routes, jurisdictions, latency
            requirements. Fieldforce captures every dimension on one site
            record — and survives into operations.
          </p>
        }
        bullets={[
          "Multi-criteria site candidate evaluation (power, water, fiber, jurisdiction)",
          "Capital pipeline visibility from approval to in-service",
          "Per-jurisdiction permit catalog with SLA timers",
          "Lease and land workflows with ERP write-back",
        ]}
        cta={{ href: "/platform/plan", label: "How Plan works" }}
        visual={<SiteSelection />}
      />

      <FeatureSplit
        reverse
        eyebrow="CONSTRUCTION & FIT-OUT"
        title={<>Shell to white-space. <span className="text-[var(--color-text-2)]">On one timeline.</span></>}
        body={
          <p>
            From shell construction to MEP fit-out to rack-and-stack —
            general contractors, MEP subs, networking teams, and the operator
            all working from one timeline with role-aware views and
            evidence-gated closure.
          </p>
        }
        bullets={[
          "GC, MEP, networking, security — one platform, role-aware views",
          "CV photo QA on every milestone",
          "Vendor invoice reconciliation against actual work",
          "Commissioning workflows with cabinet-level evidence",
        ]}
        cta={{ href: "/platform/build", label: "How Build works" }}
        visual={<FitoutMock />}
      />

      <FeatureSplit
        eyebrow="OPERATIONS & ASSET MANAGEMENT"
        title={<>Every rack, every cabinet, every UPS. <span className="text-[var(--color-text-2)]">One ledger.</span></>}
        body={
          <p>
            Once a data center is live, the work shifts to PM schedules,
            corrective tickets, capacity planning, and customer migrations.
            All on the same site record that started in real estate — no
            re-keying, no reconciliation.
          </p>
        }
        bullets={[
          "PM schedules for power, cooling, networking, security",
          "Asset lifecycle ledger across power, cooling, IT",
          "Capacity planning with multi-tenant orchestration",
          "Customer migrations and cabinet-level evidence",
        ]}
        cta={{ href: "/platform/operate", label: "How Operate works" }}
        visual={<RackMock />}
      />

      <FeatureGrid
        eyebrow="WHAT DATA CENTER OPERATORS GET"
        title={<>Built for the AI era. <span className="text-[var(--color-text-2)]">Scaling without complexity.</span></>}
        columns={3}
        items={[
          { title: "Multi-criteria site selection", body: "Power, water, fiber, jurisdiction, latency — scored on one record." },
          { title: "Capital pipeline",                body: "Capex line items, vendor commitments, ERP write-back." },
          { title: "Shell to white-space",            body: "GC, MEP, networking, security on one timeline." },
          { title: "Commissioning workflows",         body: "Cabinet-level evidence with CV-validated photos." },
          { title: "Capacity & multi-tenant",          body: "Per-tenant capacity allocation, customer migrations." },
          { title: "Audit-ready",                      body: "SOC 2 Type II + ISO 27001 + region-pinned residency." },
        ]}
      />

      <Testimonial
        quote={
          <>
            We scaled from <strong className="font-semibold">3 sites to 47 in 30 months</strong> without doubling the operations team. Same platform, same data model — every new site lit on a workflow we already know works.
          </>
        }
        name="Director of Operations"
        role="Colocation operator"
        initials="DC"
      />

      <FAQ
        eyebrow="DATA CENTER QUESTIONS"
        title="What hyperscalers and colos ask up front."
        items={[
          { q: "Do you support liquid cooling and rear-door HX workflows?", a: <>Yes — PM and corrective workflows for liquid cooling loops, rear-door heat exchangers, and immersion systems. Asset Sentinel runs predictive maintenance on telemetry.</> },
          { q: "How does this fit with our DCIM (Sunbird, EkkoSoft, etc.)?", a: <>Fieldforce reads from your DCIM and writes back operational events. DCIM remains the floor-plan / live-telemetry source of truth; Fieldforce becomes the operational source of truth across build and ops.</> },
          { q: "Can we manage multi-tenant capacity?",                       a: <>Yes — per-tenant capacity allocation, customer migration workflows, cabinet-level evidence on every move.</> },
          { q: "What about edge data centers?",                              a: <>Same platform. Many customers run hyperscale + colo + edge on one instance with role-aware permissions and region-pinned residency.</> },
        ]}
      />

      <CtaBand
        eyebrow="SCALE WITHOUT COMPLEXITY"
        title={<>Every phase of the data center lifecycle. <span className="grad-text">One platform.</span></>}
        primary={{ href: "/demo", label: "Talk to a data center expert" }}
        secondary={{ href: "/platform", label: "See the platform" }}
      />
    </>
  );
}

function DCDashboard() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-[var(--color-line)] bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_70%),var(--color-bg-inset)] p-6">
      <div className="grid grid-cols-2 gap-3">
        {[
          { v: "47",      l: "data centers" },
          { v: "120 MW",  l: "deployed capacity" },
          { v: "8",       l: "in fit-out" },
          { v: "94%",     l: "PM completion" },
          { v: "12",      l: "site candidates" },
          { v: "0",       l: "audit findings" },
        ].map((m) => (
          <div key={m.l} className="rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-raised)] p-4">
            <div className="font-display text-[20px] font-semibold leading-none tracking-[-0.022em] text-[var(--color-accent)]">
              {m.v}
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-3)]">
              {m.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SiteSelection() {
  return (
    <div className="font-mono text-[12px]">
      <div className="grid grid-cols-[1fr_60px_60px_60px] gap-2 border-b border-[var(--color-line-subtle)] px-3 py-3 text-[var(--color-text-3)]">
        <span>SITE</span>
        <span className="text-right">PWR</span>
        <span className="text-right">FIB</span>
        <span className="text-right">SCORE</span>
      </div>
      {[
        ["Site 12 · Reno",     "300MW", "✓",  "92"],
        ["Site 14 · Atlanta",  "180MW", "✓",  "87"],
        ["Site 15 · Dublin",   "240MW", "—",  "78"],
        ["Site 17 · Phoenix",  "400MW", "✓",  "94"],
      ].map((r) => (
        <div key={r[0]} className="grid grid-cols-[1fr_60px_60px_60px] gap-2 border-b border-[var(--color-line-subtle)] px-3 py-3 last:border-b-0">
          <span className="text-[var(--color-text-2)]">{r[0]}</span>
          <span className="text-right text-[var(--color-text)]">{r[1]}</span>
          <span className={r[2] === "✓" ? "text-right text-[var(--color-accent)]" : "text-right text-[var(--color-warn)]"}>{r[2]}</span>
          <span className="text-right text-[var(--color-accent)]">{r[3]}</span>
        </div>
      ))}
    </div>
  );
}

function FitoutMock() {
  return (
    <div className="flex flex-col gap-2 font-mono text-[12px]">
      {[
        { t: "T-0d",  l: "Shell complete · GC handoff",     tone: "ok" },
        { t: "T+12d", l: "MEP rough-in · 80% complete",      tone: "ok" },
        { t: "T+24d", l: "White-space commissioning",         tone: "ok" },
        { t: "T+30d", l: "Rack & stack · phase 1 (200 cab)", tone: "ok" },
        { t: "T+42d", l: "Customer migration · tenant A",     tone: "accent" },
      ].map((r) => (
        <div key={r.t} className="flex items-baseline gap-3 rounded-md border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] px-3 py-[10px]">
          <span className="text-[var(--color-text-3)]">{r.t}</span>
          <span className={r.tone === "accent" ? "text-[var(--color-accent)]" : "text-[var(--color-text-2)]"}>{r.l}</span>
        </div>
      ))}
    </div>
  );
}

function RackMock() {
  return (
    <div className="grid grid-cols-3 gap-2 font-mono text-[11px]">
      {Array.from({ length: 12 }).map((_, i) => {
        const states = ["live", "live", "PM", "live", "live", "live", "migr", "live", "live", "live", "live", "PM"];
        const s = states[i];
        return (
          <div
            key={i}
            className={
              s === "PM"
                ? "rounded border border-[var(--color-warn)] bg-[var(--color-bg-inset)] px-2 py-3 text-center text-[var(--color-warn)]"
                : s === "migr"
                  ? "rounded border border-[var(--color-accent)] bg-[var(--color-bg-inset)] px-2 py-3 text-center text-[var(--color-accent)]"
                  : "rounded border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] px-2 py-3 text-center text-[var(--color-text-3)]"
            }
          >
            CAB-{(i + 12).toString().padStart(2, "0")}
            <div className="mt-1">{s}</div>
          </div>
        );
      })}
    </div>
  );
}
