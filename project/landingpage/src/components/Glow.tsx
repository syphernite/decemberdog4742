// src/components/Glow.tsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

type GlowAreaProps = {
  children: React.ReactNode;
  glowColor?: string;          // "r,g,b" (no spaces)
  spotlight?: boolean;
  className?: string;
};
type GlowCardProps = React.HTMLAttributes<HTMLDivElement> & {
  glowColor?: string;          // "r,g,b"
  particles?: number;
  tilt?: boolean;
  magnet?: boolean;
  clickEffect?: boolean;
};

const DEFAULT_COLOR = "132,0,255";
const RADIUS = 320;

export function GlowArea({
  children,
  glowColor = DEFAULT_COLOR,
  spotlight = false,
  className = "",
}: GlowAreaProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const spotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!spotlight) return;
    const spot = document.createElement("div");
    spot.style.cssText = `
      position:fixed; left:0; top:0; width:${RADIUS * 2}px; height:${RADIUS * 2}px;
      transform:translate(-50%,-50%); pointer-events:none; z-index:50; opacity:0;
      border-radius:50%;
      background:radial-gradient(circle,
        rgba(${glowColor},0.18) 0%,
        rgba(${glowColor},0.10) 25%,
        rgba(${glowColor},0.05) 45%,
        rgba(${glowColor},0.02) 65%,
        transparent 75%);
      mix-blend-mode:screen;
    `;
    document.body.appendChild(spot);
    spotRef.current = spot;

    const handleMove = (e: MouseEvent) => {
      const within = !!rootRef.current?.getBoundingClientRect();
      if (!within || !spotRef.current) return;
      const rect = rootRef.current!.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      gsap.to(spotRef.current, {
        left: e.clientX,
        top: e.clientY,
        opacity: inside ? 0.85 : 0,
        duration: inside ? 0.15 : 0.3,
        ease: "power2.out",
      });
    };
    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      spotRef.current?.remove();
    };
  }, [spotlight, glowColor]);

  return (
    <div
      ref={rootRef}
      className={className}
      style={
        {
          // for card border glow shaders
          ["--glow-color" as any]: glowColor,
          ["--glow-radius" as any]: `${RADIUS}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

export function GlowCard({
  children,
  className = "",
  glowColor = DEFAULT_COLOR,
  particles = 10,
  tilt = true,
  magnet = true,
  clickEffect = true,
  ...rest
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // particles (simple)
    const dots: HTMLDivElement[] = [];
    const spawn = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const d = document.createElement("div");
      d.style.cssText = `
        position:absolute; width:4px; height:4px; border-radius:50%;
        background:rgba(${glowColor},1); box-shadow:0 0 6px rgba(${glowColor},0.6);
        pointer-events:none; z-index:1;
        left:${Math.random() * rect.width}px; top:${Math.random() * rect.height}px;
      `;
      ref.current.appendChild(d);
      dots.push(d);
      gsap.to(d, {
        x: (Math.random() - 0.5) * 90,
        y: (Math.random() - 0.5) * 90,
        opacity: 0.35,
        duration: 2 + Math.random() * 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    };
    for (let i = 0; i < particles; i++) spawn();

    // tilt + magnet + glow cursor
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const relX = ((e.clientX - r.left) / r.width) * 100;
      const relY = ((e.clientY - r.top) / r.height) * 100;

      (el.style as any).setProperty("--glow-x", `${relX}%`);
      (el.style as any).setProperty("--glow-y", `${relY}%`);
      (el.style as any).setProperty("--glow-intensity", `1`);

      if (tilt) {
        const rotX = ((e.clientY - cy) / (r.height / 2)) * -8;
        const rotY = ((e.clientX - cx) / (r.width / 2)) * 8;
        gsap.to(el, { rotateX: rotX, rotateY: rotY, duration: 0.1 });
      }
      if (magnet) {
        gsap.to(el, {
          x: (e.clientX - cx) * 0.03,
          y: (e.clientY - cy) * 0.03,
          duration: 0.15,
        });
      }
    };
    const onLeave = () => {
      (el.style as any).setProperty("--glow-intensity", `0`);
      gsap.to(el, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.25 });
    };
    const onClick = (e: MouseEvent) => {
      if (!clickEffect) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const maxD = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - r.width, y),
        Math.hypot(x, y - r.height),
        Math.hypot(x - r.width, y - r.height)
      );
      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position:absolute; left:${x - maxD}px; top:${y - maxD}px; width:${maxD * 2}px; height:${maxD * 2}px;
        border-radius:50%;
        pointer-events:none; z-index:2;
        background:radial-gradient(circle, rgba(${glowColor},0.35) 0%, rgba(${glowColor},0.15) 35%, transparent 70%);
      `;
      el.appendChild(ripple);
      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        { scale: 1, opacity: 0, duration: 0.7, ease: "power2.out", onComplete: () => ripple.remove() }
      );
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("click", onClick);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("click", onClick);
      dots.forEach((d) => d.remove());
    };
  }, [glowColor, particles, tilt, magnet, clickEffect]);

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm overflow-hidden card-glow ${className}`}
      style={
        {
          ["--glow-x" as any]: "50%",
          ["--glow-y" as any]: "50%",
          ["--glow-intensity" as any]: 0,
        } as React.CSSProperties
      }
      {...rest}
    >
      {/* border glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          padding: 6,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "subtract" as any,
          background: `radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
            rgba(${glowColor}, calc(var(--glow-intensity)*0.9)) 0%,
            rgba(${glowColor}, calc(var(--glow-intensity)*0.45)) 30%,
            transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}
