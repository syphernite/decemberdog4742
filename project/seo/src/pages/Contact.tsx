// src/pages/Contact.tsx
import React, { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { tokens } from "../styles/tokens";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mrblknpq", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-white">
      {/* Scale whole page down 10% and nudge up ~16px (cursor height) */}
      <div className="transform scale-[0.9] -translate-y-4 origin-top">
        <div className={`${tokens.container} max-w-xl pt-8 pb-16`}>
          {!submitted && (
            <div className="text-center mb-6">
              <Mail className="mx-auto h-7 w-7 text-emerald-600" />
              <h1 className="mt-2 text-xl md:text-2xl font-semibold text-neutral-900">
                Contact Us
              </h1>
              <p className="mt-1 text-sm text-neutral-600">We’ll get back to you shortly.</p>
            </div>
          )}

          {submitted ? (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
              <h2 className="mt-2 text-lg font-medium text-emerald-900">Message sent</h2>
              <p className="mt-1 text-sm text-emerald-800">Thanks. We’ll reply soon.</p>
              <button
                type="button"
                className={`mt-4 ${tokens.button.primary}`}
                onClick={() => setSubmitted(false)}
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-300"
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button type="submit" className={`${tokens.button.primary} w-full`} disabled={submitting}>
                {submitting ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
