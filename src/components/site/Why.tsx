import { motion } from "motion/react";
import {
  Target, Wrench, Rocket, UserCheck, ClipboardList, Award, Briefcase, GraduationCap, MessageSquare,
} from "lucide-react";
import { Reveal, Section, SectionHeading } from "./primitives";

const reasons = [
  { icon: Target, t: "Industry-Oriented Learning" },
  { icon: Wrench, t: "Hands-On Practical Sessions" },
  { icon: Rocket, t: "Live Project-Based Training" },
  { icon: UserCheck, t: "Personal Attention" },
  { icon: ClipboardList, t: "Assignments & Doubt Solving" },
  { icon: Award, t: "Industry Experts" },
  { icon: Briefcase, t: "Internship Opportunities" },
  { icon: GraduationCap, t: "Placement Assistance" },
  { icon: MessageSquare, t: "Interview Preparation" },
];

const journey = [
  "Student", "Programming", "DSA", "Development", "Projects",
  "Internship", "Interview Preparation", "INDUSTRY READY",
];

const cubToKing = ["CUB", "LEARN", "BUILD", "EXPERIENCE", "MASTER", "KING"];

export function Why() {
  return (
    <>
      <Section id="why">
        <SectionHeading
          eyebrow="Why us"
          title={
            <>
              Why <span className="text-gradient-brand">CUB TO KING?</span>
            </>
          }
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={i % 3}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-white/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/60 hover:shadow-[var(--shadow-lift)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-blue text-brand-blue transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <r.icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="font-display text-sm font-semibold text-brand-navy">{r.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={2}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-muted-foreground">
            The company states that its trainers are industry experts with 22 years of experience.
            This is presented as the company&apos;s own stated information.
          </p>
        </Reveal>
      </Section>

      <Section id="career" className="bg-surface-soft">
        <SectionHeading
          eyebrow="Career journey"
          title={
            <>
              Your Journey To Industry <span className="text-gradient-brand">Starts Here</span>
            </>
          }
        />
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((step, i) => (
            <Reveal as="li" key={step} delay={i % 4}>
              <div className="group h-full rounded-2xl border border-border bg-white/85 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-purple/50">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-brand-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className={`mt-3 font-display text-base font-bold ${
                    i === journey.length - 1 ? "text-gradient-brand" : "text-brand-navy"
                  }`}
                >
                  {step}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="signature" className="overflow-hidden">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-brand-cyan/10 blur-3xl" />
          <Reveal>
            <p className="eyebrow">The CUB TO KING story</p>
          </Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {cubToKing.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.22 }}
                className={`font-display font-extrabold tracking-tight ${
                  i === cubToKing.length - 1
                    ? "text-gradient-brand text-5xl sm:text-7xl"
                    : "text-brand-navy/70 text-2xl sm:text-4xl"
                }`}
              >
                {word}
                {i < cubToKing.length - 1 ? (
                  <span className="ml-5 text-brand-gold" aria-hidden>
                    ·
                  </span>
                ) : null}
              </motion.span>
            ))}
          </div>
          <Reveal delay={3}>
            <p className="mt-10 font-display text-sm italic text-muted-foreground sm:text-base">
              &ldquo;Every CUB becomes Lion... But Who Learns Skills becomes KING...&rdquo;
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
