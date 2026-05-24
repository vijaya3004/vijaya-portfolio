import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const groups = [
  { label: "FRONTEND", items: ["HTML5", "CSS3", "JavaScript ES6+", "React JS", "Responsive Web Design"] },
  { label: "BACKEND", items: ["PHP", "Node.js", "Express.js"] },
  { label: "DATABASE", items: ["MySQL"] },
  { label: "TOOLS", items: ["Git", "GitHub", "VS Code", "XAMPP", "Postman"] },
  { label: "DEPLOYMENT", items: ["Vercel", "Xiadot Server", "L4 Server", "Google Play Console"] },
  { label: "AI_STACK", items: ["ChatGPT", "Claude", "Gemini", "DeepSeek", "Windsurf", "Bolt", "Lovable"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading tag="// 02 · TECH_MATRIX" title="ARSENAL SYSTEMS" sub="Operational toolset loaded into the neural core." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "radial-gradient(circle, oklch(0.65 0.30 290 / 0.4), transparent)" }} />
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.3em] text-[oklch(0.75_0.25_240)]">{g.label}</span>
                <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-md border border-[oklch(0.70_0.28_240_/_0.3)] bg-[oklch(0.18_0.06_280_/_0.6)] px-3 py-1.5 text-xs text-foreground/90">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}