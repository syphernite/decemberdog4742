import React, { useMemo, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const STRIPE_PK = (import.meta as any)?.env?.VITE_STRIPE_PUBLIC_KEY as string | undefined;

function MissingStripeBanner() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Payments Temporarily Unavailable</h1>
        <p className="text-muted-foreground">
          No Stripe public key found. The rest of the dashboard still works, but checkout is disabled.
        </p>
        <div className="rounded-md bg-amber-50/80 dark:bg-amber-950/20 border border-amber-300/60 px-4 py-3 text-amber-800 dark:text-amber-200 text-sm text-left">
          <p className="font-medium mb-1">Enable in production:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Add <code>project/dash/.env.production</code> with
              <br />
              <code>VITE_STRIPE_PUBLIC_KEY=pk_live_xxx</code>
            </li>
            <li>Commit and push. Vite will read it during the CI build.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function BasicCheckoutForm() {
  const [email, setEmail] = useState("");
  return (
    <form
      className="max-w-md mx-auto p-6 rounded-2xl border bg-background/60 shadow-sm space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Stripe disabled in this build — set VITE_STRIPE_PUBLIC_KEY to enable.");
      }}
    >
      <h2 className="text-xl font-semibold">Checkout</h2>
      <label className="block text-sm font-medium">
        Email
        <input
          className="mt-1 w-full rounded-md border px-3 py-2 bg-background"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-md px-4 py-2 bg-primary text-primary-foreground hover:opacity-90"
      >
        Pay
      </button>
    </form>
  );
}

export default function CheckoutPage() {
  const stripePromise = useMemo(() => {
    return STRIPE_PK ? loadStripe(STRIPE_PK) : null;
  }, []);

  if (!STRIPE_PK) {
    return (
      <div className="px-6 py-12">
        <MissingStripeBanner />
        <div className="mt-8">
          <BasicCheckoutForm />
        </div>
      </div>
    );
  }

  if (!stripePromise) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-sm text-muted-foreground">Loading payments…</div>
      </div>
    );
  }

  return (
    <div className="px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Elements stripe={stripePromise}>
          {/* Replace with your real Elements form when ready */}
          <BasicCheckoutForm />
        </Elements>
      </div>
    </div>
  );
}
