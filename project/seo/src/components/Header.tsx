// src/components/Header.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { tokens } from "../styles/tokens";
import logo from "../assets/logo.svg";

type NavItem = { label: string; type: "route" | "section"; to: string };

const NAV: NavItem[] = [
  { label: "Home", type: "route", to: "/" },
  { label: "Pricing", type: "section", to: "pricing" },
  { label: "Free Audit", type: "section", to: "audit" },
  { label: "Contact", type: "route", to: "/contact" },
];

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

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef<number>(0);
  const ticking = useRef(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  // Auto-hide on desktop only
  useEffect(() => {
    if (isMobile) {
      setVisible(true);
      return;
    }
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - lastY.current;
        setAtTop(y < 8);
        if (y < 80) setVisible(true);
        else if (dy > 2) setVisible(false);
        else if (dy < -2) setVisible(true);
        lastY.current = y;
        ticking.current = false;
      });
    };
    lastY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  const scrollWithOffset = useCallback((id: string) => {
    const target = findAnchor(id);
    if (!target) return;
    setVisible(true);
    const y =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerOffsetPx(headerRef.current);
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  const goSection = useCallback(
    (id: string) => {
      if (pathname !== "/") {
        navigate("/", { replace: false });
        requestAnimationFrame(() =>
          requestAnimationFrame(() => scrollWithOffset(id))
        );
      } else {
        scrollWithOffset(id);
      }
    },
    [navigate, pathname, scrollWithOffset]
  );

  const translateClass = isMobile ? "translate-y-0" : visible ? "translate-y-0" : "-translate-y-full";

  return (
    <>
      <header
        ref={headerRef as any}
        className={[
          "fixed inset-x-0 top-0 z-50 transition-transform duration-300",
          translateClass,
          "bg-white/90 backdrop-blur border-b border-neutral-200",
          atTop ? "" : "shadow-sm",
        ].join(" ")}
      >
        <div className={`${tokens.container} h-16 flex items-center justify-between relative`}>
          <Link to="/" className="flex items-center" aria-label="Home" onClick={() => setOpen(false)}>
            <img src={logo} alt="Logo" className="h-12 w-12 md:h-14 md:w-14" />
          </Link>

          <nav
            className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
            aria-label="Primary"
          >
            {NAV.map((item) =>
              item.type === "route" ? (
                <Link key={item.label} to={item.to} className="text-sm text-neutral-800 hover:text-neutral-900">
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => goSection(item.to)}
                  className="text-sm text-neutral-800 hover:text-neutral-900"
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          <div className="hidden md:block">
            <button type="button" className={tokens.button.primary} onClick={() => goSection("pricing")}>
              Get popular today
            </button>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden rounded-lg p-2 hover:bg-neutral-100"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="md:hidden border-t border-neutral-200 bg-white overflow-hidden"
            >
              <div className={`${tokens.container} py-4 flex flex-col gap-2`}>
                {NAV.map((item) =>
                  item.type === "route" ? (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="py-2 text-neutral-800"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.label}
                      type="button"
                      className="py-2 text-left text-neutral-800"
                      onClick={() => {
                        setOpen(false);
                        goSection(item.to);
                      }}
                    >
                      {item.label}
                    </button>
                  )
                )}
                <button
                  type="button"
                  className={tokens.button.primary}
                  onClick={() => {
                    setOpen(false);
                    goSection("pricing");
                  }}
                >
                  Subscribe $32.99
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div aria-hidden className="h-16" />
    </>
  );
}
