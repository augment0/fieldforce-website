"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Button, ArrowIcon } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Constellation } from "@/components/illustrations/constellation";
import { CountUp } from "@/components/motion/count-up";
import { PointerTilt } from "@/components/motion/pointer-tilt";
import { fadeUp, fadeUpStagger, easeOutEmphatic } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Two atmospheric glows scroll at different rates → depth.
  const glowAY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const glowBY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.85, 0.4]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden pb-12 pt-16 sm:pb-20 sm:pt-24 lg:pt-[120px]"
    >
      {/* atmosphere */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          style={reduced ? undefined : { y: glowAY }}
          className="absolute -top-[120px] -right-[100px] h-[580px] w-[580px] rounded-full bg-[radial-gradient(circle,var(--color-accent-glow),transparent_65%)] opacity-55 blur-[80px]"
        />
        <motion.div
          style={reduced ? undefined : { y: glowBY }}
          className="absolute -bottom-[160px] -left-[80px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,var(--color-indigo-glow),transparent_65%)] opacity-45 blur-[80px]"
        />
        <div
          className="absolute inset-0 grid-bg opacity-70"
          style={{
            maskImage: "radial-gradient(circle at 50% 30%, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 30%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <motion.div className="shell" style={reduced ? undefined : { opacity: heroOpacity }}>
        <div className="grid min-h-[64vh] items-center gap-10 lg:grid-cols-[1.05fr_0.9fr]">
          <motion.div
            className="max-w-[600px]"
            initial="hidden"
            animate="shown"
            variants={fadeUpStagger(0.07)}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>FIELDFORCE OS / v3</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="display-xl"
              transition={{ duration: 0.9, ease: easeOutEmphatic }}
            >
              The AI operations
              <br />
              platform for&nbsp;<span className="grad-text">infrastructure</span>.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[56ch] text-[clamp(17px,1.4vw,19px)] leading-[1.55] text-[var(--color-text-2)]"
            >
              Fieldforce is how operators deploy and run the physical infrastructure powering
              the modern world — telecom, EV charging, IoT, private 5G, and smart cities — on
              one AI-native platform.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
              <Button href="/demo" size="md" trailingIcon={<ArrowIcon />}>
                Book a demo
              </Button>
              <Button href="/platform" variant="ghost" trailingIcon={<ArrowIcon />}>
                See the platform
              </Button>
            </motion.div>
          </motion.div>

          <PointerTilt
            className="relative mx-auto aspect-square w-full max-w-[560px]"
            innerClassName="h-full w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: easeOutEmphatic, delay: 0.2 }}
              className="h-full w-full"
            >
              <Constellation className="h-full w-full" />
            </motion.div>
          </PointerTilt>
        </div>

        {/* metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: easeOutEmphatic, delay: 0.3 }}
          className="relative mt-14 flex flex-col gap-5 rounded-[14px] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] px-7 py-6 sm:mt-20 sm:flex-row sm:items-center sm:gap-9 lg:mt-24"
        >
          {/* edge gradient */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[14px] p-px"
            style={{
              background: "linear-gradient(135deg, var(--color-accent-glow), transparent 60%)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <span className="whitespace-nowrap font-mono text-[11.5px] uppercase tracking-[0.08em] text-[var(--color-accent)]">
            — Live on Fieldforce
          </span>
          <ul role="list" className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-7">
            {[
              { to: 12841, suffix: "",  label: "sites under management" },
              { to: 2.34,  suffix: "M", label: "work orders YTD" },
              { to: 99.97, suffix: "%", label: "data integrity" },
              { to: 23,    suffix: "",  label: "countries" },
            ].map((m, i) => (
              <li
                key={i}
                className="flex flex-col gap-1 border-l border-[var(--color-line-subtle)] pl-[18px]"
              >
                <CountUp
                  to={m.to}
                  suffix={m.suffix}
                  className="font-display text-[clamp(22px,2.4vw,28px)] font-semibold tracking-[-0.02em] text-[var(--color-text)]"
                />
                <span className="text-[12.5px] text-[var(--color-text-3)]">{m.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
