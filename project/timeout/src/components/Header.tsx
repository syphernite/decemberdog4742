import React, { useEffect, useState } from "react"
import { Phone } from "lucide-react"

const PHONE = "(252) 223-3303"

/**
 * Publish a Google Sheet tab as CSV and paste the URL below.
 * Example:
 * https://docs.google.com/spreadsheets/d/<SHEET_ID>/gviz/tq?tqx=out:csv&sheet=announcements
 *
 * Columns (case-insensitive):
 * - message (string, required)
 * - start (datetime or date, optional)
 * - end   (datetime or date, optional)
 */
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/REPLACE_ME/gviz/tq?tqx=out:csv&sheet=announcements"

type Row = { message?: string; start?: string; end?: string }

function parseCSV(text: string): Row[] {
  const lines = text.split(/\r?\n/).filter(Boolean)
  if (!lines.length) return []
  const headers = lines[0]
    .split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
    .map(h => h.replace(/^"|"$/g, "").trim().toLowerCase())

  return lines.slice(1).map(line => {
    const cols = line
      .split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
      .map(c => c.replace(/^"|"$/g, "").trim())
    const r: Row = {}
    headers.forEach((h, i) => {
      const v = cols[i] ?? ""
      if (["message","msg","text"].includes(h)) r.message = v
      else if (["start","from","begin"].includes(h)) r.start = v
      else if (["end","until","thru","through"].includes(h)) r.end = v
    })
    return r
  })
}

function inWindow(now: Date, start?: string, end?: string): boolean {
  const s = start ? new Date(start) : null
  const e = end ? new Date(end) : null
  if (s && isNaN(+s)) return false
  if (e && isNaN(+e)) return false
  if (s && now < s) return false
  if (e && now > e) return false
  return true
}

export default function Header() {
  const [elevated, setElevated] = useState(false)
  const [announcement, setAnnouncement] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        if (!SHEET_CSV_URL.includes("REPLACE_ME")) return
        const res = await fetch(SHEET_CSV_URL, { cache: "no-store" })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const text = await res.text()
        const rows = parseCSV(text).filter(r => r.message && r.message.trim().length > 0)
        const now = new Date()
        const active = rows.find(r => inWindow(now, r.start, r.end))
        if (!cancelled) setAnnouncement(active?.message ?? rows[0]?.message ?? null)
      } catch {
        // silent fail; fallback stays
      }
    }
    load()
    // refresh every 10 minutes in case sheet changes
    const id = setInterval(load, 10 * 60 * 1000)
    return () => { cancelled = true; clearInterval(id) }
  }, [])

  const fallbackMsg = "Tonight: Live music at 8 PM • Kitchen open late"
  const barText = announcement || fallbackMsg

  return (
    <>
      {/* Announcement bar (Google Sheets-powered if SHEET_CSV_URL set) */}
      <div className="announce text-sm">
        <div className="container-pad h-9 flex items-center justify-between">
          <div className="truncate pr-4">
            <span className="text-[13px] text-base-muted">{barText}</span>
          </div>
          <a
            href="https://www.facebook.com/TimeOutTavernNC/"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-[13px] text-base-muted shrink-0"
          >
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
        </div>
        <div className="accent-line" />
      </header>
    </>
  )
}
