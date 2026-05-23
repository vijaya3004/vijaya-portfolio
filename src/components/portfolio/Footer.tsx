"use client";
import { profile } from "@/lib/portfolio-data";
import { ContactStrip } from "./Navbar";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-2xl text-gradient">{profile.name}</div>
          <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            {profile.title}
          </div>
        </div>
        <ContactStrip />
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} — Built with React, Framer Motion & a lot of coffee ☕
      </div>
    </footer>
  );
}
