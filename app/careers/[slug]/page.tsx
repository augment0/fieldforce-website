import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Button, ArrowIcon } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "Open role",
};

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  return (
    <>
      <Breadcrumb items={[{ href: "/careers", label: "Careers" }]} current={title} />

      <SectionShell tone="tight">
        <div className="shell shell-narrow">
          <Eyebrow>ENGINEERING · REMOTE US/EU</Eyebrow>
          <h1 className="display-lg mt-5">{title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Badge>Engineering</Badge>
            <Badge variant="accent">Remote</Badge>
            <span className="font-mono text-[12px] tracking-[0.04em] text-[var(--color-text-3)]">
              Posted recently
            </span>
          </div>
          <Button href={`mailto:careers@fieldforce.com?subject=Apply: ${title}`} className="mt-8" trailingIcon={<ArrowIcon />}>
            Apply for this role
          </Button>
        </div>
      </SectionShell>

      <SectionShell tone="tight">
        <div className="shell shell-narrow">
          <div className="prose max-w-[60ch] text-[16px] leading-[1.7] text-[var(--color-text-2)]">
            <h2 className="text-[22px] font-semibold tracking-[-0.012em] text-[var(--color-text)]">
              About this role
            </h2>
            <p>
              Skeleton role detail. Real role pages will be authored in MDX with
              full content support — same content collection setup as customer
              cases and blog posts.
            </p>
            <h2 className="mt-10 text-[22px] font-semibold tracking-[-0.012em] text-[var(--color-text)]">
              You'll work on
            </h2>
            <ul>
              <li>Building primitives that underpin the entire platform</li>
              <li>Working closely with customers across telecom, EV, and IoT</li>
              <li>Owning a slice of the system end-to-end — from API to UI</li>
            </ul>
            <h2 className="mt-10 text-[22px] font-semibold tracking-[-0.012em] text-[var(--color-text)]">
              You probably
            </h2>
            <ul>
              <li>Have shipped production software for 5+ years</li>
              <li>Care about restraint as much as features</li>
              <li>Like talking directly to the people using what you build</li>
            </ul>
          </div>
        </div>
      </SectionShell>

      <CtaBand
        eyebrow="APPLY"
        title={<>Send us a note <span className="grad-text">in your own words.</span></>}
        body="No cover letter format. Tell us what you'd build here."
        primary={{ href: `mailto:careers@fieldforce.com?subject=Apply: ${title}`, label: "Email recruiting" }}
        secondary={{ href: "/careers", label: "Other roles" }}
      />
    </>
  );
}
