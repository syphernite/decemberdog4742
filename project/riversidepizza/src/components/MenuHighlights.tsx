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
    category: "Appetizers",
    icon: "🍗",
    items: [
      {
        name: "Cheese Fries",
        description: "Our fries topped with melted cheese and bacon. Add Chili $1.50",
        price: "$5.69",
      },
      {
        name: "Mozzarella Cheese Sticks (6)",
        description: "Served with Marinara Sauce",
        price: "$7.99",
      },
      {
        name: "Jalapeno Poppers (6)",
        description: "",
        price: "$6.95",
      },
      {
        name: "Mac and Cheese Bites (6)",
        description: "Served with Ranch",
        price: "$7.99",
      },
      {
        name: "Fried Pickle Chips",
        description: "Served with Ranch",
        price: "$6.95",
      },
      {
        name: "Garlic Cheese Bread",
        description: "Served with marinara",
        price: "$7.99",
      },
      {
        name: "Chicken Tenders",
        description: "Served with fries and honey mustard",
        price: "SMALL (3) $7.95 LARGE (5) $9.95",
      },
      {
        name: "Wings (10)",
        description: "Choose Plain, Mild, Hot, BBQ, Sweet Chili, Teriyaki, Nashville Hot, Garlic Parmesan, Honey BBQ, Old Bay, or Cajun",
        price: "$12.95",
      },
    ],
  },
  {
    category: "Salads",
    icon: "🥗",
    items: [
      {
        name: "Garden Salad",
        description: "Salad Mix, cucumber, tomato, onion, and cheese served with crackers and your choice of dressing. Add grilled or fried chicken $3.00 Add Blackened Shrimp or Fried Shrimp $5.00",
        price: "$7.95",
      },
      {
        name: "Caesar Salad",
        description: "Salad Mix, Tangy Caesar dressing, Parmesan cheese, and bacon tossed together and served with crackers. Add grilled or fried chicken $3.00 Add Blackened or Grilled Shrimp $5.00",
        price: "$6.95",
      },
      {
        name: "Chef Salad",
        description: "Mixed greens, cucumber, tomato, onion, cheese, ham, turkey, roast beef, and salami served with crackers and your choice of dressing",
        price: "$8.25",
      },
      {
        name: "Greek Salad",
        description: "Mixed greens, cucumbers, onions, tomato, black olives, banana peppers tossed in our house dressing and topped with feta cheese. Served with crackers",
        price: "$8.25",
      },
      {
        name: "Side Salad",
        description: "",
        price: "$3.50",
      },
    ],
  },
  {
    category: "Burgers and Sandwiches",
    icon: "🍔",
    items: [
      {
        name: "Fat Boy Special",
        description: "Double cheeseburger all the way with fries and your choice of drink",
        price: "$9.00",
      },
      {
        name: "Cheeseburger",
        description: "",
        price: "$5.00",
      },
      {
        name: "Pizza Burger",
        description: "Mozzarella, pepperoni, and our homemade sauce!",
        price: "$6.00",
      },
      {
        name: "Bacon Cheeseburger",
        description: "",
        price: "$6.00",
      },
      {
        name: "Mushroom Swiss Burger",
        description: "",
        price: "$6.00",
      },
      {
        name: "Smoke Stack Burger",
        description: "Cheddar, bacon, BBQ sauce, crispy onion straws, and mayo",
        price: "$6.50",
      },
      {
        name: "Double Delight",
        description: "Double cheeseburger with bacon, grilled onions, mushrooms, mayo, ketchup, and mustard",
        price: "$7.50",
      },
      {
        name: "Hot Dog",
        description: "Served with mustard, onions, and our homemade chili",
        price: "$2.50",
      },
      {
        name: "Reuben",
        description: "Corned beef, sauerkraut, 1000 island, and swiss cheese served on grilled rye bread",
        price: "$7.50",
      },
      {
        name: "Chicken Filet",
        description: "Served with lettuce, tomato, and mayo",
        price: "$5.00",
      },
      {
        name: "The Redneck Reuben",
        description: "Charcoal-smoked brisket, sharp cheddar cheese, BBQ 1000 Island, and cole slaw piled between Texas toast",
        price: "$7.50",
      },
      {
        name: "Greek Taco",
        description: "Sliced steak, grilled onions, jalapenos, marinara sauce, lettuce, and tomato on a grilled pita",
        price: "$7.50",
      },
      {
        name: "Gyro (Beef/Lamb or Chicken)",
        description: "Choose either. Our classic gyro with beef and lamb or chicken. Both served with diced tomato, onion, lettuce, and our homemade tzatziki sauce",
        price: "$7.50",
      },
    ],
  },
  {
    category: "Pizza",
    icon: "🍕",
    items: [
      {
        name: "Cheese",
        description: "",
        price: "SM $8 LG $11.25",
      },
      {
        name: "1 Topping",
        description: "",
        price: "SM $8.50 LG $12.25",
      },
      {
        name: "2 Toppings",
        description: "",
        price: "SM $9.75 LG $14",
      },
      {
        name: "3 Toppings",
        description: "",
        price: "SM $10.25 LG $15",
      },
      {
        name: "4 Toppings",
        description: "",
        price: "SM $11 LG $16",
      },
      {
        name: "5 Toppings",
        description: "",
        price: "SM $12 LG $18",
      },
      {
        name: "Riverside House Special",
        description: "Pepperoni, ham, beef, sausage, mushrooms, black olives, onions, and green peppers all piled onto our fresh made dough",
        price: "SM $12.50 LG $18.50",
      },
      {
        name: "Chicken Bacon Ranch",
        description: "Chicken, ranch, onions, tomato, and bacon",
        price: "SM $12 LG $18",
      },
      {
        name: "Greek Pizza",
        description: "Tomato, black olives, feta cheese, and onions",
        price: "SM $12 LG $18",
      },
      {
        name: "Buffalo Chicken",
        description: "Shredded chicken tossed in our mild buffalo sauce, ranch base, and mozzarella. Topped with more buffalo sauce!",
        price: "SM $12 LG $18",
      },
      {
        name: "Hawaiian Pizza",
        description: "Ham, pineapple, bacon, pizza sauce, and mozzarella",
        price: "SM $12 LG $18",
      },
      {
        name: "White Pizza",
        description: "Olive oil, minced garlic, provolone, feta, and mozzarella",
        price: "SM $12 LG $18",
      },
      {
        name: "Classic Stromboli",
        description: "Pepperoni, mushrooms, pizza sauce and mozzarella. Served with a side of marinara",
        price: "$9.50",
      },
      {
        name: "Steak and Cheese Stromboli",
        description: "Grilled steak and onions with mozzarella. Served with a side of marinara",
        price: "$10.25",
      },
      {
        name: "Calzone",
        description: "Sausage, mushrooms, ricotta cheese, and mozzarella. Served with a side of marinara",
        price: "$10.25",
      },
    ],
  },
  {
    category: "Pasta",
    icon: "🍝",
    items: [
      {
        name: "Spaghetti Marinara",
        description: "With melted mozzarella, salad, and garlic toast. Add Meatballs for $2",
        price: "$8.95",
      },
      {
        name: "Manicotti",
        description: "Served with salad and garlic toast. Add Meatballs $2.00",
        price: "$10.95",
      },
      {
        name: "Lasagna",
        description: "Served with salad and garlic toast",
        price: "$10.95",
      },
      {
        name: "Chicken Alfredo",
        description: "Grilled chicken, fettuccine, and our creamy Parmesan sauce served with salad and garlic toast. Add Extra Chicken $3.00 Add Shrimp $5.00",
        price: "$13.95",
      },
    ],
  },
  {
    category: "Subs",
    icon: "🥖",
    items: [
      {
        name: "Ham, Turkey, or Roast Beef",
        description: "Topped with lettuce, tomato, red onion, banana peppers, and our house dressing",
        price: "Small $7.95 Large $9.95",
      },
      {
        name: "Meatball",
        description: "",
        price: "Small $7.95 Large $9.95",
      },
      {
        name: "Super Sub",
        description: "Ham, turkey, roast beef, salami, and provolone cheese with mayo, lettuce, tomato, onion, banana peppers, and our house oil and vinegar dressing",
        price: "Small $7.95 Large $9.95",
      },
      {
        name: "Cheeseburger Sub",
        description: "Cheeseburger patties, mustard, ketchup, mayo, lettuce, tomato, and onions",
        price: "Small $7.95 Large $9.95",
      },
      {
        name: "Italian",
        description: "Ham, Genoa salami, capicola, and pepperoni with mayo, provolone, lettuce, tomato, roasted red peppers, banana peppers, onions, and our house dressing",
        price: "Small $7.95 Large $9.95",
      },
      {
        name: "Steak and Cheese",
        description: "Steak, grilled onions, your choice of white american, provolone, or the 'wiz', lettuce, tomato, mayo, and our house dressing",
        price: "Small $8.25 Large $10.25",
      },
      {
        name: "Grilled Chicken",
        description: "Marinated chicken breast, mushrooms, onions, American cheese, and mayo",
        price: "Small $7.95 Large $9.95",
      },
      {
        name: "BLT",
        description: "Bacon, lettuce, tomato, mayo, and provolone",
        price: "Small $7.25 Large $9.25",
      },
      {
        name: "Chicken Parmesan",
        description: "Breaded chicken cutlet, marinara, and mozzarella cheese",
        price: "Small $7.95 Large $9.95",
      },
    ],
  },
  {
    category: "Sides",
    icon: "🍟",
    items: [
      {
        name: "Fries",
        description: "",
        price: "$3.00",
      },
      {
        name: "House Chips with Ranch",
        description: "",
        price: "$2.50",
      },
      {
        name: "Onion Rings",
        description: "",
        price: "$3.50",
      },
      {
        name: "Dressings/Sauces",
        description: "extra ranch, marinara, etc.",
        price: "$0.50",
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
            Our Menu
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Riverside Pizza &amp; Subs Full Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From hand-tossed pizzas and stacked subs to wings, burgers, pasta, and salads - everything on our menu.
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

              <div className="space-y-4">
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
            Order Online
          </button>
        </div>
      </div>
    </section>
  );
}
