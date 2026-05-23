"use client";
import { Section } from "./Section";
import { motion } from "framer-motion";
import { GitBranch, GitCommit, Star, Activity, ImageOff } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { TiltCard } from "./TiltCard";
import { useState } from "react";

const items = [
  { label: "Public Repos", value: "5+", Icon: GitBranch },
  { label: "Commits this year", value: "15+", Icon: GitCommit },
 
  { label: "Streak", value: "Active", Icon: Activity },
];

export function GithubStats() {
  const [statsImageError, setStatsImageError] = useState(false);
  const [langsImageError, setLangsImageError] = useState(false);

  return (
    <Section
      id="github"
      eyebrow="// 07 — activity"
      title="GitHub Stats"
      subtitle={`Open source playground · @${profile.githubHandle}`}
    >
      <div className="grid gap-5 md:grid-cols-4">
        {items.map((it, i) => (
          <TiltCard key={it.label} className="group h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-strong relative overflow-hidden rounded-2xl p-6"
            >
              <it.Icon className="text-accent" size={20} />
              <div className="mt-4 font-display text-4xl text-gradient">{it.value}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {it.label}
              </div>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-primary/30 blur-3xl transition group-hover:bg-accent/30" />
            </motion.div>
          </TiltCard>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
          className="glass group relative block overflow-hidden rounded-2xl"
        >
         
        </a>
      </div>
    </Section>
  );
}
