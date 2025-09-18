// src/components/FloatingBurgerMenu.tsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu as IconMenu, X, Home, BadgeDollarSign, Phone } from "lucide-react";

/* ----- helpers to match Header.tsx behavior ----- */
function findAnchor(id: string): HTMLElement | null {
  const root = document.getElementById(id);
  if (!root) return null;
  const explicit = root.querySelector<HTMLElement>("[data-anchor-target='true']");
  if (explicit) return explicit;
  const heading = root.querySelector<HTMLElement>("h1, h2, h3");
  return heading ?? root;
}
function headerOffsetPx(headerEl: HTMLElement | null): number {
  const h = headerEl ? headerEl.offsetHeight : 72;
  return h + 12;
}
function scrollWithOffset(id: string) {
  const target = findAnchor(id);
  if (!target) return;
  const headerEl = document.querySelector<HTMLElement>("header");
  const y = target.getBoundingClientRect().top + window.scrollY - headerOffsetPx(headerEl);
  window.scrollTo({ top: y, behavior: "smooth" });
}

/* ----- visibility: show burger when header hidden; always show on mobile ----- */
function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const upd = () => setMobile(mq.matches);
    upd();
    mq.addEventListener ? mq.addEventListener("change", upd) : mq.addListener(upd);
    return () => (mq.removeEventListener ? mq.removeEventListener("change", upd) : mq.removeListener(upd));
  }, []);
  return mobile;
}
function useHeaderVisible() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("header");
    const update = () => {
      if (!header) return setVisible(false);
      const style = window.getComputedStyle(header);
      const hiddenCss =
        style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0;
      const translatedOut = header.classList.contains("-translate-y-full");
      const rect = header.getBoundingClientRect();
      const onScreen = rect.bottom > 8;
      setVisible(!hiddenCss && !translatedOut && onScreen);
    };
    update();
    const mo = header ? new MutationObserver(update) : null;
    if (header) mo?.observe(header, { attributes: true, attributeFilter: ["class", "style"] });
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      mo?.disconnect();
    };
  }, []);
  return visible;
}

/* ----- stack container ----- */
function MenuContainer({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const items = useMemo(() => React.Children.toArray(children), [children]);
  return (
    <div className="relative w-16" data-expanded={isExpanded}>
      <div
        className="relative w-16 h-16 cursor-pointer rounded-full bg-white/10 border border-white/20 backdrop-blur-md ring-1 ring-black/10 hover:bg-white/15 transition z-50 flex items-center justify-center"
        onClick={() => setIsExpanded((v) => !v)}
        aria-label="Toggle menu"
      >
        {items[0]}
      </div>
      {items.slice(1).map((child, i) => (
        <div
          key={i}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full will-change-transform"
          style={{
            transform: `translate(-50%, ${isExpanded ? (i + 1) * 56 : 0}px)`,
            opacity: isExpanded ? 1 : 0,
            zIndex: 40 - i,
            transition: `transform 280ms cubic-bezier(0.4,0,0.2,1), opacity 260ms ease`,
            clipPath: "circle(50% at 50% 50%)",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

/* ----- floating burger ----- */
export default function FloatingBurgerMenu() {
  const isMobile = useIsMobile();
  const headerVisible = useHeaderVisible();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goRoute = (to: string) => () => navigate(to);
  const goSection = (id: "pricing" | "audit") => () => {
    if (pathname !== "/") {
      navigate("/", { replace: false });
      requestAnimationFrame(() => requestAnimationFrame(() => scrollWithOffset(id)));
    } else {
      scrollWithOffset(id);
    }
  };
  const goHomeTop = () => {
    if (pathname !== "/") {
      navigate("/", { replace: false });
      requestAnimationFrame(() =>
        requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }))
      );
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const showBurger = isMobile || !headerVisible;

  return (
    <div
      className="fixed z-[90] pointer-events-none flex items-center justify-center transition-opacity duration-200"
      style={{
        left: "1rem",
        top: "50%",
        transform: "translateY(-50%)",
        opacity: showBurger ? 1 : 0,
      }}
      aria-hidden={!showBurger}
    >
      <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-emerald-400/10 via-sky-400/10 to-indigo-400/10 blur-2xl pointer-events-none" />
      <div className="pointer-events-auto">
        <MenuContainer>
          {/* Trigger */}
          <button
            className="w-16 h-16 rounded-full flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open floating menu"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-white/10 blur-md" />
              <div className="relative rounded-full w-12 h-12 grid place-items-center bg-black/60 text-white border border-white/20">
                {open ? <X className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
              </div>
            </div>
          </button>

          {/* Home -> scroll to top */}
          <button onClick={goHomeTop} className="w-16 h-16 rounded-full grid place-items-center text-white" aria-label="Home">
            <div className="relative">
              <div className="relative rounded-full w-12 h-12 grid place-items-center bg-black/60 border border-white/20">
                <Home className="h-5 w-5" />
              </div>
            </div>
          </button>

          {/* Pricing section on Home — no shadow */}
          <button onClick={goSection("pricing")} className="w-16 h-16 rounded-full grid place-items-center text-white" aria-label="Pricing">
            <div className="relative">
              <div className="relative rounded-full w-12 h-12 grid place-items-center bg-black/60 border border-transparent">
                <BadgeDollarSign className="h-5 w-5" />
              </div>
            </div>
          </button>

          {/* Contact route */}
          <button onClick={goRoute("/contact")} className="w-16 h-16 rounded-full grid place-items-center text-white" aria-label="Contact">
            <div className="relative">
              <div className="relative rounded-full w-12 h-12 grid place-items-center bg-black/60 border border-white/20">
                <Phone className="h-5 w-5" />
              </div>
            </div>
          </button>
        </MenuContainer>
      </div>
    </div>
  );
}
