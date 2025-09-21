import React, { useState } from "react";

/**
 * UniversalDemoCTA (black & white)
 * - Floating "Like this demo?" button
 * - Modal with:
 *    - businessName (required)
 *    - phone (required)
 *    - changes (optional)
 * - Posts to Formspree
 *
 * Usage:
 *   <UniversalDemoCTA />
 * Place once in a global layout so it appears on all routes.
 *
 * Default endpoint: https://formspree.io/f/myzngevq
 * Override via prop: <UniversalDemoCTA endpoint="https://formspree.io/f/XXXXXXX" />
 */
type Props = { endpoint?: string };

export default function UniversalDemoCTA({
  endpoint = "https://formspree.io/f/myzngevq",
}: Props) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [err, setErr] = useState<string | null>(null);

  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [changes, setChanges] = useState("");

  function validatePhone(v: string) {
    const digits = v.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);

    if (!businessName.trim()) {
      setErr("Business name is required.");
      return;
    }
    if (!validatePhone(phone)) {
      setErr("Enter a valid phone number.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          businessName,
          phone,
          changes: changes || "(no requested changes)",
          source: "universal-demo-cta",
        }),
      });
      if (res.ok) {
        setOk(true);
        setBusinessName("");
        setPhone("");
        setChanges("");
      } else {
        const txt = await res.text();
        setOk(false);
        setErr(`Submit failed. ${txt || ""}`.trim());
      }
    } catch (e: any) {
      setOk(false);
      setErr(e?.message || "Network error.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Floating CTA button (black/white only) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[90] rounded-xl px-4 py-3 text-sm font-semibold shadow border border-black bg-black text-white hover:opacity-90 transition"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Like this demo?
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-4 w-full max-w-md rounded-2xl bg-white text-black border border-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-black flex items-center justify-between">
              <h2 className="text-lg font-semibold">Do you like this demo?</h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded hover:bg-black/5"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Success */}
            {ok === true ? (
              <div className="p-5 space-y-4">
                <p className="text-sm">Thanks. We will contact you shortly.</p>
                <button
                  onClick={() => {
                    setOk(null);
                    setOpen(false);
                  }}
                  className="w-full rounded-lg px-4 py-3 font-semibold bg-black text-white hover:opacity-90"
                >
                  Close
                </button>
              </div>
            ) : (
              <form className="p-5 space-y-4" onSubmit={onSubmit}>
                <div className="space-y-2">
                  <label htmlFor="businessName" className="text-sm">
                    Business name<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    className="w-full rounded-lg border border-black px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm">
                    Phone number<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(555) 123-4567"
                    className="w-full rounded-lg border border-black px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="changes" className="text-sm">
                    Any changes you want? <span className="opacity-60">(optional)</span>
                  </label>
                  <textarea
                    id="changes"
                    name="changes"
                    rows={4}
                    placeholder="Colors, photos, layout, sections, features"
                    className="w-full rounded-lg border border-black px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    value={changes}
                    onChange={(e) => setChanges(e.target.value)}
                  />
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {err && (
                  <p className="text-sm text-red-600 border border-red-600 rounded-lg px-3 py-2">
                    {err}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-lg px-4 py-3 font-semibold bg-black text-white hover:opacity-90 disabled:opacity-60"
                >
                  {submitting ? "Sending" : "Send"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
