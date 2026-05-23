"use client";
import { Section } from "./Section";
import { achievements, certifications } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { Award, Trophy, ScrollText } from "lucide-react";
import { TiltCard } from "./TiltCard";

export function Achievements() {
  const icons = [Trophy, Award, ScrollText];
  return (
    <Section
      id="achievements"
      eyebrow="// 05 — wins"
      title="Achievements"
      subtitle="Recognition, awards and shipped milestones."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = icons[i % icons.length];
          return (
            <TiltCard key={a.title} className="group h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-strong relative h-full overflow-hidden rounded-2xl p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-background animate-glow">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-accent/20 blur-3xl transition group-hover:bg-primary/30" />
              </motion.div>
            </TiltCard>
          );
        })}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="// 06 — credentials"
      title="Certifications"
      subtitle="Continuous learning across stacks."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute right-4 top-4 font-mono text-[10px] text-accent">{c.year}</div>
            <ScrollText className="text-accent" size={22} />
            <h3 className="mt-4 font-display text-lg text-foreground">{c.title}</h3>
            <div className="mt-1 text-sm text-muted-foreground">{c.issuer}</div>
            <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
