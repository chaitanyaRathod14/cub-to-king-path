import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: (i as number) * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </Comp>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      ) : null}
      <Reveal delay={1}>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={2}>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-brand-navy/80",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
