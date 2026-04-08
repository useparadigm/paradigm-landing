const personas = [
  {
    role: "Engineering Managers",
    description:
      "You know quality is slipping but can't articulate why. Sprint velocity is down. Bug reports are up. You need data to make the case for investing in quality.",
    signal:
      "\"We spend half our sprints on bug fixes but I can't prove it to leadership.\"",
  },
  {
    role: "Staff & Principal Engineers",
    description:
      "You see the systemic patterns. You know contract tests would fix it. But between feature work and on-call, there's no time to set up the infrastructure.",
    signal:
      "\"I've been meaning to add property-based tests for six months.\"",
  },
  {
    role: "CTOs at 20-100 eng orgs",
    description:
      "Bug cost is high but you don't have a dedicated quality or platform team. You need someone who can diagnose, implement, and measure — not just advise.",
    signal:
      "\"We can't afford a quality team, but we can't afford not to have one.\"",
  },
];

export default function WhoFor() {
  return (
    <section className="px-6" style={{ paddingTop: "var(--space-40)", paddingBottom: "var(--space-40)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="section-label mb-4">Who this is for</p>
          <h2
            className="font-semibold tracking-[-0.02em]"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Built for teams that ship fast and break things
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((persona, i) => (
            <div
              key={i}
              className="rounded-[var(--radius-md)] border border-[var(--border)] border-l-2 border-l-[var(--accent)] bg-[var(--surface)] p-8 flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-4">{persona.role}</h3>

              <p
                className="text-[var(--text-secondary)] leading-relaxed mb-8 flex-1"
                style={{ fontSize: "var(--text-sm)" }}
              >
                {persona.description}
              </p>

              <div className="pt-6 border-t border-[var(--border)]">
                <p
                  className="font-mono text-[var(--text-secondary)] leading-relaxed"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {persona.signal}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
