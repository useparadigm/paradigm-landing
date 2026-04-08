const terminalLines = [
  { type: "command", text: "$ paradigm scan posthog/posthog" },
  { type: "blank" },
  { type: "info", text: "Analyzing 4,218 pull requests..." },
  { type: "info", text: "Classifying bug patterns..." },
  { type: "blank" },
  { type: "header", text: "=== DIAGNOSIS REPORT ===" },
  { type: "blank" },
  { type: "label", text: "Repository", value: "posthog/posthog" },
  { type: "label", text: "PRs analyzed", value: "4,218" },
  { type: "label", text: "Time range", value: "Jan 2025 - Mar 2026" },
  { type: "blank" },
  { type: "section", text: "Quality Metrics" },
  { type: "metric-bad", text: "Fix ratio", value: "44%", note: "above 30% benchmark" },
  { type: "metric-warn", text: "Revert rate", value: "3.2%", note: "normal" },
  { type: "metric-bad", text: "Mean time to fix", value: "4.7 days", note: "up from 3.1 days" },
  { type: "blank" },
  { type: "section", text: "Fragile Areas" },
  { type: "area", text: "replay", value: "31 bug-fix PRs", severity: "high" },
  { type: "area", text: "llma", value: "24 bug-fix PRs", severity: "high" },
  { type: "area", text: "batch-exports", value: "18 bug-fix PRs", severity: "medium" },
  { type: "blank" },
  { type: "section", text: "Recurring Patterns" },
  { type: "pattern", text: "format-handling", value: "13 incidents", action: "contract testing" },
  { type: "pattern", text: "state-sync", value: "9 incidents", action: "state machine refactor" },
  { type: "pattern", text: "null-edge-cases", value: "7 incidents", action: "property-based testing" },
  { type: "blank" },
  { type: "header", text: "=== RECOMMENDATIONS ===" },
  { type: "blank" },
  { type: "rec", number: "1", text: "Add contract tests for payload boundaries in replay + llma" },
  { type: "rec", number: "2", text: "Introduce payload corpus from production for format-handling coverage" },
  { type: "rec", number: "3", text: "Add property-based tests for null/edge-case clusters" },
  { type: "blank" },
  { type: "success", text: "Estimated impact: reduce fix ratio from 44% to ~28% within 3 months" },
];

type Line = (typeof terminalLines)[number];

function TerminalLine({ line }: { line: Line }) {
  switch (line.type) {
    case "command":
      return <div className="text-[var(--accent)]">{line.text}</div>;
    case "blank":
      return <div className="h-5" />;
    case "info":
      return <div className="text-[var(--text-dim)]">{line.text}</div>;
    case "header":
      return <div className="text-[var(--text-primary)] font-bold">{line.text}</div>;
    case "section":
      return <div className="text-[var(--text-secondary)]">{line.text}</div>;
    case "label":
      return (
        <div className="flex gap-2">
          <span className="text-[var(--text-dim)] min-w-40">{line.text}:</span>
          <span className="text-[var(--text-primary)]">{"value" in line ? String(line.value) : ""}</span>
        </div>
      );
    case "metric-bad":
      return (
        <div className="flex gap-2">
          <span className="text-[var(--text-dim)] min-w-40">{line.text}:</span>
          <span className="text-[var(--danger)] font-bold">{"value" in line ? String(line.value) : ""}</span>
          <span className="text-[var(--text-dim)]">{"note" in line ? `(${line.note})` : ""}</span>
        </div>
      );
    case "metric-warn":
      return (
        <div className="flex gap-2">
          <span className="text-[var(--text-dim)] min-w-40">{line.text}:</span>
          <span className="text-[var(--warning)]">{"value" in line ? String(line.value) : ""}</span>
          <span className="text-[var(--text-dim)]">{"note" in line ? `(${line.note})` : ""}</span>
        </div>
      );
    case "area":
      return (
        <div className="flex gap-2 items-center">
          <span className={`w-1.5 h-1.5 rounded-full ${"severity" in line && line.severity === "high" ? "bg-[var(--danger)]" : "bg-[var(--warning)]"}`} />
          <span className="text-[var(--text-primary)] min-w-36">{line.text}</span>
          <span className="text-[var(--text-dim)]">{"value" in line ? String(line.value) : ""}</span>
        </div>
      );
    case "pattern":
      return (
        <div className="flex gap-2 flex-wrap">
          <span className="text-[var(--text-primary)] min-w-36">{line.text}</span>
          <span className="text-[var(--text-dim)]">{"value" in line ? String(line.value) : ""}</span>
          <span className="text-[var(--accent)] opacity-70">{"action" in line ? `-> ${line.action}` : ""}</span>
        </div>
      );
    case "rec":
      return (
        <div className="flex gap-2">
          <span className="text-[var(--accent)]">{"number" in line ? `${line.number}.` : ""}</span>
          <span className="text-[var(--text-primary)]">{line.text}</span>
        </div>
      );
    case "success":
      return <div className="text-[var(--accent)]">{line.text}</div>;
    default:
      return null;
  }
}

export default function ScanReveals() {
  return (
    <section className="px-6" style={{ paddingTop: "var(--space-40)", paddingBottom: "var(--space-40)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <p className="section-label mb-4">Example output</p>
          <h2
            className="font-semibold tracking-[-0.02em] mb-4"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            What the scan reveals
          </h2>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto" style={{ fontSize: "var(--text-base)" }}>
            Real analysis from a public repository. Your report will look like this.
          </p>
        </div>

        <div className="terminal-window">
          <div className="terminal-titlebar">
            <div className="terminal-dot bg-[#ff5f57]" />
            <div className="terminal-dot bg-[#febc2e]" />
            <div className="terminal-dot bg-[#28c840]" />
            <span className="ml-3 font-mono text-[var(--text-dim)]" style={{ fontSize: "var(--text-xs)" }}>
              paradigm — diagnosis report
            </span>
          </div>

          <div className="p-8 font-mono leading-[1.8] overflow-x-auto" style={{ fontSize: "var(--text-sm)" }}>
            {terminalLines.map((line, i) => (
              <TerminalLine key={i} line={line} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
