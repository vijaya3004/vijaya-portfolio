import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

type Project = {
  name: string;
  tag: string;
  stack: string[];
  desc: string;
  bullets: string[];
  status: string;
};

const projects: Project[] = [
  {
    name: "YUROSHOPY",
    tag: "Multi-Vendor E-Commerce · Mobile",
    stack: ["React JS", "PHP", "MySQL"],
    desc: "Multi-vendor commerce ecosystem with Admin, Vendor, and User applications. Shipped to Google Play.",
    bullets: [
      "Architected admin / vendor / user triple panel",
      "Product management, order handling, authentication",
      "Responsive mobile UI with backend integration",
      "Live on Google Play Store",
    ],
    status: "DEPLOYED",
  },
  {
    name: "MBKS FLOWERS",
    tag: "Flower Shop Management",
    stack: ["React JS", "PHP", "MySQL"],
    desc: "Order management dashboard with products, invoices, reports, and delivery tracking modules.",
    bullets: [
      "Full inventory & invoicing pipeline",
      "Real-time delivery tracking module",
      "Responsive admin control surface",
    ],
    status: "LIVE",
  },
  {
    name: "TIMELINES DESIGNER",
    tag: "Fashion Workflow Engine",
    stack: ["React JS", "Node.js", "MySQL"],
    desc: "Workflow management for fashion ops — orders, employee task assignment, inventory, salary.",
    bullets: [
      "Employee task assignment matrix",
      "Inventory + salary modules unified",
      "Node.js backend with React frontend",
    ],
    status: "OPERATIONAL",
  },
  {
    name: "MR.BUYER",
    tag: "E-Commerce Platform",
    stack: ["React JS", "PHP", "MySQL"],
    desc: "Responsive e-commerce platform focused on frontend optimization and seamless UX.",
    bullets: [
      "Frontend optimization & lazy loading",
      "Backend integration with PHP / MySQL",
      "Responsive UI improvements across breakpoints",
    ],
    status: "LIVE",
  },
  {
    name: "KAVIYA HOME NEEDS",
    tag: "Commerce Web Application",
    stack: ["React JS", "PHP", "MySQL"],
    desc: "Dual admin + user panel architecture with full backend database integration.",
    bullets: [
      "Admin / user dual-panel architecture",
      "Responsive frontend modules",
      "Full backend DB integration",
    ],
    status: "DEPLOYED",
  },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading tag="// 03 · ARCHIVE_DECK" title="PROJECT VAULT" sub="Production systems shipped to live environments." />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.button
              key={p.name}
              data-hover
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              className="group relative overflow-hidden rounded-2xl glass p-8 text-left"
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "linear-gradient(135deg, oklch(0.55 0.28 270 / 0.15), oklch(0.50 0.30 295 / 0.15))" }} />
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-30 transition-all group-hover:opacity-70 group-hover:scale-125" style={{ background: "radial-gradient(circle, oklch(0.65 0.30 290 / 0.5), transparent 70%)" }} />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">PRJ_0{i + 1}</span>
                  <span className="flex items-center gap-2 rounded-full border border-[oklch(0.70_0.28_240_/_0.4)] px-3 py-1 font-mono text-[10px] tracking-widest text-[oklch(0.75_0.25_240)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.25_240)] animate-pulse" style={{ boxShadow: "0 0 8px oklch(0.70 0.28 240)" }} />
                    {p.status}
                  </span>
                </div>
                <h3 className="mb-2 text-3xl font-black tracking-tight text-glow">{p.name}</h3>
                <p className="mb-4 text-xs uppercase tracking-widest text-[oklch(0.70_0.30_295)]">{p.tag}</p>
                <p className="mb-6 text-sm text-muted-foreground">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded border border-[oklch(0.70_0.28_240_/_0.3)] px-2 py-1 font-mono text-[10px] text-foreground/80">{s}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs text-[oklch(0.75_0.25_240)] opacity-0 transition-opacity group-hover:opacity-100">
                  OPEN DOSSIER <span>→</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateX: -10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl glass p-8"
              style={{ boxShadow: "var(--glow-violet)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.75 0.25 240), transparent)" }} />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.3em] text-[oklch(0.75_0.25_240)]">DOSSIER · {active.status}</span>
                  <button data-hover onClick={() => setActive(null)} className="rounded-full glass px-3 py-1 text-xs hover:bg-white/5">✕ CLOSE</button>
                </div>
                <h3 className="mb-2 text-4xl font-black text-gradient">{active.name}</h3>
                <p className="mb-6 text-xs uppercase tracking-widest text-[oklch(0.70_0.30_295)]">{active.tag}</p>
                <p className="mb-6 text-sm text-foreground/80">{active.desc}</p>
                <ul className="mb-6 space-y-2">
                  {active.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-foreground/90">
                      <span className="text-[oklch(0.75_0.25_240)]">▸</span> {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {active.stack.map((s) => (
                    <span key={s} className="rounded border border-[oklch(0.70_0.28_240_/_0.4)] bg-[oklch(0.18_0.06_280_/_0.6)] px-3 py-1 font-mono text-xs">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}