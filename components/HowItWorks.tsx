const steps = [
  {
    number: "01",
    label: "Diagnose",
    tag: "automated",
    description:
      "We analyze your PR history. Where bugs cluster, what types recur, fix ratio trends. All from your GitHub data.",
    color: "var(--accent)",
  },
  {
    number: "02",
    label: "Prescribe",
    tag: "expert",
    description:
      "An expert reviews the diagnosis and creates a remediation plan specific to your stack, your CI, your team structure.",
    color: "var(--accent)",
  },
  {
    number: "03",
    label: "Implement",
    tag: "human + AI",
    description:
      "We open PRs with test infrastructure, CI config, and example tests. We pair with your engineers to set it up.",
    color: "var(--accent)",
  },
  {
    number: "04",
    label: "Monitor",
    tag: "automated",
    description:
      "Track whether interventions worked. Fix ratios, revert rates, pattern recurrence. See the before and after.",
    color: "var(--accent)",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-6">
      {/* Subtle accent line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-[var(--border-bright)]" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-4">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Diagnose. Prescribe. Fix. Verify.
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative group"
            >
              {/* Connector line (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-6 h-px bg-[var(--border-bright)] translate-x-full z-10" />
              )}

              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 h-full hover:border-[var(--border-bright)] transition-all duration-300">
                {/* Step number + tag */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-mono text-3xl font-bold"
                    style={{ color: step.color, opacity: 0.3 }}
                  >
                    {step.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-[var(--border-bright)] text-[var(--text-dim)]">
                    {step.tag}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold mb-3">{step.label}</h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
