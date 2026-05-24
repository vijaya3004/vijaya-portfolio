import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    kind: "EXPERIENCE",
    title: "Full Stack Development Intern",
    org: "Grow Technology, Salem",
    period: "DEC 2025 — MAY 2026",
    points: [
      "Built responsive full-stack web apps using React, PHP, Node.js, MySQL",
      "Shipped real-world e-commerce systems, management platforms, admin dashboards",
      "Git / GitHub version control and project collaboration",
      "Owned deployment and frontend optimization for production",
    ],
  },
  {
    kind: "EDUCATION",
    title: "B.E Computer Science and Engineering",
    org: "Salem College of Engineering and Technology",
    period: "JUN 2023 — MAY 2027",
    points: ["Active in technical and web development activities", "Recognized for excellence and participation"],
  },
];

export function Timeline() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading tag="// 04 · TIMELINE_LOG" title="OPERATIONAL HISTORY" />
        <div className="relative space-y-8">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[oklch(0.75_0.25_240)] via-[oklch(0.65_0.30_290)] to-transparent" style={{ boxShadow: "0 0 8px oklch(0.70 0.28 240)" }} />
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-12"
            >
              <div className="absolute left-[7px] top-2 h-3 w-3 rounded-full bg-[oklch(0.75_0.25_240)]" style={{ boxShadow: "0 0 12px oklch(0.70 0.28 240)" }} />
              <div className="glass rounded-xl p-6">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[oklch(0.70_0.28_240_/_0.4)] px-3 py-0.5 font-mono text-[10px] tracking-[0.3em] text-[oklch(0.75_0.25_240)]">{it.kind}</span>
                  <span className="font-mono text-xs text-muted-foreground">{it.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{it.title}</h3>
                <p className="mb-4 text-sm text-[oklch(0.70_0.30_295)]">{it.org}</p>
                <ul className="space-y-1.5">
                  {it.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-foreground/80">
                      <span className="text-[oklch(0.75_0.25_240)]">›</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}