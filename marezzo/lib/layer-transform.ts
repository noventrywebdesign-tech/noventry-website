/**
 * Range/output pair for one crossfading layer in a "N stacked scroll-driven
 * panels" component (SignatureCuts, Journey and Interior all use this
 * shape: photos on continuous per-index opacity curves off one shared
 * scrollYProgress).
 *
 * Always spans the layer's *entire* domain, [0, 1] — never just
 * [segStart, segEnd] — so useTransform is never asked to clamp/extrapolate
 * beyond its declared range. Confirmed via a computed-style probe that
 * relying on that clamping is a real bug, not just untidy: the opening
 * layer (whose output array starts with a repeated value, e.g.
 * [1, 1, 1, 0] instead of [0, 1, 1, 0]) reliably held a stale ~0.26 opacity
 * long after scroll had moved well past its own fade-out window, while
 * every other layer on the same source clamped correctly. Root cause not
 * fully isolated inside Framer Motion's interpolate/clamp logic — padding
 * the range with explicit, always-non-decreasing points at 0 and 1 (see
 * feedback_nextjs_motion_ssr_gotchas point 6 on duplicate boundary values
 * being safe) sidesteps it rather than trusting out-of-range clamping to
 * behave as documented.
 */
export function layerRange(index: number, total: number, zone: number) {
  const segStart = index / total;
  const segEnd = (index + 1) / total;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const on = 1;
  const off = 0;

  return {
    range: [0, segStart, segStart + zone, segEnd - zone, segEnd, 1],
    output: [isFirst ? on : off, isFirst ? on : off, on, on, isLast ? on : off, isLast ? on : off],
  };
}
