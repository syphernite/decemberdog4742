import React, { useState } from "react";

/**
 * UniversalDemoCTA — SOLID color version (better floating contrast)
 *
 * What it does:
 *  - Floating “Like this demo?” button (bottom-right)
 *  - Modal collects:
 *      * businessName (required)
 *      * phone (required)
 *      * changes (optional)
 *  - Posts to Formspree
 *
 * How to use:
 *   Place <UniversalDemoCTA /> once near the root (e.g., in App)
 *
 * Notes:
 *  - Change FORM_ENDPOINT to your Formspree endpoint if needed.
 */
const FORM_ENDPOINT = "https://formspree.io/f/myzngevq"; // replace if you have a different endpoint

export default function UniversalDemoCTA() {
  const [open, setOpen] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [changes, setChanges] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErr(null);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
        setErr(`Submit failed: ${txt?.slice(0, 180) || "Unknown error"}`);
      }
    } catch (e: any) {
      setOk(false);
      setErr(e?.message || "Network error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button — SOLID pill */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-4 z-[95] rounded-full bg-neutral-900 text-white px-4 py-3 text-sm font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/40"
      >
        Like this demo?
      </button>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
        >
          {/* Dimmer (no blur; keep it crisp behind solid modal) */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />

          {/* Panel — SOLID background for strong contrast */}
          <div className="relative mx-3 my-4 sm:my-0 w-full max-w-lg rounded-2xl bg-neutral-900 text-white border border-black/20 shadow-2xl">
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-lg font-bold">Tell us about your business</h3>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1 text-white/70 hover:text-white hover:bg-white/10"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="p-5">
              {ok ? (
                <div className="text-center">
                  <p className="text-base">Thanks! We’ll text you shortly.</p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-4 inline-flex px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-white/90"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-4">
                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className="block text-sm mb-1 text-white/80">
                      Business name
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full rounded-lg px-4 py-3 bg-white text-black placeholder-black/40 border-0 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="e.g., Timeout Tavern"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm mb-1 text-white/80">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-lg px-4 py-3 bg-white text-black placeholder-black/40 border-0 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="(555) 555-5555"
                    />
                  </div>

                  {/* Changes */}
                  <div>
                    <label htmlFor="changes" className="block text-sm mb-1 text-white/80">
                      Requested tweaks (optional)
                    </label>
                    <textarea
                      id="changes"
                      name="changes"
                      rows={4}
                      value={changes}
                      onChange={(e) => setChanges(e.target.value)}
                      className="w-full rounded-lg px-4 py-3 bg-white text-black placeholder-black/40 border-0 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="Anything you’d like different on this demo?"
                    />
                  </div>

                  {err ? (
                    <div className="text-sm text-red-300 bg-red-900/30 border border-red-400/30 rounded-lg px-3 py-2">
                      {err}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-lg px-4 py-3 font-semibold bg-black text-white hover:bg-white/90 disabled:opacity-60"
                  >
                    {submitting ? "Sending" : "Send"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
