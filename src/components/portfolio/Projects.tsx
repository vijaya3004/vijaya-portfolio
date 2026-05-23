"use client";
import { Section } from "./Section";
import { projects } from "@/lib/portfolio-data";
import { TiltCard } from "./TiltCard";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

export function Projects() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <Section
      id="projects"
      eyebrow="// 04 — work"
      title="Featured Projects"
      subtitle="Five products spanning e-commerce, management systems and a published mobile app."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={i % 3 === 0 ? "md:col-span-2" : ""}
          >
            <TiltCard className="group h-full">
              <button
                onClick={() => setOpen(i)}
                data-cursor="hover"
                className="glass-strong relative h-full w-full overflow-hidden rounded-2xl p-7 text-left transition hover:neon-border"
              >
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-3xl transition group-hover:opacity-40`}
                />
                <div className="relative flex items-start justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    Project · 0{i + 1}
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground transition group-hover:rotate-45 group-hover:text-accent"
                  />
                </div>
                <h3 className="relative mt-6 font-display text-2xl tracking-tight text-foreground md:text-3xl">
                  {p.title}
                </h3>
                <div className="relative mt-1 text-sm text-muted-foreground">{p.subtitle}</div>
                <p className="relative mt-5 text-sm text-foreground/80 line-clamp-2">
                  {p.bullets[0]}
                </p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setOpen(null)}
            />
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="glass-strong relative z-10 max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl p-8 neon-border md:p-12"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute right-5 top-5 rounded-full bg-white/5 p-2 transition hover:bg-white/10 hover:text-accent"
                aria-label="Close"
                data-cursor="hover"
              >
                <X size={18} />
              </button>
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
                Case Study · 0{open + 1}
              </div>
              <h3 className="mt-3 font-display text-4xl text-gradient md:text-5xl">
                {projects[open].title}
              </h3>
              <div className="mt-1 text-sm text-muted-foreground md:text-base">
                {projects[open].subtitle}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {projects[open].tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                className={`relative my-8 h-44 overflow-hidden rounded-2xl bg-gradient-to-br ${projects[open].color}`}
              >
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center font-display text-5xl text-white/30">
                  {projects[open].title}
                </div>
              </div>
              <ul className="space-y-3">
                {projects[open].bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-foreground/90 md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
