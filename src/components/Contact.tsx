import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const links = [
  { label: "EMAIL", value: "vijayaselvam3004@gmail.com", href: "mailto:vijayaselvam3004@gmail.com" },
  { label: "PHONE", value: "+91 8925214087", href: "tel:+918925214087" },
  { label: "GITHUB", value: "github.com/vijaya3004", href: "https://github.com/vijaya3004" },
  { label: "LINKEDIN", value: "linkedin.com/in/vijaya-s-8547292a5", href: "https://linkedin.com/in/vijaya-s-8547292a5" },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, oklch(0.20 0.10 280 / 0.5), transparent 70%)" }} />
      <div className="relative mx-auto max-w-4xl text-center">
        <SectionHeading tag="// 06 · OPEN_CHANNEL" title="ESTABLISH LINK" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative mx-auto mb-12 inline-block">
          <div className="relative h-40 w-40">
            <div className="absolute inset-0 rounded-full border-2 border-[oklch(0.75_0.25_240)] animate-spin-slow" style={{ boxShadow: "var(--glow-blue)" }} />
            <div className="absolute inset-3 rounded-full border border-dashed border-[oklch(0.70_0.30_295)]" style={{ animation: "spin-slow 16s linear infinite reverse" }} />
            <div className="absolute inset-8 rounded-full animate-pulse-glow" style={{ background: "radial-gradient(circle, oklch(0.55 0.28 270), oklch(0.30 0.20 290))", boxShadow: "var(--glow-violet)" }} />
            <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] tracking-[0.3em] text-[oklch(0.75_0.25_240)]">SIGNAL_LIVE</div>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              data-hover
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group flex items-center justify-between gap-4 rounded-xl glass p-4 text-left"
            >
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-[oklch(0.75_0.25_240)]">{l.label}</div>
                <div className="mt-1 text-sm text-foreground truncate">{l.value}</div>
              </div>
              <span className="text-[oklch(0.75_0.25_240)] transition-transform group-hover:translate-x-1">→</span>
            </motion.a>
          ))}
        </div>

        <p className="mt-16 font-mono text-xs tracking-[0.3em] text-muted-foreground">
          © 2026 · VIJAYA.S · ALL SYSTEMS NOMINAL
        </p>
      </div>
    </section>
  );
}