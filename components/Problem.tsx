const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
        <polyline points="16,7 22,7 22,13" />
      </svg>
    ),
    title: "Bug fixes keep growing",
    description:
      "Fix-to-feature ratio climbs quarter over quarter but nobody tracks it. You feel it in sprint velocity — you just can't prove it.",
    metric: "44%",
    metricLabel: "avg fix ratio",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14,2 14,8 20,8" />
        <path d="M8 13h2" />
        <path d="M8 17h2" />
        <path d="M14 13h2" />
        <path d="M14 17h2" />
      </svg>
    ),
    title: "Same patterns, different files",
    description:
      "Format handling, state management, edge cases — the same bug types keep recurring across the codebase. Different engineer, same mistake.",
    metric: "13",
    metricLabel: "recurring bugs/mo",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    title: "No time to diagnose",
    description:
      "Engineers know something's wrong but can't stop feature work to analyze what. The backlog won't fix itself and neither will the process.",
    metric: "0",
    metricLabel: "hours on root cause",
  },
];

export default function Problem() {
  return (
    <section className="px-6" style={{ paddingTop: "var(--space-40)", paddingBottom: "var(--space-40)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-4">The problem</p>
          <h2
            className="font-semibold tracking-[-0.02em]"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Teams ship bugs they could prevent
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="rounded-[var(--radius-md)] border border-transparent hover:border-[var(--border-hover)] transition-colors p-8"
            >
              <div className="mb-6">{problem.icon}</div>

              <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>

              <p
                className="text-[var(--text-secondary)] leading-relaxed mb-8"
                style={{ fontSize: "var(--text-sm)" }}
              >
                {problem.description}
              </p>

              <div className="pt-6 border-t border-[var(--border)] flex items-baseline gap-2">
                <span
                  className="font-mono font-bold metric-value text-[var(--text-primary)]"
                  style={{ fontSize: "var(--text-2xl)" }}
                >
                  {problem.metric}
                </span>
                <span className="font-mono text-[var(--text-dim)]" style={{ fontSize: "var(--text-xs)" }}>
                  {problem.metricLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
