import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { Testimonial } from "@/components/sections/testimonial";
import { CtaBand } from "@/components/sections/cta-band";
import { RelatedRow } from "@/components/sections/related-row";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "Customer story",
};

/**
 * Skeleton case-study page. Real cases live in MDX (Velite/Contentlayer)
 * once content collections are set up.
 */
export default async function CustomerCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const customerName =
    slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");

  return (
    <>
      <Breadcrumb items={[{ href: "/customers", label: "Customers" }]} current={customerName} />

      <PageHero
        eyebrow={`CASE STUDY · ${customerName.toUpperCase()}`}
        title={<>Four systems retired. <span className="text-[var(--color-text-2)]">Crew-day waste cut 22%.</span></>}
        body={`How ${customerName} digitized asset management and field operations across their entire network — in three years.`}
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/customers", label: "More case studies" }}
      />

      <StatBar
        items={[
          { value: "22%",    label: "crew-day saved" },
          { value: "4 → 1", label: "systems retired" },
          { value: "94%",    label: "first-pass QA" },
          { value: "3 yrs",  label: "partnership" },
        ]}
      />

      <SectionShell tone="tight">
        <div className="shell shell-narrow">
          <Eyebrow>THE BEFORE</Eyebrow>
          <h2 className="display-lg mt-5">Four systems. <span className="text-[var(--color-text-2)]">Zero alignment.</span></h2>
          <div className="prose mt-8 max-w-[60ch] text-[17px] leading-[1.7] text-[var(--color-text-2)]">
            <p>
              Skeleton article body. Real case studies will be authored in MDX,
              with the full editorial layout and rich content support.
            </p>
            <p>
              The customer's prior stack: separate systems for project
              management, asset tracking, field photos, and invoice
              reconciliation. Field crews and back-office finance saw different
              numbers. Builds slipped.
            </p>
          </div>
        </div>
      </SectionShell>

      <Testimonial
        quote={
          <>
            We're three years into our partnership with Fieldforce. We've
            completely digitized asset management and field operations across
            our network.{" "}
            <strong className="font-semibold">Four systems retired. Crew-day waste cut 22%.</strong>
          </>
        }
        name="Haynes Griffin"
        role={`CEO · ${customerName}`}
        initials="HG"
      />

      <RelatedRow
        eyebrow="MORE CASE STUDIES"
        title="Other operators using Fieldforce."
        items={[
          { href: "/customers/dish",  category: "Telecom",  title: "DISH",  excerpt: "Nationwide 5G build, on one timeline." },
          { href: "/customers/veon",  category: "Telecom",  title: "Veon",  excerpt: "Multi-country ops on one platform." },
          { href: "/customers/engro", category: "EV",       title: "Engro", excerpt: "Charger commissioning, telecom-grade." },
        ]}
      />

      <CtaBand
        eyebrow="BUILD YOUR STORY"
        title={<>Your network deserves <span className="grad-text">a story like this one.</span></>}
        primary={{ href: "/demo",      label: "Book a demo" }}
        secondary={{ href: "/customers", label: "More case studies" }}
      />
    </>
  );
}
