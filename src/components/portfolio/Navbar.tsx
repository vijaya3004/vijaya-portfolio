"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Awards" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all md:px-6 ${
          scrolled ? "glass-strong gold-border mx-4" : "mx-4 bg-transparent"
        }`}
      >
        <a href="#hero" className="flex items-center gap-2" data-cursor="hover">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-primary to-accent" />
            <div className="absolute inset-[2px] flex items-center justify-center rounded-md bg-background font-display text-sm text-gradient">
              VS
            </div>
          </div>
          <span className="hidden font-display text-sm tracking-widest text-foreground sm:inline">
            VIJAYA.S
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              data-cursor="hover"
              className={`relative px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition ${
                active === l.id ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" data-cursor="hover" className="glass relative hidden overflow-hidden rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground transition hover:text-accent sm:inline-flex">
            <span className="relative z-10">Let's Talk</span>
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/40 to-accent/40 opacity-0 transition-opacity hover:opacity-100" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}

export function ContactStrip() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
      <span className="flex items-center gap-1.5"><MapPin size={12} className="text-accent" /> Salem, TN</span>
      <span className="flex items-center gap-1.5"><Phone size={12} className="text-accent" /> +91 8925214087</span>
      <span className="flex items-center gap-1.5"><Mail size={12} className="text-accent" /> vijayaselvam3004@gmail.com</span>
      <a href="https://github.com/vijaya3004" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-foreground"><Github size={12} /> github</a>
      <a href="https://linkedin.com/in/vijaya-s-8547292a5" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-foreground"><Linkedin size={12} /> linkedin</a>
    </div>
  );
}
