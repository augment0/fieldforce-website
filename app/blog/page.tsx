import { BlogListingClient } from "@/components/sections/blog-listing-client";
import { PageHero } from "@/components/sections/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { blogCategoryOptions, sortedBlogPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Resources and Insights",
  description:
    "Explore Fieldforce blog posts, industry insights, and product news across telecom, IoT, smart cities, and infrastructure operations.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="RESOURCES BLOG"
        title={
          <>
            Insights for teams building
            <span className="text-[var(--color-text-2)]"> modern infrastructure operations.</span>
          </>
        }
        body="Discover practical analysis, product updates, and implementation guidance across telecom, IoT, energy, and smart-city operations."
        primaryCta={{ href: "/resources/webinars", label: "Browse webinars" }}
        secondaryCta={{ href: "/demo", label: "Book a demo" }}
      />

      <SectionShell>
        <div className="shell">
          <BlogListingClient items={sortedBlogPosts} categories={blogCategoryOptions} />
        </div>
      </SectionShell>
    </>
  );
}
