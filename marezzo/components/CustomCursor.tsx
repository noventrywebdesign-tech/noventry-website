"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Desktop-only custom cursor: a small ring that follows the pointer with a
 * soft spring lag, and swaps in a contextual word (VIEW / DISCOVER / RESERVE /
 * DRAG) whenever the pointer sits over an element carrying `data-cursor="…"`.
 * Never mounts its pointer-tracking listener on touch devices — `pointer:
 * coarse` both hides it via CSS and this component bails out of the effect
 * entirely so it costs nothing on mobile.
 */
export default function CustomCursor() {
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-linen-50/70 bg-char-950/30 text-center backdrop-blur-[1px]"
        animate={{
          width: label ? 72 : 14,
          height: label ? 72 : 14,
          marginLeft: label ? -36 : -7,
          marginTop: label ? -36 : -7,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {label && (
          <span className="font-body text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-linen-50">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
