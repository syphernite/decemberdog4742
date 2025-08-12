/**
 * Contact.tsx
 *
 * New capabilities:
 * - Reads ?plan=<slug>&step=2&lock=1 using useSearchParams.
 * - currentStep defaults to 1 but initializes from valid "step" query (1..3). Lands on step 2 when step=2.
 * - form.plan is a controlled <select> bound to a label value (e.g., "VIP Flex") resolved from semantic slugs.
 * - Optional lock: toggle LOCK_PLAN_FROM_QUERY to true to force-lock globally, or pass ?lock=1 to lock per-visit.
 * - Persists preselected plan to localStorage("contact.plan") on mount; loads it as a fallback on refresh.
 * - Shows an accent chip above the select: "Chosen plan: VIP Flex" when preselected.
 * - Submit payload includes both planLabel and planSlug for clean CRM ingestion.
 *
 * Slug-to-Label resolution:
 *  startup -> "Startup"
 *  basic -> "Basic"
 *  pro -> "Pro"
 *  elite -> "Elite Build"
 *  business -> "Business"
 *  business-pro -> "Business Pro"
 *  ecom-starter -> "Ecommerce Starter"
 *  vip-flex -> "VIP Flex"
 *  vip-plus -> "VIP Flex" (alias)
 *  custom -> "Custom"
 *  starter -> "Startup" (alias)
 *
 * Updates in this file:
 * - Swapped Step 1 and Step 2 so business details come first, identity second.
 * - Made "# of Pages Desired" required (min 1) and gate progress on every step.
 */

import React, { useEffect, useMemo, useState, ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

type Plan =
  | "Startup"
  | "Basic"
  | "Pro"
  | "Elite Build"
  | "Business"
  | "Business Pro"
  | "Ecommerce Starter"
  | "VIP Flex"
  | "Custom"
  | "";

const ALL_PLANS: Exclude<Plan, "">[] = [
  "Startup",
  "Basic",
  "Pro",
  "Elite Build",
  "Business",
  "Business Pro",
  "Ecommerce Starter",
  "VIP Flex",
  "Custom",
];

// Semantic slug -> label
const SLUG_TO_LABEL: Record<string, Exclude<Plan, "">> = {
  startup: "Startup",
  starter: "Startup", // alias
  basic: "Basic",
  pro: "Pro",
  elite: "Elite Build",
  business: "Business",
  "business-pro": "Business Pro",
  "ecom-starter": "Ecommerce Starter",
  "vip-flex": "VIP Flex",
  "vip-plus": "VIP Flex", // alias
  custom: "Custom",
};

// Label -> slug (for outbound payloads)
const LABEL_TO_SLUG = Object.fromEntries(
  Object.entries(SLUG_TO_LABEL).map(([slug, label]) => [label, slug])
) as Record<Exclude<Plan, "">, string>;

// Lock behavior: can be forced here, or enabled per-visit with ?lock=1
const LOCK_PLAN_FROM_QUERY = false;

const INPUT =
  "w-full rounded-xl px-4 py-3 text-[15px] leading-tight text-white placeholder-white/70 \
   bg-[#0b0d14]/80 backdrop-blur-md border border-transparent \
   [background:linear-gradient(#0b0d14,#0b0d14)_padding-box,linear-gradient(120deg,#3b82f6,#8b5cf6)_border-box] \
   shadow-[inset_0_1px_0_rgba(255,255,255,.04)] \
   focus:[background:linear-gradient(#0b0d14,#0b0d14)_padding-box,linear-gradient(120deg,#10b981,#22d3ee)_border-box] \
   focus:shadow-[0_0_0_3px_rgba(34,211,238,.15),0_8px_30px_rgba(16,185,129,.18)] \
   outline-none transition";

/* ================= Embedded Stepper (now accepts initialIndex) ================= */
type StepperProps = {
  children: ReactNode[];
  onFinish: () => void;
  getNextDisabled?: (index: number) => boolean;
  nextLabel?: string;
  backLabel?: string;
  initialIndex?: number; // new: starting step index (0-based)
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

  // Resolve plan label from query or localStorage
  const planFromQuery = useMemo<Plan | "">(() => {
    const rawPlan = (search.get("plan") || search.get("pricing") || search.get("option") || search.get("tier") || "").toLowerCase().trim();
    const guess = SLUG_TO_LABEL[rawPlan];
    if (guess) return guess;
    // Loose matching for non-slug inputs
    if (!rawPlan) return "";
    const direct = ALL_PLANS.find((p) => p.toLowerCase() === rawPlan);
    if (direct) return direct;
    if (rawPlan.startsWith("pro")) return "Pro";
    if (rawPlan.startsWith("basic") || rawPlan === "starter") return "Startup";
    if (rawPlan.startsWith("custom")) return "Custom";
    if (rawPlan.includes("ecom")) return "Ecommerce Starter";
    if (rawPlan.includes("vip")) return "VIP Flex";
    if (rawPlan.includes("elite")) return "Elite Build";
    if (rawPlan.includes("business pro")) return "Business Pro";
    if (rawPlan.startsWith("business")) return "Business";
    return "";
  }, [search]);

  const lockFromQuery = (search.get("lock") || "") === "1";
  const stepFromQuery = Math.max(1, Math.min(3, Number(search.get("step") || "1") || 1));
  const initialIndex = stepFromQuery - 1;

  const [formData, setFormData] = useState(initialForm);
  const [plan, setPlan] = useState<Plan>("");
  const [preselectedLabel, setPreselectedLabel] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // On mount, prefer query plan; if absent, load from localStorage
  useEffect(() => {
    const q = planFromQuery;
    if (q && ALL_PLANS.includes(q as Exclude<Plan, "">)) {
      setPlan(q);
      setPreselectedLabel(q);
      try {
        localStorage.setItem("contact.plan", q);
      } catch {}
    } else {
      try {
        const stored = localStorage.getItem("contact.plan") || "";
        if (stored && ALL_PLANS.includes(stored as Exclude<Plan, "">)) {
          setPlan(stored as Plan);
          setPreselectedLabel(stored);
        }
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist whenever user changes to a valid plan
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

  const disabledSelect = !!planFromQuery && (LOCK_PLAN_FROM_QUERY || lockFromQuery);

  const handleSubmit = async () => {
    // Final guard to ensure required fields satisfied regardless of step flow
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
    } catch (e: any) {
      setErr(e?.message || "Submit failed");
    } finally {
      setBusy(false);
    }
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
            // Enforce pages on all steps, identity on step 2, message on step 3
            if (i === 0) return pagesInvalid;
            if (i === 1) return identityInvalid || pagesInvalid;
            if (i === 2) return messageInvalid || pagesInvalid;
            return false;
          }}
          nextLabel="Next"
          backLabel="Previous"
        >
          {/* Step 1 (was Step 2) Business, Industry, Pages (required), Plan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field label="Business / Name">
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
              {preselectedLabel && (
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  Chosen plan: {preselectedLabel}
                </div>
              )}
              <Field label="Pricing Option">
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value as Plan)}
                  className={INPUT}
                  disabled={disabledSelect && !!plan}
                >
                  <option value="">Select a plan</option>
                  {ALL_PLANS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
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

          {/* Step 2 (was Step 1) Name and Email */}
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

          {/* Step 3 Project Details */}
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
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
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
