// src/components/Galaxy.tsx
import React, { useRef, useEffect } from "react";

interface GalaxyProps {
  className?: string;
  mouseRepulsion?: boolean;
  mouseInteraction?: boolean;
  density?: number;
  glowIntensity?: number;
  saturation?: number;
  hueShift?: number;
  transparent?: boolean;
}

const Galaxy: React.FC<GalaxyProps> = ({
  className = "",
  mouseRepulsion = true,
  mouseInteraction = true,
  density = 1.2,
  glowIntensity = 0.35,
  saturation = 0.9,
  hueShift = 0, // reset to 0 to fix inverted colors
  transparent = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles: any[] = [];
  let ctx: CanvasRenderingContext2D | null = null;
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    resizeCanvas();
    initParticles();

    window.addEventListener("resize", resizeCanvas);
    if (mouseInteraction) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (mouseInteraction) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const resizeCanvas = () => {
    if (!canvasRef.current) return;
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
  };

  const initParticles = () => {
    particles.length = 0;
    const count = Math.floor((window.innerWidth * window.innerHeight) / (15000 / density));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        color: `hsl(${Math.random() * 360 + hueShift}, ${saturation * 100}%, 70%)`,
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  const update = () => {
    if (!ctx || !canvasRef.current) return;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
      if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

      // Mouse interaction
      if (mouseRepulsion) {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - dist) / 100;
          p.vx += Math.cos(angle) * force * 0.2;
          p.vy += Math.sin(angle) * force * 0.2;
        }
      }

      // Draw particle
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = glowIntensity * 50;
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(update);
  };

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        background: transparent ? "transparent" : "radial-gradient(ellipse, #000 0%, #020617 100%)",
      }}
    />
  );
};

export default Galaxy;
