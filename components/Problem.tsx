const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
    title: "You see bugs. We see patterns.",
    description:
      "Same root causes repeat across files and engineers. Format parsing, null handling, state sync — each looks like a one-off. Nobody connects the 13 incidents into one systemic pattern.",
    metric: "13",
    metricLabel: "recurring bugs/mo",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="7.5,4.21 12,6.81 16.5,4.21" />
        <polyline points="7.5,19.79 7.5,14.6 3,12" />
        <polyline points="21,12 16.5,14.6 16.5,19.79" />
        <line x1="3.27" y1="6.96" x2="12" y2="12.01" />
        <line x1="20.73" y1="6.96" x2="12" y2="12.01" />
      </svg>
    ),
    title: "You know something\u2019s wrong. You don\u2019t know what fixes it.",
    description:
      "Contract tests? Property-based testing? Schema validation? The right tool exists but the testing landscape is massive and your team uses what it already knows.",
    metric: "47",
    metricLabel: "tools you\u2019ll never evaluate",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "You can\u2019t justify the investment.",
    description:
      "\u201CWe should improve testing\u201D loses to feature work every sprint. Without data on what recurring bugs actually cost, there\u2019s no case to make.",
    metric: "0",
    metricLabel: "hours proving testing ROI",
  },
];

export default function Problem() {
  return (
    <section className="px-6" style={{ paddingTop: "var(--space-40)", paddingBottom: "var(--space-40)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="section-label mb-4">The problem</p>
          <h2
            className="font-semibold tracking-[-0.02em]"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Every team has these problems. No team has time to solve them.
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
