// src/pages/FreeCuts.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';

/**
 * Publish a Google Sheet as CSV:
 * File -> Share -> Publish to web -> Link -> Entire Sheet -> CSV
 * Copy the URL. It should end with output=csv
 */
const SHEET_CSV_URL =
  import.meta.env.VITE_FREECUTS_CSV_URL ||
  'https://docs.google.com/spreadsheets/d/e/REPLACE_WITH_YOUR_PUBLISHED_SHEET_ID/pub?output=csv';

type EventRow = {
  date: string;      // YYYY-MM-DD or any parseable date
  start: string;     // e.g. 3:00 PM
  end?: string;      // e.g. 5:00 PM
  location: string;  // address or short name
  notes?: string;
};

function parseCsv(csv: string): EventRow[] {
  const lines = csv.trim().split(/\r?\n/);
  if (lines.length === 0) return [];
  const headers = lines[0].split(',').map((h) => h.trim().toLowerCase());

  const idx = (name: string) => headers.indexOf(name);

  const out: EventRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = splitCsvLine(lines[i]);
    out.push({
      date: cols[idx('date')]?.trim() || '',
      start: cols[idx('start')]?.trim() || '',
      end: cols[idx('end')]?.trim() || '',
      location: cols[idx('location')]?.trim() || '',
      notes: cols[idx('notes')]?.trim() || '',
    });
  }
  return out.filter((r) => r.date && r.start && r.location);
}

function splitCsvLine(line: string): string[] {
  const res: string[] = [];
  let cur = '';
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (quoted) {
      if (ch === '"' && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else if (ch === '"') {
        quoted = false;
      } else {
        cur += ch;
      }
    } else {
      if (ch === ',') {
        res.push(cur);
        cur = '';
      } else if (ch === '"') {
        quoted = true;
      } else {
        cur += ch;
      }
    }
  }
  res.push(cur);
  return res;
}

function fmtRange(d: Date, start: string, end?: string) {
  const dStr = d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  return end ? `${dStr} • ${start} – ${end}` : `${dStr} • ${start}`;
}

export default function FreeCutsPage() {
  const [rows, setRows] = useState<EventRow[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    fetch(SHEET_CSV_URL, { cache: 'no-store' })
      .then((r) => (r.ok ? r.text() : Promise.reject(r.statusText)))
      .then((text) => {
        if (!alive) return;
        setRows(parseCsv(text));
      })
      .catch(() => alive && setErr('Unable to load schedule.'));
    return () => {
      alive = false;
    };
  }, []);

  const upcoming = useMemo(() => {
    const now = new Date();
    return rows
      .map((r) => ({ ...r, when: new Date(r.date) }))
      .filter((r) => !isNaN(r.when.getTime()) && r.when >= new Date(now.toDateString()))
      .sort((a, b) => +a.when - +b.when);
  }, [rows]);

  const next = upcoming[0];

  return (
    <main className="min-h-[80svh] bg-ink text-bone">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold text-copper mb-2">Free Cuts</h1>
        <p className="text-white/60 mb-8">
          Weekly free haircut. Updated live from our Google Sheet.
        </p>

        {err ? <div className="text-red-400 mb-6">{err}</div> : null}

        {/* Next event card */}
        <section className="mb-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Next Event</h2>
            {next ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{fmtRange(next.when, next.start, next.end)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{next.location}</span>
                </div>
                {next.notes ? (
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span className="text-white/70">{next.notes}</span>
                  </div>
                ) : null}
              </div>
            ) : (
              <p className="text-white/60">No upcoming event listed.</p>
            )}
          </div>
        </section>

        {/* Full list */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Schedule</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcoming.map((e, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-medium mb-1">{fmtRange(e.when, e.start, e.end)}</div>
                <div className="text-white/80">{e.location}</div>
                {e.notes ? <div className="text-white/60 mt-1">{e.notes}</div> : null}
              </div>
            ))}
          </div>
        </section>

        {/* Manage via Google Sheets. Columns required: Date, Start, End, Location, Notes. */}
        <section className="mt-10 text-xs text-white/50">
          
        </section>
      </div>
    </main>
  );
}
