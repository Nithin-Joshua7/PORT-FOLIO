"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { profile, socials } from "@/data/content";
import { Reveal } from "./ui/Reveal";
import MagneticButton from "./ui/MagneticButton";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="frame relative overflow-hidden bg-ink-2/50 px-8 py-20 md:px-16">
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* Amber glow */}
        <motion.div
          className="absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 blur-[120px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,162,62,0.2), transparent)",
          }}
          animate={{ opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10">
          <Reveal>
            <p className="eyebrow mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-amber/60" />
              04 — contact
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-3xl font-display text-5xl font-extrabold leading-[1] text-bone md:text-7xl">
              Let&apos;s build something{" "}
              <span className="accent">extraordinary</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-lg text-bone-dim">
              Available for select freelance projects and full-time roles.
              Currently booking from Q3 2025.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <MagneticButton
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 bg-amber px-8 py-4 font-medium text-ink"
              >
                Start a project
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </MagneticButton>
              <button
                onClick={copyEmail}
                className="mono inline-flex items-center gap-2 border border-line px-8 py-4 text-sm text-bone transition-colors hover:border-amber/50"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-amber" /> copied_to_clipboard
                  </>
                ) : (
                  <>
                    <Copy size={16} /> {profile.email}
                  </>
                )}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-14 flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="grid h-11 w-11 place-items-center border border-line text-bone-dim transition-colors hover:border-amber/50 hover:text-amber"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
