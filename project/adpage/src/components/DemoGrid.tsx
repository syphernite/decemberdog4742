import React from "react";
import DemoCard from "./DemoCard";

const DEMOS = [
  { category: "Photography", name: "Elena Photography", headline: "Memories, Captured Right", sub: "Portraits • Events • Lifestyle", primary: "Book a Session", secondary: "View Packages", accent: "emerald" },
  { category: "Barbering", name: "Tony’s Signature Cuts", headline: "Sharp Lines. Clean Finish.", sub: "Walk-ins welcome • Appointments preferred", primary: "Book Your Cut", secondary: "See Styles", accent: "sky" },
  { category: "Detailer", name: "ShineRight Mobile", headline: "Showroom Shine at Your Door", sub: "Interior • Exterior • Ceramic", primary: "Book Mobile Detail", secondary: "Plans", accent: "violet" },
  { category: "Food Truck", name: "Rolling Spices", headline: "Bold Flavors on Wheels", sub: "Catering • Pop-ups • Lunch", primary: "Find Us Today", secondary: "Menu", accent: "rose" },
  { category: "Plumbing", name: "FlowRight Plumbing", headline: "24/7 Expert Service", sub: "Emergencies • Installs • Repairs", primary: "Call Now", secondary: "Get Quote", accent: "emerald" },
  { category: "Tattoo", name: "Inkhouse", headline: "Ink with Intention", sub: "Custom • Flash • Fine Line", primary: "Book a Session", secondary: "View Artists", accent: "sky" },
  { category: "Pest Control", name: "BugShield", headline: "Infestations Eliminated", sub: "Same-day safe treatments", primary: "Schedule Service", secondary: "Pricing", accent: "violet" },
  { category: "Nightlife", name: "Nightwave Supply", headline: "Light the Room", sub: "Pro audio • FX • Lighting", primary: "Get A Quote", secondary: "Rentals", accent: "rose" },
  { category: "Creator / Coach", name: "Creator Empire", headline: "Launch Your Brand", sub: "Funnels • Sites • Strategy", primary: "Start Today", secondary: "See Plans", accent: "emerald" },
  { category: "Landscaping", name: "GreenEdge", headline: "Lawns That Impress", sub: "Weekly care • Cleanups", primary: "Request Estimate", secondary: "Services", accent: "sky" },
  { category: "HVAC", name: "BreatheEasy HVAC", headline: "Comfort On Demand", sub: "Install • Repair • Tune-ups", primary: "Book Visit", secondary: "Maintenance", accent: "violet" },
  { category: "Bakery", name: "Sugar + Grain", headline: "Fresh Daily Bakes", sub: "Custom cakes • Pastries", primary: "Order Now", secondary: "Menu", accent: "rose" }
] as const;

export default function DemoGrid() {
  return (
    <div className="grid-demos">
      {DEMOS.map((d, i) => (
        <DemoCard key={i} {...d} />
      ))}
    </div>
  );
}
