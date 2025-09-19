// src/pages/Visit.tsx
import React, { useState } from "react";
import { MapPin, Phone, Clock, Car, Mail, Send, CreditCard } from "lucide-react";
import { businessConfig } from "../config/business";
import HoursTable from "../components/HoursTable";
import MapEmbed from "../components/MapEmbed";

export default function Visit() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks. We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="pt-24 pb-16">
      <div className="container-pad">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Visit</h1>
          <div className="accent-line mx-auto mt-4 w-28" />
        </div>

        {/* Main grid: Map focus */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map column */}
          <div className="lg:col-span-2">
            <div className="card overflow-hidden lg:sticky lg:top-24">
              <MapEmbed address={businessConfig.address} />
            </div>

            {/* CTA bar */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={businessConfig.phoneLink}
                className="btn btn-primary h-11 px-5 text-base animate-ember"
              >
                <Phone className="mr-2 h-4 w-4" /> {businessConfig.phone}
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-5 text-base rounded-lg font-medium transition text-white"
                style={{ backgroundColor: "#22c55e", border: "1px solid #16a34a" }}
              >
                <MapPin className="mr-2 h-4 w-4" /> Directions
              </a>
              <div className="text-sm text-white/70 ml-auto">
                {businessConfig.address}
              </div>
            </div>

            {/* Quick badges */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="icon-chip justify-start gap-2">
                <Clock className="h-4 w-4" />
                <span>Open late</span>
              </div>
              <div className="icon-chip justify-start gap-2">
                <Car className="h-4 w-4" />
                <span>Private parking</span>
              </div>
              <div className="icon-chip justify-start gap-2">
                <Phone className="h-4 w-4" />
                <span>Take-out</span>
              </div>
              <div className="icon-chip justify-start gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Cards accepted</span>
              </div>
            </div>
          </div>

          {/* Right stack: Hours + Contact */}
          <div className="space-y-6">
            {/* Hours */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-brand-primary" />
                <h2 className="text-xl font-semibold">Hours</h2>
              </div>
              <HoursTable />
            </div>

            {/* Contact info */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-primary mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Address</div>
                    <div className="text-white/70">{businessConfig.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-brand-primary mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <a href={businessConfig.phoneLink} className="text-white/70 link-underline">
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Message form */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="h-5 w-5 text-brand-primary" />
                <h2 className="text-xl font-semibold">Message us</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-primary/60"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-primary/60"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  required
                  rows={4}
                  placeholder="Tell us how we can help"
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-primary/60 resize-vertical"
                />
                <button
                  type="submit"
                  className="w-full btn btn-primary h-11 px-5 text-base flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
