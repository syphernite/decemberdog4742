export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
  category: string;
  popular?: boolean;
  spicy?: boolean;
}

export const menuData: MenuItem[] = [
  {
    "id": 1,
    "name": "Stuffed Hot Peppers",
    "description": "",
    "price": "",
    "category": "appetizers"
  },
  {
    "id": 2,
    "name": "Stuffed Mushrooms",
    "description": "",
    "price": "",
    "category": "appetizers"
  },
  {
    "id": 3,
    "name": "Fried Calamari",
    "description": "",
    "price": "",
    "category": "appetizers"
  },
  {
    "id": 4,
    "name": "Angel Hair Onion Rings",
    "description": "",
    "price": "",
    "category": "appetizers"
  },
  {
    "id": 5,
    "name": "Sea Salt Chips",
    "description": "Homemade sea salt chips",
    "price": "",
    "category": "appetizers"
  },
  {
    "id": 6,
    "name": "Homemade Fries",
    "description": "",
    "price": "",
    "category": "appetizers"
  },
  {
    "id": 7,
    "name": "Garlic Cheese Bread",
    "description": "",
    "price": "",
    "category": "appetizers"
  },
  {
    "id": 8,
    "name": "Veggie Panini",
    "description": "Artichoke, roasted red peppers, onions, mushrooms, black olives, provolone & roasted red pepper sauce",
    "price": "$13.95",
    "category": "paninis"
  },
  {
    "id": 9,
    "name": "Chicken Caesar Panini",
    "description": "Lettuce, Swiss cheese, roasted grilled chicken & creamy Caesar dressing",
    "price": "$14.95",
    "category": "paninis"
  },
  {
    "id": 10,
    "name": "Chicken Club Panini",
    "description": "Provolone, Canadian bacon, grilled chicken, lettuce & tomatoes with red pepper sauce",
    "price": "$14.95",
    "category": "paninis"
  },
  {
    "id": 11,
    "name": "Buffalo Chicken Panini",
    "description": "Chicken tossed in buffalo sauce, provolone, lettuce, tomatoes & blue cheese dressing",
    "price": "$14.95",
    "category": "paninis"
  },
  {
    "id": 12,
    "name": "Italian Panini",
    "description": "Ham, salami, pepperoni, lettuce, tomatoes, black olives, onions, roasted red peppers, provolone & roasted red pepper sauce",
    "price": "$14.95",
    "category": "paninis"
  },
  {
    "id": 13,
    "name": "Spaghetti with Meatballs or Sausage",
    "description": "",
    "price": "$15.95",
    "category": "pasta"
  },
  {
    "id": 14,
    "name": "Bow Tie Pasta",
    "description": "Italian sausage, mushrooms, onions & diced tomatoes in homemade Alfredo sauce",
    "price": "$16.95",
    "category": "pasta"
  },
  {
    "id": 15,
    "name": "Shrimp Pasta",
    "description": "Shrimp, Canadian bacon, onions, diced tomatoes, mushrooms & bow tie pasta in roasted red pepper sauce",
    "price": "$17.95",
    "category": "pasta"
  },
  {
    "id": 16,
    "name": "Baked Ziti",
    "description": "Ziti with three cheeses and marinara sauce, topped with mozzarella, then baked",
    "price": "$15.95",
    "category": "pasta"
  },
  {
    "id": 17,
    "name": "Flounder Basket",
    "description": "Two pieces of fried flounder with fries or chips and homemade slaw",
    "price": "$16.95",
    "category": "seafood"
  },
  {
    "id": 18,
    "name": "Shrimp Basket",
    "description": "Fried shrimp with fries or chips and homemade slaw",
    "price": "$17.95",
    "category": "seafood"
  },
  {
    "id": 19,
    "name": "Combination of Flounder & Shrimp",
    "description": "One piece of flounder and shrimp with fries or chips and homemade slaw",
    "price": "$18.95",
    "category": "seafood"
  },
  {
    "id": 20,
    "name": "Boom Boom Shrimp Tacos",
    "description": "Two flour tortillas with fried shrimp, boom boom sauce, red cabbage slaw & cheddar cheese",
    "price": "$16.95",
    "category": "seafood"
  },
  {
    "id": 21,
    "name": "Veggie Calzone",
    "description": "Zucchini, onions, mushrooms, green peppers, ricotta & mozzarella",
    "price": "$12.95",
    "category": "calzones"
  },
  {
    "id": 22,
    "name": "Italian Calzone",
    "description": "Salami, Canadian bacon, onions, green peppers, ricotta & mozzarella",
    "price": "$14.95",
    "category": "calzones"
  },
  {
    "id": 23,
    "name": "Godfather Calzone",
    "description": "Salami, Italian sausage, banana peppers & cheese",
    "price": "$14.95",
    "category": "calzones"
  },
  {
    "id": 24,
    "name": "Beach Bumz \u2013 Over the Top",
    "description": "Italian sausage, pepperoni, black olives, tomatoes, mushrooms & basil",
    "price": "Small: $16.95 / Medium: $18.95 / Large: $21.95",
    "category": "pizzas"
  },
  {
    "id": 25,
    "name": "Shrimp Lovers Pizza",
    "description": "Shrimp, tomatoes, garlic & fresh basil",
    "price": "Small: $16.95 / Medium: $18.95 / Large: $22.95",
    "category": "pizzas"
  },
  {
    "id": 26,
    "name": "Margherita Pizza",
    "description": "Garlic, fresh basil, plum tomatoes & mozzarella",
    "price": "Small: $15.95 / Medium: $17.95 / Large: $20.95",
    "category": "pizzas"
  },
  {
    "id": 27,
    "name": "Roasted Veggie",
    "description": "Green peppers, mushrooms, zucchini, red peppers & onions, mozzarella",
    "price": "Small: $15.95 / Medium: $17.95 / Large: $20.95",
    "category": "pizzas"
  },
  {
    "id": 28,
    "name": "California",
    "description": "Grilled chicken, mushrooms, basil, garlic, tomatoes, black olives & mozzarella",
    "price": "Small: $15.95 / Medium: $17.95 / Large: $20.95",
    "category": "pizzas"
  },
  {
    "id": 29,
    "name": "Hawaiian",
    "description": "Canadian bacon & pineapple chunks with mozzarella",
    "price": "Small: $15.95 / Medium: $17.95 / Large: $20.95",
    "category": "pizzas"
  },
  {
    "id": 30,
    "name": "Ultimate Cheese",
    "description": "Mozzarella, provolone, swiss, parmesan & cheddar",
    "price": "Small: $15.95 / Medium: $17.95 / Large: $20.95",
    "category": "pizzas"
  },
  {
    "id": 31,
    "name": "Greek Island",
    "description": "Feta, black olives, artichoke hearts, spinach & sun\u2011dried tomatoes",
    "price": "Small: $15.95 / Medium: $17.95 / Large: $20.95",
    "category": "pizzas"
  },
  {
    "id": 32,
    "name": "BBQ Chicken",
    "description": "Homemade BBQ sauce, grilled chicken & onions topped with mozzarella",
    "price": "Small: $15.95 / Medium: $17.95 / Large: $20.95",
    "category": "pizzas"
  },
  {
    "id": 33,
    "name": "Chicken Florentine",
    "description": "Homemade pesto sauce, grilled chicken, spinach, mushrooms, mozzarella",
    "price": "Small: $15.95 / Medium: $17.95 / Large: $20.95",
    "category": "pizzas"
  },
  {
    "id": 34,
    "name": "Build Your Own",
    "description": "Base price + per topping",
    "price": "Small Base: $11.95 + 1.75/topping / Medium Base: $14.95 + 1.85/topping / Large Base: $16.95 + 2.50/topping",
    "category": "pizzas"
  },
  {
    "id": 35,
    "name": "Supreme",
    "description": "Garlic, pepperoni, red pepper, green pepper, onion, olives & mushrooms",
    "price": "Small: $16.95 / Medium: $18.95 / Large: $21.95",
    "category": "pizzas"
  },
  {
    "id": 36,
    "name": "Meat Lovers",
    "description": "Pepperoni, Italian sausage, Canadian bacon & salami",
    "price": "Small: $16.95 / Medium: $18.95 / Large: $21.95",
    "category": "pizzas"
  },
  {
    "id": 37,
    "name": "French Silk Pie",
    "description": "",
    "price": "$6.95",
    "category": "desserts"
  },
  {
    "id": 38,
    "name": "Key Lime Pie",
    "description": "",
    "price": "$7.95",
    "category": "desserts"
  },
  {
    "id": 39,
    "name": "Cheesecake",
    "description": "",
    "price": "$8.95",
    "category": "desserts"
  },
  {
    "id": 40,
    "name": "Dessert Pizza",
    "description": "Vanilla pudding base with melted chocolate chips",
    "price": "Small: $10.95 / Medium: $12.95 / Large: $14.95",
    "category": "desserts"
  },
  {
    "id": 41,
    "name": "Spaghetti & Meatballs",
    "description": "",
    "price": "$8.95",
    "category": "kids"
  },
  {
    "id": 42,
    "name": "Mac & Cheese",
    "description": "",
    "price": "$7.95",
    "category": "kids"
  },
  {
    "id": 43,
    "name": "Personal Pizza (Cheese or Pepperoni)",
    "description": "",
    "price": "$8.95",
    "category": "kids"
  },
  {
    "id": 44,
    "name": "Grilled Cheese",
    "description": "With fries, chips, or applesauce",
    "price": "$7.95",
    "category": "kids"
  }
];

export const categories = [
  {
    "id": "appetizers",
    "name": "Appetizers",
    "icon": "\ud83e\udd68"
  },
  {
    "id": "paninis",
    "name": "Paninis",
    "icon": "\ud83e\udd6a"
  },
  {
    "id": "pasta",
    "name": "Pasta",
    "icon": "\ud83c\udf5d"
  },
  {
    "id": "pizzas",
    "name": "Pizzas",
    "icon": "\ud83c\udf55"
  },
  {
    "id": "seafood",
    "name": "Seafood",
    "icon": "\ud83e\udd90"
  },
  {
    "id": "calzones",
    "name": "Calzones",
    "icon": "\ud83e\udd59"
  },
  {
    "id": "desserts",
    "name": "Desserts",
    "icon": "\ud83c\udf70"
  },
  {
    "id": "kids",
    "name": "Kids Menu",
    "icon": "\ud83d\udc76"
  }
];
