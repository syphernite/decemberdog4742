import React, { useEffect, useMemo, useState } from "react"

/**
 * GOOGLE SHEETS SETUP
 * Publish a sheet or specific tab as CSV, then paste its CSV URL below.
 * Example URL format:
 *   https://docs.google.com/spreadsheets/d/<SHEET_ID>/gviz/tq?tqx=out:csv&sheet=<TAB_NAME>
 *
 * Expected columns (order flexible, header names case-insensitive):
 *   title | date | time | details | price | link
 */
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/REPLACE_ME/gviz/tq?tqx=out:csv&sheet=events"

type Row = {
  title?: string
  date?: string
  time?: string
  details?: string
  price?: string
  link?: string
}

function parseCSV(csv: string): Row[] {
  // simple CSV parser for commas within quotes
  const lines = csv.split(/\r?\n/).filter(Boolean)
  if (!lines.length) return []
  const headers = lines[0]
    .split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
    .map(h => h.replace(/^"|"$/g, "").trim().toLowerCase())

  return lines.slice(1).map(line => {
    const cols = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map(c => c.replace(/^"|"$/g, "").trim())
    const obj: Row = {}
    headers.forEach((h, i) => {
      const v = cols[i] ?? ""
      if (["title","event","name"].includes(h)) obj.title = v
      else if (["date","day"].includes(h)) obj.date = v
      else if (["time","when"].includes(h)) obj.time = v
      else if (["details","desc","notes"].includes(h)) obj.details = v
      else if (["price","cost"].includes(h)) obj.price = v
      else if (["link","url"].includes(h)) obj.link = v
    })
    return obj
  })
}

export default function SheetsSpecials() {
  const [rows, setRows] = useState<Row[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function run() {
      try {
        const res = await fetch(SHEET_CSV_URL, { cache: "no-store" })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const text = await res.text()
        const parsed = parseCSV(text).filter(r => r.title)
        setRows(parsed)
      } catch (e: any) {
        setError("Unable to load events right now.")
        console.error(e)
      }
    }
    run()
  }, [])

  const hasData = useMemo(() => rows && rows.length > 0, [rows])

  if (error) {
    return <div className="text-sm text-red-400">{error}</div>
  }

  if (!hasData) {
    return (
      <div className="card p-5">
        <p className="text-sm text-base-muted">
          Events will appear here when the Google Sheet is connected.
        </p>
        <p className="text-xs text-base-muted mt-2">
          Update <code>SHEET_CSV_URL</code> in <code>SheetsSpecials.tsx</code> with your published CSV link.
        </p>
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {rows!.map((r, i) => (
        <article key={i} className="card p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-medium">{r.title}</h3>
            {r.price ? <span className="text-xs bg-brand-primary/20 text-brand-primary px-2 py-1 rounded">{r.price}</span> : null}
          </div>
          <div className="mt-2 text-sm text-base-muted">
            {(r.date || r.time) && <div>{[r.date, r.time].filter(Boolean).join(" • ")}</div>}
            {r.details && <p className="mt-1">{r.details}</p>}
          </div>
          {r.link ? (
            <a href={r.link} target="_blank" rel="noreferrer" className="btn btn-outline mt-4 text-sm">
              Learn More
            </a>
          ) : null}
        </article>
      ))}
    </div>
  )
}
