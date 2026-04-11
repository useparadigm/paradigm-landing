const steps = [
  {
    number: "01",
    label: "Diagnose",
    description:
      "We analyze your PR history. Which bugs recur, where they cluster, what patterns emerge. You get the picture nobody had time to build.",
  },
  {
    number: "02",
    label: "Prescribe",
    description:
      "We match the right tool to each pattern. Not \u201Cimprove testing\u201D \u2014 specific: \u201Cadd contract tests for payload boundaries in these 3 modules.\u201D",
  },
  {
    number: "03",
    label: "Implement",
    description:
      "We open PRs with test infrastructure, CI config, example tests. We pair with your engineers. The gap between knowing and doing is where quality efforts die \u2014 we close it.",
  },
  {
    number: "04",
    label: "Monitor",
    description:
      "We track whether it worked. Fix ratios, revert rates, pattern recurrence. You get the ROI proof that justifies the next improvement.",
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
