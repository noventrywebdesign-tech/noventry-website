"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const MAX_PULL = 9;

/**
 * Wraps a button/link and gives it a very subtle magnetic pull toward the
 * cursor on hover — a few pixels only, desktop-only in effect (touch never
 * fires mousemove the same way, so this is a natural no-op on mobile without
 * needing a pointer-coarse guard). Reserved for primary CTAs only.
 */
export default function MagneticButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const clamp = (v: number) => Math.max(-MAX_PULL, Math.min(MAX_PULL, v));

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: clamp((e.clientX - rect.left - rect.width / 2) * 0.35),
      y: clamp((e.clientY - rect.top - rect.height / 2) * 0.35),
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
