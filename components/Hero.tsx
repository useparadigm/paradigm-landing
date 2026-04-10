export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        {/* Headline */}
        <h1
          className="font-normal tracking-[-0.03em] mb-8"
          style={{
            fontSize: "var(--text-hero)",
            lineHeight: 1.15,
          }}
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

        {/* Subline */}
        <p
          className="text-[var(--text-secondary)] max-w-[540px] mx-auto mb-12"
          style={{
            fontSize: "var(--text-lg)",
            lineHeight: 1.6,
          }}
        >
          We analyze your PR history to find recurring bug patterns, then
          help you fix them. Diagnosis, remediation plan, implementation, monitoring.
        </p>

        {/* CTA */}
        <div id="hero-cta">
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
    </section>
  );
}
