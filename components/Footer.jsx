"use client";

import { ArrowUp } from "lucide-react";
import { profile, navLinks } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl font-bold text-bone">
            {profile.name}
            <span className="text-amber">.</span>
          </p>
          <p className="mono mt-1 text-xs text-bone-dim">
            {profile.role} · {profile.location}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mono text-sm text-bone-dim transition-colors hover:text-amber"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#home"
          className="grid h-11 w-11 place-items-center border border-line text-bone transition-colors hover:border-amber/50 hover:text-amber"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </a>
      </div>

      <div className="mono mx-auto mt-10 flex max-w-6xl flex-col gap-1 border-t border-line pt-6 text-xs text-bone-dim sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name} — all rights reserved
        </span>
        <span>built with next.js + framer motion</span>
      </div>
    </footer>
  );
}
