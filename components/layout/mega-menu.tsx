"use client";

/**
 * Mega-menu columns rendered inside Radix NavigationMenu.Content.
 * Composes a multi-column grid of NavLink cells, each with an icon,
 * label, and one-line description.
 */

import Link from "next/link";
import type { NavGroup, NavLink } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function MegaMenuColumns({ groups }: { groups: NavGroup[] }) {
  return (
    <div
      className={cn(
        "grid gap-2",
        groups.length === 2 && "md:grid-cols-2",
        groups.length === 3 && "md:grid-cols-3",
      )}
    >
      {groups.map((g) => (
        <div key={g.label} className="p-2">
          <p className="mb-2 px-2 font-mono text-[10px] tracking-[0.12em] text-[var(--color-text-3)]">
            {g.label.toUpperCase()}
          </p>
          <ul className="flex flex-col gap-[2px]">
            {g.items.map((it) => (
              <MenuCell key={it.href} item={it} />
            ))}
          </ul>
        </div>
      ))}
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
          <path
            d="M3 8l3 3 7-7"
            stroke="currentColor"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
          <path
            d="M8 2 L13 5 V11 L8 14 L3 11 V5 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
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
