"use client";

import { marqueeWords } from "@/data/content";

export default function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];

  const Row = ({ hidden }) => (
    <div
      className="flex shrink-0 animate-marquee items-center gap-6 pr-6"
      aria-hidden={hidden || undefined}
    >
      {items.map((word, i) => (
        <span key={i} className="flex items-center gap-6">
          <span className="font-display text-xl font-semibold uppercase tracking-tight text-bone/70 md:text-2xl">
            {word}
          </span>
          <span className="mono text-xs text-amber">/</span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="relative border-y border-line bg-ink-2/40 py-5">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
