"use client";
import { Section } from "./Section";
import { profile } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { TiltCard } from "./TiltCard";

export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${fd.get("name")}`);
    const body = encodeURIComponent(`${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section
      id="contact"
      eyebrow="// 08 — transmit"
      title="Let's Build Something"
      subtitle="Open to freelance projects, internships and collaborations. Reach out — usually replies within 24h."
    >
      <div className="grid gap-6 md:grid-cols-5">
        <TiltCard className="md:col-span-2">
          <div className="glass-strong relative h-full overflow-hidden rounded-2xl p-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Direct channels
            </div>
            <div className="mt-6 space-y-5">
              <ContactRow Icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow Icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
              <ContactRow Icon={MapPin} label="Based in" value={profile.location} />
              <ContactRow Icon={Github} label="GitHub" value={`@${profile.githubHandle}`} href={profile.github} />
              <ContactRow Icon={Linkedin} label="LinkedIn" value={profile.linkedinHandle} href={profile.linkedin} />
            </div>
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
          </div>
        </TiltCard>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass relative md:col-span-3 overflow-hidden rounded-2xl p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Your name" placeholder="John Doe" required />
            <Field name="email" label="Email" placeholder="you@company.com" type="email" required />
          </div>
          <div className="mt-4">
            <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project…"
              className="mt-2 w-full rounded-xl border border-white/10 bg-background/40 p-4 font-mono text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-accent/60 focus:ring-2 focus:ring-accent/30"
            />
          </div>
          <button
            type="submit"
            data-cursor="hover"
            className="group mt-5 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 font-mono text-xs uppercase tracking-wider text-white transition hover:scale-[1.02] neon-border"
          >
            <Send size={14} /> {sent ? "Opening mail…" : "Send transmission"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function ContactRow({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp
      {...(href ? { href, target: "_blank", rel: "noreferrer", "data-cursor": "hover" } : {})}
      className="group flex items-center gap-4"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-accent transition group-hover:bg-accent/20">
        <Icon size={16} />
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {label}
        </div>
        <div className="text-sm text-foreground transition group-hover:text-accent">{value}</div>
      </div>
    </Comp>
  );
}

function Field({
  name,
  label,
  ...rest
}: { name: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </label>
      <input
        {...rest}
        name={name}
        className="mt-2 w-full rounded-xl border border-white/10 bg-background/40 px-4 py-3 font-mono text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-accent/60 focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
