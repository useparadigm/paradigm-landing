const rows = [
  {
    feature: "Setup",
    governance: "Auto-generated from source",
    tach: "50-100 lines of TOML with regex",
    importLinter: "Manual contract definitions",
  },
  {
    feature: "Error messages",
    governance: "LLM explains why + suggests fix",
    tach: "\"cycle detected\" — no guidance",
    importLinter: "Import chain shown, no fix",
  },
  {
    feature: "Monorepo support",
    governance: "Scans source directly",
    tach: "Broken — silent failures",
    importLinter: "Broken — path config issues",
  },
  {
    feature: "Auto-fix",
    governance: "/governance fix on PRs",
    tach: "No",
    importLinter: "No",
  },
  {
    feature: "CI integration",
    governance: "PR comments + fix command",
    tach: "Exit code only",
    importLinter: "Exit code only",
  },
  {
    feature: "Zero-config mode",
    governance: "--auto (instant)",
    tach: "Interactive TUI",
    importLinter: "No",
  },
  {
    feature: "AI assistance",
    governance: "--advise + Claude Code plugin",
    tach: "No",
    importLinter: "No",
  },
  {
    feature: "Maintenance",
    governance: "Active",
    tach: "Abandoned by original team",
    importLinter: "Active but slow",
  },
];

function CellValue({ value, highlight }: { value: string; highlight?: boolean }) {
  const isNegative = value === "No" || value.includes("Broken") || value.includes("Abandoned") || value.includes("no guidance") || value.includes("no fix");
  const isPositive = highlight && !isNegative;

  return (
    <span
      className={
        isPositive
          ? "text-[var(--accent)]"
          : isNegative
            ? "text-[var(--text-dim)]"
            : "text-[var(--text-secondary)]"
      }
    >
      {value}
    </span>
  );
}

export default function Comparison() {
  return (
    <section className="px-6" style={{ paddingTop: "var(--space-40)", paddingBottom: "var(--space-40)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="section-label mb-4">Comparison</p>
          <h2
            className="font-semibold tracking-[-0.02em] mb-6"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Why not tach or import-linter?
          </h2>
          <p
            className="text-[var(--text-secondary)] leading-relaxed"
            style={{ fontSize: "var(--text-base)" }}
          >
            Tach was abandoned by its original team in 2025. import-linter requires manual setup and package installation.
            Code-governance auto-discovers your architecture and fixes violations from PR comments.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th
                  className="text-left py-4 pr-6 font-mono text-[var(--text-dim)] font-normal"
                  style={{ fontSize: "var(--text-xs)" }}
                />
                <th
                  className="text-left py-4 px-6 font-mono font-semibold text-[var(--accent)]"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  code-governance
                </th>
                <th
                  className="text-left py-4 px-6 font-mono font-normal text-[var(--text-dim)]"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  tach
                </th>
                <th
                  className="text-left py-4 px-6 font-mono font-normal text-[var(--text-dim)]"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  import-linter
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-[var(--border)] last:border-b-0"
                >
                  <td
                    className="py-4 pr-6 font-mono text-[var(--text-secondary)] whitespace-nowrap"
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    {row.feature}
                  </td>
                  <td className="py-4 px-6" style={{ fontSize: "var(--text-sm)" }}>
                    <CellValue value={row.governance} highlight />
                  </td>
                  <td className="py-4 px-6" style={{ fontSize: "var(--text-sm)" }}>
                    <CellValue value={row.tach} />
                  </td>
                  <td className="py-4 px-6" style={{ fontSize: "var(--text-sm)" }}>
                    <CellValue value={row.importLinter} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <div
              key={i}
              className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <p
                className="font-mono text-[var(--text-secondary)] mb-4 font-semibold"
                style={{ fontSize: "var(--text-sm)" }}
              >
                {row.feature}
              </p>
              <div className="space-y-2" style={{ fontSize: "var(--text-sm)" }}>
                <div className="flex gap-3">
                  <span className="font-mono text-[var(--text-dim)] min-w-28 shrink-0">governance</span>
                  <CellValue value={row.governance} highlight />
                </div>
                <div className="flex gap-3">
                  <span className="font-mono text-[var(--text-dim)] min-w-28 shrink-0">tach</span>
                  <CellValue value={row.tach} />
                </div>
                <div className="flex gap-3">
                  <span className="font-mono text-[var(--text-dim)] min-w-28 shrink-0">import-linter</span>
                  <CellValue value={row.importLinter} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Source note */}
        <p
          className="mt-8 font-mono text-[var(--text-dim)]"
          style={{ fontSize: "var(--text-xs)" }}
        >
          tach: 2.7k stars, abandoned June 2025 (community fork at tach-org). import-linter: 992 stars, Python-based.
        </p>
      </div>
    </section>
  );
}
