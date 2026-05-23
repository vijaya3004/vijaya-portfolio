import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { Cursor } from "@/components/portfolio/Cursor";
import { ParticleField } from "@/components/portfolio/ParticleField";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements, Certifications } from "@/components/portfolio/Achievements";
import { GithubStats } from "@/components/portfolio/GithubStats";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { MusicToggle } from "@/components/portfolio/MusicToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vijaya S — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Cinematic portfolio of Vijaya S — Full Stack Developer building React, Node, PHP and MySQL products from Salem, India.",
      },
      { property: "og:title", content: "Vijaya S — Full Stack Developer" },
      {
        property: "og:description",
        content: "React · Node · PHP · MySQL. Shipping production web & mobile apps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <LoadingScreen />
      <Cursor />
      <ParticleField />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <GithubStats />
        <Contact />
        <Footer />
      </div>
      <MusicToggle />
    </main>
  );
}
