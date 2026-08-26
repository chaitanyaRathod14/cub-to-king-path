import { motion } from "motion/react";
import { Cta } from "./cta";
import { Pill, Reveal, Section, SectionHeading } from "./primitives";

const topics = [
  "Arrays", "Strings", "Searching", "Sorting", "Stack", "Queue", "Linked List",
  "Trees", "Graphs", "Dynamic Programming", "Backtracking", "Greedy", "Tries",
  "LeetCode", "Placement Problems",
];

const nodes = [
  { id: "r", x: 150, y: 40 },
  { id: "a", x: 80, y: 120 },
  { id: "b", x: 220, y: 120 },
  { id: "c", x: 40, y: 205 },
  { id: "d", x: 120, y: 205 },
  { id: "e", x: 190, y: 205 },
  { id: "f", x: 262, y: 205 },
];

const edges: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6],
];

export function Dsa() {
  return (
    <Section id="dsa" className="bg-surface-purple">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Placement ready"
            title={
              <>
                Crack Coding Interviews <span className="text-gradient-brand">With DSA</span>
              </>
            }
            subtitle="Build problem-solving skills through data structures, algorithms and placement-oriented practice."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {topics.map((t, i) => (
              <Reveal key={t} delay={i % 8}>
                <Pill className="bg-white/80">{t}</Pill>
              </Reveal>
            ))}
          </div>
          <div className="mt-9">
            <Cta href="#contact">Explore DSA →</Cta>
          </div>
        </div>

        <Reveal>
          <div className="surface-card p-6">
            <svg viewBox="0 0 300 250" className="h-auto w-full" role="img" aria-label="Animated tree traversal diagram">
              {edges.map(([a, b], i) => (
                <motion.line
                  key={`${a}-${b}`}
                  x1={nodes[a]!.x}
                  y1={nodes[a]!.y}
                  x2={nodes[b]!.x}
                  y2={nodes[b]!.y}
                  stroke="var(--brand-cyan)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.7 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                />
              ))}
              {nodes.map((n, i) => (
                <motion.g
                  key={n.id}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 * i, type: "spring", stiffness: 200 }}
                  style={{ originX: `${n.x}px`, originY: `${n.y}px` }}
                >
                  <circle cx={n.x} cy={n.y} r="20" fill="white" stroke="var(--brand-purple)" strokeWidth="2" />
                  <circle cx={n.x} cy={n.y} r="7" fill="var(--brand-blue)" />
                </motion.g>
              ))}
            </svg>
            <p className="mt-4 text-center text-xs tracking-[0.2em] text-muted-foreground">
              TRAVERSAL · SEARCH · OPTIMISE
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
