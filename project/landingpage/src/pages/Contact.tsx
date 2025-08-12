// src/pages/Contact.tsx
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

const INPUT =
  "w-full rounded-xl px-4 py-3 text-[15px] leading-tight text-white placeholder-white/70 \
   bg-[#0b0d14]/80 backdrop-blur-md border border-transparent \
   [background:linear-gradient(#0b0d14,#0b0d14)_padding-box,linear-gradient(120deg,#3b82f6,#8b5cf6)_border-box] \
   shadow-[inset_0_1px_0_rgba(255,255,255,.04)] \
   focus:[background:linear-gradient(#0b0d14,#0b0d14)_padding-box,linear-gradient(120deg,#10b981,#22d3ee)_border-box] \
   focus:shadow-[0_0_0_3px_rgba(34,211,238,.15),0_8px_30px_rgba(16,185,129,.18)] \
   outline-none transition";

/* ================= Embedded Stepper ================= */
type StepperProps = {
  children: ReactNode[];
  onFinish: () => void;
  getNextDisabled?: (index: number) => boolean;
  nextLabel?: string;
  backLabel?: string;
};
function EmbeddedStepper({
  children,
  onFinish,
  getNextDisabled,
  nextLabel = "Next",
  backLabel = "Previous",
}: StepperProps) {
  const steps = React.Children.toArray(children);
  const [idx, setIdx] = useState(0);
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
  const [formData, setFormData] = useState(initialForm);
  const [plan, setPlan] = useState<Plan>("");
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [search] = useSearchParams();

  // Autofill plan from redirects
  useEffect(() => {
    const raw =
      search.get("plan") ||
      search.get("pricing") ||
      search.get("option") ||
      search.get("tier") ||
      "";
    const v = raw.toLowerCase();
    const match =
      ALL_PLANS.find((p) => p.toLowerCase() === v) ||
      (v.startsWith("pro") ? "Pro" : undefined) ||
      (v.startsWith("basic") || v === "starter" ? ("Basic" as Plan) : undefined) ||
      (v.startsWith("custom") ? ("Custom" as Plan) : undefined) ||
      (v.includes("ecom") ? ("Ecommerce Starter" as Plan) : undefined) ||
      (v.includes("vip") ? ("VIP Flex" as Plan) : undefined) ||
      (v.includes("elite") ? ("Elite Build" as Plan) : undefined) ||
      (v.includes("business pro") ? ("Business Pro" as Plan) : undefined) ||
      (v.startsWith("business") ? ("Business" as Plan) : undefined);
    if (match) setPlan(match);
  }, [search]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const isEmail = (v: string) => /^\S+@\S+\.\S+$/.test(v);

  const step1Invalid = !(formData.name.trim().length > 0) || !isEmail(formData.email);
  const step3Invalid = !(formData.message.trim().length > 0);

  const handleSubmit = async () => {
    if (busy) return;
    setBusy(true);
    setErr(null);
    try {
      const r = await fetch("https://formspree.io/f/mrblknpq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, plan: plan || "Unspecified" }),
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
          getNextDisabled={(i) => {
            if (i === 0) return step1Invalid;
            if (i === 1) return false;
            if (i === 2) return step3Invalid;
            return false;
          }}
          nextLabel="Next"
          backLabel="Previous"
        >
          {/* Step 1 */}
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
              />
            </Field>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field label="Business / Name">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className={INPUT}
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
            <Field label="# of Pages Desired" span>
              <input
                type="number"
                name="pages"
                value={formData.pages}
                onChange={handleChange}
                placeholder="Example: 3"
                className={INPUT}
                min={0}
              />
            </Field>

            <Field label="Pricing Option">
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value as Plan)}
                className={INPUT}
              >
                <option value="">Select a plan</option>
                {ALL_PLANS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>

            <p className="sm:col-span-2 text-xs text-zinc-400">Optional fields. Leave blank and press Next to skip.</p>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 gap-6">
            <Field label="Project Details *">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                className={INPUT}
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
