"use client";

/**
 * Tabs — wraps Radix Tabs with our visual language.
 * Provides accessible tab navigation (arrow keys, ARIA) for the agents demo.
 */

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs     = TabsPrimitive.Root;
export const TabsList = ({ className, ...rest }: React.ComponentProps<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List
    className={cn(
      "flex gap-0 border-b border-[var(--color-line)] bg-black/[0.18] overflow-x-auto",
      "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
      className,
    )}
    {...rest}
  />
);

export function TabsTrigger({
  className,
  children,
  ...rest
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex items-center gap-[10px] px-6 py-[18px]",
        "font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-text-3)]",
        "border-b border-transparent whitespace-nowrap transition-colors",
        "hover:text-[var(--color-text-2)]",
        "data-[state=active]:text-[var(--color-accent)] data-[state=active]:border-[var(--color-accent)]",
        "data-[state=active]:bg-[linear-gradient(180deg,transparent,var(--color-accent-glow))]",
        className,
      )}
      {...rest}
    >
      <span
        aria-hidden
        className={cn(
          "inline-block h-[6px] w-[6px] rounded-full bg-[var(--color-text-4)] transition-shadow",
          "[[data-state=active]_&]:bg-[var(--color-accent)] [[data-state=active]_&]:shadow-[0_0_12px_var(--color-accent)]",
        )}
      />
      {children}
    </TabsPrimitive.Trigger>
  );
}

export const TabsContent = TabsPrimitive.Content;
