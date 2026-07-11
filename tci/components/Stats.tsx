"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "13", label: "Außenplätze", suffix: "+" },
  { value: "2", label: "Hallenplätze", suffix: "" },
  { value: "60", label: "Jahre Tradition", suffix: "+" },
  { value: "1", label: "Regionalliga", suffix: "st" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#1A4A2E] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center px-6 py-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex items-end gap-1 mb-2">
                <span
                  className="text-white leading-none"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(3rem, 5vw, 4rem)",
                    fontWeight: 300,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[#7ECFA0] text-2xl mb-1 font-light"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {stat.suffix}
                </span>
              </div>
              <p
                className="text-white/50 text-xs tracking-widest uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
