"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/data/content";
import { Reveal } from "./ui/Reveal";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <p className="eyebrow mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-amber/60" />
          03 — career_log
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mb-16 font-display text-4xl font-bold text-bone md:text-5xl">
          Where I&apos;ve <span className="accent">worked</span>.
        </h2>
      </Reveal>

      <div ref={ref} className="relative pl-8 md:pl-12">
        {/* Timeline track */}
        <div className="absolute left-1 top-2 h-full w-px bg-line" />
        <motion.div
          style={{ scaleY: lineScale, transformOrigin: "top" }}
          className="absolute left-1 top-2 h-full w-px bg-amber"
        />

        <div className="space-y-8">
          {experience.map((job, i) => {
            const isCurrent = job.period.includes("Present");
            return (
              <Reveal key={job.company} delay={i * 0.1}>
                <div className="group relative">
                  {/* Node on the rail */}
                  <span className="absolute left-[-28px] top-6 grid -translate-x-1/2 place-items-center md:left-[-44px]">
                    <span
                      className={`h-[11px] w-[11px] border border-amber transition-colors ${
                        isCurrent ? "bg-amber" : "bg-ink group-hover:bg-amber/40"
                      }`}
                    />
                    {isCurrent && (
                      <span className="absolute h-[11px] w-[11px] animate-ping border border-amber" />
                    )}
                  </span>

                  {/* Framed entry */}
                  <div className="frame bg-ink-2/40 p-6 transition-transform duration-300 group-hover:translate-x-1">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="mono text-xs text-amber">
                        {job.period}
                      </span>
                      <span className="mono flex items-center gap-2 text-[0.7rem] uppercase tracking-wide text-bone-dim">
                        {isCurrent ? (
                          <>
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber" />
                            </span>
                            current
                          </>
                        ) : (
                          `role_${String(experience.length - i).padStart(2, "0")}`
                        )}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-bone">
                      {job.role}
                    </h3>
                    <p className="mono mt-1 text-sm text-bone-dim">
                      @ {job.company}
                    </p>
                    <p className="mt-4 max-w-2xl leading-relaxed text-bone-dim">
                      {job.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
