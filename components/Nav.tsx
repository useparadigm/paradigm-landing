export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]"
      style={{
        background: "rgba(10, 10, 10, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="text-[var(--text-primary)] text-base tracking-[-0.01em]"
        >
          Paradigm
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-[var(--text-secondary)] text-sm hover:text-[var(--text-primary)] transition-colors"
          >
            How it works
          </a>
          <a
            href="#hero-cta"
            className="text-[var(--text-secondary)] text-sm hover:text-[var(--text-primary)] transition-colors"
          >
            Scan repo
          </a>
        </div>
      </div>
    </nav>
  );
}
