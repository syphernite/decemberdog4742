import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

type Props = {
  to: number;
  from?: number;
  duration?: number;   // seconds
  delay?: number;      // seconds
  separator?: string;  // e.g. ","
  className?: string;
};

export default function CountUp({
  to,
  from = 0,
  duration = 1.2,
  delay = 0,
  separator = "",
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(from);
  const spring = useSpring(mv, {
    damping: 20 + 40 * (1 / duration),
    stiffness: 100 * (1 / duration),
  });
  const inView = useInView(ref, { once: true, margin: "0px" });

  // decide decimals based on inputs
  const decimals = Math.max(
    (String(from).split(".")[1] || "").length,
    (String(to).split(".")[1] || "").length
  );

  useEffect(() => {
    if (!ref.current) return;
    ref.current.textContent = String(from);
  }, [from]);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => mv.set(to), delay * 1000);
    return () => clearTimeout(t);
  }, [inView, mv, to, delay]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (!ref.current) return;
      const formatted = Intl.NumberFormat("en-US", {
        useGrouping: !!separator,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(v);
      ref.current.textContent = separator ? formatted.replace(/,/g, separator) : formatted;
    });
    return () => unsub();
  }, [spring, separator, decimals]);

  return <span ref={ref} className={className} />;
}
