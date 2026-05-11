import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SecurityGrid } from "@/components/sections/security-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { FAQ } from "@/components/sections/faq";
import { SectionShell } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkArrow } from "@/components/ui/link-arrow";

export const metadata: Metadata = {
  title: "Trust",
  description: "Security, compliance, and data residency at Fieldforce.",
};

export default function TrustPage() {
  return (
    <>
      <PageHero
        eyebrow="TRUST CENTER"
        title={<>Built for operators <span className="text-[var(--color-text-2)]">who can't afford a bad audit.</span></>}
        body="SOC 2 Type II, ISO 27001, GDPR. Region-pinned residency in US, EU, MENA, APAC. Industry-specific compliance for telecom, EV, and IoT — request our trust pack."
        primaryCta={{ href: "mailto:security@fieldforce.com", label: "Request SOC 2 report" }}
        secondaryCta={{ href: "/trust/status", label: "Live status" }}
      />

      <SectionShell>
        <div className="shell">
          <header className="mb-10 max-w-[680px]">
            <Eyebrow>COMPLIANCE</Eyebrow>
            <h2 className="display-lg mt-5">Audited continuously.</h2>
          </header>
          <SecurityGrid
            items={[
              { title: "SOC 2 Type II",  tag: "annual audit", body: "Continuous controls monitoring. Latest audit available on request under NDA." },
              { title: "ISO 27001",      tag: "certified",    body: "Information security management system, audited and certified." },
              { title: "GDPR & CCPA",    tag: "compliant",    body: "Data subject rights, processing agreements, sub-processor list — all public." },
              { title: "PCI DSS",        tag: "level 4",      body: "For EV/charging customers handling driver payments." },
              { title: "NEVI compliance", tag: "supported",   body: "U.S. NEVI reporting and federal funding compliance." },
              { title: "AFIR compliance", tag: "supported",   body: "EU Alternative Fuels Infrastructure Regulation reporting." },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell tone="tight">
        <div className="shell">
          <header className="mb-10 max-w-[680px]">
            <Eyebrow>ARCHITECTURE</Eyebrow>
            <h2 className="display-lg mt-5">Security <span className="text-[var(--color-text-2)]">as architecture, not policy.</span></h2>
          </header>
          <SecurityGrid
            items={[
              { title: "Encryption",            body: "AES-256 at rest, TLS 1.3 in transit. Keys managed in HSM (AWS KMS / equivalent regional)." },
              { title: "Identity & RBAC",       body: "Okta, Azure AD, Google Workspace SSO. Row-level RBAC, audit log API on every action." },
              { title: "Region-pinned residency", body: "US, EU, MENA, APAC. Data never leaves your region without your approval." },
              { title: "Immutable audit log",   body: "Every action — agent or human — logged, signed, and queryable for SOC 2 audit." },
              { title: "Sub-processor list",    body: "Public, versioned, with 30-day notice on changes." },
              { title: "Vulnerability disclosure", body: <>Coordinated disclosure: <a href="mailto:security@fieldforce.com" className="text-[var(--color-accent)] underline-offset-[3px] hover:underline">security@fieldforce.com</a>.</> },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell tone="tight">
        <div className="shell shell-narrow">
          <Eyebrow>RESOURCES</Eyebrow>
          <h2 className="display-lg mt-5">Documentation we publish.</h2>
          <ul className="mt-8 grid gap-3">
            {[
              { label: "Security & compliance one-pager",   href: "#security-pdf" },
              { label: "DPA (Data Processing Addendum)",    href: "#dpa" },
              { label: "Sub-processor list",                 href: "#subprocessors" },
              { label: "VPAT (Voluntary Product Accessibility Template)", href: "#vpat" },
              { label: "Live status page",                   href: "/trust/status" },
            ].map((r) => (
              <li
                key={r.label}
                className="flex items-center justify-between rounded-[10px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] px-5 py-4"
              >
                <span className="text-[15px] text-[var(--color-text)]">{r.label}</span>
                <LinkArrow href={r.href}>View</LinkArrow>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <FAQ
        eyebrow="SECURITY FAQ"
        title="Questions security teams ask first."
        items={[
          { q: "Where is my data stored?",          a: <>You pick. Fieldforce supports region-pinned residency in US, EU, MENA, and APAC. We have customers running in single-region for sovereignty reasons; happy to walk through the architecture.</> },
          { q: "Can we run on-premise or air-gapped?", a: <>For Enterprise tier, yes. We support on-prem and air-gapped deployments with the same agents and platform — synced via your approved channel.</> },
          { q: "What's the sub-processor list?",     a: <>Public and versioned at <code>/trust#subprocessors</code>. We give 30-day notice before adding new sub-processors.</> },
          { q: "Do you support customer-managed keys?", a: <>Yes — Enterprise customers can bring their own KMS keys (CMK / BYOK).</> },
          { q: "How do you handle a breach?",         a: <>Documented incident response plan, 72-hour notification commitment in the DPA, public postmortem within 14 days for any P1 incident.</> },
        ]}
      />

      <CtaBand
        eyebrow="REQUEST THE TRUST PACK"
        title={<>Built so your security team <span className="grad-text">can say yes.</span></>}
        primary={{ href: "mailto:security@fieldforce.com", label: "Request SOC 2" }}
        secondary={{ href: "/contact",                     label: "Contact security" }}
      />
    </>
  );
}
