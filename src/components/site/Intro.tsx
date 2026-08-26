import { GraduationCap, Users, Award } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./primitives";

const highlights = [
  {
    icon: Users,
    stat: "Max 15–20",
    label: "Students per batch, as stated in company material",
  },
  {
    icon: Award,
    stat: "22 years",
    label: "Industry experience of trainers, as stated by the company",
  },
  {
    icon: GraduationCap,
    stat: "Certificate",
    label: "Internship / experience certificate where applicable",
  },
];

const stages = [
  { n: "01", t: "LEARN", d: "Build strong technical foundations." },
  { n: "02", t: "BUILD", d: "Work on practical projects." },
  { n: "03", t: "INTERN", d: "Gain practical industry exposure." },
  { n: "04", t: "CAREER", d: "Prepare for interviews and professional opportunities." },
];

const accents = ["bg-brand-cyan", "bg-brand-blue", "bg-brand-purple", "bg-brand-gold"];

export function Intro() {
  return (
    <>
      <Section id="about">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="We make you employable"
            title={
              <>
                More Than Training. <span className="text-gradient-brand">A Path to Industry.</span>
              </>
            }
            subtitle="CUB TO KING focuses on practical, industry-oriented learning through programming, development, projects, internships and career-focused preparation."
          />
          <div className="space-y-4">
            {highlights.map((h, i) => (
              <Reveal key={h.stat} delay={i}>
                <div className="surface-card flex items-center gap-5 p-6 hover:-translate-y-1 hover:border-brand-cyan/50">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-blue text-brand-blue">
                    <h.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-brand-navy">{h.stat}</p>
                    <p className="text-sm text-muted-foreground">{h.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="journey" className="bg-surface-soft">
        <SectionHeading
          eyebrow="The path"
          title={
            <>
              Learn → Build → Intern → <span className="text-gradient-brand">Career</span>
            </>
          }
        />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
          <div className="grid gap-8 md:grid-cols-4">
            {stages.map((s, i) => (
              <Reveal key={s.n} delay={i} className="relative">
                <span
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full font-display text-sm font-bold text-white ${accents[i]}`}
                >
                  {s.n}
                </span>
                <h3 className="font-display text-xl font-bold tracking-wide text-brand-navy">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
