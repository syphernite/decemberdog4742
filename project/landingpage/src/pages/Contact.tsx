/**
 * Contact.tsx
 *
 * Key behaviors (kept):
 * - Reads ?plan=<slug>&step=2&lock=1 using useSearchParams.
 * - currentStep defaults to 1 but initializes from valid "step" query (1..3).
 * - Only shows the "Chosen plan" chip if the URL includes an exact known plan slug.
 * - Normal visits (no plan in URL) default the select to the placeholder, no chip.
 * - form.plan is a controlled <select> bound to a label value resolved from exact semantic slugs only.
 * - Optional lock: toggle LOCK_PLAN_FROM_QUERY or pass ?lock=1 to lock per-visit.
 * - Persists user-chosen plan to localStorage after they change it; does NOT preload from localStorage on normal visits.
 * - # of Pages is required (min 1). Step order: Business/Pages first, Identity second, Message third.
 *
 * New:
 * - When the user clicks "Lost? View Pricing Details", we save a short-lived cookie "b4y_contact_draft"
 *   containing { formData, plan, ts }. On return within 30 minutes, we restore those values and then clear the cookie.
 *   This avoids interfering with normal fresh visits.
 *
 * Updated exact slug-to-label resolution to match new pricing:
 *  monthly:
 *    low-orbit      -> "Low Orbit"
 *    deep-space     -> "Deep Space"
 *    interstellar   -> "Interstellar"
 *    space-pirate   -> "Space Pirate"
 *    supernova      -> "Supernova"
 *  one-time:
 *    space-traveler -> "Space Traveler"
 *    orbital-nomad  -> "Orbital Nomad"
 *    cosmic-titan   -> "Cosmic Titan"
 *  custom:
 *    custom         -> "Custom"
 */

import React, { useEffect, useMemo, useState, ReactNode } from "react";
import { useSearchParams, Link } from "react-router-dom";

/* ================= Plans ================= */

type Plan =
  | "Low Orbit"
  | "Deep Space"
  | "Interstellar"
  | "Space Pirate"
  | "Supernova"
  | "Space Traveler"
  | "Orbital Nomad"
  | "Cosmic Titan"
  | "Custom"
  | "";

const MONTHLY_PLANS: Exclude<Plan, "">[] = [
  "Low Orbit",
  "Deep Space",
  "Interstellar",
  "Space Pirate",
  "Supernova",
];

const ONETIME_PLANS: Exclude<Plan, "">[] = [
  "Space Traveler",
  "Orbital Nomad",
  "Cosmic Titan",
];

const ALL_PLANS: Exclude<Plan, "">[] = [
  ...MONTHLY_PLANS,
  ...ONETIME_PLANS,
  "Custom",
];

// Exact semantic slug -> label
const SLUG_TO_LABEL: Record<string, Exclude<Plan, "">> = {
  // monthly
  "low-orbit": "Low Orbit",
  "deep-space": "Deep Space",
  interstellar: "Interstellar",
  "space-pirate": "Space Pirate",
  supernova: "Supernova",
  // one-time
  "space-traveler": "Space Traveler",
  "orbital-nomad": "Orbital Nomad",
  "cosmic-titan": "Cosmic Titan",
  // custom
  custom: "Custom",
};

// Label -> slug
const LABEL_TO_SLUG = Object.fromEntries(
  Object.entries(SLUG_TO_LABEL).map(([slug, label]) => [label, slug])
) as Record<Exclude<Plan, "">, string>;

// Lock behavior
const LOCK_PLAN_FROM_QUERY = false;

/* ================= UI tokens ================= */

const INPUT =
  "w-full rounded-xl px-4 py-3 text-[15px] leading-tight text-white placeholder-white/70 \
   bg-[#0b0d14]/80 backdrop-blur-md border border-transparent \
   [background:linear-gradient(#0b0d14,#0b0d14)_padding-box,linear-gradient(120deg,#3b82f6,#8b5cf6)_border-box] \
   shadow-[inset_0_1px_0_rgba(255,255,255,.04)] \
   focus:[background:linear-gradient(#0b0d14,#0b0d14)_padding-box,linear-gradient(120deg,#10b981,#22d3ee)_border-box] \
   focus:shadow-[0_0_0_3px_rgba(34,211,238,.15),0_8px_30px_rgba(16,185,129,.18)] \
   outline-none transition";

/* ================= Cookie helpers ================= */

const DRAFT_COOKIE = "b4y_contact_draft";
const DRAFT_TTL_MS = 30 * 60 * 1000; // 30 minutes

function setDraftCookie(payload: any) {
  try {
    const encoded = encodeURIComponent(btoa(JSON.stringify(payload)));
    document.cookie = `${DRAFT_COOKIE}=${encoded}; Max-Age=${Math.floor(
      DRAFT_TTL_MS / 1000
    )}; Path=/; SameSite=Lax`;
  } catch {}
}

function getDraftCookie(): any | null {
  try {
    const m = document.cookie.match(
      new RegExp("(^| )" + DRAFT_COOKIE + "=([^;]+)")
    );
    if (!m) return null;
    const decoded = JSON.parse(atob(decodeURIComponent(m[2])));
    return decoded;
  } catch {
    return null;
  }
}

function clearDraftCookie() {
  try {
    document.cookie = `${DRAFT_COOKIE}=; Max-Age=0; Path=/; SameSite=Lax`;
  } catch {}
}

/* ================= Embedded Stepper ================= */
type StepperProps = {
  children: ReactNode[];
  onFinish: () => void;
  getNextDisabled?: (index: number) => boolean;
  nextLabel?: string;
  backLabel?: string;
  initialIndex?: number;
};
function EmbeddedStepper({
  children,
  onFinish,
  getNextDisabled,
  nextLabel = "Next",
  backLabel = "Previous",
  initialIndex = 0,
}: StepperProps) {
  const steps = React.Children.toArray(children);
  const [idx, setIdx] = useState(() => Math.min(Math.max(0, initialIndex), steps.length - 1));
  const last = idx === steps.length - 1;
  const nextDisabled = getNextDisabled ? getNextDisabled(idx) : false;

  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-6 glow-surface">
      <div className="flex items-center gap-3 mb-6">
        {steps.map((_, i) => {
          const active = i === idx;
          const complete = i < idx;
          return (
            <div key={i} className="flex items-center gap-3">
              <div
                className={[
                  "h-8 w-8 rounded-full grid place-items-center text-sm font-semibold step-dot",
                  active
                    ? "bg-violet-600 text-white is-active"
                    : complete
                    ? "bg-violet-500 text-black is-complete"
                    : "bg-zinc-800 text-zinc-300",
                ].join(" ")}
              >
                {complete ? "✓" : i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className={`h-0.5 w-10 rounded ${complete ? "bg-violet-500" : "bg-zinc-700"}`} />
              )}
            </div>
          );
        })}
      </div>

      <div className="min-h-[140px]">{steps[idx]}</div>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={() => setIdx((n) => Math.max(0, n - 1))}
          className={`px-4 py-2 rounded-lg text-white ${
            idx === 0 ? "bg-zinc-700/60 cursor-not-allowed" : "bg-zinc-700 hover:bg-zinc-600"
          }`}
          disabled={idx === 0}
        >
          {backLabel}
        </button>

        <button
          type="button"
          onClick={() => {
            if (last) onFinish();
            else setIdx((n) => Math.min(steps.length - 1, n + 1));
          }}
          disabled={nextDisabled}
          className={`px-5 py-2 rounded-full font-semibold text-white ${
            nextDisabled ? "bg-zinc-700/60 cursor-not-allowed" : "btn-glow"
          }`}
        >
          {last ? "Send" : nextLabel}
        </button>
      </div>
    </div>
  );
}
/* ================= End Embedded Stepper ================= */

const initialForm = {
  name: "",
  email: "",
  company: "",
  industry: "",
  pages: "",
  message: "",
};

const Contact: React.FC = () => {
  const [search] = useSearchParams();

  // Determine if URL carries an exact known slug
  const { exactLabelFromQuery, hasExactPlanInQuery } = useMemo(() => {
    const rawPlan = (
      search.get("plan") ||
      search.get("pricing") ||
      search.get("option") ||
      search.get("tier") ||
      ""
    )
      .toLowerCase()
      .trim();

    const exactLabel = SLUG_TO_LABEL[rawPlan];
    return {
      exactLabelFromQuery: (exactLabel as Plan) || "",
      hasExactPlanInQuery: !!exactLabel,
    };
  }, [search]);

  const lockFromQuery = (search.get("lock") || "") === "1";
  const stepFromQuery = Math.max(1, Math.min(3, Number(search.get("step") || "1") || 1));
  const initialIndex = stepFromQuery - 1;

  const [formData, setFormData] = useState(initialForm);
  const [plan, setPlan] = useState<Plan>("");
  const [showChosenChip, setShowChosenChip] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // On mount: try restoring from cookie first; otherwise use the usual URL logic.
  useEffect(() => {
    const draft = getDraftCookie();
    const now = Date.now();
    const fresh = draft && typeof draft?.ts === "number" && now - draft.ts < DRAFT_TTL_MS;

    if (fresh) {
      // Restore from draft cookie
      if (draft.formData) setFormData((prev) => ({ ...prev, ...draft.formData }));
      if (draft.plan && ALL_PLANS.includes(draft.plan)) {
        setPlan(draft.plan as Plan);
        setShowChosenChip(false);
      }
      // Clear cookie after restoring so normal visits remain unaffected
      clearDraftCookie();
    } else {
      // Fall back to URL based preselect behavior
      if (hasExactPlanInQuery && exactLabelFromQuery && ALL_PLANS.includes(exactLabelFromQuery as Exclude<Plan, "">)) {
        setPlan(exactLabelFromQuery);
        setShowChosenChip(true);
        try {
          localStorage.setItem("contact.plan", exactLabelFromQuery);
        } catch {}
      } else {
        setPlan("");
        setShowChosenChip(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist whenever user selects a valid plan
  useEffect(() => {
    if (plan && ALL_PLANS.includes(plan as Exclude<Plan, "">)) {
      try {
        localStorage.setItem("contact.plan", plan);
      } catch {}
    }
  }, [plan]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const isEmail = (v: string) => /^\S+@\S+\.\S+$/.test(v);

  // Validation flags
  const pagesInvalid =
    !(String(formData.pages ?? "").trim().length > 0) || Number(formData.pages) < 1;
  const identityInvalid = !(formData.name.trim().length > 0) || !isEmail(formData.email);
  const messageInvalid = !(formData.message.trim().length > 0);

  // Only lock if selection originated from an exact plan in the URL
  const disabledSelect = hasExactPlanInQuery && !!plan && (LOCK_PLAN_FROM_QUERY || lockFromQuery);

  const handleSubmit = async () => {
    if (pagesInvalid || identityInvalid || messageInvalid) {
      setErr("Please complete all required fields.");
      return;
    }

    if (busy) return;
    setBusy(true);
    setErr(null);
    try {
      const planLabel = plan || "Unspecified";
      const planSlug = plan ? LABEL_TO_SLUG[plan as Exclude<Plan, "">] || "" : "";
      const payload = { ...formData, plan: planLabel, planSlug };

      const r = await fetch("https://formspree.io/f/mrblknpq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error(`Submit failed ${r.status}`);
      setSubmitted(true);
      setFormData(initialForm);
      setPlan("");
      setShowChosenChip(false);
    } catch (e: any) {
      setErr(e?.message || "Submit failed");
    } finally {
      setBusy(false);
    }
  };

  // Save draft before navigating away to pricing
  const handleSaveDraftAndNavigate = () => {
    setDraftCookie({
      formData,
      plan,
      ts: Date.now(),
    });
  };

  if (submitted) {
    return (
      <section className="relative z-10 py-16 bg-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 border border-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
            <p className="text-emerald-400 text-lg font-semibold">Message sent. We will reply soon.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-16 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Tell Us About Your Project</h2>

        {err && (
          <div className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-red-200">{err}</div>
        )}

        <EmbeddedStepper
          onFinish={handleSubmit}
          initialIndex={initialIndex}
          getNextDisabled={(i) => {
            if (i === 0) return pagesInvalid;
            if (i === 1) return identityInvalid || pagesInvalid;
            if (i === 2) return messageInvalid || pagesInvalid;
            return false;
          }}
          nextLabel="Next"
          backLabel="Previous"
        >
          {/* Step 1 — Business, Industry, Pages, Plan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field label="Business Name">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className={INPUT}
                autoComplete="organization"
              />
            </Field>
            <Field label="Industry">
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                placeholder="e.g. Restaurant, Gym, Auto Shop"
                className={INPUT}
              />
            </Field>

            <Field label="# of Pages Desired *" span>
              <input
                type="number"
                name="pages"
                value={formData.pages}
                onChange={handleChange}
                placeholder="Example: 3"
                className={INPUT}
                min={1}
                required
                aria-invalid={pagesInvalid}
              />
              {pagesInvalid && (
                <p className="mt-2 text-[11px] text-red-300">Enter a value of at least 1.</p>
              )}
            </Field>

            <div className="sm:col-span-1">
              {showChosenChip && plan && (
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  Chosen plan: {plan}
                </div>
              )}
              <Field label="Pricing Option">
                <select
                  value={plan}
                  onChange={(e) => {
                    setPlan(e.target.value as Plan);
                    setShowChosenChip(false);
                  }}
                  className={INPUT}
                  disabled={disabledSelect}
                >
                  <option value="">Select a plan</option>
                  <optgroup label="Monthly">
                    {MONTHLY_PLANS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="One-time">
                    {ONETIME_PLANS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </optgroup>
                  <option value="Custom">Custom</option>
                </select>

                {/* Button to view SolarPricing details, saving a draft first */}
                <div className="mt-4">
                  <Link
                    to="/pricing"
                    onClick={handleSaveDraftAndNavigate}
                    className="inline-block px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:opacity-90 transition"
                  >
                    Lost? View Pricing Details
                  </Link>
                </div>

                {disabledSelect && !!plan && (
                  <p className="mt-2 text-[11px] text-white/60">
                    This selection is locked for this visit. Remove <span className="font-semibold">lock=1</span> from the URL to change it.
                  </p>
                )}
              </Field>
            </div>

            <p className="sm:col-span-2 text-xs text-zinc-400">
              Pages is required. Other fields on this step are optional.
            </p>
          </div>

          {/* Step 2 — Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field label="Full Name *">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={INPUT}
                autoComplete="name"
                required
                aria-invalid={!(formData.name.trim().length > 0)}
              />
            </Field>
            <Field label="Email Address *">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={INPUT}
                autoComplete="email"
                required
                aria-invalid={!isEmail(formData.email)}
              />
            </Field>
            <p className="sm:col-span-2 text-xs text-zinc-400">
              Both name and email are required to continue.
            </p>
          </div>

          {/* Step 3 — Project Details */}
          <div className="grid grid-cols-1 gap-6">
            <Field label="Project Details *">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                className={INPUT}
                required
                aria-invalid={messageInvalid}
              />
            </Field>
          </div>
        </EmbeddedStepper>

        {busy && (
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-zinc-8 00">
            <div className="h-full w-1/2 animate-pulse bg-emerald-500" />
          </div>
        )}
      </div>

      <style>{styles}</style>
    </section>
  );
};

function Field({
  label,
  span,
  children,
}: {
  label: string;
  span?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={span ? "flex flex-col sm:col-span-2" : "flex flex-col"}>
      <label className="text-sm font-medium text-slate-200 mb-1">{label}</label>
      {children}
    </div>
  );
}

const styles = `
/* make native dropdown legible */
select.input, select, option{
  color: #fff;
  background-color: #0b0d14;
}

/* button glow + stepper visuals */
.btn-glow{
  background-image: linear-gradient(90deg,#7c3aed,#4f46e5);
  box-shadow: 0 0 16px rgba(124,58,237,.35);
  transition: box-shadow .25s, transform .15s;
}
.btn-glow:hover{ box-shadow: 0 0 24px rgba(124,58,237,.5); transform: translateY(-1px); }

.glow-surface{
  box-shadow: 0 0 0 1px rgba(255,255,255,.06), 0 0 24px rgba(124,58,237,.12) inset;
  transition: box-shadow .25s;
}
.glow-surface:hover{
  box-shadow: 0 0 0 1px rgba(255,255,255,.08), 0 0 28px rgba(124,58,237,.18) inset;
}

.step-dot{
  box-shadow: 0 0 0 1px rgba(255,255,255,.06), 0 2px 8px rgba(0,0,0,.35);
  transition: box-shadow .25s, transform .15s;
}
.step-dot.is-active{
  box-shadow: 0 0 12px rgba(124,58,237,.55), 0 0 0 1px rgba(124,58,237,.9);
  animation: glowPulse .9s ease-out 1;
}
.step-dot.is-complete{
  box-shadow: 0 0 8px rgba(124,58,237,.35);
}

@keyframes glowPulse{
  0% { box-shadow: 0 0 0 0 rgba(16,185,129,.0), 0 0 0 rgba(16,185,129,.0); }
  45% { box-shadow: 0 0 0 6px rgba(16,185,129,.12), 0 0 22px rgba(16,185,129,.35); }
  100% { box-shadow: 0 0 0 0 rgba(16,185,129,.0), 0 0 16px rgba(16,185,129,.25); }
}
`;

export default Contact;
