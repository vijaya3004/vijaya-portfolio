"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Typewriter } from "./Typewriter";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* Animated grid + gradient */}
      <div className="grid-bg absolute inset-0 animate-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px circle at 50% 20%, oklch(0.62 0.24 300 / 0.35), transparent 60%), radial-gradient(600px circle at 80% 80%, oklch(0.82 0.16 85 / 0.18), transparent 60%)",
        }}
        aria-hidden
      />

      {/* Floating glowing orbs */}
      <FloatingOrbs />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent"
        >
          <Sparkles size={12} />
          <span>Available for freelance · 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-[14vw] leading-[0.85] tracking-tighter md:text-[10rem]"
        >
          <span className="text-gradient">VIJAYA</span>
          
         
          <span className="ml-2 inline-block align-center font-display text-2xl text-accent md:text-4xl">●</span>
           <span className="shimmer-text">S</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 font-mono text-base text-muted-foreground md:text-xl"
        >
          <span className="text-accent">{">"}</span>{" "}
          <Typewriter
            words={[
              "Full Stack Developer",
              "React JS Specialist",
              "PHP + Node.js Backends",
              "Shipping on Play Store",
              "From Salem, Tamil Nadu",
            ]}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          Building cinematic, production-ready web & mobile apps with React, PHP, Node and MySQL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            data-cursor="hover"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary via-fuchsia-500 to-accent px-7 py-3 font-mono text-xs uppercase tracking-wider text-white transition hover:scale-105 neon-border"
          >
            <span className="relative z-10">Explore Work</span>
            <ArrowDown size={14} className="relative z-10 -rotate-90" />
            <span className="absolute inset-0 -z-0 translate-x-[-100%] bg-white/20 transition-transform duration-500 group-hover:translate-x-[100%]" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition hover:text-accent"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition hover:text-accent"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          Scroll
          <div className="h-8 w-px bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FloatingOrbs() {
  const orbs = [
    { size: 260, x: "8%", y: "20%", delay: 0, color: "oklch(0.62 0.24 300 / 0.5)" },
    { size: 180, x: "85%", y: "30%", delay: 1.2, color: "oklch(0.82 0.16 85 / 0.4)" },
    { size: 120, x: "75%", y: "70%", delay: 2.4, color: "oklch(0.55 0.22 270 / 0.55)" },
    { size: 90, x: "15%", y: "75%", delay: 0.8, color: "oklch(0.78 0.24 310 / 0.5)" },
  ];
  return (
    <>
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-full blur-3xl"
          style={{
            width: o.size,
            height: o.size,
            left: o.x,
            top: o.y,
            background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, delay: o.delay, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}
