"use client";
import { Section } from "./Section";
import { experience } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="// 03 — timeline"
      title="Experience"
      subtitle="Real-world product work — not toy projects."
    >
      <div className="relative pl-10">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        {experience.map((e, i) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative mb-10 last:mb-0"
          >
            <div className="absolute -left-[34px] top-3 flex h-6 w-6 items-center justify-center rounded-full bg-background ring-1 ring-accent">
              <div className="h-2 w-2 animate-glow rounded-full bg-accent" />
            </div>
            <div className="glass-strong group relative overflow-hidden rounded-2xl p-6 transition hover:gold-border">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-accent">
                    <Briefcase size={14} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em]">{e.period}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl text-foreground md:text-2xl">
                    {e.role}
                  </h3>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {e.company} · {e.location}
                  </div>
                </div>
              </div>
              <ul className="mt-5 space-y-2">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-foreground/85">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
