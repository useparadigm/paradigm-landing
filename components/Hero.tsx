export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-14 dot-grid scanline overflow-hidden">
      {/* Radial glow behind hero */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,255,136,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Status badge */}
        <div className="fade-up inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full border border-[var(--border-bright)] bg-[var(--surface)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="font-mono text-xs text-[var(--text-secondary)]">
            Free for public repos
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-up fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
          Your codebase is{" "}
          <span className="text-[var(--accent)]">leaking quality</span>.
          <br />
          Find out where.
        </h1>

        {/* Subline */}
        <p className="fade-up fade-up-delay-2 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed">
          Paradigm analyzes your PR history to find recurring bug patterns, then
          helps you fix them. Free scan for any public GitHub repo.
        </p>

        {/* Terminal-style CTA input */}
        <div id="hero-cta" className="fade-up fade-up-delay-3 max-w-xl mx-auto">
          <div className="glow-green rounded-xl overflow-hidden border border-[var(--border-bright)] bg-[var(--surface)]">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--border)]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-[11px] text-[var(--text-dim)]">
                paradigm scan
              </span>
            </div>

            {/* Input row */}
            <div className="flex items-center gap-3 px-4 py-4">
              <span className="font-mono text-[var(--accent)] text-sm select-none shrink-0">
                $
              </span>
              <input
                type="text"
                placeholder="github.com/org/repo"
                className="flex-1 bg-transparent font-mono text-sm text-[var(--text-primary)] placeholder:text-[var(--text-dim)] outline-none"
              />
              <button className="shrink-0 px-5 py-2 bg-[var(--accent)] text-[#050505] font-mono text-sm font-bold rounded-lg hover:brightness-110 transition-all cursor-pointer">
                Scan
              </button>
            </div>
          </div>

          <p className="mt-4 font-mono text-xs text-[var(--text-dim)]">
            No signup required. Results in under 2 minutes.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-[var(--text-dim)] uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--text-dim)] to-transparent" />
      </div>
    </section>
  );
}
