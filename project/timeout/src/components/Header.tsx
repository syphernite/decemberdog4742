import React from "react"
import { Phone } from "lucide-react"

const PHONE = "(252) 223-3303"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-base-border">
      <div className="container-pad h-14 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-wide">TimeOut Tavern</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:underline" href="#events">Events</a>
          <a className="hover:underline" href="#visit">Visit</a>
        </nav>
        <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="btn btn-primary h-9 text-sm">
          <Phone className="mr-2 h-4 w-4" /> Call
        </a>
      </div>
    </header>
  )
}
