import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type Props = {
  containerClassName?: string;
  textClassName?: string;
  /** pixels to float upward while entering */
  float?: number;
  /** seconds */
  duration?: number;
  /** when to trigger */
  amount?: number; // 0..1
};

/**
 * ScrollFloat — uses Framer Motion only (no GSAP).
 * It gently floats content in as it comes into view.
 */
export default function ScrollFloat({
  children,
  containerClassName = "",
  textClassName = "",
  float = 14,
  duration = 0.8,
  amount = 0.2,
}: PropsWithChildren<Props>) {
  return (
    <div className={containerClassName}>
      <motion.div
        className={textClassName}
        initial={{ opacity: 0, y: float }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount }}
        transition={{ duration, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
