"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp, fadeUpStagger } from "@/lib/motion";

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio?: string;
  photoSrc?: string;
  photoAlt?: string;
};

export function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <motion.ul
      role="list"
      variants={fadeUpStagger(0.06)}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {members.map((m) => (
        <motion.li
          key={m.name}
          variants={fadeUp}
          className="rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-6"
        >
          {m.photoSrc ? (
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-[var(--color-line)] bg-[var(--color-bg-elevated)]">
              <Image
                src={m.photoSrc}
                alt={m.photoAlt ?? `${m.name} profile photo`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
          ) : (
            <div className="grid h-14 w-14 place-items-center rounded-full border border-[var(--color-line)] bg-[linear-gradient(135deg,var(--color-bg-elevated),var(--color-bg-raised))] font-display text-[14px] font-semibold tracking-[0.04em] text-[var(--color-accent)]">
              {m.initials}
            </div>
          )}
          <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.01em]">{m.name}</h3>
          <p className="mt-1 font-mono text-[11.5px] tracking-[0.04em] text-[var(--color-text-3)]">
            {m.role}
          </p>
          {m.bio && (
            <p className="mt-4 text-[13.5px] leading-[1.55] text-[var(--color-text-2)]">
              {m.bio}
            </p>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
}
