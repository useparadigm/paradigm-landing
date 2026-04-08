const personas = [
  {
    role: "Engineering Managers",
    description:
      "You know quality is slipping but can't articulate why. Sprint velocity is down. Bug reports are up. You need data to make the case for investing in quality.",
    signal: "\"We spend half our sprints on bug fixes but I can't prove it to leadership.\"",
  },
  {
    role: "Staff & Principal Engineers",
    description:
      "You see the systemic patterns. You know contract tests would fix it. But between feature work and on-call, there's no time to set up the infrastructure.",
    signal: "\"I've been meaning to add property-based tests for six months.\"",
  },
  {
    role: "CTOs at 20-100 eng orgs",
    description:
      "Bug cost is high but you don't have a dedicated quality or platform team. You need someone who can diagnose, implement, and measure — not just advise.",
    signal: "\"We can't afford a quality team, but we can't afford not to have one.\"",
  },
];

export default function WhoFor() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-4">
            Who this is for
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built for teams that ship fast and break things
          </h2>
        </div>

        {/* Persona cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((persona, i) => (
            <div
              key={i}
              className="gradient-border rounded-xl bg-[var(--surface)] p-6 flex flex-col"
            >
              {/* Role */}
              <h3 className="text-lg font-bold mb-4">{persona.role}</h3>

              {/* Description */}
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                {persona.description}
              </p>

              {/* Signal quote */}
              <div className="pt-4 border-t border-[var(--border)]">
                <p className="font-mono text-xs text-[var(--text-dim)] italic leading-relaxed">
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
