import { motion } from "motion/react";
import { Pill, Reveal, Section, SectionHeading } from "./primitives";

const topics = [
  "Data Analysis", "Data Visualization", "SQL", "Python", "NumPy",
  "Pandas", "Matplotlib", "Seaborn", "Power BI", "Tableau",
];

const bars = [58, 82, 41, 96, 67, 74];
const kpis = [
  { label: "Records", value: "12.4K" },
  { label: "Dashboards", value: "24" },
  { label: "Queries", value: "310" },
];

export function Analytics() {
  return (
    <Section id="analytics">
      <SectionHeading
        eyebrow="Data analytics"
        title={
          <>
            Turn Data Into <span className="text-gradient-brand">Decisions</span>
          </>
        }
        subtitle="From SQL and Python to Power BI and Tableau — analyse, visualise and present insights."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <div className="surface-card p-7">
            <div className="grid grid-cols-3 gap-3">
              {kpis.map((k) => (
                <div key={k.label} className="rounded-xl bg-surface-blue px-4 py-4">
                  <p className="font-display text-xl font-bold text-brand-navy">{k.value}</p>
                  <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {k.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex h-44 items-end gap-3">
              {bars.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 rounded-t-lg"
                  style={{
                    backgroundImage:
                      i % 3 === 0
                        ? "linear-gradient(to top, var(--brand-blue), var(--brand-cyan))"
                        : i % 3 === 1
                          ? "linear-gradient(to top, var(--brand-purple), var(--brand-blue))"
                          : "linear-gradient(to top, var(--brand-gold), oklch(0.85 0.09 82))",
                  }}
                />
              ))}
            </div>

            <svg viewBox="0 0 300 80" className="mt-6 h-20 w-full" role="img" aria-label="Trend line chart">
              <motion.path
                d="M0 62 L50 44 L100 52 L150 24 L200 34 L250 12 L300 20"
                fill="none"
                stroke="var(--brand-cyan)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </svg>
            <p className="mt-3 text-xs text-muted-foreground">
              Illustrative sample data shown for visual purposes only.
            </p>
          </div>
        </Reveal>

        <div>
          <div className="flex flex-wrap gap-2">
            {topics.map((t, i) => (
              <Reveal key={t} delay={i % 6}>
                <Pill className="bg-surface-blue/70">{t}</Pill>
              </Reveal>
            ))}
          </div>
          <Reveal delay={2}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { t: "No heavy coding barrier", d: "Analytics tooling first, with practical Python where it matters." },
                { t: "Dashboard practice", d: "Power BI and Tableau workflows built around real reporting tasks." },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-border bg-white/80 p-5">
                  <p className="font-display text-sm font-bold text-brand-navy">{c.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
