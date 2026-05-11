import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CtaBand } from "@/components/sections/cta-band";
import { RelatedRow } from "@/components/sections/related-row";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  getBlogPostBySlug,
  getReadingTime,
  getRelatedBlogPosts,
  sortedBlogPosts,
} from "@/lib/blog";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return sortedBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: `${post.title} | Fieldforce Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.featuredImage }],
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedBlogPosts(slug, 3);
  const readTime = getReadingTime(post.content);
  const currentIndex = sortedBlogPosts.findIndex((item) => item.slug === slug);
  const previousPost =
    currentIndex < sortedBlogPosts.length - 1 ? sortedBlogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? sortedBlogPosts[currentIndex - 1] : null;

  return (
    <>
      <Breadcrumb items={[{ href: "/blog", label: "Blog" }]} current={post.title} />

      <article className="pb-[clamp(56px,8vw,96px)]">
        <section className="relative isolate overflow-hidden border-b border-[var(--color-line-subtle)] py-[clamp(48px,8vw,86px)]">
          <div aria-hidden className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--color-accent-glow),transparent_70%)] blur-[70px]" />
          </div>
          <div className="shell">
            <div className="mx-auto max-w-[900px]">
              <Eyebrow>{post.category}</Eyebrow>
              <h1 className="mt-5 text-[clamp(32px,5.2vw,64px)] font-semibold leading-[1.04] tracking-[-0.024em]">
                {post.title}
              </h1>
              <p className="mt-5 max-w-[66ch] text-[clamp(16px,1.4vw,19px)] leading-[1.65] text-[var(--color-text-2)]">
                {post.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-[12px] text-[var(--color-text-3)]">
                <time dateTime={post.date}>
                  {new Intl.DateTimeFormat("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(post.date))}
                </time>
                <span>·</span>
                <span>{readTime} min read</span>
                <span>·</span>
                <span>{post.author.name}</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--color-line)] px-2.5 py-1 text-[11px] text-[var(--color-text-2)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="shell mt-10">
          <Image
            src={post.heroImage}
            alt={post.title}
            className="mx-auto h-[240px] w-full max-w-[1040px] rounded-[16px] border border-[var(--color-line)] object-cover sm:h-[360px] lg:h-[460px]"
            width={1600}
            height={900}
            priority
          />
        </div>

        <div className="shell mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="mx-auto w-full max-w-[760px] rounded-[16px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-6 sm:p-8">
            <div className="space-y-6 text-[16.5px] leading-[1.78] text-[var(--color-text-2)]">
              {post.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={`${block.type}-${index}`}
                      className="pt-3 text-[clamp(24px,2.5vw,31px)] font-semibold leading-[1.2] tracking-[-0.015em] text-[var(--color-text)]"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={`${block.type}-${index}`}
                      className="rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-5 text-[16px] italic leading-[1.7] text-[var(--color-text)]"
                    >
                      "{block.text}"
                      {block.cite && (
                        <footer className="mt-3 text-[13px] not-italic text-[var(--color-text-3)]">
                          - {block.cite}
                        </footer>
                      )}
                    </blockquote>
                  );
                }

                if (block.type === "list") {
                  const ListTag = block.ordered ? "ol" : "ul";
                  return (
                    <ListTag
                      key={`${block.type}-${index}`}
                      className="space-y-2 pl-6 marker:text-[var(--color-accent)]"
                    >
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ListTag>
                  );
                }

                return <p key={`${block.type}-${index}`}>{block.text}</p>;
              })}
            </div>

            <div className="mt-8 border-t border-[var(--color-line)] pt-5 text-[13px] text-[var(--color-text-3)]">
              Original source:{" "}
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-accent)] hover:underline"
              >
                {post.sourceUrl}
              </a>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-[96px] lg:h-fit">
            <div className="rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-5">
              <p className="text-[11px] tracking-[0.08em] text-[var(--color-text-3)]">AUTHOR</p>
              <div className="mt-4 flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-12 w-12 rounded-full border border-[var(--color-line)] object-cover"
                  width={96}
                  height={96}
                />
                <div>
                  <p className="text-[15px] font-medium text-[var(--color-text)]">
                    {post.author.name}
                  </p>
                  <p className="text-[12px] text-[var(--color-text-3)]">{post.author.role}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-5">
              <p className="text-[11px] tracking-[0.08em] text-[var(--color-text-3)]">
                IN THIS ARTICLE
              </p>
              <ul className="mt-3 space-y-2 text-[13px] text-[var(--color-text-2)]">
                <li>{post.category}</li>
                <li>{readTime} min read</li>
                <li>{post.tags.slice(0, 3).join(" · ")}</li>
              </ul>
            </div>
          </aside>
        </div>
      </article>

      <section className="border-y border-[var(--color-line-subtle)] py-7">
        <div className="shell grid gap-4 md:grid-cols-2">
          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="rounded-[12px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-4 transition hover:border-[var(--color-line-strong)]"
            >
              <p className="text-[11px] tracking-[0.08em] text-[var(--color-text-3)]">
                PREVIOUS ARTICLE
              </p>
              <p className="mt-2 text-[15px] font-semibold leading-[1.35]">{previousPost.title}</p>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="rounded-[12px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-4 text-left transition hover:border-[var(--color-line-strong)] md:text-right"
            >
              <p className="text-[11px] tracking-[0.08em] text-[var(--color-text-3)]">
                NEXT ARTICLE
              </p>
              <p className="mt-2 text-[15px] font-semibold leading-[1.35]">{nextPost.title}</p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <RelatedRow
        eyebrow="RELATED ARTICLES"
        title="More from the blog."
        items={related.map((item) => ({
          href: `/blog/${item.slug}`,
          category: item.category,
          title: item.title,
          excerpt: item.excerpt,
        }))}
      />

      <CtaBand
        eyebrow="NEWSLETTER"
        title={
          <>
            {post.cta.title}
            <span className="grad-text"> Stay ahead with practical insights.</span>
          </>
        }
        body={post.cta.body}
        primary={{ href: post.cta.primaryHref, label: post.cta.primaryLabel }}
        secondary={{ href: "/blog", label: "More posts" }}
      />
    </>
  );
}
