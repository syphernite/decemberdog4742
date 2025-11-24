import { Star } from "lucide-react";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
};

type MenuCategory = {
  category: string;
  icon: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    category: "Hand-Tossed Pizzas",
    icon: "🍕",
    items: [
      {
        name: "Classic Cheese Pizza",
        description:
          "House-made dough, signature red sauce, and a generous layer of real mozzarella.",
        price: "From $10.99",
        popular: true,
      },
      {
        name: "Riverside Special",
        description:
          "Pepperoni, sausage, onions, green peppers, and mushrooms on a golden crust.",
        price: "From $14.99",
        popular: true,
      },
      {
        name: "Meat Lover’s",
        description:
          "Pepperoni, sausage, ham, and bacon for serious appetites.",
        price: "From $15.99",
      },
      {
        name: "Veggie Garden",
        description:
          "Onions, peppers, mushrooms, black olives, and tomatoes for a lighter bite.",
        price: "From $14.49",
      },
    ],
  },
  {
    category: "Subs & Cheesesteaks",
    icon: "🥖",
    items: [
      {
        name: "Riverside Cheesesteak",
        description:
          "Thin-sliced steak grilled with onions and peppers, smothered in melted cheese.",
        price: "From $9.99",
        popular: true,
      },
      {
        name: "Italian Combo Sub",
        description:
          "Ham, salami, pepperoni, provolone, lettuce, tomato, onion, and house dressing.",
        price: "From $9.49",
      },
      {
        name: "Chicken Philly",
        description:
          "Grilled chicken, onions, peppers, cheese, and a soft toasted roll.",
        price: "From $9.49",
      },
      {
        name: "Meatball Parmesan",
        description:
          "Slow-simmered meatballs, marinara, and melted mozzarella on a toasted sub roll.",
        price: "From $9.49",
      },
    ],
  },
  {
    category: "Wings & Appetizers",
    icon: "🍗",
    items: [
      {
        name: "Traditional Wings",
        description:
          "Crispy bone-in wings tossed in your choice of Buffalo, BBQ, garlic parm, or plain.",
        price: "From $9.99",
        popular: true,
      },
      {
        name: "Boneless Wings",
        description:
          "Hand-breaded bites with the same sauces you love on our traditional wings.",
        price: "From $9.49",
      },
      {
        name: "Mozzarella Sticks",
        description:
          "Golden-fried cheese sticks served with marinara for dipping.",
        price: "$7.49",
      },
      {
        name: "Garlic Knots",
        description:
          "Soft knots brushed with garlic butter and sprinkled with parmesan.",
        price: "$5.99",
      },
    ],
  },
  {
    category: "Salads & Sides",
    icon: "🥗",
    items: [
      {
        name: "House Salad",
        description:
          "Crisp lettuce, tomatoes, cucumbers, onions, and shredded cheese with your choice of dressing.",
        price: "$7.49",
      },
      {
        name: "Chef or Antipasto Salad",
        description:
          "Loaded with meats, cheese, and veggies for a full-meal salad.",
        price: "From $9.99",
      },
      {
        name: "French Fries",
        description:
          "Classic golden fries, perfect on the side of any sub or burger.",
        price: "$4.49",
      },
      {
        name: "Loaded Fries",
        description:
          "Fries topped with cheese and bacon, served with ranch.",
        price: "$7.99",
      },
    ],
  },
  {
    category: "Burgers, Stromboli & More",
    icon: "🍔",
    items: [
      {
        name: "Classic Cheeseburger",
        description:
          "Griddled patty with American cheese, lettuce, tomato, and onion on a toasted bun.",
        price: "From $8.99",
      },
      {
        name: "Bacon Cheeseburger",
        description:
          "Everything you love about the classic, plus crispy bacon.",
        price: "From $9.49",
      },
      {
        name: "Stromboli",
        description:
          "Stuffed with cheese and your choice of toppings, baked until golden.",
        price: "From $12.99",
        popular: true,
      },
      {
        name: "Pasta Dinner (Ziti or Spaghetti)",
        description:
          "Served with marinara, melted cheese, and garlic bread.",
        price: "From $11.99",
      },
    ],
  },
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-3">
            Crowd Favorites
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Riverside Pizza &amp; Subs Menu Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-tossed pizzas, stacked subs, saucy wings, and all the classic
            comfort food that keeps Newport coming back.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="font-semibold text-gray-900">
                            {item.name}
                          </p>
                          {item.popular && (
                            <span className="inline-flex items-center text-xs font-semibold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
                              <Star className="w-3 h-3 mr-1" />
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.description}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-right">
                <p className="text-xs text-gray-400">
                  Pricing and availability may vary. Call for today&apos;s
                  specials.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors shadow-xl">
            View Complete Menu
          </button>
        </div>
      </div>
    </section>
  );
}
