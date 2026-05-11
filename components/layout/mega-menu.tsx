"use client";

/**
 * Mega-menu used inside Radix NavigationMenu.Content.
 *
 * Sitetracker-style layout, AI-first adaptation:
 *
 *   ┌──────────────────────────────────────────────────────────────┐
 *   │ LIFECYCLE  ┌────┐ ┌────┐ ┌────┐ ┌────┐                       │
 *   │            │card│ │card│ │card│ │card│       (featured row)  │
 *   │            └────┘ └────┘ └────┘ └────┘                       │
 *   ├──────────────────────────────────────────────────────────────┤
 *   │ MODULES        INTELLIGENCE          ┌────────────────────┐  │
 *   │ - link         - link                │ WHAT'S NEW         │  │
 *   │ - link         - link                │ [promo card]       │  │
 *   │ - link         - link                │ Meet the agents →  │  │
 *   │ ...            ...                   └────────────────────┘  │
 *   └──────────────────────────────────────────────────────────────┘
 *
 * Each zone is optional — Industries menu has no `featured` row,
 * Resources menu has both columns and a `whatsNew` promo.
 */

import Link from "next/link";
import type {
  FeaturedCard,
  MegaMenu as MegaMenuConfig,
  NavGroup,
  NavLink,
  WhatsNew,
} from "@/lib/routes";
import { cn } from "@/lib/utils";

export function MegaMenu({ menu }: { menu: MegaMenuConfig }) {
  const hasFeatured = !!menu.featured;
  const hasRail = !!menu.whatsNew;

  return (
    <div className="flex flex-col gap-4 p-2">
      {hasFeatured && (
        <FeaturedRow label={menu.featured!.label} items={menu.featured!.items} />
      )}

      <div
        className={cn(
          "grid gap-2",
          hasRail ? "lg:grid-cols-[1fr_280px]" : "lg:grid-cols-1",
        )}
      >
        <div
          className={cn(
            "grid gap-2",
            menu.groups.length === 1 && "md:grid-cols-1",
            menu.groups.length === 2 && "md:grid-cols-2",
            menu.groups.length === 3 && "md:grid-cols-3",
            menu.groups.length >= 4 && "md:grid-cols-4",
          )}
        >
          {menu.groups.map((g) => (
            <Column key={g.label} group={g} />
          ))}
        </div>

        {hasRail && <WhatsNewCard whatsNew={menu.whatsNew!} />}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   FEATURED ROW — used for lifecycle stages on Platform menu.
   ───────────────────────────────────────────────────────────── */
function FeaturedRow({ label, items }: { label: string; items: FeaturedCard[] }) {
  return (
    <div className="rounded-[10px] border border-[var(--color-line-subtle)] bg-[linear-gradient(180deg,var(--color-accent-glow),transparent_85%)] p-3">
      <p className="mb-3 px-2 font-mono text-[10px] tracking-[0.14em] text-[var(--color-accent)]">
        {label.toUpperCase()}
      </p>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {items.map((it) => (
          <FeaturedCardCell key={it.href} card={it} />
        ))}
      </div>
    </div>
  );
}

function FeaturedCardCell({ card }: { card: FeaturedCard }) {
  return (
    <Link
      href={card.href}
      className={cn(
        "group flex flex-col gap-2 rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-raised)] p-3 transition-colors",
        "hover:border-[rgba(111,228,217,0.3)] hover:bg-[var(--color-bg-elevated)]",
      )}
    >
      <span className="inline-grid h-8 w-8 place-items-center rounded-md border border-[var(--color-line)] bg-[var(--color-bg-elevated)] text-[var(--color-accent)]">
        <Glyph kind={card.icon} />
      </span>
      <span className="text-[14px] font-semibold tracking-[-0.01em] text-[var(--color-text)]">
        {card.label}
      </span>
      <span className="text-[12.5px] leading-[1.45] text-[var(--color-text-3)]">
        {card.description}
      </span>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────
   STANDARD COLUMN — group label + link cells.
   ───────────────────────────────────────────────────────────── */
function Column({ group }: { group: NavGroup }) {
  return (
    <div className="p-2">
      <p className="mb-2 px-2 font-mono text-[10px] tracking-[0.12em] text-[var(--color-text-3)]">
        {group.label.toUpperCase()}
      </p>
      <ul className="flex flex-col gap-[2px]">
        {group.items.map((it) => (
          <MenuCell key={it.href} item={it} />
        ))}
      </ul>
    </div>
  );
}

function MenuCell({ item }: { item: NavLink }) {
  return (
    <li>
      <Link
        href={item.href}
        className="group flex items-start gap-3 rounded-[10px] px-3 py-[10px] transition-colors hover:bg-white/[0.04]"
      >
        <span className="mt-[2px] inline-grid h-7 w-7 flex-shrink-0 place-items-center rounded-md border border-[var(--color-line)] bg-[var(--color-bg-elevated)] text-[var(--color-text-3)] transition-colors group-hover:border-[rgba(111,228,217,0.3)] group-hover:bg-[var(--color-accent-glow)] group-hover:text-[var(--color-accent)]">
          <Glyph kind={item.icon} />
        </span>
        <span className="flex flex-col gap-[2px]">
          <span className="text-[14px] font-medium text-[var(--color-text)]">{item.label}</span>
          {item.description ? (
            <span className="text-[12.5px] text-[var(--color-text-3)]">{item.description}</span>
          ) : null}
        </span>
      </Link>
    </li>
  );
}

/* ─────────────────────────────────────────────────────────────
   WHAT'S NEW — right-rail promotional callout.
   ───────────────────────────────────────────────────────────── */
function WhatsNewCard({ whatsNew }: { whatsNew: WhatsNew }) {
  return (
    <Link
      href={whatsNew.href}
      className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] p-4 transition-colors hover:border-[rgba(111,228,217,0.3)]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent-glow),transparent_60%)] opacity-50"
      />
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-accent)]">
          {whatsNew.eyebrow.toUpperCase()}
        </span>
        {whatsNew.tag && (
          <span className="rounded-full border border-[rgba(111,228,217,0.3)] bg-[var(--color-accent-glow)] px-2 py-[1px] font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-accent)]">
            {whatsNew.tag}
          </span>
        )}
      </div>
      <div className="relative flex flex-1 flex-col gap-2">
        <h4 className="text-[16px] font-semibold leading-[1.25] tracking-[-0.012em] text-[var(--color-text)]">
          {whatsNew.title}
        </h4>
        <p className="text-[12.5px] leading-[1.5] text-[var(--color-text-2)]">
          {whatsNew.description}
        </p>
      </div>
      <span className="relative inline-flex items-center gap-[6px] pt-1 text-[12.5px] font-medium text-[var(--color-accent)] transition-[gap] group-hover:gap-[10px]">
        {whatsNew.cta ?? "Learn more"}
        <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
          <path d="M2 6h7m-3-3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────
   ICON GLYPHS — one-line semantic SVGs.
   ───────────────────────────────────────────────────────────── */
function Glyph({ kind }: { kind?: NavLink["icon"] }) {
  const cls = "h-[14px] w-[14px]";
  switch (kind) {
    case "site":
      return (
        <svg viewBox="0 0 16 16" className={cls} aria-hidden>
          <circle cx="8" cy="8" r="2" fill="currentColor" />
          <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
        </svg>
      );
    case "asset":
      return (
        <svg viewBox="0 0 16 16" className={cls} aria-hidden>
          <rect x="2.5" y="2.5" width="4.5" height="4.5" rx="1" fill="currentColor" />
          <rect x="9" y="2.5" width="4.5" height="4.5" rx="1" fill="none" stroke="currentColor" />
          <rect x="2.5" y="9" width="4.5" height="4.5" rx="1" fill="none" stroke="currentColor" />
          <rect x="9" y="9" width="4.5" height="4.5" rx="1" fill="currentColor" />
        </svg>
      );
    case "work":
      return (
        <svg viewBox="0 0 16 16" className={cls} aria-hidden>
          <path d="M3 8h10M8 3v10" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="8" cy="8" r="2" fill="currentColor" />
        </svg>
      );
    case "evidence":
      return (
        <svg viewBox="0 0 16 16" className={cls} aria-hidden>
          <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "intel":
      return (
        <svg viewBox="0 0 16 16" className={cls} aria-hidden>
          <circle cx="8" cy="8" r="1.6" fill="currentColor" />
          <circle cx="8" cy="8" r="4.5" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1.5 2" />
        </svg>
      );
    case "agent":
      return (
        <svg viewBox="0 0 16 16" className={cls} aria-hidden>
          <path d="M8 2 L13 5 V11 L8 14 L3 11 V5 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
          <circle cx="8" cy="8" r="1.6" fill="currentColor" />
        </svg>
      );
    case "vertical":
      return (
        <svg viewBox="0 0 16 16" className={cls} aria-hidden>
          <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="1" />
          <path d="M8 2 L5 5 L8 7 L11 5 Z" stroke="currentColor" strokeWidth="0.9" fill="currentColor" opacity=".5" />
        </svg>
      );
    case "outcome":
      return (
        <svg viewBox="0 0 16 16" className={cls} aria-hidden>
          <path d="M2.5 12.5 L6 8.5 L9 11 L13.5 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="13.5" cy="4" r="1.6" fill="currentColor" />
        </svg>
      );
    /* Lifecycle stage icons */
    case "plan":
      return (
        <svg viewBox="0 0 16 16" className={cls} aria-hidden>
          <rect x="3" y="3" width="10" height="10" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <line x1="3" y1="6.5" x2="13" y2="6.5" stroke="currentColor" strokeWidth="1" />
          <circle cx="6" cy="9.5" r="0.9" fill="currentColor" />
          <line x1="7.5" y1="9.5" x2="11.5" y2="9.5" stroke="currentColor" strokeWidth="0.9" />
          <line x1="7.5" y1="11.5" x2="11.5" y2="11.5" stroke="currentColor" strokeWidth="0.9" />
        </svg>
      );
    case "build":
      return (
        <svg viewBox="0 0 16 16" className={cls} aria-hidden>
          <path d="M3 13 L8 4 L13 13 Z" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
          <line x1="6" y1="13" x2="10" y2="13" stroke="currentColor" strokeWidth="1.1" />
          <circle cx="8" cy="8" r="1.2" fill="currentColor" />
        </svg>
      );
    case "operate":
      return (
        <svg viewBox="0 0 16 16" className={cls} aria-hidden>
          <circle cx="8" cy="8" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <circle cx="8" cy="8" r="0.9" fill="currentColor" />
          <path d="M8 2 L8 4 M8 12 L8 14 M2 8 L4 8 M12 8 L14 8 M3.5 3.5 L4.9 4.9 M11.1 11.1 L12.5 12.5 M3.5 12.5 L4.9 11.1 M11.1 4.9 L12.5 3.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    case "monetize":
      return (
        <svg viewBox="0 0 16 16" className={cls} aria-hidden>
          <path d="M3 12 L6 8 L9 10 L13 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 4 L13 4 L13 7" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "doc":
    default:
      return (
        <svg viewBox="0 0 16 16" className={cls} aria-hidden>
          <rect x="3" y="2.5" width="10" height="11" rx="1.2" fill="none" stroke="currentColor" />
          <line x1="5.5" y1="6" x2="10.5" y2="6" stroke="currentColor" strokeWidth="0.8" />
          <line x1="5.5" y1="9" x2="10.5" y2="9" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      );
  }
}

/* ─────────────────────────────────────────────────────────────
   Back-compat export so existing imports keep working.
   ───────────────────────────────────────────────────────────── */
export { MegaMenu as MegaMenuColumns };
