export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'combos' | 'burgers-sides';
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  // Combos
  {
    id: 'combo-chicken',
    name: 'Combo Fried Rice with Chicken',
    description: 'Fresh wok-fried rice with tender chicken, mixed vegetables, and signature seasonings',
    price: '$12.99',
    category: 'combos',
    featured: true,
  },
  {
    id: 'combo-beef',
    name: 'Combo Fried Rice with Beef',
    description: 'Savory beef strips with perfectly seasoned fried rice and fresh vegetables',
    price: '$13.99',
    category: 'combos',
    featured: true,
  },
  {
    id: 'combo-pork',
    name: 'Combo Fried Rice with Pork',
    description: 'Juicy pork with our famous fried rice blend and garden-fresh vegetables',
    price: '$12.99',
    category: 'combos',
  },
  {
    id: 'combo-shrimp',
    name: 'Combo Fried Rice with Shrimp',
    description: 'Premium shrimp with aromatic fried rice and crisp vegetables',
    price: '$14.99',
    category: 'combos',
    featured: true,
  },

  // Burgers and Sides
  {
    id: 'classic-burger',
    name: 'Classic Hamburger',
    description: 'Juicy beef patty with lettuce, tomato, onion, and special sauce',
    price: '$8.99',
    category: 'burgers-sides',
  },
  {
    id: 'cheese-burger',
    name: 'Cheeseburger',
    description: 'Classic burger topped with melted American cheese',
    price: '$9.99',
    category: 'burgers-sides',
  },
  {
    id: 'fries',
    name: 'French Fries',
    description: 'Golden crispy fries seasoned to perfection',
    price: '$4.99',
    category: 'burgers-sides',
  },
  {
    id: 'wings',
    name: 'Buffalo Wings (6 pcs)',
    description: 'Spicy buffalo wings with ranch dipping sauce',
    price: '$9.99',
    category: 'burgers-sides',
  },
  {
    id: 'soda',
    name: 'Soft Drinks',
    description: 'Coca-Cola, Sprite, Orange, Dr. Pepper',
    price: '$2.99',
    category: 'burgers-sides',
  },
];

export const getItemsByCategory = (category: 'combos' | 'burgers-sides') => {
  return menuItems.filter(item => item.category === category);
};

export const getFeaturedItems = () => {
  return menuItems.filter(item => item.featured);
};