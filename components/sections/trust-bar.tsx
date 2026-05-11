"use client";

import { motion } from "motion/react";
import { fadeUp, fadeUpStagger } from "@/lib/motion";
import { Reveal } from "@/components/motion/reveal";

const logos = ["DISH", "VEON", "ZAIN", "SmartSky", "Engro", "Kelly", "Telenor", "Etisalat"];

export function TrustBar() {
  return (
    <section id="customers" className="py-[clamp(72px,9vw,120px)]">
      <div className="shell">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-baseline justify-center gap-4 text-center">
            <span className="grad-text font-display text-[clamp(40px,5vw,64px)] font-semibold leading-none tracking-[-0.025em]">
              $10B+
            </span>
            <span className="max-w-[52ch] text-[clamp(15px,1.2vw,17px)] text-[var(--color-text-2)]">
              in network assets managed by Fieldforce — across{" "}
              <strong className="font-medium text-[var(--color-text)]">23 countries</strong> and{" "}
              <strong className="font-medium text-[var(--color-text)]">12,000+ sites</strong>.
            </span>
          </div>
        </Reveal>

        <motion.ul
          role="list"
          aria-label="Customers"
          variants={fadeUpStagger(0.04)}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="grid grid-cols-2 items-center gap-8 border-y border-[var(--color-line-subtle)] py-8 sm:grid-cols-4 lg:grid-cols-8"
        >
          {logos.map((l) => (
            <motion.li key={l} variants={fadeUp}>
              <span className="block text-center font-display text-[18px] font-bold uppercase tracking-[0.02em] text-[var(--color-text-2)] opacity-60 grayscale transition-[opacity,color] duration-200 hover:text-[var(--color-text)] hover:opacity-100">
                {l}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
