"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Crosshair cursor — reads like a viewport reticle
export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const springConfig = { damping: 30, stiffness: 500, mass: 0.3 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };
    const over = (e) => {
      const el = e.target.closest("a, button, [data-cursor='hover']");
      setHovering(Boolean(el));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [cursorX, cursorY]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[200] hidden md:block"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Reticle */}
      <motion.div
        className="absolute left-0 top-0"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="relative"
          animate={{ rotate: hovering ? 45 : 0, scale: hovering ? 1.4 : 1 }}
          transition={{ type: "spring", damping: 18, stiffness: 300 }}
          style={{ marginLeft: -11, marginTop: -11 }}
        >
          <div
            className="h-[22px] w-[22px] border"
            style={{
              borderColor: hovering ? "#ffa23e" : "rgba(233,230,222,0.5)",
            }}
          />
          {/* center dot */}
          <div className="absolute left-1/2 top-1/2 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 bg-amber" />
        </motion.div>
      </motion.div>

      {/* precise dot */}
      <motion.div
        className="absolute left-0 top-0 h-[3px] w-[3px] -ml-[1.5px] -mt-[1.5px] bg-amber"
        style={{ x: cursorX, y: cursorY }}
      />
    </div>
  );
}
