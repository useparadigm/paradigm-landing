export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-mono text-sm text-[var(--accent)] tracking-widest uppercase font-bold">
            Paradigm
          </span>
          <a
            href="mailto:hello@useparadigm.app"
            className="font-mono text-xs text-[var(--text-dim)] hover:text-[var(--text-secondary)] transition-colors"
          >
            hello@useparadigm.app
          </a>
        </div>
        <span className="font-mono text-xs text-[var(--text-dim)]">
          &copy; 2026 Paradigm
        </span>
      </div>
    </footer>
  );
}
