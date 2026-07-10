"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Sparkles, Code2, Orbit } from "lucide-react";
import { profile, skills, services } from "@/data/content";
import { Reveal } from "./ui/Reveal";

const iconMap = { sparkles: Sparkles, code: Code2, orbit: Orbit };

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");
  const num = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, num, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, num]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function SkillBar({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-bone">{skill.name}</span>
        <span className="mono text-xs text-bone-dim">
          {String(skill.level).padStart(3, "0")}
        </span>
      </div>
      <div className="h-px w-full bg-line">
        <motion.div
          className="h-px bg-amber"
          initial={{ scaleX: 0 }}
          style={{ transformOrigin: "left" }}
          animate={inView ? { scaleX: skill.level / 100 } : {}}
          transition={{
            duration: 1.2,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="eyebrow mb-10 flex items-center gap-3">
          <span className="h-px w-8 bg-amber/60" />
          01 — about
        </p>
      </Reveal>

      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-bone md:text-5xl">
              Turning ideas into interfaces people{" "}
              <span className="accent">remember</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-bone-dim">
              {profile.bio}
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {profile.stats.map((stat, i) => (
              <div key={stat.label} className="bg-ink p-5">
                <Reveal delay={i * 0.08}>
                  <div className="font-display text-3xl font-bold text-bone">
                    <Counter value={stat.value} />
                  </div>
                  <div className="mono mt-1 text-[0.7rem] uppercase tracking-wide text-bone-dim">
                    {stat.label}
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mono mb-6 text-xs text-bone-dim">// capability_matrix</p>
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 0.05}>
                <SkillBar skill={skill} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="mt-24 grid gap-px border border-line bg-line md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <Reveal key={service.title} delay={i * 0.1}>
              <div className="frame group h-full bg-ink p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center border border-line text-amber transition-colors group-hover:border-amber/50">
                    <Icon size={22} />
                  </div>
                  <span className="mono text-xs text-bone-dim">
                    {String(i + 1).padStart(2, "0")} / {services.length}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-bone">
                  {service.title}
                </h3>
                <p className="mt-3 text-bone-dim">{service.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
