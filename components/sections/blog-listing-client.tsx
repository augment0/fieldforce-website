"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog";
import { getReadingTime } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const PAGE_SIZE = 6;

export function BlogListingClient({
  items,
  categories,
}: {
  items: BlogPost[];
  categories: string[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [newsletterState, setNewsletterState] = useState<{
    type: "idle" | "loading" | "error" | "success";
    message: string;
  }>({ type: "idle", message: "" });

  const query = searchParams.get("q") ?? "";
  const activeCategory = searchParams.get("category") ?? "All";
  const page = Math.max(1, Number.parseInt(searchParams.get("page") ?? "1", 10) || 1);
  const visibleCount = page * PAGE_SIZE;

  function updateUrlParams(next: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(next)) {
      if (!value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    }
    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const categoryMatch = activeCategory === "All" || item.category === activeCategory;

      const searchMatch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, items, query]);

  const visibleItems = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  return (
    <div className="space-y-10">
      <section className="rounded-[20px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-6 sm:p-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[720px]">
            <h2 className="text-[clamp(22px,2.8vw,34px)] font-semibold leading-[1.12] tracking-[-0.02em]">
              Browse expert articles and product insights.
            </h2>
            <p className="mt-2 text-[14.5px] text-[var(--color-text-2)]">
              Filter by category, search by topic, and quickly find the posts most relevant to your
              team.
            </p>
          </div>

          <div className="min-w-[240px] text-[12px] text-[var(--color-text-3)]">
            {filtered.length} article{filtered.length === 1 ? "" : "s"} found
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
          <input
            type="search"
            value={query}
            onChange={(event) => {
              const value = event.target.value.trim();
              updateUrlParams({ q: value || null, page: "1" });
            }}
            placeholder="Search articles, tags, and topics..."
            className="w-full rounded-[10px] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] px-4 py-3 text-[14px] text-[var(--color-text)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-accent)] focus:outline-none"
            aria-label="Search blog articles"
          />
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  updateUrlParams({
                    category: category === "All" ? null : category,
                    page: "1",
                  });
                }}
                className={`rounded-full border px-3 py-1.5 text-[12px] transition ${
                  activeCategory === category
                    ? "border-[var(--color-accent)] bg-[var(--color-accent-glow)] text-[var(--color-text)]"
                    : "border-[var(--color-line)] text-[var(--color-text-2)] hover:border-[var(--color-line-strong)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <Link key={item.slug} href={`/blog/${item.slug}`} className="block h-full">
            <Card className="flex h-full flex-col overflow-hidden">
              <Image
                src={item.featuredImage}
                alt={item.title}
                className="h-[180px] w-full object-cover"
                width={1200}
                height={700}
              />
              <div className="flex flex-1 flex-col p-5">
                <Badge>{item.category}</Badge>
                <h3 className="mt-4 text-[20px] font-semibold leading-[1.24] tracking-[-0.012em]">
                  {item.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-[14px] leading-[1.6] text-[var(--color-text-2)]">
                  {item.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={`${item.slug}-${tag}`}
                      className="rounded-full border border-[var(--color-line)] px-2 py-0.5 text-[10px] text-[var(--color-text-3)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-2 pt-5 text-[12px] text-[var(--color-text-3)]">
                  {new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(item.date))}
                  <span>·</span>
                  <span>{getReadingTime(item.content)} min</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </section>

      {filtered.length === 0 && (
        <Card className="p-7 text-center text-[var(--color-text-2)]">
          No articles match your current search and filter.
        </Card>
      )}

      {hasMore && (
        <div className="flex justify-center">
          <Button
            asButton
            variant="ghost"
            onClick={() => {
              updateUrlParams({ page: String(page + 1) });
            }}
          >
            Load more articles
          </Button>
        </div>
      )}

      <section className="rounded-[20px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-6 sm:p-8">
        <h3 className="text-[clamp(22px,2.6vw,30px)] font-semibold tracking-[-0.015em]">
          Subscribe to the Fieldforce newsletter
        </h3>
        <p className="mt-2 max-w-[56ch] text-[14px] leading-[1.6] text-[var(--color-text-2)]">
          Monthly product and industry insights for modern deployment and operations leaders.
        </p>
        <form
          className="mt-5 grid gap-3 md:grid-cols-[1fr_1fr_auto]"
          onSubmit={async (event) => {
            event.preventDefault();
            const form = new FormData(event.currentTarget);
            const email = String(form.get("email") ?? "").trim();
            const name = String(form.get("name") ?? "").trim();

            if (!email) {
              setNewsletterState({ type: "error", message: "Please enter a valid email address." });
              return;
            }

            setNewsletterState({ type: "loading", message: "Submitting..." });
            try {
              const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email,
                  name: name || undefined,
                  source: "blog-listing",
                }),
              });

              if (!response.ok) {
                const payload = (await response.json()) as { error?: string };
                setNewsletterState({
                  type: "error",
                  message: payload.error ?? "Subscription failed. Please try again.",
                });
                return;
              }

              setNewsletterState({
                type: "success",
                message: "Subscribed successfully. Check your inbox for confirmation.",
              });
              event.currentTarget.reset();
            } catch {
              setNewsletterState({
                type: "error",
                message: "Unable to subscribe right now. Please try again shortly.",
              });
            }
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="Name (optional)"
            className="w-full rounded-[10px] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] px-4 py-3 text-[14px] text-[var(--color-text)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-accent)] focus:outline-none"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Work email"
            className="w-full rounded-[10px] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] px-4 py-3 text-[14px] text-[var(--color-text)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-accent)] focus:outline-none"
          />
          <Button
            asButton
            type="submit"
            disabled={newsletterState.type === "loading"}
            className="h-[46px]"
          >
            {newsletterState.type === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        <p className="mt-3 text-[12px] text-[var(--color-text-3)]" aria-live="polite">
          {newsletterState.message}
        </p>
      </section>
    </div>
  );
}
