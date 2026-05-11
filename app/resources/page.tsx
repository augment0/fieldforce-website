import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionShell } from "@/components/ui/section-shell";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Customer stories, field notes, webinars, and product docs from the team building the operating system for physical infrastructure.",
};

type Resource = {
  href: string;
  label: string;
  description: string;
  cta: string;
  external?: boolean;
};

const learn: Resource[] = [
  {
    href: "/customers",
    label: "Customer stories",
    description: "How operators in 23 countries run their networks on Fieldforce.",
    cta: "Read case studies",
  },
  {
    href: "/blog",
    label: "Blog",
    description: "Field notes, engineering posts, and product deep-dives.",
    cta: "Read the blog",
  },
  {
    href: "/resources/webinars",
    label: "Webinars & events",
    description: "Live sessions with operators and on-demand recordings.",
    cta: "Browse sessions",
  },
];

const support: Resource[] = [
  {
    href: "https://helpdesk.getfieldforce.com/",
    label: "Help Center",
    description: "Product help, how-tos, and troubleshooting for users in the field.",
    cta: "Open help center",
    external: true,
  },
  {
    href: "/docs",
    label: "Docs",
    description: "API reference, integration guides, and SDKs for engineering teams.",
    cta: "Read the docs",
  },
  {
    href: "/changelog",
    label: "Changelog",
    description: "Public release log — every shipped change, every week.",
    cta: "See releases",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="RESOURCES"
        title={
          <>
            Field notes, stories,{" "}
            <span className="text-[var(--color-text-2)]">and the docs you actually need.</span>
          </>
        }
        body="Everything we publish for operators, integrators, and engineering teams running on Fieldforce — case studies, posts, webinars, product docs, and the public changelog."
        primaryCta={{ href: "/customers", label: "Customer stories" }}
        secondaryCta={{ href: "/docs", label: "Read the docs" }}
      />

      <ResourceColumn eyebrow="LEARN" title="From the team and the field." items={learn} />
      <ResourceColumn
        eyebrow="SUPPORT & REFERENCE"
        title="What you need to run on us."
        items={support}
      />

      <CtaBand
        eyebrow="STAY IN THE LOOP"
        title={
          <>
            Subscribe to the <span className="grad-text">field-notes briefing.</span>
          </>
        }
        primary={{ href: "/blog", label: "Read the latest" }}
        secondary={{ href: "mailto:hello@fieldforce.com", label: "Subscribe by email" }}
      />
    </>
  );
}

function ResourceColumn({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: Resource[];
}) {
  return (
    <SectionShell tone="tight">
      <div className="shell">
        <Reveal>
          <header className="mb-12 max-w-[680px]">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="display-lg mt-5">{title}</h2>
          </header>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              {...(r.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group"
            >
              <Card className="h-full p-6">
                <h3 className="mb-2 text-[17px] font-semibold tracking-[-0.01em]">{r.label}</h3>
                <p className="text-[14px] leading-[1.55] text-[var(--color-text-2)]">
                  {r.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] text-[var(--color-accent)] opacity-80 transition-opacity group-hover:opacity-100">
                  {r.cta}
                  <span aria-hidden>→</span>
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
