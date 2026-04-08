const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    title: "No time to diagnose",
    description:
      "Engineers know something's wrong but can't stop feature work to analyze what. The backlog won't fix itself and neither will the process.",
    metric: "0",
    metricLabel: "hours spent on root cause",
  },
];

export default function Problem() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-4">
            The problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Teams ship bugs they could prevent
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--border-bright)] transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-5">{problem.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>

              {/* Description */}
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                {problem.description}
              </p>

              {/* Metric */}
              <div className="pt-4 border-t border-[var(--border)] flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold metric-value text-[var(--text-primary)]">
                  {problem.metric}
                </span>
                <span className="font-mono text-xs text-[var(--text-dim)]">
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
