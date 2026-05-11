"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeUp, fadeUpStagger } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/eyebrow";

export type RelatedItem = {
  href: string;
  title: string;
  category: string;
  excerpt: string;
};

/**
 * RelatedRow — "Related cases / posts / agents" 2-up before the final CTA.
 */
export function RelatedRow({
  eyebrow = "RELATED",
  title,
  items,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  items: RelatedItem[];
}) {
  return (
    <section className="py-[clamp(56px,8vw,96px)] border-t border-[var(--color-line-subtle)]">
      <div className="shell">
        <header className="mb-8">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-[clamp(24px,3vw,32px)] font-semibold tracking-[-0.018em]">
            {title}
          </h2>
        </header>
        <motion.ul
          role="list"
          variants={fadeUpStagger(0.06)}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((it) => (
            <motion.li key={it.href} variants={fadeUp}>
              <Link href={it.href} className="block h-full">
                <Card className="h-full p-6">
                  <Badge>{it.category}</Badge>
                  <h3 className="mt-4 text-[17px] font-semibold leading-[1.3] tracking-[-0.01em]">
                    {it.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-[14px] leading-[1.55] text-[var(--color-text-2)]">
                    {it.excerpt}
                  </p>
                </Card>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
