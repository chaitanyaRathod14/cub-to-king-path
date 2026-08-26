import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Cta } from "./cta";

const floaters = [
  { label: "Java", x: "8%", y: "12%", delay: 0, depth: 26 },
  { label: "Python", x: "72%", y: "6%", delay: 0.6, depth: 18 },
  { label: "React", x: "78%", y: "58%", delay: 1.1, depth: 30 },
  { label: "Angular", x: "2%", y: "62%", delay: 0.9, depth: 22 },
  { label: "SQL", x: "60%", y: "84%", delay: 0.3, depth: 16 },
  { label: "DSA", x: "16%", y: "88%", delay: 1.4, depth: 24 },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      setPointer({
        x: (e.clientX - r.left) / r.width - 0.5,
        y: (e.clientY - r.top) / r.height - 0.5,
      });
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [reduce]);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-lines [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />
      <div
        className="pointer-events-none absolute -left-24 top-10 h-[26rem] w-[26rem] rounded-full bg-brand-cyan/20 blur-3xl"
        style={{ animation: "drift 16s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -right-20 top-40 h-[30rem] w-[30rem] rounded-full bg-brand-purple/15 blur-3xl"
        style={{ animation: "drift 22s ease-in-out infinite reverse" }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Cub to King IT Solutions
          </motion.p>

          <h1 className="mt-5 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-brand-navy sm:text-6xl xl:text-[4.2rem]">
            {["FROM CUB", "TO KING."].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 block text-gradient-brand text-[1.35rem] font-bold tracking-[0.02em] sm:text-3xl xl:text-4xl"
            >
              LEARN. BUILD. EXPERIENCE. GROW.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Industry-oriented IT training, internships, live projects and practical learning
            designed to make students industry ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Cta href="#programs">
              Explore Programs <ArrowRight className="h-4 w-4" aria-hidden />
            </Cta>
            <Cta href="#internship" variant="outline">
              Join Internship
            </Cta>
            <Cta href="#contact" variant="ghost">
              Talk to Us →
            </Cta>
          </motion.div>
        </div>

        <div ref={ref} className="relative mx-auto aspect-square w-full max-w-xl [perspective:1200px]">
          <motion.div
            className="absolute inset-6 rounded-[2rem] border border-white/70 bg-white/60 shadow-[var(--shadow-lift)] backdrop-blur-xl"
            style={{
              rotateY: pointer.x * 12,
              rotateX: -pointer.y * 12,
              transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
          >
            <div className="flex items-center gap-1.5 border-b border-border/70 px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-purple/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-gold/70" />
              <span className="ml-3 font-display text-[0.7rem] tracking-[0.22em] text-muted-foreground">
                INDUSTRY READY
              </span>
            </div>
            <div className="space-y-3 p-6">
              {[
                { w: "78%", c: "bg-brand-cyan/50" },
                { w: "56%", c: "bg-brand-purple/35" },
                { w: "88%", c: "bg-brand-blue/40" },
                { w: "44%", c: "bg-brand-gold/50" },
              ].map((row, i) => (
                <motion.div
                  key={row.w}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: row.w, originX: 0 }}
                  className={`h-3 rounded-full ${row.c}`}
                />
              ))}
              <div className="grid grid-cols-3 gap-3 pt-4">
                {["API", "DATABASE", "DEPLOY"].map((k, i) => (
                  <motion.div
                    key={k}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.12 }}
                    className="rounded-xl border border-border bg-surface-blue/70 px-2 py-4 text-center font-display text-[0.6rem] tracking-[0.16em] text-brand-purple"
                  >
                    {k}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-surface-soft p-5">
                <p className="font-display text-[0.6rem] tracking-[0.24em] text-muted-foreground">
                  YOUR PATH
                </p>
                <div className="mt-4 space-y-3">
                  {["LEARN", "BUILD", "INTERN", "CAREER"].map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + i * 0.14 }}
                      className="flex items-center gap-3"
                    >
                      <span className="h-2 w-2 rounded-full [background-image:var(--gradient-brand)]" />
                      <span className="font-display text-xs font-semibold tracking-[0.14em] text-brand-navy">
                        {s}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {floaters.map((f) => (
            <motion.div
              key={f.label}
              className="absolute rounded-2xl border border-white/80 bg-white/85 px-4 py-2 font-display text-xs font-semibold text-brand-navy shadow-[var(--shadow-soft)] backdrop-blur"
              style={{ left: f.x, top: f.y }}
              animate={{
                x: pointer.x * f.depth,
                y: pointer.y * f.depth,
              }}
              transition={{ type: "spring", stiffness: 60, damping: 16 }}
            >
              <span style={{ animation: `float-y ${6 + f.depth / 8}s ease-in-out ${f.delay}s infinite` }} className="block">
                {f.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
