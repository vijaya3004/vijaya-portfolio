import { motion } from "framer-motion";

const links = [
  { href: "#skills", label: "TECH" },
  { href: "#projects", label: "VAULT" },
  { href: "#experience", label: "LOG" },
  { href: "#contact", label: "LINK" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(92vw,720px)] items-center justify-between rounded-full glass px-5 py-2.5"
    >
      <a href="#top" data-hover className="flex items-center gap-2 font-mono text-sm font-bold tracking-widest text-glow">
        <span className="h-2 w-2 rounded-full bg-[oklch(0.75_0.25_240)] animate-pulse" />
        VIJAYA<span className="text-[oklch(0.75_0.25_240)]">/OS</span>
      </a>
      <div className="hidden gap-1 md:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} data-hover className="rounded-full px-3 py-1 font-mono text-[11px] tracking-[0.3em] text-foreground/70 hover:bg-white/5 hover:text-[oklch(0.75_0.25_240)]">
            {l.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}