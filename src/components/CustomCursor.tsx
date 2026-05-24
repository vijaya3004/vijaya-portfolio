import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] hidden md:block"
        animate={{ x: pos.x - 16, y: pos.y - 16, scale: hover ? 1.8 : 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 400, mass: 0.3 }}
      >
        <div className="h-8 w-8 rounded-full border border-[oklch(0.75_0.25_240)]" style={{ boxShadow: "0 0 20px oklch(0.70 0.28 240 / 0.8)" }} />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed z-[100] hidden md:block"
        animate={{ x: pos.x - 3, y: pos.y - 3 }}
        transition={{ type: "spring", damping: 40, stiffness: 800 }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.25_240)]" style={{ boxShadow: "0 0 12px oklch(0.70 0.28 240)" }} />
      </motion.div>
    </>
  );
}