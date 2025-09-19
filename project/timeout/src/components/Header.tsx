// src/components/Header.tsx
import React, { useEffect, useState } from "react";
import { Phone, Clock } from "lucide-react";

const PHONE = "(252) 223-3303";

// daily hours example: 11:00–00:00
const OPEN_HOUR = 11;
const CLOSE_HOUR = 0;
const DAYS_OPEN = [0, 1, 2, 3, 4, 5, 6];

function isOpenNow(now = new Date()) {
  const h = now.getHours();
  const day = now.getDay();
  if (!DAYS_OPEN.includes(day)) return false;
  if (OPEN_HOUR < CLOSE_HOUR) return h >= OPEN_HOUR && h < CLOSE_HOUR;
  return h >= OPEN_HOUR || h < CLOSE_HOUR;
}

export default function Header() {
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(isOpenNow());

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(`${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`);
      setOpen(isOpenNow(d));
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-neutral-800"
      style={{
        backgroundColor: "#2d2d2d",
        backgroundImage:
          // darker coarse grain with soft speckle
          "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\" viewBox=\"0 0 8 8\"%3E%3Ccircle cx=\"1\" cy=\"1\" r=\"0.5\" fill=\"%23373737\" fill-opacity=\"0.3\"/%3E%3Ccircle cx=\"5\" cy=\"3\" r=\"0.4\" fill=\"%23404040\" fill-opacity=\"0.25\"/%3E%3Ccircle cx=\"3\" cy=\"6\" r=\"0.4\" fill=\"%23454545\" fill-opacity=\"0.25\"/%3E%3C/svg%3E')",
        backgroundSize: "8px 8px"
      }}
    >
      <div className="container-pad h-14 flex items-center justify-between text-white uppercase tracking-wide font-['Bebas_Neue',sans-serif]">
        <a href="/" className="text-xl">TimeOut Tavern</a>

        <nav className="hidden md:flex items-center gap-6 text-base">
          <a className="hover:underline" href="#events">Events</a>
          <a className="hover:underline" href="#visit">Visit</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
            <span className={`ml-1 font-bold ${open ? "text-emerald-400" : "text-red-400"}`}>
              {open ? "Open" : "Closed"}
            </span>
          </div>

          {/* glass style button */}
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="h-9 px-4 flex items-center justify-center rounded-full text-sm font-semibold border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
          >
            <Phone className="mr-2 h-4 w-4" /> Call
          </a>
        </div>
      </div>
    </header>
  );
}
