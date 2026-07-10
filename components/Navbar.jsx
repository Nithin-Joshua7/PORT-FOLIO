"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[120] flex justify-center px-4 pt-4"
      >
        <nav
          className={`flex w-full max-w-6xl items-center justify-between border px-4 py-2.5 transition-colors duration-500 ${
            scrolled
              ? "border-line bg-ink-2/80 backdrop-blur-md"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center border border-amber font-display text-sm font-bold text-amber">
              {profile.firstName[0]}
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-bone">
              {profile.name}
            </span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex items-center gap-1.5 text-sm text-bone-dim transition-colors hover:text-bone"
                >
                  <span className="mono text-[0.65rem] text-amber/60 group-hover:text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={profile.resumeUrl}
              download
              className="mono border border-line px-4 py-2 text-xs text-bone-dim transition-colors hover:border-amber/60 hover:text-amber"
            >
              resume ↓
            </a>
            <a
              href="#contact"
              className="mono border border-line px-4 py-2 text-xs text-bone transition-colors hover:border-amber/60 hover:text-amber"
            >
              let&apos;s_talk →
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center border border-line text-bone md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-[119] border border-line bg-ink-2 p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 border-b border-line px-3 py-3 text-bone-dim transition-colors hover:text-bone"
                  >
                    <span className="mono text-[0.65rem] text-amber/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  onClick={() => setOpen(false)}
                  className="mono mt-3 block border border-line px-4 py-3 text-center text-sm text-bone"
                >
                  resume ↓
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mono mt-2 block bg-amber px-4 py-3 text-center text-sm font-medium text-ink"
                >
                  let&apos;s_talk →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
