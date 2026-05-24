import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full animate-pulse-glow" style={{ background: "radial-gradient(circle, oklch(0.55 0.28 270 / 0.6), transparent 70%)" }} />
      <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full animate-pulse-glow" style={{ background: "radial-gradient(circle, oklch(0.50 0.30 295 / 0.5), transparent 70%)", animationDelay: "1.5s" }} />
      <div className="absolute left-1/2 bottom-0 h-80 w-80 -translate-x-1/2 rounded-full animate-pulse-glow" style={{ background: "radial-gradient(circle, oklch(0.65 0.28 240 / 0.4), transparent 70%)", animationDelay: "2.5s" }} />

      {/* Cube */}
      <motion.div
        className="absolute right-[12%] top-[18%] h-24 w-24 animate-float-slow"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="h-full w-full rotate-45 border border-[oklch(0.75_0.25_240)] glass" style={{ boxShadow: "var(--glow-blue)" }} />
      </motion.div>

      {/* Ring */}
      <div className="absolute left-[8%] bottom-[15%] h-40 w-40 animate-spin-slow">
        <div className="h-full w-full rounded-full border-2 border-dashed border-[oklch(0.70_0.30_295)]" style={{ boxShadow: "var(--glow-violet)" }} />
        <div className="absolute inset-4 rounded-full border border-[oklch(0.75_0.25_240)]" />
      </div>

      {/* Hex */}
      <motion.div className="absolute right-[20%] bottom-[20%] h-32 w-32 animate-float-med">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" fill="none" stroke="oklch(0.75 0.25 240)" strokeWidth="1" style={{ filter: "drop-shadow(0 0 8px oklch(0.70 0.28 240))" }} />
          <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" fill="none" stroke="oklch(0.70 0.30 295)" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[oklch(0.75_0.25_240)]"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            boxShadow: "0 0 6px oklch(0.70 0.28 240)",
          }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}