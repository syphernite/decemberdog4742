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
    <header className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/35 bg-black/50 border-b border-base-border ${elevated ? "shadow-lg" : ""}`}>
      <div className="container-pad h-14 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-wide link-underline">TimeOut Tavern</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-brand-primary" href="#events">Events</a>
          <a className="hover:text-brand-primary" href="#menu">Menu</a>
          <a className="hover:text-brand-primary" href="#visit">Visit</a>
        </nav>
        <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="btn btn-primary h-9 text-sm animate-glow">
          <Phone className="mr-2 h-4 w-4" /> Call
        </a>
      </div>
    </header>
  )
}
