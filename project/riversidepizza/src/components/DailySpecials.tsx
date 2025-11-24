import { useEffect, useState } from "react";
import { Flame, Gift, Loader2 } from "lucide-react";

type Deal = {
  type: string; // "special" or "combo"
  name: string;
  description: string;
  price: string;
  badge?: string;
  highlight?: boolean;
};

// Original deals used as fallback if the sheet cannot be loaded
const fallbackDeals: Deal[] = [
  {
    type: "special",
    name: "Pizza Monday",
    description: "Large 1-Topping Pizza",
    price: "$12.99",
    badge: "Monday",
    highlight: true,
  },
  {
    type: "special",
    name: "Two-for-Tuesday",
    description: "Buy One Sub, Get One 50% Off (Mix & Match)",
    price: "Mix & Match",
    badge: "Tuesday",
    highlight: true,
  },
  {
    type: "special",
    name: "Wings Day",
    description: "50 Wings + 2 Large Pizzas",
    price: "$49.99",
    badge: "Wednesday",
    highlight: false,
  },
  {
    type: "special",
    name: "Family Feast",
    description: "2 Large Pizzas + Garlic Knots + 2L Soda",
    price: "$34.99",
    badge: "Thursday",
    highlight: false,
  },
  {
    type: "special",
    name: "Weekend Kickoff",
    description: "Large Specialty Pizza",
    price: "$16.99",
    badge: "Friday",
    highlight: true,
  },
  {
    type: "combo",
    name: "Quick Lunch Combo",
    description: "2 Slices + Can of Soda",
    price: "$6.99",
    badge: "11am–3pm",
    highlight: true,
  },
  {
    type: "combo",
    name: "Party Package",
    description: "3 Large Pizzas + 30 Wings + 2L Soda",
    price: "$59.99",
    badge: "Anytime",
    highlight: true,
  },
  {
    type: "combo",
    name: "Game Day Special",
    description: "5 Large Pizzas + 50 Wings + Caesar Salad",
    price: "$89.99",
    badge: "Weekend Only",
    highlight: true,
  },
];

// Hard-coded Google Sheet CSV URL (swap to env/remove for production)
function dealsCsvUrl(): string {
  return "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6CIAxRwVbGFhvtQE1KuYbk0mdXEGtKd4S3dE1gPriePf-GazobvChPL4f6qn-VSdO0s9y1XJGliRG/pub?gid=0&single=true&output=csv";
}

// Simple CSV parser assuming: no commas inside fields, header row present
function parseCsvToDeals(text: string): Deal[] {
  const trimmed = text.trim();
  if (!trimmed) return [];

  const lines = trimmed.split("\n");
  if (lines.length < 2) return [];

  const headerLine = lines[0];
  const headers = headerLine.split(",").map((h) => h.trim().toLowerCase());
  const rows = lines.slice(1);

  const deals: Deal[] = rows
    .map((row) => {
      if (!row.trim()) return null;
      const cols = row.split(",").map((c) => c.trim());
      const obj: Record<string, string> = {};

      headers.forEach((h, i) => {
        obj[h] = cols[i] ?? "";
      });

      const type = (obj["type"] || "").toLowerCase();
      const name = obj["name"] || "";
      if (!type || !name) return null;

      return {
        type,
        name,
        description: obj["description"] || "",
        price: obj["price"] || "",
        badge: obj["badge"] || "",
        highlight:
          (obj["highlight"] || "").toLowerCase() === "true" ||
          obj["highlight"] === "TRUE",
      } as Deal;
    })
    .filter((d): d is Deal => d !== null);

  return deals;
}

const specialGradients = [
  "from-red-500 to-orange-500",
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-lime-500",
  "from-purple-500 to-pink-500",
  "from-amber-500 to-red-500",
];

export default function DailySpecials() {
  const [deals, setDeals] = useState<Deal[]>(fallbackDeals);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = dealsCsvUrl();
    setLoading(true);
    setError(null);

    fetch(url)
      .then(async (res) => {
        if (!res.ok) throw new Error(`Failed to load deals CSV (${res.status})`);
        const text = await res.text();
        const parsed = parseCsvToDeals(text);
        if (parsed.length) {
          setDeals(parsed);
        } else {
          setDeals(fallbackDeals);
        }
      })
      .catch(() => {
        setDeals(fallbackDeals);
        setError("Showing house specials (sheet unavailable).");
      })
      .finally(() => setLoading(false));
  }, []);

  const specials = deals.filter(
    (d) => d.type && d.type.toLowerCase() === "special"
  );
  const combos = deals.filter(
    (d) => d.type && d.type.toLowerCase() === "combo"
  );

  return (
    <section
      id="specials"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Daily Specials & Combo Deals
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            More food, more flavor, better value. Updated from a live Google
            Sheet so the kitchen can change deals any time.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 text-sm text-gray-400">
            {loading && (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Refreshing deals
              </span>
            )}
            {!loading && error && (
              <span className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-300 px-3 py-1 rounded-full border border-yellow-500/40">
                {error}
              </span>
            )}
          </div>
        </div>

        {/* Specials (no scroll, all visible) */}
        {specials.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">
              This Week&apos;s Specials
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {specials.map((s, idx) => {
                const gradient =
                  specialGradients[idx % specialGradients.length];
                return (
                  <div
                    key={`special-${s.name}-${idx}`}
                    className={`relative rounded-2xl p-4 md:p-5 bg-gradient-to-br ${gradient} shadow-xl flex flex-col justify-between`}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_55%)] pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wide bg-black/30 px-2 py-1 rounded-full border border-white/20">
                          {s.badge || "Special"}
                        </span>
                        <Flame className="w-4 h-4 text-yellow-200" />
                      </div>
                      <h4 className="text-lg font-extrabold">{s.name}</h4>
                      <p className="text-sm text-white/90 mt-1">
                        {s.description}
                      </p>
                    </div>
                    <div className="relative z-10 mt-4">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xl font-extrabold text-yellow-200">
                          {s.price}
                        </span>
                        <span className="text-xs text-white/80">
                          Dine-in · Carryout
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Combo deals (no scroll, all visible) */}
        {combos.length > 0 && (
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              Combo Deals for Crews
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {combos.map((combo, idx) => (
                <div
                  key={`combo-${combo.name}-${idx}`}
                  className="relative rounded-3xl p-6 md:p-8 bg-gradient-to-br from-red-800 to-red-600 shadow-2xl flex flex-col justify-between"
                >
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_60%)] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Gift className="w-5 h-5 text-yellow-300" />
                        <span className="text-xs font-semibold uppercase tracking-wide text-yellow-200/90">
                          Combo
                        </span>
                      </div>
                      {combo.badge && (
                        <span className="text-[11px] font-semibold bg-black/30 border border-yellow-300/50 text-yellow-100 px-2 py-1 rounded-full">
                          {combo.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-2xl font-extrabold mb-2">
                      {combo.name}
                    </h4>
                    <p className="text-sm md:text-base text-red-50 mb-4">
                      {combo.description}
                    </p>
                  </div>
                  <div className="relative z-10 mt-4">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-3xl font-extrabold text-yellow-300">
                        {combo.price}
                      </span>
                      <span className="text-xs text-red-100">
                        Perfect for families, teams, and parties.
                      </span>
                    </div>
                    <button className="bg-white text-red-700 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors w-full">
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
