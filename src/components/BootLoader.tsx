import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "> INITIALIZING NEURAL CORE...",
  "> LOADING IDENTITY MATRIX: VIJAYA.S",
  "> ESTABLISHING SECURE UPLINK...",
  "> BOOTING HOLOGRAPHIC INTERFACE",
  "> SYSTEM READY",
];

export function BootLoader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const n = Math.min(100, p + Math.random() * 8 + 3);
        setStep(Math.floor((n / 100) * lines.length));
        if (n >= 100) {
          clearInterval(id);
          setTimeout(() => { setOpen(false); onDone(); }, 600);
        }
        return n;
      });
    }, 120);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 scanline" />
          <div className="relative w-[min(90vw,640px)]">
            <div className="mb-8 flex items-center justify-between text-xs tracking-[0.3em] text-[oklch(0.75_0.25_240)]">
              <span className="text-glow">VIJAYA_OS</span>
              <span>v2.0.26</span>
            </div>
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-16 w-16">
                <div className="absolute inset-0 rounded-full border-2 border-[oklch(0.75_0.25_240)] border-t-transparent animate-spin-slow" />
                <div className="absolute inset-2 rounded-full border border-[oklch(0.70_0.30_295)] border-b-transparent" style={{ animation: "spin-slow 6s linear infinite reverse" }} />
                <div className="absolute inset-5 rounded-full bg-[oklch(0.70_0.28_240)] animate-pulse-glow" />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold tracking-widest text-gradient">BOOT SEQUENCE</div>
                <div className="text-xs text-muted-foreground">Initializing portfolio interface</div>
              </div>
            </div>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-[oklch(0.20_0.06_280)]">
              <motion.div
                className="h-full"
                style={{ background: "var(--gradient-neon)", backgroundSize: "200% 100%", boxShadow: "var(--glow-blue)" }}
                animate={{ width: `${progress}%`, backgroundPosition: ["0% 0%", "200% 0%"] }}
                transition={{ backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" } }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>LOADING ASSETS</span>
              <span className="text-[oklch(0.75_0.25_240)]">{Math.floor(progress)}%</span>
            </div>
            <div className="mt-8 h-32 space-y-1 font-mono text-xs">
              {lines.slice(0, step + 1).map((l, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-[oklch(0.70_0.30_295)]">
                  {l} <span className="text-[oklch(0.75_0.25_240)]">[OK]</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}