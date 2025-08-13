import React from 'react'
import { Link } from 'react-router-dom'

export function Checkout() {
  const [submitting, setSubmitting] = React.useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Demo submit
    setTimeout(() => {
      setSubmitting(false)
      alert('Demo complete — plug in Stripe/Tax/Shipping to go live.')
    }, 700)
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
      <p className="text-gray-700 mt-2">
        Demo Mode — No real payments. Replace this flow with your Stripe Payment Element.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <section className="rounded-xl border border-gray-200 p-4 bg-white">
            <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="rounded-md border border-gray-300 px-3 py-2" placeholder="First name" />
              <input className="rounded-md border border-gray-300 px-3 py-2" placeholder="Last name" />
              <input className="md:col-span-2 rounded-md border border-gray-300 px-3 py-2" placeholder="Email" type="email" />
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 p-4 bg-white">
            <h2 className="text-lg font-semibold text-gray-900">Shipping</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="md:col-span-2 rounded-md border border-gray-300 px-3 py-2" placeholder="Address" />
              <input className="rounded-md border border-gray-300 px-3 py-2" placeholder="City" />
              <input className="rounded-md border border-gray-300 px-3 py-2" placeholder="State" />
              <input className="rounded-md border border-gray-300 px-3 py-2" placeholder="ZIP / Postal code" />
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 p-4 bg-white">
            <h2 className="text-lg font-semibold text-gray-900">Payment</h2>
            <p className="mt-2 text-sm text-gray-600">
              Replace this section with Stripe’s Payment Element to accept real payments.
            </p>
            <div className="mt-3 rounded-md border border-dashed border-gray-300 p-4 text-sm text-gray-600">
              Demo placeholder — Card form goes here.
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-xl border border-gray-200 p-4 bg-white">
          <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Items</span>
              <span className="text-gray-900">$0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-900">$0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="text-gray-900">$0.00</span>
            </div>
            <div className="border-t border-gray-200 pt-2 flex justify-between font-medium">
              <span className="text-gray-900">Total</span>
              <span className="text-gray-900">$0.00</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-4 w-full rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-black transition disabled:opacity-60"
          >
            {submitting ? 'Processing…' : 'Try It in Your Store'}
          </button>

          <Link
            to="/cart"
            className="mt-3 block text-center text-sm text-gray-700 hover:text-gray-900"
          >
            Back to Cart
          </Link>

          <p className="mt-3 text-xs text-gray-600">
            This flow is a demo. No charges will be made.
          </p>
        </aside>
      </form>
    </div>
  )
}

export default Checkout
