// src/App.tsx
import React from "react";
import { Phone, MapPin, Tv, Beer, Gamepad2, Calendar, Facebook } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SheetsSpecials from "./components/SheetsSpecials";
import Hours from "./components/Hours";
import MapEmbed from "./components/MapEmbed";
import CallFab from "./components/CallFab";
import Menu from "./components/Menu";
import bgUrl from "./assets/background.jpg"; // imported asset

const PHONE = "(252) 223-3303";
const ADDRESS = "360 E Chatham St, Newport, NC 28570";

export default function App() {
  return (
    <div className="relative min-h-screen text-base-text">
      {/* background using imported asset */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${bgUrl}')`,
          // decreased blur by 15%: 12px -> 10.2px
          filter: "blur(10.2px) brightness(0.7)",
          transform: "translateZ(0)",
        }}
      />

      {/* content */}
      <div className="relative z-10 min-h-screen bg-black/40 backdrop-blur-sm">
        <Header />

        {/* Hero */}
        <section className="border-b border-base-border">
          <div className="container-pad py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
            <div className="animate-in">
              <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: "var(--brand-cream, #f5f2ea)" }}>
                TimeOut Tavern
              </h1>
              <p className="mt-3 text-base-muted">Veteran owned. Family friendly. Great food. Every game on.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="btn btn-primary">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </a>
                <a href="#visit" className="btn btn-outline">
                  <MapPin className="mr-2 h-4 w-4" /> Get Directions
                </a>
                <a
                  href="https://www.facebook.com/TimeOutTavernNC/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  <Facebook className="mr-2 h-4 w-4" /> Facebook
                </a>
              </div>
            </div>

            <div className="card p-6 animate-in" style={{ animationDelay: "70ms" }}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="icon-chip animate-float">
                  <Tv className="mx-auto h-8 w-8" />
                  <div className="mt-2 text-sm">Game-day TVs</div>
                </div>
                <div className="icon-chip animate-float" style={{ animationDelay: "150ms" }}>
                  <Gamepad2 className="mx-auto h-8 w-8" />
                  <div className="mt-2 text-sm">Pool & Darts</div>
                </div>
                <div className="icon-chip animate-float" style={{ animationDelay: "300ms" }}>
                  <Beer className="mx-auto h-8 w-8" />
                  <div className="mt-2 text-sm">Full Bar</div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-base-muted">
                Cards accepted • Take-out available • Private lot parking
              </p>
            </div>
          </div>
        </section>

        {/* Events */}
        <section id="events" className="border-b border-base-border">
          <div className="container-pad py-14">
            <div className="flex items-center gap-3 mb-6 animate-in">
              <Calendar className="h-6 w-6 text-brand-primary" />
              <h2 className="text-2xl font-semibold">

              </h2>
            </div>
            <SheetsSpecials />
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="border-b border-base-border">
          <div className="container-pad py-14">
            <h2 className="text-2xl font-semibold mb-8 animate-in">Menu</h2>
            <Menu />
            <p className="text-sm text-base-muted mt-6">
              Menu items and prices are subject to change. Call for current specials.
            </p>
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className="border-b border-base-border">
          <div className="container-pad py-14 grid lg:grid-cols-2 gap-8">
            <div className="animate-in">
              <h2 className="text-2xl font-semibold mb-6">Hours</h2>
              <Hours />
              <div className="mt-6">
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="btn btn-primary">
                  <Phone className="mr-2 h-4 w-4" /> {PHONE}
                </a>
              </div>
            </div>
            <div className="animate-in" style={{ animationDelay: "80ms" }}>
              <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
              <div className="card overflow-hidden">
                <MapEmbed address={ADDRESS} />
              </div>
              <p className="text-sm text-base-muted mt-3">{ADDRESS}</p>
            </div>
          </div>
        </section>

        <Footer />
        <CallFab />
      </div>
    </div>
  );
}
