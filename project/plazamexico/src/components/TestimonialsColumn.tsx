import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
  text: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const items = props.testimonials;

  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 12,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((pass) => (
          <React.Fragment key={pass}>
            {items.map(({ text, name, role }, i) => {
              const accent =
                i % 2 === 0
                  ? "border-red-600/50 from-red-600/15"
                  : "border-yellow-400/50 from-yellow-400/15";
              return (
                <div
                  key={`${pass}-${i}`}
                  className={`p-6 rounded-2xl bg-zinc-900/60 border ${accent} shadow-lg shadow-black/30`}
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, var(--tw-gradient-from), transparent)",
                  }}
                >
                  <div className="text-gray-200 leading-relaxed">{text}</div>
                  <div className="mt-4">
                    <div className="font-semibold tracking-tight text-white">{name}</div>
                    <div className="text-xs tracking-tight opacity-70">{role}</div>
                  </div>
                  <div
                    className={`mt-4 h-1 rounded-full ${
                      i % 2 === 0 ? "bg-red-600/70" : "bg-yellow-400/80"
                    }`}
                  />
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;
