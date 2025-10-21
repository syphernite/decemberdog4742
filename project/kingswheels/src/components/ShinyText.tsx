import React from "react";

type Props = {
  text: string;
  className?: string;
  /** lower = slower */
  speed?: number;
};

export default function ShinyText({ text, className = "", speed = 5 }: Props) {
  // CSS-driven “shine” (no JS/GSAP). Accessible and SSR-safe.
  return (
    <span
      className={`shiny-text ${className}`}
      style={{
        // Control speed by changing the background position animation duration
        // via a CSS variable the stylesheet will use.
        // Larger speed => longer duration.
        ["--shine-duration" as any]: `${Math.max(1, speed)}s`,
      }}
      aria-label={text}
    >
      {text}
    </span>
  );
}
