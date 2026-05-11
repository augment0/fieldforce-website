"use client";

/**
 * Top navigation: sticky, glass-blurred, with desktop mega-menu and mobile sheet.
 * Built on Radix NavigationMenu for free ARIA + keyboard navigation.
 */

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import * as NavMenu from "@radix-ui/react-navigation-menu";
import { Button, ArrowIcon } from "@/components/ui/button";
import { topNav } from "@/lib/routes";
import { MegaMenu } from "@/components/layout/mega-menu";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile on route change.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Body scroll lock + Esc handler when mobile open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const isTopActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] w-full backdrop-blur-[14px] [backdrop-filter:blur(14px)_saturate(140%)] transition-colors duration-300",
        scrolled
          ? "bg-[rgba(8,9,12,0.82)] border-b border-[var(--color-line-subtle)]"
          : "bg-[rgba(8,9,12,0.55)] border-b border-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-8">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Fieldforce home"
          className="inline-flex items-center text-[var(--color-text)] transition-opacity hover:opacity-90"
        >
          <Logo className="h-[26px] w-auto" arcClassName="opacity-50" />
        </Link>

        {/* Desktop nav */}
        <NavMenu.Root className="relative mx-auto hidden lg:block" delayDuration={80}>
          <NavMenu.List className="flex list-none items-center gap-1">
            {topNav.map((item) =>
              item.menu ? (
                <NavMenu.Item key={item.href}>
                  <NavMenu.Trigger
                    className={cn(
                      "group inline-flex items-center gap-[6px] rounded-md px-3 py-2 text-[14.5px] text-[var(--color-text-2)] transition-colors hover:text-[var(--color-text)] data-[state=open]:text-[var(--color-text)]",
                      isTopActive(item.href) && "text-[var(--color-text)]",
                    )}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 12 12"
                      className="h-[10px] w-[10px] transition-transform duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </NavMenu.Trigger>
                  <NavMenu.Content className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out md:absolute md:w-auto">
                    <div
                      className={cn(
                        // Wider mega-menus so featured rows + columns + What's New rail fit.
                        // 980px keeps Industries airy; Platform's featured row uses the full width.
                        "min-w-[760px] lg:min-w-[980px] rounded-[14px] border border-[var(--color-line)] bg-[rgba(17,19,26,0.96)] p-1",
                        "shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] backdrop-blur-md",
                      )}
                    >
                      <MegaMenu menu={item.menu} />
                    </div>
                  </NavMenu.Content>
                </NavMenu.Item>
              ) : (
                <NavMenu.Item key={item.href}>
                  <NavMenu.Link asChild active={isTopActive(item.href)}>
                    <Link
                      href={item.href}
                      data-active={isTopActive(item.href) || undefined}
                      className={cn(
                        "group relative inline-block rounded-md px-3 py-2 text-[14.5px] text-[var(--color-text-2)] transition-colors hover:text-[var(--color-text)]",
                        "data-[active]:text-[var(--color-text)]",
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className="absolute inset-x-3 -bottom-[2px] h-px origin-left scale-x-0 bg-[var(--color-accent)] transition-transform duration-200 group-hover:scale-x-[0.7] group-data-[active]:scale-x-[0.7]"
                      />
                    </Link>
                  </NavMenu.Link>
                </NavMenu.Item>
              ),
            )}
          </NavMenu.List>

          {/* Position the indicator */}
          <NavMenu.Indicator
            className="data-[state=visible]:animate-in data-[state=hidden]:animate-out flex h-2 items-end justify-center overflow-hidden"
          >
            <span className="relative top-[1px] h-2 w-2 rotate-45 bg-[var(--color-line)]" />
          </NavMenu.Indicator>

          <div className="absolute left-0 top-full flex w-full justify-center">
            <NavMenu.Viewport className="origin-top relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] transition-[width,height] duration-300" />
          </div>
        </NavMenu.Root>

        {/* Right actions */}
        <div className="flex items-center gap-[18px]">
          <a
            href="mailto:engineering@fieldforce.com"
            className="hidden text-[14px] text-[var(--color-text-2)] transition-colors hover:text-[var(--color-text)] lg:inline"
          >
            Talk to engineering
          </a>
          <Button href="/demo" size="sm" trailingIcon={<ArrowIcon />}>
            Book a demo
          </Button>
          {/* Mobile toggle */}
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
            className="grid h-[38px] w-[38px] place-items-center rounded-md border border-[var(--color-line)] lg:hidden"
          >
            <div className="flex flex-col items-center gap-1">
              <span className={cn("h-[1.5px] w-[14px] bg-[var(--color-text)] transition-transform duration-200", mobileOpen && "translate-y-[5.5px] rotate-45")} />
              <span className={cn("h-[1.5px] w-[14px] bg-[var(--color-text)] transition-opacity duration-200", mobileOpen && "opacity-0")} />
              <span className={cn("h-[1.5px] w-[14px] bg-[var(--color-text)] transition-transform duration-200", mobileOpen && "-translate-y-[5.5px] -rotate-45")} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 bottom-0 z-[99] overflow-y-auto border-t border-[var(--color-line)] bg-[var(--color-bg-base)] px-5 py-8 lg:hidden"
          >
            <MobileSheet onClose={() => setMobileOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileSheet({ onClose }: { onClose: () => void }) {
  return (
    <nav aria-label="Mobile" className="flex flex-col">
      {topNav.map((item) =>
        item.menu ? (
          <details
            key={item.href}
            className="group border-b border-[var(--color-line-subtle)] py-4"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between text-[22px] text-[var(--color-text)] [&::-webkit-details-marker]:hidden">
              {item.label}
              <svg
                viewBox="0 0 12 12"
                className="h-3 w-3 text-[var(--color-text-3)] transition-transform duration-200 group-open:rotate-180"
                aria-hidden
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="mt-4 flex flex-col gap-3 pl-2">
              {item.menu.featured?.items.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={onClose}
                  className="text-[16px] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
                >
                  {sub.label}
                </Link>
              ))}
              {item.menu.groups.flatMap((g) => g.items).map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={onClose}
                  className="text-[16px] text-[var(--color-text-2)] hover:text-[var(--color-text)]"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </details>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="border-b border-[var(--color-line-subtle)] py-4 text-[22px] text-[var(--color-text)]"
          >
            {item.label}
          </Link>
        ),
      )}
      <Link
        href="mailto:engineering@fieldforce.com"
        onClick={onClose}
        className="border-b border-[var(--color-line-subtle)] py-4 text-[18px] text-[var(--color-text-2)]"
      >
        Talk to engineering
      </Link>
      <Button href="/demo" className="mt-6 self-start" onClick={onClose}>
        Book a demo <ArrowIcon />
      </Button>
    </nav>
  );
}

