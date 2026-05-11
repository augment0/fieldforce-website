"use client";

import * as Acc from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

export const AccordionRoot = Acc.Root;

export function AccordionItem({
  className,
  ...rest
}: React.ComponentProps<typeof Acc.Item>) {
  return (
    <Acc.Item
      className={cn(
        "border-b border-[var(--color-line-subtle)] last:border-b-0",
        className,
      )}
      {...rest}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...rest
}: React.ComponentProps<typeof Acc.Trigger>) {
  return (
    <Acc.Header className="flex">
      <Acc.Trigger
        className={cn(
          "group flex flex-1 items-center justify-between gap-6 py-5 text-left text-[17px] font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]",
          className,
        )}
        {...rest}
      >
        {children}
        <svg
          viewBox="0 0 14 14"
          className="h-3 w-3 flex-shrink-0 text-[var(--color-text-3)] transition-transform duration-200 group-data-[state=open]:rotate-45"
          aria-hidden
        >
          <line x1="7" y1="2" x2="7" y2="12" stroke="currentColor" strokeWidth="1.5" />
          <line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </Acc.Trigger>
    </Acc.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...rest
}: React.ComponentProps<typeof Acc.Content>) {
  return (
    <Acc.Content
      className={cn(
        "overflow-hidden text-[15px] leading-[1.6] text-[var(--color-text-2)]",
        "data-[state=open]:animate-[accDown_220ms_var(--ease-out-emphatic)]",
        "data-[state=closed]:animate-[accUp_180ms_var(--ease-out-snappy)]",
        className,
      )}
      {...rest}
    >
      <div className="pb-6 pr-6">{children}</div>
    </Acc.Content>
  );
}
