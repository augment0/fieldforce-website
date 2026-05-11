"use client";

import { motion } from "motion/react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { ArrowIcon } from "@/components/ui/button";
import { TelecomIllo, EvIllo, IotIllo } from "@/components/illustrations/use-case-illos";
import { fadeUp, fadeUpStagger } from "@/lib/motion";

const items = [
  {
    label: "TELECOM & 5G",
    title: "Where we cut our teeth.",
    body: "5G site builds, fiber drops, small-cell densification, towers — at carrier scale, in 23 countries.",
    cta: "Telecom industry",
    href: "/industries/telecom",
    art: <TelecomIllo />,
  },
  {
    label: "EV & ENERGY",
    title: "Same platform, new physics.",
    body: "Charger commissioning, depot operations, energy assets — at telecom-grade reliability, on the EV stack.",
    cta: "EV & energy",
    href: "/industries/ev-energy",
    art: <EvIllo />,
  },
  {
    label: "IoT & NETWORKS OF THINGS",
    title: "Every gateway, sensor, and node.",
    body: "Smart cities, private 5G, industrial IoT — distributed device fleets, provisioned and maintained from one platform.",
    cta: "IoT industry",
    href: "/industries/iot",
    art: <IotIllo />,
  },
];

export function UseCases() {
  return (
    <section id="solutions" className="py-[clamp(96px,12vw,160px)]">
      <div className="shell">
        <Reveal>
          <header className="mb-14 max-w-[760px]">
            <Eyebrow>BUILT FOR EVERY INFRASTRUCTURE</Eyebrow>
            <h2 className="display-lg mt-5">
              One platform.{" "}
              <span className="text-[var(--color-text-2)]">Every infrastructure.</span>
            </h2>
            <p className="mt-5 max-w-[56ch] text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-[var(--color-text-2)]">
              Fieldforce was designed around primitives that don't care what the asset is. That's
              why operators run telecom, EV, and IoT on one platform — not three.
            </p>
          </header>
        </Reveal>

        <motion.div
          variants={fadeUpStagger(0.08)}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {items.map((it) => (
            <motion.article
              key={it.label}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-[20px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-[var(--color-line-strong)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[20px] bg-[linear-gradient(180deg,transparent_50%,var(--color-accent-glow))] opacity-0 transition-opacity duration-300 group-hover:opacity-35"
              />
              <div className="relative grid aspect-[1.2/1] place-items-center overflow-hidden border-b border-[var(--color-line-subtle)] bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_70%),var(--color-bg-inset)]">
                <div
                  aria-hidden
                  className="absolute inset-0 grid-bg"
                  style={{
                    maskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 75%)",
                    WebkitMaskImage:
                      "radial-gradient(circle at 50% 50%, black 30%, transparent 75%)",
                    opacity: 0.5,
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative z-10">{it.art}</div>
              </div>
              <div className="p-7">
                <span className="mb-3 block font-mono text-[11px] tracking-[0.12em] text-[var(--color-accent)]">
                  {it.label}
                </span>
                <h3 className="mb-[10px] text-[22px] font-semibold tracking-[-0.02em]">
                  {it.title}
                </h3>
                <p className="text-[14.5px] leading-[1.55] text-[var(--color-text-2)]">{it.body}</p>
                <a
                  href={it.href}
                  className="mt-[18px] inline-flex items-center gap-[6px] text-[14px] font-medium text-[var(--color-accent)] transition-[gap] hover:gap-[10px]"
                >
                  {it.cta} <ArrowIcon />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
