export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <span className="text-[var(--text-primary)] text-base">
            Paradigm
          </span>
          <a
            href="mailto:hello@useparadigm.app"
            className="text-sm text-[var(--text-dim)] hover:text-[var(--text-secondary)] transition-colors"
          >
            hello@useparadigm.app
          </a>
        </div>
        <span className="text-sm text-[var(--text-dim)]">
          &copy; 2026 Paradigm
        </span>
      </div>
    </footer>
  );
}
