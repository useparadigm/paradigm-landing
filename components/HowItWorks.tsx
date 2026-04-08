const steps = [
  {
    number: "01",
    label: "Diagnose",
    description:
      "We analyze your PR history. Where bugs cluster, what types recur, fix ratio trends. All from your GitHub data.",
  },
  {
    number: "02",
    label: "Prescribe",
    description:
      "An expert reviews the diagnosis and creates a remediation plan specific to your stack, your CI, your team structure.",
  },
  {
    number: "03",
    label: "Implement",
    description:
      "We open PRs with test infrastructure, CI config, and example tests. We pair with your engineers to set it up.",
  },
  {
    number: "04",
    label: "Monitor",
    description:
      "Track whether interventions worked. Fix ratios, revert rates, pattern recurrence. See the before and after.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6"
      style={{ paddingTop: "var(--space-40)", paddingBottom: "var(--space-40)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-4">How it works</p>
          <h2
            className="font-semibold tracking-[-0.02em]"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Diagnose. Prescribe. Fix. Verify.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-[var(--radius-md)] border border-transparent hover:border-[var(--border-hover)] transition-colors p-8"
            >
              <span
                className="font-mono text-[var(--text-dim)] block mb-6"
                style={{ fontSize: "var(--text-xs)" }}
              >
                {step.number}
              </span>

              <h3
                className="font-semibold mb-3"
                style={{ fontSize: "var(--text-xl)" }}
              >
                {step.label}
              </h3>

              <p
                className="text-[var(--text-secondary)] leading-relaxed"
                style={{ fontSize: "var(--text-sm)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
