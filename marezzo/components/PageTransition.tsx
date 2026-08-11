"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * A brief full-screen cover shown before cross-page navigation, then a real
 * `window.location.href` navigation — not next/link's client-side router.
 * next/link's RSC-based navigation throws under file:// (no fetch support)
 * and falls back to a broken error page; see
 * feedback_nextjs_link_breaks_file_protocol — this project uses plain <a>
 * tags project-wide for that reason, so a "page transition" has to be a
 * delegated click-intercept + real navigation rather than an animated route
 * change. Only fires for hrefs that are still root-absolute ("/…"), which is
 * true on the real Vercel deployment; the local file://-portable static
 * export rewrites hrefs to relative paths (scripts/fix-static-paths.js), so
 * this harmlessly no-ops there and native navigation proceeds as before.
 */
export default function PageTransition() {
  const [target, setTarget] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement)?.closest("a");
      if (!a || a.target === "_blank") return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("//")) return;

      const path = href.split("#")[0];
      if (path === window.location.pathname) return; // same-page anchor — keep native scroll behaviour

      e.preventDefault();
      setTarget(href);
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  useEffect(() => {
    if (!target) return;
    const timer = setTimeout(() => {
      window.location.href = target;
    }, 550);
    return () => clearTimeout(timer);
  }, [target]);

  return (
    <AnimatePresence>
      {target && (
        <motion.div
          className="fixed inset-0 z-[98] flex items-center justify-center bg-char-950"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="font-display text-2xl tracking-[0.24em] text-linen-50"
          >
            MAREZZO
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
