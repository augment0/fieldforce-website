export function SkipLink() {
  return (
    <a
      href="#main"
      className="fixed left-3 top-[-100px] z-[1000] rounded-[10px] border border-[var(--color-line-strong)] bg-[var(--color-bg-elevated)] px-[14px] py-[10px] text-[var(--color-text)] transition-[top] duration-200 focus-visible:top-3"
    >
      Skip to content
    </a>
  );
}
