import React from "react"

type Item = { name: string; desc?: string; price?: string }
type Section = { title: string; accent: "amber"|"red"; img?: string; items: Item[] }

const sections: Section[] = [
  {
    title: "Appetizers",
    accent: "amber",
    img: "https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&w=1280",
    items: [
      { name: "Mozzarella Sticks", price: "$8.99" },
      { name: "Loaded Potato Skins", price: "$8.49" },
      { name: "Fried Pickles", price: "$7.49" },
      { name: "Onion Rings", price: "$7.99" },
      { name: "Nachos with Cheese & Salsa", price: "$9.99" }
    ]
  },
  {
    title: "Wings",
    accent: "red",
    img: "https://images.pexels.com/photos/10361458/pexels-photo-10361458.jpeg?auto=compress&cs=tinysrgb&w=1280",
    items: [
      { name: "Buffalo Wings (6 pcs)", price: "$10.99" },
      { name: "Barbecue Wings (6 pcs)", price: "$10.99" },
      { name: "Honey Garlic Wings (6 pcs)", price: "$11.49" },
      { name: "Spicy Buffalo Wings (6 pcs)", price: "$11.49" }
    ]
  },
  {
    title: "Burgers",
    accent: "amber",
    img: "https://images.pexels.com/photos/20117233/pexels-photo-20117233.jpeg?auto=compress&cs=tinysrgb&w=1280",
    items: [
      { name: "Classic Cheeseburger", price: "$12.99" },
      { name: "Bacon Burger", price: "$13.99" },
      { name: "Mushroom Swiss Burger", price: "$13.99" },
      { name: "Build Your Own Burger (½ lb)", desc: "Lettuce, tomato, onion, pickle. Add-ons: bacon, cheese, avocado, jalapeños.", price: "$12.99" },
      { name: "Veggie Burger", price: "$11.99" }
    ]
  },
  {
    title: "Sandwiches & Wraps",
    accent: "red",
    img: "https://images.pexels.com/photos/15813482/pexels-photo-15813482.jpeg?auto=compress&cs=tinysrgb&w=1280",
    items: [
      { name: "Reuben Sandwich", price: "$13.99" },
      { name: "Philly Cheesesteak", price: "$13.99" },
      { name: "Buffalo Chicken Wrap", price: "$12.99" },
      { name: "Grilled Chicken Sandwich", price: "$11.99" }
    ]
  },
  {
    title: "Tacos",
    accent: "amber",
    img: "https://images.pexels.com/photos/28895975/pexels-photo-28895975.jpeg?auto=compress&cs=tinysrgb&w=1280",
    items: [
      { name: "Shrimp Tacos (2 pcs)", price: "$12.99" },
      { name: "Fish Tacos (2 pcs)", price: "$11.99" },
      { name: "Chicken Tacos (2 pcs)", price: "$10.99" }
    ]
  },
  {
    title: "Entrées",
    accent: "red",
    img: "https://images.pexels.com/photos/14096641/pexels-photo-14096641.jpeg?auto=compress&cs=tinysrgb&w=1280",
    items: [
      { name: "Fish & Chips", price: "$14.99" },
      { name: "Shrimp & Grits", price: "$15.99" },
      { name: "Crab Cake Dinner", price: "$18.99" },
      { name: "Blackened Chicken Alfredo", price: "$13.99" }
    ]
  },
  {
    title: "Sides",
    accent: "amber",
    img: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1280",
    items: [
      { name: "French Fries", price: "$3.99" },
      { name: "Sweet Potato Fries", price: "$4.49" },
      { name: "Coleslaw", price: "$2.99" },
      { name: "Side Salad", price: "$3.99" },
      { name: "Onion Rings", price: "$4.49" }
    ]
  }
]

export default function Menu() {
  return (
    <div className="space-y-12">
      {sections.map((s, i) => (
        <section key={s.title} className="grid md:grid-cols-2 gap-6 items-center">
          <div className={`order-${i % 2 ? "2" : "1"} md:order-1`}>
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
          <div className={`order-${i % 2 ? "1" : "2"} md:order-2`}>
            <h3 className={`text-2xl font-semibold mb-4 ${s.accent === "amber" ? "text-brand-primary" : "text-brand-secondary"}`}>
              {s.title}
            </h3>
            <ul className="space-y-2">
              {s.items.map(it => (
                <li key={it.name} className="flex items-start justify-between gap-4 border-b border-base-border/60 pb-2">
                  <div>
                    <div className="font-medium">{it.name}</div>
                    {it.desc && <div className="text-sm text-base-muted">{it.desc}</div>}
                  </div>
                  {it.price && <div className="text-sm text-base-muted whitespace-nowrap">{it.price}</div>}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  )
}
