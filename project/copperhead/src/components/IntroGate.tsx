import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type Props = {
  logoSrc: string;
  onOpened?: () => void;
  minShowMs?: number;
};

export default function IntroGate({ logoSrc, onOpened, minShowMs = 600 }: Props) {
  const prefersReduced = useReducedMotion();
  const [armed, setArmed] = useState(false);
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [mountedAt] = useState(() => Date.now());
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => setRoot(document.body), []);

  const triggerOpen = useCallback(() => {
    if (done || open) return;
    const elapsed = Date.now() - mountedAt;
    const wait = Math.max(0, minShowMs - elapsed);
    setArmed(true);
    window.setTimeout(() => setOpen(true), wait);
  }, [done, open, mountedAt, minShowMs]);

  useEffect(() => {
    const onWheel = () => triggerOpen();
    const onTouch = () => triggerOpen();
    const onKey = (e: KeyboardEvent) => {
      if (["Enter", " ", "ArrowDown", "PageDown"].includes(e.key)) triggerOpen();
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("keydown", onKey);
    };
  }, [triggerOpen]);

  useEffect(() => {
    if (prefersReduced) {
      setOpen(true);
      setDone(true);
      onOpened?.();
    }
  }, [prefersReduced, onOpened]);

  useEffect(() => {
    if (!done) {
      const prev = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = prev;
      };
    }
  }, [done]);

  const overlayVar = useMemo(
    () => ({
      idle: { opacity: 1 },
      opening: { opacity: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
    }),
    []
  );

  const logoVar = useMemo(
    () => ({
      idle: { scale: 1, opacity: 1 },
      armed: { scale: 1.05, opacity: 1 },
      opening: {
        scale: 1.2,
        opacity: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
      }
    }),
    []
  );

  if (!root || done) return null;

  return createPortal(
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[2147483647] bg-black"
          initial="idle"
          animate={open ? "opening" : armed ? "armed" : "idle"}
          variants={overlayVar}
          onAnimationComplete={(def) => {
            if (def === "opening") {
              setDone(true);
              onOpened?.();
            }
          }}
          aria-hidden
        >
          <div className="absolute -inset-24 copper-gradient opacity-30 blur-3xl rounded-[100%]" />
          <div className="absolute inset-0 grain" />

          <div className="relative h-full w-full flex items-center justify-center">
            <motion.img
              src={logoSrc}
              alt="Site logo"
              className="w-full h-full object-contain select-none cursor-pointer"
              draggable={false}
              variants={logoVar}
              onClick={triggerOpen}
            />
          </div>

          {!armed && (
            <div className="absolute bottom-10 left-0 right-0 flex justify-center">
              <div className="text-white/80 text-xs tracking-wide">Scroll or click logo to enter</div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    root
  );
}
