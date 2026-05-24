import { motion } from "framer-motion";
import { FloatingShapes } from "./FloatingShapes";
import { useEffect, useState } from "react";

const roles = ["FULL_STACK DEVELOPER", "REACT ENGINEER", "SYSTEM BUILDER", "DIGITAL ARCHITECT"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const target = roles[idx];
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(id);
        setTimeout(() => setIdx((p) => (p + 1) % roles.length), 1800);
      }
    }, 70);
    return () => clearInterval(id);
  }, [idx]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, oklch(0.05 0.04 280) 80%)" }} />
      <FloatingShapes />

      {/* Scan line */}
      <div className="pointer-events-none absolute inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.75 0.25 240), transparent)", boxShadow: "0 0 20px oklch(0.70 0.28 240)", animation: "scan 6s linear infinite" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-xs tracking-[0.3em] text-[oklch(0.75_0.25_240)]"
        >
          <span className="h-2 w-2 rounded-full bg-[oklch(0.75_0.25_240)] animate-pulse" style={{ boxShadow: "0 0 10px oklch(0.70 0.28 240)" }} />
          SYSTEM ONLINE · SALEM, IN
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6 text-6xl font-black leading-none tracking-tighter md:text-[10rem]"
        >
          <span className="text-gradient">VIJAYA</span>
<span className="text-glow text-foreground">.S<span className="text-[oklch(0.75_0.25_240)]">_</span></span>
        </motion.h1>

        <div className="mx-auto mb-10 flex h-8 items-center justify-center gap-3 text-sm md:text-base">
          <span className="text-muted-foreground">{">"}</span>
          <span className="font-mono text-[oklch(0.75_0.25_240)] tracking-widest">{typed}</span>
          <span className="h-5 w-2 bg-[oklch(0.75_0.25_240)] animate-pulse" />
        </div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="mx-auto mb-12 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          Architecting real-time e-commerce platforms, admin dashboards, and immersive web systems with React, Node.js, and PHP. Crafted with precision in the digital underground.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" data-hover className="group relative overflow-hidden rounded-full px-8 py-3 text-sm font-bold tracking-widest text-background" style={{ background: "var(--gradient-neon)", backgroundSize: "200% 100%", boxShadow: "var(--glow-blue)", animation: "shine 3s linear infinite" }}>
            ENTER ARCHIVE →
          </a>
          <a href="#contact" data-hover className="rounded-full glass px-8 py-3 text-sm font-bold tracking-widest text-foreground hover:bg-white/5">
            ESTABLISH LINK
          </a>
        </motion.div>

        {/* HUD corners */}
        <Corners />
      </div>
    </section>
  );
}

function Corners() {
  const C = ({ className }: { className: string }) => (
    <div className={"absolute h-12 w-12 border-[oklch(0.75_0.25_240)] " + className} style={{ filter: "drop-shadow(0 0 6px oklch(0.70 0.28 240))" }} />
  );
  return (
    <>
      <C className="left-6 top-24 border-l-2 border-t-2" />
      <C className="right-6 top-24 border-r-2 border-t-2" />
      <C className="left-6 bottom-6 border-b-2 border-l-2" />
      <C className="right-6 bottom-6 border-b-2 border-r-2" />
    </>
  );
}