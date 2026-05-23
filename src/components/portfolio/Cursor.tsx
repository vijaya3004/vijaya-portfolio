"use client";
import { useEffect, useState } from "react";

export function Cursor() {
  if (typeof window === "undefined") return null;
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let rx = 0, ry = 0, tx = 0, ty = 0, raf = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      setPos({ x: tx, y: ty });
      const el = e.target as HTMLElement | null;
      setHover(!!el?.closest("a,button,[data-cursor='hover']"));
    };
    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      setRingPos({ x: rx, y: ry });
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    tick();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia?.("(max-width: 768px)").matches) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]"
        style={{ transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)` }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-primary/70 transition-[width,height,opacity] duration-200"
        style={{
          width: hover ? 56 : 32,
          height: hover ? 56 : 32,
          transform: `translate3d(${ringPos.x - (hover ? 28 : 16)}px, ${ringPos.y - (hover ? 28 : 16)}px, 0)`,
          boxShadow: "0 0 24px oklch(0.62 0.24 300 / 0.5)",
          mixBlendMode: "screen",
        }}
        aria-hidden
      />
    </>
  );
}
