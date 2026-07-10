"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { profile, socials } from "@/data/content";
import MagneticButton from "./ui/MagneticButton";

const headline = profile.role.split(" ");
const accentIndex = Math.floor((headline.length - 1) / 2);

// The signature graphic: a plotted cubic-bezier easing curve with a traveling playhead
function EasingCurve() {
  return (
    <svg
      viewBox="0 0 320 240"
      className="h-full w-full"
      aria-hidden
      fill="none"
    >
      {/* plot frame */}
      <rect x="20" y="20" width="280" height="200" stroke="var(--line)" />
      {/* ticks */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`v${i}`}
          x1={20 + i * 70}
          y1="20"
          x2={20 + i * 70}
          y2="220"
          stroke="var(--line)"
        />
      ))}
      {[0, 1, 2].map((i) => (
        <line
          key={`h${i}`}
          x1="20"
          y1={20 + i * 100}
          x2="300"
          y2={20 + i * 100}
          stroke="var(--line)"
        />
      ))}

      {/* control handles */}
      <line x1="20" y1="220" x2="120" y2="220" stroke="var(--bone-dim)" strokeDasharray="3 3" />
      <line x1="300" y1="20" x2="200" y2="20" stroke="var(--bone-dim)" strokeDasharray="3 3" />
      <circle cx="120" cy="220" r="3" fill="var(--bone-dim)" />
      <circle cx="200" cy="20" r="3" fill="var(--bone-dim)" />

      {/* the easing curve */}
      <motion.path
        id="ease"
        d="M20,220 C120,220 200,20 300,20"
        stroke="var(--amber)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* traveling playhead */}
      <circle r="5" fill="var(--amber)">
        <animateMotion dur="3s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.42 0 0.58 1">
          <mpath href="#ease" />
        </animateMotion>
      </circle>
    </svg>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const coordX = useRef(null);
  const coordY = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const handleMouse = (e) => {
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 26);
    my.set((e.clientY / innerHeight - 0.5) * 26);
    // imperative readout — no re-render
    if (coordX.current)
      coordX.current.textContent = String(e.clientX).padStart(4, "0");
    if (coordY.current)
      coordY.current.textContent = String(e.clientY).padStart(4, "0");
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouse}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 md:px-12"
    >
      {/* Technical corner readout */}
      <div className="mono absolute right-6 top-28 hidden text-right text-xs leading-relaxed text-bone-dim md:block">
        <div>
          cursor [<span ref={coordX}>0000</span>,{" "}
          <span ref={coordY}>0000</span>]
        </div>
        <div>ease cubic-bezier(.22,1,.36,1)</div>
        <div className="text-amber">status: available_for_work</div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* Left — thesis */}
        <motion.div style={{ y, opacity }} className="relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="eyebrow mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-bone-dim/50" />
            {profile.name} — index / 2025
          </motion.p>

          <h1 className="font-display text-[15vw] font-extrabold leading-[0.86] tracking-tight sm:text-[11vw] lg:text-[7.2rem]">
            {headline.map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className={`chroma inline-block ${
                    i === accentIndex ? "accent" : ""
                  }`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.25 + i * 0.11,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-bone-dim"
          >
            I build interfaces where{" "}
            <span className="text-bone">motion, code and craft</span> collide —
            keyframes, easing curves and pixels, all in the browser.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton
              href="#work"
              className="inline-flex items-center gap-2 rounded-none bg-amber px-7 py-3.5 font-medium text-ink transition-colors"
            >
              View selected work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="mono inline-flex items-center gap-2 border border-line px-7 py-3.5 text-sm text-bone transition-colors hover:border-amber/50"
            >
              get_in_touch()
            </MagneticButton>
            <MagneticButton
              href={profile.resumeUrl}
              download
              className="mono inline-flex items-center gap-2 border border-line px-7 py-3.5 text-sm text-bone transition-colors hover:border-amber/50"
            >
              <Download size={15} />
              resume.pdf
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex items-center gap-5"
          >
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                target="_blank"
                rel="noreferrer"
                className="text-bone-dim transition-colors hover:text-amber"
              >
                <s.icon size={19} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — signature easing plot */}
        <motion.div
          style={{ x: sx, y: sy }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative hidden aspect-[4/3] w-full max-w-md lg:block"
        >
          <div className="frame absolute inset-0 bg-ink-2/60 p-5 backdrop-blur-sm">
            <div className="mono mb-3 flex items-center justify-between text-[0.65rem] text-bone-dim">
              <span>fig.01 — easing.easeOutExpo</span>
              <span className="text-amber">● rec</span>
            </div>
            <div className="h-[calc(100%-1.75rem)]">
              <EasingCurve />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mono absolute bottom-8 left-6 flex items-center gap-3 text-xs text-bone-dim md:left-12"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
        scroll
      </motion.a>
    </section>
  );
}
