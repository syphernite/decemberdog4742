import React from 'react';

function Menu() {
  const menuCategories = [
    {
      title: 'Salads & Subs',
      items: [
        {
          name: 'Grilled Chicken Salad',
          description: 'Fresh greens topped with grilled chicken breast, tomatoes and cheese.',
        },
        {
          name: 'Chicken Tender Salad',
          description: 'Crispy chicken tenders on a bed of fresh salad greens.',
        },
        {
          name: 'Smoked Turkey Sub',
          description: 'Smoked turkey served on a wheat hoagie with crisp veggies.',
        },
      ],
    },
    {
      title: 'Specialty Sandwiches',
      items: [
        {
          name: 'Polish Sausage',
          description: 'Juicy, seasoned sausage served with your choice of toppings.',
        },
        {
          name: 'Hot Link',
          description: 'A spicy hot link nestled in a fresh bun.',
        },
        {
          name: 'Grilled Chicken Breast',
          description: 'Tender chicken breast grilled to perfection on a toasted bun.',
        },
        {
          name: 'Hot Ham & Cheese',
          description: 'Classic ham and melted cheese sandwich, grilled until golden.',
        },
      ],
    },
    {
      title: 'Dogs & Gyros',
      items: [
        {
          name: 'Foot‑Long Coney',
          description: 'All‑beef foot‑long hot dog topped with chili, cheese and onions.',
        },
        {
          name: 'Corn Dog',
          description: 'Golden battered corn dog served with mustard or ketchup.',
        },
        {
          name: 'Gyro Sandwich',
          description: 'Sliced gyro meat, onions and tomatoes in a warm pita with tzatziki.',
        },
      ],
    },
    {
      title: 'Burgers',
      items: [
        {
          name: 'Bacon Cheeseburger',
          description: 'Juicy beef patty topped with crispy bacon and melted cheese.',
        },
        {
          name: 'Chili Cheeseburger',
          description: 'Burger smothered in house chili and cheese.',
        },
        {
          name: 'Mushroom Swiss Burger',
          description: 'Grilled mushrooms with Swiss cheese on a classic burger.',
        },
        {
          name: 'The Ed Burger',
          description: 'Family‑sized burger that feeds 2–4 people, served with fries.',
        },
        {
          name: 'Jumbo Big Ed Burger',
          description: 'Three pounds of meat and extra cheese, feeds up to eight!',
        },
      ],
    },
    {
      title: 'Kid’s Menu',
      items: [
        {
          name: 'Mini Cheeseburger',
          description: 'Perfectly sized burger for the little ones.',
        },
        {
          name: 'Chicken Nuggets',
          description: 'Crispy chicken nuggets served with fries.',
        },
        {
          name: 'Corn Dog',
          description: 'Kid‑sized corn dog served with fries.',
        },
      ],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-dark">Our Menu</h2>
        {menuCategories.map((category) => (
          <div key={category.title} className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">{category.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div key={item.name} className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
                  <h4 className="font-semibold text-lg mb-2 text-primary-dark">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
