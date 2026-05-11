import Link from "next/link";

type Crumb = { href: string; label: string };

/**
 * Breadcrumb — sits above the page hero on inner pages two levels deep or more.
 * The current page (last segment) is rendered as plain text, not a link.
 */
export function Breadcrumb({
  items,
  current,
}: {
  items: Crumb[];
  current: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="shell pt-7 pb-2 font-mono text-[11.5px] tracking-[0.1em] text-[var(--color-text-3)]"
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            href="/"
            className="uppercase text-[var(--color-text-3)] transition-colors hover:text-[var(--color-text)]"
          >
            Home
          </Link>
        </li>
        {items.map((c) => (
          <li key={c.href} className="flex items-center gap-2">
            <span aria-hidden>/</span>
            <Link
              href={c.href}
              className="uppercase transition-colors hover:text-[var(--color-text)]"
            >
              {c.label}
            </Link>
          </li>
        ))}
        <li className="flex items-center gap-2">
          <span aria-hidden>/</span>
          <span aria-current="page" className="uppercase text-[var(--color-text-2)]">
            {current}
          </span>
        </li>
      </ol>
    </nav>
  );
}
