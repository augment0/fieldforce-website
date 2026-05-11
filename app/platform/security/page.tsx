import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureSplit } from "@/components/sections/feature-split";
import { SecurityGrid } from "@/components/sections/security-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionShell } from "@/components/ui/section-shell";
import { VizSecurityStack } from "@/components/illustrations/platform-vizzes";

export const metadata: Metadata = { title: "Security", description: "SOC 2 Type II, ISO 27001, region-pinned residency, immutable audit log." };

export default function SecurityPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/platform", label: "Platform" }]} current="Security" />
      <PageHero
        eyebrow="PLATFORM / SECURITY"
        title={<>Security <span className="text-[var(--color-text-2)]">as architecture.</span></>}
        body="Not a policy doc. Architectural. SOC 2 Type II, ISO 27001, region-pinned residency, immutable audit log on every action — agent or human."
        primaryCta={{ href: "/trust",                      label: "Trust center" }}
        secondaryCta={{ href: "mailto:security@fieldforce.com", label: "Request SOC 2" }}
      />
      <FeatureSplit
        eyebrow="THE STACK"
        title={<>Five layers. <span className="text-[var(--color-text-2)]">Every action signed.</span></>}
        body={<p>Each layer of the platform — identity, encryption, residency, audit, sub-processors — is a deliberate architectural choice, not a checkbox. Every agent or human action passes through all five and is signed into the audit log before it commits.</p>}
        bullets={[
          "SOC 2 Type II, ISO 27001, GDPR — current attestations on the trust center",
          "Customer-managed keys (BYOK) on Enterprise tier",
          "Public sub-processor list with 30-day notice on changes",
        ]}
        visual={<VizSecurityStack />}
      />
      <SectionShell tone="tight">
        <div className="shell">
          <SecurityGrid
            items={[
              { title: "Encryption", body: "AES-256 at rest, TLS 1.3 in transit. HSM-managed keys. Customer-managed keys (BYOK) on Enterprise." },
              { title: "Identity",   body: "Okta, Azure AD, Google Workspace, OneLogin SSO. Row-level RBAC, scoped API keys." },
              { title: "Audit log",  body: "Every action — agent or human — logged, signed, queryable via API for SOC 2 audits." },
              { title: "Residency",  body: "Region-pinned in US, EU, MENA, APAC. Data never leaves your region without explicit approval." },
              { title: "Sub-processors", body: "Public, versioned list. 30-day notice on changes." },
              { title: "Incident response", body: "Documented IR plan, 72-hour notification commitment, public postmortem within 14 days." },
            ]}
          />
        </div>
      </SectionShell>
      <CtaBand
        eyebrow="REQUEST THE TRUST PACK"
        title={<>So your security team <span className="grad-text">can say yes.</span></>}
        primary={{ href: "mailto:security@fieldforce.com", label: "Request SOC 2" }}
        secondary={{ href: "/trust", label: "Trust center" }}
      />
    </>
  );
}
