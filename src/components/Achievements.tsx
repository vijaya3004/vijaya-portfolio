import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const items = [
  { code: "ACH_01", title: "Published on Google Play", desc: "Shipped a live e-commerce mobile application to the Play Store." },
  { code: "ACH_02", title: "Excellence Award", desc: "Presented 'Preventing Future AI Robotics' at AVS Engineering College Symposium." },
  { code: "ACH_03", title: "Internship Recognition", desc: "Active participation in technical and web development activities during internship." },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading tag="// 05 · TROPHY_CACHE" title="ACHIEVEMENTS UNLOCKED" />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.code}
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl glass p-6"
              style={{ boxShadow: "inset 0 0 0 1px oklch(0.70 0.28 240 / 0.2)" }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg, oklch(0.55 0.28 270), oklch(0.50 0.30 295))", boxShadow: "var(--glow-violet)" }}>
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-foreground" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9V3h12v6a6 6 0 11-12 0z" /><path d="M9 21h6M12 15v6" /></svg>
              </div>
              <span className="font-mono text-[10px] tracking-[0.3em] text-[oklch(0.75_0.25_240)]">{it.code}</span>
              <h3 className="mt-2 text-xl font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}