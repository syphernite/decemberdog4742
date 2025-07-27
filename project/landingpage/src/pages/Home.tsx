import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Built4You</h1>
          <nav className="space-x-6 hidden md:block">
            <a href='' className="hover:underline">Pricing</a>
            <a href='' className="hover:underline">Why Choose Us</a>
            <a href='' className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Custom Websites for Small Businesses
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-600 dark:text-gray-300">
          We build beautiful, responsive websites tailored to your business goals — fast, affordable, and hassle-free.
        </p>
        <a
          href=''
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md text-lg transition-all"
        >
          Get Started
        </a>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-10">Simple, Transparent Pricing</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter",
                price: "$299",
                features: ["1 Page Site", "Mobile Friendly", "Basic Contact Form"],
              },
              {
                title: "Standard",
                price: "$599",
                features: ["Up to 5 Pages", "Custom Design", "SEO Optimized"],
              },
              {
                title: "Premium",
                price: "$999",
                features: ["10+ Pages", "Custom Features", "Ongoing Support"],
              },
            ].map((tier) => (
              <div key={tier.title} className="border rounded-lg p-6 shadow-md dark:border-gray-700 bg-slate-50 dark:bg-gray-800">
                <h4 className="text-xl font-semibold mb-2">{tier.title}</h4>
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">{tier.price}</p>
                <ul className="space-y-2 text-sm text-left mb-4">
                  {tier.features.map((feature) => (
                    <li key={feature}>✔ {feature}</li>
                  ))}
                </ul>
                <a
                  href=''
                  className="block mt-auto bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Choose {tier.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-20 bg-slate-100 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">Why Choose Built4You</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["⚡ Fast Turnaround", "Launch in days, not weeks."],
              ["📱 Mobile-First", "Optimized for all screen sizes."],
              ["🛠 Custom Features", "Tailored to your business needs."],
              ["💬 Real Support", "Talk to real humans, not bots."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Let’s Build Your Website</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Send us a message and we’ll get back to you within 24 hours.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border dark:border-gray-600 bg-slate-50 dark:bg-gray-800"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded border dark:border-gray-600 bg-slate-50 dark:bg-gray-800"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 rounded border dark:border-gray-600 bg-slate-50 dark:bg-gray-800"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Built4You. All rights reserved.
      </footer>
    </main>
  );
}