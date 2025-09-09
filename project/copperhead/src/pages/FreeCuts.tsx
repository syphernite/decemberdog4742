// src/pages/FreeCuts.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { MapPin, Calendar, Clock, AlertTriangle } from 'lucide-react';

const SHEET_CSV_URL: string | undefined = (import.meta as any).env
  .VITE_FREECUTS_CSV_URL;

type EventRow = {
  date: string;
  start: string;
  end?: string;
  location: string;
  notes?: string;
};

type ParsedRow = EventRow & { when: Date };

function stripBOM(s: string) {
  return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
}

function headerKey(raw: string) {
  // normalize: lowercase, remove spaces/punctuation
  return raw.toLowerCase().replace(/[^a-z]/g, '');
}

function parseCsv(csv: string): EventRow[] {
  const lines = stripBOM(csv).trim().split(/\r?\n/);
  if (lines.length === 0) return [];

  const headers = lines[0]
    .split(',')
    .map((h) => headerKey(h));

  // map common variants to canonical keys
  const want = {
    date: ['date', 'eventdate'],
    start: ['start', 'starttime', 'time', 'from'],
    end: ['end', 'endtime', 'to'],
    location: ['location', 'where', 'address', 'place'],
    notes: ['notes', 'note', 'details'],
  };

  const findIdx = (alts: string[]) =>
    headers.findIndex((h) => alts.includes(h));

  const idxDate = findIdx(want.date);
  const idxStart = findIdx(want.start);
  const idxEnd = findIdx(want.end);
  const idxLoc = findIdx(want.location);
  const idxNotes = findIdx(want.notes);

  const out: EventRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = splitCsvLine(lines[i]);
    const row: EventRow = {
      date: (cols[idxDate] ?? '').trim(),
      start: (cols[idxStart] ?? '').trim(),
      end: (cols[idxEnd] ?? '').trim(),
      location: (cols[idxLoc] ?? '').trim(),
      notes: (cols[idxNotes] ?? '').trim(),
    };
    if (row.date && row.start && row.location) out.push(row);
  }
  return out;
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

// Robust date parsing: ISO, US, and Google serial numbers
function parseWhen(dateStr: string): Date {
  const s = dateStr.trim();

  // Google Sheets serial number
  if (/^\d+(\.\d+)?$/.test(s)) {
    const serial = parseFloat(s);
    // Excel/Sheets epoch: 1899-12-30
    const epoch = new Date(Date.UTC(1899, 11, 30));
    const ms = serial * 86400000;
    return new Date(epoch.getTime() + ms);
  }

  // Prefer ISO first
  const iso = new Date(s);
  if (!isNaN(iso.getTime())) return iso;

  // Try US mm/dd/yyyy
  const m = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
  if (m) {
    const mm = parseInt(m[1], 10) - 1;
    const dd = parseInt(m[2], 10);
    const yyyy = parseInt(m[3].length === 2 ? '20' + m[3] : m[3], 10);
    return new Date(yyyy, mm, dd);
  }

  // Fallback invalid date
  return new Date('Invalid');
}

function fmtRange(d: Date, start: string, end?: string) {
  const dStr = d.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
  return end ? `${dStr} • ${start} – ${end}` : `${dStr} • ${start}`;
}

export default function FreeCutsPage() {
  const [rows, setRows] = useState<EventRow[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!SHEET_CSV_URL) {
      setErr('Missing VITE_FREECUTS_CSV_URL.');
      setLoading(false);
      return;
    }

    let alive = true;
    const url = SHEET_CSV_URL + (SHEET_CSV_URL.includes('?') ? '&' : '?') + 'cb=' + Date.now();

    fetch(url, { cache: 'no-store', mode: 'cors' })
      .then((r) => (r.ok ? r.text() : Promise.reject(r.status + ' ' + r.statusText)))
      .then((text) => {
        if (!alive) return;
        const parsed = parseCsv(text);
        if (parsed.length === 0) {
          setErr('Sheet loaded but no rows parsed. Check headers and date formats.');
        }
        setRows(parsed);
      })
      .catch((e) => {
        if (!alive) return;
        setErr('Unable to load schedule. ' + String(e ?? ''));
      })
      .finally(() => alive && setLoading(false));

    return () => {
      alive = false;
    };
  }, []);

  const upcoming: ParsedRow[] = useMemo(() => {
    const today = new Date(new Date().toDateString()); // midnight today
    return rows
      .map((r) => ({ ...r, when: parseWhen(r.date) }))
      .filter((r) => !isNaN(r.when.getTime()) && r.when >= today)
      .sort((a, b) => +a.when - +b.when);
  }, [rows]);

  const next = upcoming[0];

  return (
    <main className="min-h-[80svh] bg-ink text-bone">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-2">
          <span className="copper-text">Free Cuts</span>
        </h1>
        <p className="text-white/60 mb-8">Weekly free haircut. Updated from Google Sheets.</p>

        {loading ? (
          <div className="text-white/70 mb-6">Loading…</div>
        ) : err ? (
          <div className="mb-6 flex items-start gap-2 text-amber-300">
            <AlertTriangle size={18} className="mt-0.5" />
            <div>
              {err}
              {import.meta.env.DEV && SHEET_CSV_URL ? (
                <div className="mt-2 text-xs text-white/50 break-all">
                  Using URL: <code>{SHEET_CSV_URL}</code>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        <section className="mb-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">
              <span className="copper-text">Next Event</span>
            </h2>
            {next ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{fmtRange(next.when, next.start, next.end)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span className="copper-text">{next.location}</span>
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

        <section>
          <h3 className="text-lg font-semibold mb-3">Schedule</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcoming.map((e, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-medium mb-1">{fmtRange(e.when, e.start, e.end)}</div>
                <div className="text-white/80">
                  <span className="copper-text">{e.location}</span>
                </div>
                {e.notes ? <div className="text-white/60 mt-1">{e.notes}</div> : null}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 text-xs text-white/50">
        </section>
      </div>
    </main>
  );
}
