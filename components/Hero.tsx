export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        {/* Headline */}
        <h1
          className="font-normal tracking-[-0.03em] mb-8"
          style={{
            fontSize: "var(--text-hero)",
            lineHeight: 1.15,
          }}
        >
          Your codebase is{" "}
          <span
            className="italic"
            style={{ fontFamily: "var(--font-instrument-serif), serif" }}
          >
            leaking quality
          </span>
          .<br />
          Find out where.
        </h1>

        {/* Subline */}
        <p
          className="text-[var(--text-secondary)] max-w-[540px] mx-auto mb-24"
          style={{
            fontSize: "var(--text-lg)",
            lineHeight: 1.6,
          }}
        >
          Paradigm analyzes your PR history to find recurring bug patterns, then
          helps you fix them. Free scan for any public GitHub repo.
        </p>

        {/* CTA input */}
        <div id="hero-cta" className="max-w-xl mx-auto">
          <div className="flex items-center gap-3 px-4 py-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)]">
            <span className="font-mono text-sm text-[var(--text-dim)] select-none shrink-0">
              $
            </span>
            <input
              type="text"
              placeholder="github.com/org/repo"
              className="flex-1 bg-transparent font-mono text-sm text-[var(--text-primary)] placeholder:text-[var(--text-dim)] outline-none"
            />
            <button className="shrink-0 px-5 py-2 bg-[var(--accent)] text-[var(--bg)] font-mono text-sm font-medium rounded-[var(--radius-sm)] hover:brightness-110 transition-all cursor-pointer">
              Scan
            </button>
          </div>

          <p className="mt-4 text-sm text-[var(--text-dim)]">
            No signup required. Results in under 2 minutes.
          </p>
        </div>
      </div>
    </section>
  );
}
