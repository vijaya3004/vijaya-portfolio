"use client";
import { Section } from "./Section";
import { skillCategories, skillSphere } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="// 02 — stack"
      title="Skills & Arsenal"
      subtitle="Frontend, backend, databases, deployment and AI tooling — used in production."
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Skill sphere */}
        <div className="lg:col-span-1">
          <div className="glass relative aspect-square overflow-hidden rounded-2xl p-6">
            <SkillSphere />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Interactive Tech Sphere
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          {skillCategories.map((cat, i) => (
            <TiltCard key={cat.name} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-strong relative h-full overflow-hidden rounded-2xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="font-display text-lg text-foreground">{cat.name}</div>
                  <div className="font-mono text-[10px] text-accent">0{i + 1}</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-foreground/85 transition hover:border-accent/60 hover:text-accent"
                    >
                      {it}
                    </span>
                  ))}
                </div>
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/30 blur-3xl transition group-hover:bg-accent/30" />
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </Section>
  );
}

function SkillSphere() {
  const items = skillSphere;
  const radius = 130;
  return (
    <div
      className="relative mx-auto h-full w-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: 360, rotateX: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {items.map((label, i) => {
          const phi = Math.acos(-1 + (2 * i) / items.length);
          const theta = Math.sqrt(items.length * Math.PI) * phi;
          const x = radius * Math.cos(theta) * Math.sin(phi);
          const y = radius * Math.sin(theta) * Math.sin(phi);
          const z = radius * Math.cos(phi);
          return (
            <span
              key={label}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[11px] text-foreground/90"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                textShadow: "0 0 8px oklch(0.62 0.24 300 / 0.8)",
              }}
            >
              {label}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}
