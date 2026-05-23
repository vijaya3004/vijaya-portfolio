"use client";
import { Section } from "./Section";
import { Counter } from "./Counter";
import { TiltCard } from "./TiltCard";
import { profile, stats, languages } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Code2 } from "lucide-react";
import { education } from "@/lib/portfolio-data";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="// 01 — about"
      title="About the Developer"
      subtitle="Engineer obsessed with shipping. From admin dashboards to a Play-Store-published e-commerce app — built end-to-end."
    >
      <div className="grid gap-6 md:grid-cols-5">
        <TiltCard className="group glass-strong relative col-span-3 overflow-hidden rounded-2xl p-8">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
          <p className="relative text-base leading-relaxed text-foreground/90 md:text-lg">
            {profile.summary}
          </p>
          <div className="relative mt-6 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            <span className="rounded-full bg-white/5 px-3 py-1">React</span>
            <span className="rounded-full bg-white/5 px-3 py-1">Node.js</span>
            <span className="rounded-full bg-white/5 px-3 py-1">PHP</span>
            <span className="rounded-full bg-white/5 px-3 py-1">MySQL</span>
            <span className="rounded-full bg-white/5 px-3 py-1">Express</span>
          </div>
        </TiltCard>

        <TiltCard className="group glass relative col-span-2 overflow-hidden rounded-2xl p-8">
          <div className="flex items-center gap-3 text-accent">
            <GraduationCap size={18} />
            <div className="font-mono text-[10px] uppercase tracking-[0.3em]">Education</div>
          </div>
          {education.map((e) => (
            <div key={e.degree} className="mt-4">
              <div className="font-display text-lg text-foreground">{e.degree}</div>
              <div className="mt-1 text-sm text-muted-foreground">{e.school}</div>
              <div className="mt-1 font-mono text-xs text-accent/80">{e.period}</div>
            </div>
          ))}
          <div className="mt-6 flex items-center gap-3 text-accent">
            <MapPin size={18} />
            <div className="font-mono text-[10px] uppercase tracking-[0.3em]">Location</div>
          </div>
          <div className="mt-2 text-sm text-foreground">{profile.location}</div>
          <div className="mt-6 flex items-center gap-3 text-accent">
            <Code2 size={18} />
            <div className="font-mono text-[10px] uppercase tracking-[0.3em]">Languages</div>
          </div>
          <div className="mt-2 text-sm text-foreground">{languages.join(" · ")}</div>
        </TiltCard>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass relative overflow-hidden rounded-xl p-6 text-center"
          >
            <Counter value={s.value} suffix={s.suffix} />
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {s.label}
            </div>
            <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
