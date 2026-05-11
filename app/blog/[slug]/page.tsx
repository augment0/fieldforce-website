import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CtaBand } from "@/components/sections/cta-band";
import { RelatedRow } from "@/components/sections/related-row";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Article",
};

/**
 * Skeleton blog post page. Real content lives in MDX (Velite/Contentlayer)
 * once content collections are set up — see ARCHITECTURE.md §7.
 */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <Breadcrumb items={[{ href: "/blog", label: "Blog" }]} current={slug} />

      <article className="py-[clamp(56px,8vw,96px)]">
        <div className="shell shell-narrow">
          <Eyebrow>ENGINEERING</Eyebrow>
          <h1 className="display-lg mt-5">A blog post title placeholder.</h1>
          <div className="mt-6 flex items-center gap-3 font-mono text-[12px] tracking-[0.04em] text-[var(--color-text-3)]">
            <time>April 30, 2026</time>
            <span>·</span>
            <span>9 min read</span>
            <span>·</span>
            <span>By Author Name</span>
          </div>
          <div className="prose mt-12 max-w-[60ch] text-[17px] leading-[1.7] text-[var(--color-text-2)]">
            <p>
              This is a skeleton article page. Real posts will be authored in
              MDX with full styling support — see{" "}
              <code className="rounded-md bg-[var(--color-bg-elevated)] px-2 py-[2px] font-mono text-[14px] text-[var(--color-accent)]">
                docs/ARCHITECTURE.md
              </code>{" "}
              for the content-collection setup.
            </p>
            <p>
              Headings, body, code blocks, blockquotes, lists, and embeds all
              reuse the global tokens, so the article voice matches the rest
              of the site without any per-post styling work.
            </p>
          </div>
        </div>
      </article>

      <RelatedRow
        title="More from the blog."
        items={[
          { href: "/blog/5g-rollout-postmortem-2025", category: "Operations", title: "5G rollout postmortem", excerpt: "Three years of 5G builds. The patterns that actually predict slip." },
          { href: "/blog/how-evidence-learns-from-your-photos", category: "AI", title: "How Evidence learns from your photos", excerpt: "On-customer-data fine-tuning, demystified." },
          { href: "/blog/ev-charging-isnt-telecom-and-thats-okay", category: "Industry", title: "EV charging isn't telecom", excerpt: "Same platform, new physics." },
        ]}
      />

      <CtaBand
        eyebrow="WHAT WE'RE BUILDING"
        title={<>See it on <span className="grad-text">your network.</span></>}
        primary={{ href: "/demo",  label: "Book a demo" }}
        secondary={{ href: "/blog", label: "More posts" }}
      />
    </>
  );
}
