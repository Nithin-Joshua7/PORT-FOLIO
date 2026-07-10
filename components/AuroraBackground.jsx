"use client";

import { motion } from "framer-motion";

// Restrained technical backdrop: hairline grid + one warm amber glow + vignette
export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 grid-bg opacity-70" />

      <motion.div
        className="absolute left-1/2 top-[-14rem] h-[40rem] w-[52rem] -translate-x-1/2 rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,162,62,0.16), transparent)",
        }}
        animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vignette to sink the edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
