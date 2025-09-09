// src/components/Gallery3DRing.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';

type GalleryImage = { src: string; caption?: string };

type Props = {
  images?: GalleryImage[]; // optional. falls back to placeholder pics if not provided
  width?: number; // px
  height?: number; // px
  depth?: number; // px perspective and Z radius
};

export default function Gallery3DRing({
  images,
  width = 300,
  height = 400,
  depth = 500,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [xPos, setXPos] = useState(0);

  const items: GalleryImage[] = useMemo(() => {
    if (images && images.length > 0) return images;
    // fallback placeholders
    return Array.from({ length: 10 }, (_, i) => ({
      src: `https://picsum.photos/id/${i + 32}/600/400`,
      caption: '',
    }));
  }, [images]);

  const count = items.length;
  const stepDeg = 360 / count;

  // compute background position for parallax
  const getBgPos = (i: number) => {
    const rot = gsap.getProperty(ringRef.current as Element, 'rotationY') as number;
    const wrapped = gsap.utils.wrap(0, 360, rot - 180 - i * stepDeg);
    const x = 100 - (wrapped / 360) * 500;
    return `${x}px 0px`;
  };

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    // initial states
    gsap.set(ring, { rotationY: 180, cursor: 'grab' });

    // place each panel
    const panels = Array.from(ring.querySelectorAll<HTMLDivElement>('.img'));
    panels.forEach((panel, i) => {
      gsap.set(panel, {
        rotateY: i * -stepDeg,
        transformOrigin: `50% 50% ${depth}px`,
        z: -depth,
        backgroundImage: `url("${items[i].src}")`,
        backgroundSize: 'cover',
        backgroundPosition: getBgPos(i),
        backfaceVisibility: 'hidden',
      });
    });

    // enter animation
    gsap.from(panels, {
      duration: 1.2,
      y: 200,
      opacity: 0,
      stagger: 0.08,
      ease: 'expo',
    });

    // hover opacity
    const onEnter = (e: Event) => {
      const current = e.currentTarget as HTMLDivElement;
      gsap.to(panels, {
        opacity: (idx, t) => (t === current ? 1 : 0.5),
        ease: 'power3',
        duration: 0.2,
      });
    };
    const onLeave = () => {
      gsap.to(panels, { opacity: 1, ease: 'power2.inOut', duration: 0.25 });
    };
    panels.forEach((p) => {
      p.addEventListener('mouseenter', onEnter);
      p.addEventListener('mouseleave', onLeave);
    });

    // drag handlers
    const onDrag = (e: MouseEvent | TouchEvent) => {
      let clientX: number;
      if (e instanceof TouchEvent) {
        clientX = e.touches[0]?.clientX ?? 0;
      } else {
        clientX = (e as MouseEvent).clientX;
      }
      const delta = (Math.round(clientX) - xPos) % 360;
      gsap.to(ring, {
        rotationY: `-=${delta}`,
        onUpdate: () => {
          panels.forEach((_, i) => {
            gsap.set(panels[i], { backgroundPosition: getBgPos(i) });
          });
        },
        duration: 0.2,
      });
      setXPos(Math.round(clientX));
    };

    const onDragStart = (e: MouseEvent | TouchEvent) => {
      let clientX: number;
      if (e instanceof TouchEvent) {
        clientX = e.touches[0]?.clientX ?? 0;
      } else {
        clientX = (e as MouseEvent).clientX;
      }
      setXPos(Math.round(clientX));
      gsap.set(ring, { cursor: 'grabbing' });
      window.addEventListener('mousemove', onDrag);
      window.addEventListener('touchmove', onDrag, { passive: false });
    };

    const onDragEnd = () => {
      window.removeEventListener('mousemove', onDrag);
      window.removeEventListener('touchmove', onDrag);
      gsap.set(ring, { cursor: 'grab' });
    };

    window.addEventListener('mousedown', onDragStart);
    window.addEventListener('touchstart', onDragStart, { passive: false });
    window.addEventListener('mouseup', onDragEnd);
    window.addEventListener('touchend', onDragEnd);

    return () => {
      panels.forEach((p) => {
        p.removeEventListener('mouseenter', onEnter);
        p.removeEventListener('mouseleave', onLeave);
      });
      window.removeEventListener('mousedown', onDragStart);
      window.removeEventListener('touchstart', onDragStart);
      window.removeEventListener('mouseup', onDragEnd);
      window.removeEventListener('touchend', onDragEnd);
      window.removeEventListener('mousemove', onDrag);
      window.removeEventListener('touchmove', onDrag);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, depth, stepDeg, items]);

  return (
    <div className="stage" ref={containerRef}>
      <style>{`
        .stage, .ring, .img {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          user-select: none;
        }
        .stage {
          position: relative;
          overflow: hidden;
          background: #000;
          display: grid;
          place-items: center;
        }
        .container-3d {
          position: relative;
          perspective: ${depth * 4}px;
          width: ${width}px;
          height: ${height}px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .ring {
          position: absolute;
          inset: 0;
        }
        .img {
          position: absolute;
          inset: 0;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.55);
          background-repeat: no-repeat;
          background-size: cover;
        }
        .caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -34px;
          text-align: center;
          color: rgba(255,255,255,0.85);
          font-size: 12px;
        }

        @media (max-width: 480px) {
          .container-3d {
            width: ${Math.round(width * 0.8)}px;
            height: ${Math.round(height * 0.8)}px;
          }
        }
      `}</style>

      <div className="container-3d">
        <div className="ring" ref={ringRef}>
          {items.map((img, i) => (
            <div key={i} className="img">
              {img.caption ? <div className="caption">{img.caption}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
