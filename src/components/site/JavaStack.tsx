import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Pill, Reveal, Section, SectionHeading } from "./primitives";

const topics = [
  "Core Java", "OOP", "Abstraction", "Encapsulation", "Inheritance", "Polymorphism",
  "Exception Handling", "Streams", "File Handling", "Collections", "Multithreading",
  "JDBC", "SQL", "RDBMS", "Spring", "Spring Boot", "Hibernate", "HTML", "CSS",
  "JavaScript", "Angular",
];

const code = [
  { t: "@RestController", c: "text-brand-purple" },
  { t: "public class CourseController {", c: "text-brand-navy" },
  { t: "  @GetMapping(\"/courses\")", c: "text-brand-blue" },
  { t: "  List<Course> all() {", c: "text-brand-navy" },
  { t: "    return repository.findAll();", c: "text-brand-cyan" },
  { t: "  }", c: "text-brand-navy" },
  { t: "}", c: "text-brand-navy" },
];

const flow = ["API", "DATABASE", "WEB APPLICATION"];

export function JavaStack() {
  return (
    <Section id="java" className="bg-surface-purple/60">
      <SectionHeading
        eyebrow="Java full stack"
        title={
          <>
            Build Real Software <span className="text-gradient-brand">With Java</span>
          </>
        }
        subtitle="Frontend → Backend → Database → Deployment, covered end to end."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-lift)]">
            <div className="flex items-center gap-2 border-b border-border bg-surface-soft px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-purple/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-gold/70" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">CourseController.java</span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[0.8rem] leading-7">
              {code.map((line, i) => (
                <motion.div
                  key={line.t}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.12 }}
                  className={line.c}
                >
                  {line.t}
                </motion.div>
              ))}
            </pre>
          </div>
        </Reveal>

        <div className="space-y-4">
          {flow.map((step, i) => (
            <Reveal key={step} delay={i}>
              <div className="flex flex-col items-center">
                <div className="w-full rounded-2xl border border-border bg-white/85 px-6 py-5 text-center font-display text-sm font-bold tracking-[0.2em] text-brand-purple shadow-[var(--shadow-soft)]">
                  {step}
                </div>
                {i < flow.length - 1 ? (
                  <ArrowDown className="my-2 h-5 w-5 text-brand-cyan" aria-hidden />
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-2">
        {topics.map((t, i) => (
          <Reveal key={t} delay={i % 8}>
            <Pill className="bg-white/85">{t}</Pill>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
