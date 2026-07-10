"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { Reveal } from "./ui/Reveal";

// A small deterministic amber "signal" motif — unique per project, no randomness
function Signal({ seed }) {
  const bars = Array.from({ length: 28 }, (_, i) => {
    const h = 20 + Math.abs(Math.sin((i + seed * 3) * 0.7)) * 80;
    return h;
  });
  return (
    <svg viewBox="0 0 280 100" className="h-full w-full" aria-hidden fill="none">
      {bars.map((h, i) => (
        <line
          key={i}
          x1={6 + i * 10}
          y1={100}
          x2={6 + i * 10}
          y2={100 - h}
          stroke="var(--amber)"
          strokeWidth="3"
          opacity={0.25 + (h / 100) * 0.6}
        />
      ))}
    </svg>
  );
}

function ProjectRow({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), {
    stiffness: 200,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), {
    stiffness: 200,
    damping: 22,
  });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <motion.a
        ref={ref}
        href="#work"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="frame group relative block h-full bg-ink p-6"
      >
        {/* header row */}
        <div className="mono mb-5 flex items-center justify-between text-xs text-bone-dim">
          <span>
            proj_{String(index + 1).padStart(2, "0")} · {project.year}
          </span>
          <ArrowUpRight
            size={18}
            className="text-bone-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
          />
        </div>

        {/* signal thumbnail */}
        <div className="mb-6 h-24 w-full overflow-hidden border-b border-line pb-2">
          <Signal seed={index + 1} />
        </div>

        <h3 className="font-display text-2xl font-bold text-bone">
          {project.title}
        </h3>
        <p className="mono mt-1 text-xs uppercase tracking-wide text-amber/80">
          {project.category}
        </p>
        <p className="mt-3 text-bone-dim">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="mono border border-line px-2.5 py-1 text-[0.7rem] text-bone-dim"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.a>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Reveal>
            <p className="eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-amber/60" />
              02 — selected_work
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-bold text-bone md:text-5xl">
              Things I&apos;ve <span className="accent">shipped</span>.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="max-w-sm text-bone-dim">
            A selection of recent builds — payment platforms, backend
            integrations and AI-powered applications.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-px border border-line bg-line md:grid-cols-3">
        {projects.map((project, i) => (
          <div key={project.title} className="h-full" style={{ perspective: 1000 }}>
            <ProjectRow project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
