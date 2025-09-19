import React from "react"
import { Phone, MapPin, Tv, Beer, Gamepad2, Calendar } from "lucide-react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SheetsSpecials from "./components/SheetsSpecials"
import Hours from "./components/Hours"
import MapEmbed from "./components/MapEmbed"

const PHONE = "(252) 223-3303"
const ADDRESS = "360 E Chatham St, Newport, NC 28570"

export default function App() {
  return (
    <div className="bg-base-bg text-base-text min-h-screen">
      <Header />

      {/* Hero */}
      <section className="border-b border-base-border">
        <div className="container-pad py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
          <div>
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
          <div className="card p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <Tv className="mx-auto h-8 w-8 text-brand-primary" />
                <div className="mt-2 text-sm">Game-day TVs</div>
              </div>
              <div>
                <Gamepad2 className="mx-auto h-8 w-8 text-brand-primary" />
                <div className="mt-2 text-sm">Pool & Darts</div>
              </div>
              <div>
                <Beer className="mx-auto h-8 w-8 text-brand-primary" />
                <div className="mt-2 text-sm">Full Bar</div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-base-muted">
              Cards accepted • Take-out available • Private lot parking
            </p>
          </div>
        </div>
      </section>

      {/* Live Events / Specials via Google Sheets */}
      <section id="events" className="border-b border-base-border">
        <div className="container-pad py-14">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-6 w-6 text-brand-primary" />
            <h2 className="text-2xl font-semibold">Live Events & Specials</h2>
          </div>
          <SheetsSpecials />
        </div>
      </section>

      {/* Menu preview */}
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
            ].map((item) => (
              <div key={item.name} className="card p-5">
                <div className="font-medium">{item.name}</div>
                <p className="text-sm text-base-muted mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-base-muted mt-4">Prices are placeholders. Call for current specials.</p>
        </div>
      </section>

      {/* Hours + Map */}
      <section id="visit" className="border-b border-base-border">
        <div className="container-pad py-14 grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Hours</h2>
            <Hours />
            <div className="mt-6">
              <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="btn btn-primary">
                <Phone className="mr-2 h-4 w-4" /> {PHONE}
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
            <div className="card overflow-hidden">
              <MapEmbed address={ADDRESS} />
            </div>
            <p className="text-sm text-base-muted mt-3">{ADDRESS}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
