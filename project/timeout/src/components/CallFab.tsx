import React from "react"
import { Phone } from "lucide-react"

const PHONE = "(252) 223-3303"

export default function CallFab() {
  return (
    <a
      href={`tel:${PHONE.replace(/\D/g, "")}`}
      className="fab animate-float"
      aria-label="Call TimeOut Tavern"
    >
      <Phone className="h-6 w-6" />
    </a>
  )
}
