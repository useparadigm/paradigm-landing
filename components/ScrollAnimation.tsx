"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// --- Helpers ---

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function clamp01(t: number) {
  return Math.max(0, Math.min(1, t));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * clamp01(t);
}

function easeOut(t: number) {
  return 1 - Math.pow(1 - clamp01(t), 3);
}

function rangeT(progress: number, start: number, end: number) {
  return clamp01((progress - start) / (end - start));
}

// --- PR icon SVG ---

function PRIcon({ type }: { type: "fix" | "feat" }) {
  const color = type === "fix" ? "var(--danger)" : "var(--border-hover)";
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <circle cx="5" cy="3.5" r="2" />
      <circle cx="5" cy="12.5" r="2" />
      <line x1="5" y1="5.5" x2="5" y2="10.5" />
      <circle cx="11" cy="12.5" r="2" />
      <path d="M11 10.5V8c0-1.1-.9-2-2-2H7" />
    </svg>
  );
}

// --- Data ---

type PRCard = {
  id: number;
  label: string;
  type: "fix" | "feat";
  pattern: "format" | "state" | "null" | "misc" | "healthy";
};

const prCards: PRCard[] = [
  { id: 1, label: "fix: parse CSV dates", type: "fix", pattern: "format" },
  { id: 2, label: "fix: JSON encode bytes", type: "fix", pattern: "format" },
  { id: 3, label: "fix: UTF-8 headers", type: "fix", pattern: "format" },
  { id: 4, label: "fix: XML namespace", type: "fix", pattern: "format" },
  { id: 5, label: "fix: date timezone", type: "fix", pattern: "format" },
  { id: 6, label: "fix: payload boundary", type: "fix", pattern: "format" },
  { id: 7, label: "fix: multipart parse", type: "fix", pattern: "format" },
  { id: 8, label: "fix: race condition", type: "fix", pattern: "state" },
  { id: 9, label: "fix: stale cache", type: "fix", pattern: "state" },
  { id: 10, label: "fix: state rollback", type: "fix", pattern: "state" },
  { id: 11, label: "fix: sync conflict", type: "fix", pattern: "state" },
  { id: 12, label: "fix: queue deadlock", type: "fix", pattern: "state" },
  { id: 13, label: "fix: event ordering", type: "fix", pattern: "state" },
  { id: 14, label: "fix: null user", type: "fix", pattern: "null" },
  { id: 15, label: "fix: empty response", type: "fix", pattern: "null" },
  { id: 16, label: "fix: undefined field", type: "fix", pattern: "null" },
  { id: 17, label: "fix: missing config", type: "fix", pattern: "null" },
  { id: 18, label: "fix: nil pointer", type: "fix", pattern: "null" },
  { id: 19, label: "fix: typo in query", type: "fix", pattern: "misc" },
  { id: 20, label: "fix: wrong import", type: "fix", pattern: "misc" },
  { id: 21, label: "fix: off-by-one", type: "fix", pattern: "misc" },
  { id: 22, label: "fix: memory leak", type: "fix", pattern: "misc" },
  { id: 23, label: "feat: export API", type: "feat", pattern: "healthy" },
  { id: 24, label: "feat: auth flow", type: "feat", pattern: "healthy" },
  { id: 25, label: "feat: dashboard", type: "feat", pattern: "healthy" },
  { id: 26, label: "feat: search", type: "feat", pattern: "healthy" },
  { id: 27, label: "feat: webhooks", type: "feat", pattern: "healthy" },
  { id: 28, label: "feat: billing", type: "feat", pattern: "healthy" },
  { id: 29, label: "feat: SSO", type: "feat", pattern: "healthy" },
  { id: 30, label: "feat: dark mode", type: "feat", pattern: "healthy" },
  { id: 31, label: "fix: CSS overflow", type: "fix", pattern: "misc" },
  { id: 32, label: "feat: i18n", type: "feat", pattern: "healthy" },
  { id: 33, label: "fix: batch retry", type: "fix", pattern: "state" },
  { id: 34, label: "feat: notifications", type: "feat", pattern: "healthy" },
  { id: 35, label: "fix: optional chain", type: "fix", pattern: "null" },
  { id: 36, label: "feat: file upload", type: "feat", pattern: "healthy" },
  { id: 37, label: "fix: content-type", type: "fix", pattern: "format" },
  { id: 38, label: "feat: audit log", type: "feat", pattern: "healthy" },
  { id: 39, label: "fix: reconnect ws", type: "fix", pattern: "state" },
  { id: 40, label: "feat: RBAC", type: "feat", pattern: "healthy" },
];

// --- Positions ---

function edgeScatter(id: number): { x: number; y: number } {
  const strip = id % 4;
  const r1 = seededRandom(id * 7);
  const r2 = seededRandom(id * 13);
  switch (strip) {
    case 0: return { x: 0.05 + r1 * 0.9, y: 0.06 + r2 * 0.18 };
    case 1: return { x: 0.05 + r1 * 0.9, y: 0.76 + r2 * 0.18 };
    case 2: return { x: 0.03 + r1 * 0.17, y: 0.15 + r2 * 0.65 };
    case 3: return { x: 0.8 + r1 * 0.17, y: 0.15 + r2 * 0.65 };
    default: return { x: 0.5, y: 0.5 };
  }
}

function innerScatter(id: number): { x: number; y: number } {
  return {
    x: seededRandom(id * 7) * 0.7 + 0.15,
    y: seededRandom(id * 13) * 0.5 + 0.2,
  };
}

function clusterPos(card: PRCard): { x: number; y: number } {
  const cluster = CLUSTERS[card.pattern];
  const memberIndex = prCards
    .filter((c) => c.pattern === card.pattern)
    .findIndex((c) => c.id === card.id);
  const col = memberIndex % 3;
  const row = Math.floor(memberIndex / 3);
  return {
    x: cluster.cx + (col - 1) * 0.06,
    y: cluster.cy + 0.03 + row * 0.045,
  };
}

// --- Layout constants ---

const CLUSTERS: Record<string, { cx: number; cy: number; label: string }> = {
  format: { cx: 0.18, cy: 0.35, label: "format-handling" },
  state: { cx: 0.5, cy: 0.3, label: "state-sync" },
  null: { cx: 0.82, cy: 0.35, label: "null-edge-cases" },
  misc: { cx: 0.35, cy: 0.7, label: "other" },
  healthy: { cx: 0.68, cy: 0.72, label: "features" },
};

const FIXES: { pattern: string; label: string; x: number; y: number }[] = [
  { pattern: "format", label: "→ contract tests", x: 0.18, y: 0.55 },
  { pattern: "state", label: "→ state machine refactor", x: 0.5, y: 0.52 },
  { pattern: "null", label: "→ property-based tests", x: 0.82, y: 0.55 },
];

const PHASE_LABELS: { text: string; start: number; end: number }[] = [
  { text: "4,218 pull requests", start: 0.15, end: 0.35 },
  { text: "Bug patterns identified", start: 0.35, end: 0.60 },
  { text: "Remediation prescribed", start: 0.60, end: 0.80 },
  { text: "Verified & monitored", start: 0.80, end: 1.0 },
];

// --- Component ---

export default function ScrollAnimation() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (!outerRef.current) return;
    const rect = outerRef.current.getBoundingClientRect();
    const scrollableHeight = rect.height - window.innerHeight;
    if (scrollableHeight <= 0) return;
    setProgress(clamp01(-rect.top / scrollableHeight));
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  // --- All derived values (continuous) ---

  const heroOpacity = 1 - clamp01((progress - 0.02) / 0.1);
  const heroToScatterT = clamp01(progress / 0.15);
  const clusterT = easeOut(rangeT(progress, 0.35, 0.60));
  const clusterLabelOpacity = rangeT(progress, 0.40, 0.50);
  const arrowDrawT = rangeT(progress, 0.60, 0.75);
  const fixCardOpacity = rangeT(progress, 0.62, 0.75);
  const checkOpacity = rangeT(progress, 0.80, 0.90);
  const summaryOpacity = rangeT(progress, 0.85, 0.95);

  return (
    <div ref={outerRef} className="relative" style={{ height: "500vh" }}>
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{ background: "var(--bg)" }}
      >
        {/* === Hero content === */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-16"
          style={{
            zIndex: 10,
            opacity: heroOpacity,
            pointerEvents: heroOpacity < 0.1 ? "none" : "auto",
          }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="font-normal tracking-[-0.03em] mb-8"
              style={{ fontSize: "var(--text-hero)", lineHeight: 1.15 }}
            >
              Your codebase is{" "}
              <span
                className="italic"
                style={{ fontFamily: "var(--font-instrument-serif), serif" }}
              >
                leaking quality
              </span>
              .<br />
              Find out where.
            </h1>
            <p
              className="text-[var(--text-secondary)] max-w-[540px] mx-auto mb-12"
              style={{ fontSize: "var(--text-lg)", lineHeight: 1.6 }}
            >
              We analyze your PR history to find recurring bug patterns, then
              help you fix them. Diagnosis, remediation plan, implementation, monitoring.
            </p>
            <div>
              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3qOWE4c9IDdsaX-l2r-khhvdQw9F7LmGmngeSJGwy1_2DN37NXNCv5YNc2CbGK99raCQ5BeX4M"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[var(--accent)] text-[var(--bg)] text-sm font-medium rounded-[var(--radius-sm)] hover:brightness-110 transition-all"
              >
                Book a call
              </a>
              <p className="mt-4 text-sm text-[var(--text-dim)]">
                30 min intro — we&apos;ll show you what we find in your repo.
              </p>
            </div>
          </div>
        </div>

        {/* === Phase labels (crossfade) === */}
        {PHASE_LABELS.map((label) => {
          const fadeIn = rangeT(progress, label.start, label.start + 0.04);
          const fadeOut = 1 - rangeT(progress, label.end - 0.04, label.end);
          return (
            <div
              key={label.text}
              className="phase-label"
              style={{ opacity: Math.min(fadeIn, fadeOut) }}
            >
              {label.text}
            </div>
          );
        })}

        {/* === Summary line === */}
        <div className="summary-line" style={{ opacity: summaryOpacity }}>
          Fix ratio: <span style={{ color: "var(--danger)" }}>44%</span>
          {" → "}
          <span style={{ color: "var(--accent)" }}>28%</span>
        </div>

        {/* === Cluster labels === */}
        {Object.entries(CLUSTERS).map(([key, cluster]) => (
          <div
            key={key}
            className="cluster-label"
            style={{
              left: `${cluster.cx * 100}%`,
              top: `${cluster.cy * 100 - 14}%`,
              transform: "translateX(-50%)",
              opacity: clusterLabelOpacity,
            }}
          >
            {cluster.label}
          </div>
        ))}

        {/* === PR cards === */}
        {prCards.map((card) => {
          const edge = edgeScatter(card.id);
          const inner = innerScatter(card.id);
          const cl = clusterPos(card);

          // Continuous position: edge → inner → cluster
          const scatterX = lerp(edge.x, inner.x, heroToScatterT);
          const scatterY = lerp(edge.y, inner.y, heroToScatterT);
          const x = lerp(scatterX, cl.x, clusterT);
          const y = lerp(scatterY, cl.y, clusterT);

          // CSS class for state
          const isAmbient = progress < 0.05;
          const isDimmed = progress > 0.4 && card.pattern === "healthy";
          const isResolved = progress > 0.85 && card.type === "fix";

          let stateClass = "";
          if (isAmbient) stateClass = "pr-card--ambient";
          else stateClass = "pr-card--scatter";
          if (isDimmed) stateClass += " pr-card--dimmed";
          if (isResolved) stateClass += " pr-card--resolved";

          return (
            <div
              key={card.id}
              className={`pr-card pr-card--${card.type} ${stateClass}`}
              style={{
                transform: `translate(${x * 100}vw, ${y * 100}vh) translate(-50%, -50%)`,
                animationDelay: isAmbient ? `${seededRandom(card.id * 3) * -25}s` : undefined,
                animationDuration: isAmbient ? `${20 + seededRandom(card.id * 11) * 15}s` : undefined,
                zIndex: 1,
              }}
            >
              <PRIcon type={card.type} />
              {card.label}
            </div>
          );
        })}

        {/* === SVG arrows === */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 2 }}
        >
          {FIXES.map((fix) => {
            const cluster = CLUSTERS[fix.pattern];
            return (
              <line
                key={fix.pattern}
                className="arrow-line"
                x1={`${cluster.cx * 100}%`}
                y1={`${(cluster.cy + 0.1) * 100}%`}
                x2={`${fix.x * 100}%`}
                y2={`${fix.y * 100}%`}
                style={{ strokeDashoffset: 200 * (1 - arrowDrawT) }}
              />
            );
          })}
        </svg>

        {/* === Fix cards === */}
        {FIXES.map((fix) => (
          <div
            key={fix.pattern}
            className="fix-card"
            style={{
              left: `${fix.x * 100}%`,
              top: `${fix.y * 100}%`,
              transform: "translate(-50%, -50%)",
              opacity: fixCardOpacity,
              zIndex: 3,
            }}
          >
            {fix.label}
          </div>
        ))}

        {/* === Checkmarks === */}
        {Object.entries(CLUSTERS)
          .filter(([key]) => key !== "healthy" && key !== "misc")
          .map(([key, cluster]) => (
            <div
              key={key}
              className="check-mark"
              style={{
                left: `${cluster.cx * 100}%`,
                top: `${cluster.cy * 100}%`,
                transform: "translate(-50%, -50%)",
                opacity: checkOpacity,
                zIndex: 4,
              }}
            >
              ✓
            </div>
          ))}
      </div>
    </div>
  );
}
