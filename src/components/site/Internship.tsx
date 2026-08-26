import { motion } from "motion/react";
import { BookOpen, Briefcase, Sparkles } from "lucide-react";
import { Cta } from "./cta";
import { Pill, Reveal, Section, SectionHeading } from "./primitives";

const stages = [
  { icon: BookOpen, t: "LEARN", d: "Develop technical skills." },
  { icon: Briefcase, t: "WORK", d: "Build practical projects." },
  { icon: Sparkles, t: "EXPERIENCE", d: "Gain real-world exposure." },
];

const frontend = [
  "HTML5", "CSS3", "Bootstrap", "JavaScript", "DOM Manipulation",
  "Object-Oriented JavaScript", "Asynchronous JavaScript", "jQuery",
  "Angular / React", "Minor Projects", "Major Projects",
];

const benefits = [
  "Hands-on practical sessions",
  "Project-based learning",
  "Internship / experience certificate where applicable",
  "Industry-oriented training",
  "Personal attention",
  "Assignments",
  "Doubt-solving",
  "Placement / interview preparation",
];

export function Internship() {
  return (
    <Section
      id="internship"
      className="bg-[linear-gradient(140deg,var(--surface-blue),white_45%,var(--surface-purple))]"
    >
      <SectionHeading
        eyebrow="Internship"
        title={
          <>
            Learn + Work + <span className="text-gradient-brand">Earn</span>
          </>
        }
        subtitle="Turn learning into practical experience through internship and project-based opportunities."
      />

      <div className="relative mt-16 grid gap-6 md:grid-cols-3">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="absolute left-[16%] right-[16%] top-16 hidden h-0.5 rounded-full [background-image:var(--gradient-brand)] md:block"
        />
        {stages.map((s, i) => (
          <Reveal key={s.t} delay={i}>
            <div className="surface-card relative h-full p-8 text-center hover:-translate-y-1.5 hover:border-brand-cyan/50">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-[var(--shadow-soft)]">
                <s.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold tracking-wide text-brand-navy">
                {s.t}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="surface-card h-full p-8">
            <p className="eyebrow">Featured</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-brand-navy">
              Frontend Development Internship
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              For third year V &amp; VI semester students in IT / Computer / E&amp;TC / Mech /
              Civil / Electrical fields. 40 days (6 to 7 weeks), hybrid (online &amp; offline),
              fees 7000/-. Benefits: offer as Intern &amp; Internship Certificate.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {frontend.map((f) => (
                <Pill key={f} className="bg-white/85 text-[0.68rem]">{f}</Pill>
              ))}
            </div>
            <div className="mt-7">
              <Cta href="#contact">Explore Internship →</Cta>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="surface-card h-full p-8">
            <p className="eyebrow">Internship benefits</p>
            <ul className="mt-5 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-brand-navy/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
