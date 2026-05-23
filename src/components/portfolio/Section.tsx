"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent">
            {eyebrow}
          </div>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">
            <span className="text-gradient">{title}</span>
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{subtitle}</p>
          )}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/60 via-accent/40 to-transparent" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
