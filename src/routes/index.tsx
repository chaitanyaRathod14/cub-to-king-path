import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { Programs } from "@/components/site/Programs";
import { Dsa } from "@/components/site/Dsa";
import { JavaStack } from "@/components/site/JavaStack";
import { Analytics } from "@/components/site/Analytics";
import { Projects } from "@/components/site/Projects";
import { Internship } from "@/components/site/Internship";
import { Why } from "@/components/site/Why";
import { Closing } from "@/components/site/Closing";

const title = "CUB TO KING IT Solutions | IT Training, Internships & Live Projects";
const description =
  "Industry-oriented IT training, internships, live projects and placement-focused learning in Java, Python, DSA, MERN, Angular and Data Analytics — Akurdi, Pune.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Programs />
        <Dsa />
        <JavaStack />
        <Analytics />
        <Projects />
        <Internship />
        <Why />
        <Closing />
      </main>
    </div>
  );
}
