"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeUp, fadeUpStagger } from "@/lib/motion";

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readMin: number;
  author?: string;
};

export function ArticleList({ items }: { items: Article[] }) {
  return (
    <motion.ul
      role="list"
      variants={fadeUpStagger(0.06)}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((a) => (
        <motion.li key={a.slug} variants={fadeUp}>
          <Link href={`/blog/${a.slug}`} className="block h-full">
            <Card className="flex h-full flex-col p-7">
              <Badge variant="default">{a.category}</Badge>
              <h3 className="mt-4 text-[18px] font-semibold leading-[1.3] tracking-[-0.01em]">
                {a.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-[14px] leading-[1.55] text-[var(--color-text-2)]">
                {a.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-3 pt-6 font-mono text-[11.5px] tracking-[0.04em] text-[var(--color-text-3)]">
                <time dateTime={a.date}>
                  {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(a.date))}
                </time>
                <span>·</span>
                <span>{a.readMin} min read</span>
                {a.author && (
                  <>
                    <span>·</span>
                    <span>{a.author}</span>
                  </>
                )}
              </div>
            </Card>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
