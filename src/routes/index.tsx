import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BootLoader } from "@/components/BootLoader";
import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VIJAYA.S — Full Stack Developer · Digital Universe" },
      { name: "description", content: "Cinematic portfolio of Vijaya S — Full Stack Developer crafting real-time e-commerce platforms, admin dashboards, and immersive web systems." },
    ],
  }),
});

function Index() {
  const [booted, setBooted] = useState(false);
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <CustomCursor />
      {!booted && <BootLoader onDone={() => setBooted(true)} />}
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
