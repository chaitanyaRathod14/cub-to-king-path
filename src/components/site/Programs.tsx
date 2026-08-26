import { ArrowUpRight, Code2, Coffee, Database, Layers, LayoutGrid, Network, Terminal, BarChart3 } from "lucide-react";
import { motion } from "motion/react";
import { Pill, Reveal, Section, SectionHeading } from "./primitives";

const programs = [
  {
    icon: Coffee,
    title: "CORE JAVA",
    desc: "OOP, Collections, Exception Handling, Multithreading, JDBC, SQL and more.",
    tags: ["OOP", "Collections", "JDBC", "SQL"],
    href: "#java",
  },
  {
    icon: Layers,
    title: "JAVA FULL STACK",
    desc: "Java + Spring/Spring Boot + Database + Frontend technologies.",
    tags: ["Spring Boot", "Hibernate", "Angular", "MySQL"],
    href: "#java",
  },
  {
    icon: Terminal,
    title: "PYTHON",
    desc: "Python programming and practical applications.",
    tags: ["Basics", "OOP", "Projects"],
    href: "#programs",
  },
  {
    icon: Network,
    title: "DSA",
    desc: "Data Structures, Algorithms, problem solving and placement preparation.",
    tags: ["Trees", "Graphs", "DP", "LeetCode"],
    href: "#dsa",
  },
  {
    icon: LayoutGrid,
    title: "MERN STACK",
    desc: "MongoDB, Express, React and Node.js.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    href: "#programs",
  },
  {
    icon: Code2,
    title: "ANGULAR",
    desc: "Modern frontend development.",
    tags: ["TypeScript", "Components", "Routing"],
    href: "#programs",
  },
  {
    icon: BarChart3,
    title: "DATA ANALYTICS",
    desc: "SQL, Python, NumPy, Pandas, Matplotlib, Seaborn, Power BI and Tableau.",
    tags: ["Power BI", "Tableau", "Pandas", "SQL"],
    href: "#analytics",
  },
  {
    icon: Database,
    title: "C / C++",
    desc: "Programming fundamentals and problem solving.",
    tags: ["Fundamentals", "Pointers", "Problem Solving"],
    href: "#programs",
  },
];

const techs = [
  "C", "C++", "Java", "Python", "JavaScript", "React", "Angular",
  "Node.js", "SQL", "MongoDB", "DSA", "Power BI", "Tableau",
];

export function Programs() {
  return (
    <>
      <Section id="programs" className="bg-surface-blue">
        <SectionHeading
          eyebrow="Programs"
          title={
            <>
              Learn What The <span className="text-gradient-brand">Industry Uses</span>
            </>
          }
          subtitle="Choose the skills and technologies that match your career path."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i % 4}>
              <motion.a
                href={p.href}
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-white/85 p-6 shadow-[var(--shadow-soft)] backdrop-blur transition-colors hover:border-brand-cyan/60 [transform-style:preserve-3d]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-purple text-brand-purple transition-transform duration-300 group-hover:scale-110 group-hover:bg-surface-blue group-hover:text-brand-blue">
                  <p.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-base font-bold tracking-wide text-brand-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Pill key={t} className="text-[0.68rem]">{t}</Pill>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                  Explore
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden
                  />
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="tech">
        <SectionHeading
          eyebrow="Technology wall"
          title={
            <>
              One Stack. <span className="text-gradient-brand">Many Possibilities.</span>
            </>
          }
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {techs.map((t, i) => (
            <Reveal key={t} delay={i % 6}>
              <motion.span
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="inline-flex cursor-default items-center rounded-full border border-border bg-white px-5 py-2.5 font-display text-sm font-semibold text-brand-navy shadow-[var(--shadow-soft)] transition-colors hover:border-brand-purple/50 hover:bg-surface-purple hover:text-brand-purple"
              >
                {t}
              </motion.span>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
