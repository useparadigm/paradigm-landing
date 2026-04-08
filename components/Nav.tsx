export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]"
      style={{ background: "rgba(5, 5, 5, 0.8)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="font-mono text-[var(--accent)] text-sm tracking-widest uppercase font-bold">
          Paradigm
        </a>
        <div className="flex items-center gap-6">
          <a href="#how-it-works" className="text-[var(--text-secondary)] text-sm hover:text-[var(--text-primary)] transition-colors">
            How it works
          </a>
          <a
            href="#hero-cta"
            className="text-sm font-mono px-4 py-1.5 rounded border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent-dim)] transition-colors"
          >
            Scan repo
          </a>
        </div>
      </div>
    </nav>
  );
}
