import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline" | "gold";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const styles: Record<Variant, string> = {
  primary:
    "text-primary-foreground shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] [background-image:var(--gradient-brand)]",
  outline:
    "border border-border bg-white/70 text-brand-navy hover:-translate-y-0.5 hover:border-brand-cyan hover:text-brand-blue",
  ghost: "text-brand-blue hover:text-brand-purple",
  gold: "bg-brand-gold text-brand-navy hover:-translate-y-0.5 hover:brightness-105",
};

export function Cta({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a href={href} className={cn(base, styles[variant], className)}>
      {children}
    </a>
  );
}
