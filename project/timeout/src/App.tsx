import React from "react"
import { Phone, MapPin, Tv, Beer, Gamepad2, Calendar } from "lucide-react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SheetsSpecials from "./components/SheetsSpecials"
import Hours from "./components/Hours"
import MapEmbed from "./components/MapEmbed"
import CallFab from "./components/CallFab"

const PHONE = "(252) 223-3303"
const ADDRESS = "360 E Chatham St, Newport, NC 28570"

export default function App() {
  return (
    <div className="bg-base-bg text-base-text min-h-screen">
      <Header />

      {/* Hero — unchanged layout, small motion + color accents */}
      <section className="border-b border-base-border">
        <div className="container-pad py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
          <div className="animate-in">
            <h1 className="text-4xl md:text-5xl font-bold">TimeOut Tavern</h1>
            <p className="mt-3 text-base-muted">
              Veteran owned. Family friendly. Great food. Every game on.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="btn btn-primary">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
              <a href="#visit" className="btn btn-outline">
                <MapPin className="mr-2 h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>

          <div className="card p-6 animate-in" style={{ animationDelay: "70ms" }}>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="icon-chip animate-float">
                <div className="w-full">
                  <Tv className="mx-auto h-8 w-8" />
                  <div className="mt-2 text-sm">Game-day TVs</div>
                </div>
              </div>
              <div className="icon-chip animate-float" style={{ animationDelay: "150ms" }}>
                <div className="w-full">
                  <Gamepad2 className="mx-auto h-8 w-8" />
                  <div className="mt-2 text-sm">Pool & Darts</div>
                </div>
              </div>
              <div className="icon-chip animate-float" style={{ animationDelay: "300ms" }}>
                <div className="w-full">
                  <Beer className="mx-auto h-8 w-8" />
                  <div className="mt-2 text-sm">Full Bar</div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-base-muted">
              Cards accepted • Take-out available • Private lot parking
            </p>
          </div>
        </div>
      </section>

      {/* Events — unchanged layout, titled with accent */}
      <section id="events" className="border-b border-base-border">
        <div className="container-pad py-14">
          <div className="flex items-center gap-3 mb-6 animate-in">
            <Calendar className="h-6 w-6 accent" />
            <h2 className="text-2xl font-semibold">
              <span className="accent">Live Events</span> & Specials
            </h2>
          </div>
          <SheetsSpecials />
        </div>
      </section>

      {/* Menu preview — unchanged layout, add tiny accent in cards */}
      <section className="border-b border-base-border">
        <div className="container-pad py-14">
          <h2 className="text-2xl font-semibold mb-6">Menu Highlights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Reuben Sandwich", desc: "Stacked corned beef, Swiss, sauerkraut, toasted rye." },
              { name: "Blackened Shrimp Tacos", desc: "3 tacos, cabbage, pico, house sauce." },
              { name: "Shrimp & Grits", desc: "Creamy grits, sautéed shrimp, Cajun butter." },
              { name: "Wings", desc: "Crispy and sauced. Ask for flavors." },
              { name: "Flatbreads", desc: "Shareable crisp crust, various toppings." },
              { name: "Burgers", desc: "Griddled patties, toasted bun, add-ons." }
            ].map((item, i) => (
              <div key={item.name} className="card p-5 animate-in" style={{ animationDelay: `${i * 40}ms` }}>
                <div className="font-medium">{item.name}</div>
                <p className="text-sm text-base-muted mt-1">{item.desc}</p>
                <div className="mt-3 h-[2px] w-16 rounded bg-[rgba(245,158,11,.55)]" />
              </div>
            ))}
          </div>
          <p className="text-sm text-base-muted mt-4">Prices are placeholders. Call for current specials.</p>
        </div>
      </section>

      {/* Visit — unchanged layout */}
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
              <MapEmbed address={"360 E Chatham St, Newport, NC 28570"} />
            </div>
            <p className="text-sm text-base-muted mt-3">{ADDRESS}</p>
          </div>
        </div>
      </section>

      <Footer />
      <CallFab />
    </div>
  )
}
