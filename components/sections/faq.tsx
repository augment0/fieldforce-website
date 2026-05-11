"use client";

import { SectionShell } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";

export type FaqItem = { q: string; a: React.ReactNode };

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  items: FaqItem[];
  id?: string;
};

export function FAQ({ eyebrow, title, items, id }: Props) {
  return (
    <SectionShell id={id} tone="tight">
      <div className="shell shell-narrow">
        <Reveal>
          <header className="mb-10">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2 className="display-lg mt-5">{title}</h2>
          </header>
        </Reveal>
        <Reveal>
          <AccordionRoot type="single" collapsible className="w-full">
            {items.map((it, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{it.q}</AccordionTrigger>
                <AccordionContent>{it.a}</AccordionContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </Reveal>
      </div>
    </SectionShell>
  );
}
