import React, { useEffect, useState } from "react"
import { Phone } from "lucide-react"

const PHONE = "(252) 223-3303"

export default function Header() {
  const [elevated, setElevated] = useState(false)
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Announcement bar for promos or kitchen hours */}
      <div className="announce text-sm">
        <div className="container-pad h-9 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[13px] text-base-muted">Tonight: Live music at 8 PM • Kitchen open late</span>
          </div>
          <a href="https://www.facebook.com/TimeOutTavernNC/" target="_blank" rel="noreferrer" className="link-underline text-[13px] text-base-muted">
            Follow on Facebook
          </a>
        </div>
      </div>

      <header className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/35 bg-black/60 border-b border-base-border ${elevated ? "shadow-lg" : ""}`}>
        <div className="container-pad h-14 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-wide link-underline">TimeOut Tavern</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-brand-primary" href="#events">Events</a>
            <a className="hover:text-brand-primary" href="#menu">Menu</a>
            <a className="hover:text-brand-primary" href="#visit">Visit</a>
          </nav>
          <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="btn btn-primary h-9 text-sm animate-ember">
            <Phone className="mr-2 h-4 w-4" /> Call
          </a>
        </div>
        <div className="accent-line" />
      </header>
    </>
  )
}
