import { motion } from "framer-motion";

export function SectionHeading({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div className="mb-16">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-4 flex items-center gap-3 text-xs tracking-[0.4em] text-[oklch(0.75_0.25_240)]">
        <span className="h-px w-12 bg-[oklch(0.75_0.25_240)]" style={{ boxShadow: "0 0 8px oklch(0.70 0.28 240)" }} />
        {tag}
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-black tracking-tight md:text-6xl">
        <span className="text-gradient">{title}</span>
      </motion.h2>
      {sub && <p className="mt-4 max-w-2xl text-sm text-muted-foreground">{sub}</p>}
    </div>
  );
}