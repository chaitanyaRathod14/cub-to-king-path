import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Pill, Reveal, Section, SectionHeading } from "./primitives";

const categories = [
  "STUDENT PROJECTS",
  "INDUSTRY-SPONSORED PROJECTS",
  "FINAL-YEAR PROJECTS",
  "SIH PROJECTS",
  "LIVE PROJECTS",
];

const cards = [
  {
    category: "STUDENT PROJECT",
    title: "Project Slot — Available",
    desc: "A showcase slot ready for a student-built application from our training batches.",
    tags: ["Java", "Spring Boot", "MySQL"],
    tone: "from-brand-cyan/25 to-brand-blue/15",
  },
  {
    category: "FINAL-YEAR PROJECT",
    title: "Project Slot — Available",
    desc: "A showcase slot for a guided final-year engineering project.",
    tags: ["React", "Node.js", "MongoDB"],
    tone: "from-brand-purple/20 to-brand-cyan/15",
  },
  {
    category: "SIH PROJECT",
    title: "Project Slot — Available",
    desc: "A showcase slot for a Smart India Hackathon problem statement solution.",
    tags: ["Python", "Data", "Dashboard"],
    tone: "from-brand-gold/25 to-brand-purple/12",
  },
];

const workflow = ["IDEA", "RESEARCH", "ARCHITECTURE", "DEVELOPMENT", "TESTING", "DEMO", "PRESENTATION"];

export function Projects() {
  return (
    <>
      <Section id="projects" className="bg-surface-blue">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Don&apos;t Just Learn. <span className="text-gradient-brand">Build.</span>
            </>
          }
          subtitle="Turn your knowledge into projects you can showcase."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c, i) => (
            <Reveal key={c} delay={i}>
              <Pill className="bg-white/85 font-display tracking-[0.12em]">{c}</Pill>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title + c.category} delay={i}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-soft)]"
              >
                <div
                  className={`relative h-44 bg-gradient-to-br ${c.tone} grid-lines`}
                  role="img"
                  aria-label={`${c.category} placeholder visual`}
                >
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-brand-purple">
                    {c.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-brand-navy">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <Pill key={t} className="text-[0.68rem]">{t}</Pill>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                    View Project
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="sih">
        <SectionHeading
          eyebrow="SIH + sponsored projects"
          title={
            <>
              Build Projects That <span className="text-gradient-brand">Solve Real Problems</span>
            </>
          }
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {workflow.map((step, i) => (
            <Reveal key={step} delay={i}>
              <div className="relative rounded-xl border border-border bg-white/85 px-3 py-6 text-center">
                <span className="font-display text-[0.62rem] font-bold tracking-[0.16em] text-brand-purple">
                  {step}
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{ originX: 0 }}
                  className="absolute inset-x-4 bottom-3 block h-0.5 rounded-full [background-image:var(--gradient-brand)]"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { t: "SIH Project Guidance", d: "Guidance on approaching Smart India Hackathon problem statements, from research to presentation." },
            { t: "Industry-Sponsored Projects", d: "Project work aligned with our own development centre and industry tie-ups." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i}>
              <div className="surface-card h-full p-7 hover:-translate-y-1 hover:border-brand-purple/40">
                <h3 className="font-display text-lg font-bold text-brand-navy">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
