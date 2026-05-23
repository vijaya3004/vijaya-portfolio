"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 14 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 350);
      }
      setPct(Math.min(100, Math.floor(p)));
    }, 110);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
        >
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              className="relative h-32 w-32"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full border border-primary/60" />
              <div className="absolute inset-2 rounded-full border border-accent/50 border-dashed" />
              <div className="absolute inset-6 rounded-full border-2 border-primary animate-glow" />
              <div className="absolute inset-0 flex items-center justify-center font-display text-2xl text-gradient">
                VS
              </div>
            </motion.div>
            <div className="flex flex-col items-center gap-2">
              <div className="font-mono text-xs tracking-[0.4em] text-muted-foreground">
                INITIALIZING SYSTEM
              </div>
              <div className="h-px w-64 overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-accent to-primary"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="font-display text-sm text-accent">{pct}%</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
