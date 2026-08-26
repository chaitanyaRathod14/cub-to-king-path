import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Cta } from "./cta";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Internship", href: "#internship" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const megaMenu = [
  {
    title: "Learning Formats",
    items: [
      { label: "Customized / Curated Classes", href: "#programs" },
      { label: "Short-Term Training", href: "#programs" },
      { label: "Industry Courses", href: "#programs" },
    ],
  },
  {
    title: "Technologies",
    items: [
      { label: "C / C++", href: "#programs" },
      { label: "Java", href: "#java" },
      { label: "Python", href: "#programs" },
      { label: "DSA", href: "#dsa" },
      { label: "MERN Stack", href: "#programs" },
      { label: "Angular", href: "#programs" },
    ],
  },
  {
    title: "Opportunities",
    items: [
      { label: "Paid Internship + Learning", href: "#internship" },
      { label: "Sponsored Projects", href: "#sih" },
      { label: "SIH Project Guidance", href: "#sih" },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-primary-foreground [background-image:var(--gradient-brand)]">
            C2K
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[0.95rem] font-bold tracking-[0.14em] text-brand-purple">
              CUB TO KING
            </span>
            <span className="block text-[0.62rem] font-semibold tracking-[0.3em] text-brand-cyan">
              IT SOLUTIONS
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          <a
            href="#home"
            className="rounded-full px-4 py-2 text-sm font-medium text-brand-navy/80 transition-colors hover:text-brand-blue"
          >
            Home
          </a>
          <div
            className="relative"
            onMouseEnter={() => setMega(true)}
            onMouseLeave={() => setMega(false)}
          >
            <button
              type="button"
              aria-expanded={mega}
              onClick={() => setMega((v) => !v)}
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-brand-navy/80 transition-colors hover:text-brand-blue"
            >
              Programs
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", mega && "rotate-180")}
                aria-hidden
              />
            </button>
            <AnimatePresence>
              {mega ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full w-[46rem] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-3 gap-6 rounded-3xl border border-border bg-white/95 p-7 shadow-[var(--shadow-lift)] backdrop-blur-xl">
                    {megaMenu.map((col) => (
                      <div key={col.title}>
                        <p className="eyebrow text-[0.65rem]">{col.title}</p>
                        <ul className="mt-3 space-y-1.5">
                          {col.items.map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                onClick={() => setMega(false)}
                                className="block rounded-lg px-2 py-1.5 text-sm text-brand-navy/80 transition-all hover:translate-x-1 hover:bg-surface-blue hover:text-brand-purple"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          {links.slice(1).map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-brand-navy/80 transition-colors hover:text-brand-blue"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Cta href="#programs">Start Learning</Cta>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white/80 text-brand-navy lg:hidden"
        >
          {open ? <Menu className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-brand-navy/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold tracking-[0.14em] text-brand-purple">
                  CUB TO KING
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-brand-navy"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-8 space-y-1">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 font-display text-lg font-semibold text-brand-navy hover:bg-surface-blue"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 space-y-5 border-t border-border pt-6">
                {megaMenu.map((col) => (
                  <div key={col.title}>
                    <p className="eyebrow text-[0.6rem]">{col.title}</p>
                    <ul className="mt-2 space-y-1">
                      {col.items.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block py-1 text-sm text-brand-navy/75"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Cta href="#programs" className="w-full">
                  Start Learning
                </Cta>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
