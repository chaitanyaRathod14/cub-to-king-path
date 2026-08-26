import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Cta } from "./cta";
import { Reveal, Section, SectionHeading } from "./primitives";

const phones = ["9766316241", "7767001180", "8237913356"];

const addresses = [
  "4 & 5 Dhruv Darshan, Near PCCoE, Akurdi, Pune",
  "Flat No 1, Sector 26, In Front of GPRA Quarters, Nigadi Road, Near PCCoE, Pradhikaran, Akurdi 411 044",
];

const footerLinks = [
  {
    title: "Navigate",
    items: [
      ["Home", "#home"], ["Programs", "#programs"], ["Projects", "#projects"],
      ["Internship", "#internship"], ["About", "#about"], ["Contact", "#contact"],
    ] as [string, string][],
  },
  {
    title: "Programs",
    items: [
      ["Java", "#java"], ["Python", "#programs"], ["DSA", "#dsa"], ["MERN", "#programs"],
      ["Angular", "#programs"], ["C / C++", "#programs"], ["Data Analytics", "#analytics"],
    ] as [string, string][],
  },
  {
    title: "Opportunities",
    items: [
      ["Internship", "#internship"], ["Live Projects", "#projects"],
      ["Sponsored Projects", "#sih"], ["SIH Guidance", "#sih"],
      ["Final-Year Projects", "#projects"],
    ] as [string, string][],
  },
];

export function Closing() {
  return (
    <>
      <Section
        id="start"
        className="bg-[linear-gradient(120deg,var(--surface-blue),white_50%,var(--surface-purple))]"
      >
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-5xl">
              YOUR CAREER NEEDS MORE THAN A COURSE.
              <span className="mt-2 block text-gradient-brand">IT NEEDS REAL SKILLS.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-6 text-lg text-muted-foreground">
              Start your journey from CUB to KING.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Cta href="#programs" className="px-8 py-4 text-base">Explore Programs</Cta>
              <Cta href="#internship" variant="outline" className="px-8 py-4 text-base">Join Internship</Cta>
              <Cta href="#contact" variant="gold" className="px-8 py-4 text-base">Contact Us</Cta>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="contact">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Talk To <span className="text-gradient-brand">CUB TO KING</span>
            </>
          }
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="surface-card h-full p-8">
              <p className="eyebrow">Phone / WhatsApp</p>
              <ul className="mt-5 space-y-4">
                {phones.map((p) => (
                  <li key={p} className="flex flex-wrap items-center gap-3">
                    <span className="font-display text-lg font-bold text-brand-navy">+91 {p}</span>
                    <a
                      href={`tel:+91${p}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-brand-blue transition-colors hover:border-brand-cyan"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden /> Call
                    </a>
                    <a
                      href={`https://wa.me/91${p}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-brand-purple transition-colors hover:border-brand-purple"
                    >
                      <MessageCircle className="h-3.5 w-3.5" aria-hidden /> WhatsApp
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="surface-card h-full p-8">
              <p className="eyebrow">Institute address</p>
              <ul className="mt-5 space-y-5">
                {addresses.map((a) => (
                  <li key={a}>
                    <p className="flex gap-3 text-sm leading-relaxed text-brand-navy/85">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden />
                      {a}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 ml-7 inline-flex rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-brand-blue transition-colors hover:border-brand-cyan"
                    >
                      Get Directions
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                Website referenced in company material: www.cub2king.com
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <footer className="bg-footer text-white/80">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
            <div>
              <p className="font-display text-xl font-bold tracking-[0.14em] text-white">
                CUB TO KING
              </p>
              <p className="font-display text-sm tracking-[0.3em] text-brand-cyan">IT SOLUTIONS</p>
              <p className="mt-1 text-[0.65rem] tracking-[0.3em] text-white/50">PRIVATE LIMITED</p>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
                &ldquo;Every CUB becomes Lion... But Who Learns Skills becomes KING...&rdquo;
              </p>
              <p className="mt-6 text-sm text-white/70">
                +91 9766316241 · +91 7767001180 · +91 8237913356
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {footerLinks.map((col) => (
                <div key={col.title}>
                  <p className="font-display text-xs font-semibold tracking-[0.22em] text-brand-gold">
                    {col.title.toUpperCase()}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {col.items.map(([label, href]) => (
                      <li key={label}>
                        <a href={href} className="text-sm text-white/70 transition-colors hover:text-white">
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14 border-t border-white/15 pt-6 text-xs text-white/50">
            © {new Date().getFullYear()} CUB TO KING IT SOLUTIONS PRIVATE LIMITED. Near PCCoE, Akurdi, Pune.
          </div>
        </div>
      </footer>
    </>
  );
}
