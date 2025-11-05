export default function MenuSection() {
  const menuItems = [
    {
      name: 'Classic Breakfast Plate',
      description: 'Two eggs any style, crispy bacon, golden hash browns, and buttered toast',
      icon: '🍳',
    },
    {
      name: 'Avocado Toast + Egg',
      description: 'Smashed avocado on sourdough, topped with a perfectly poached egg',
      icon: '🥑',
    },
    {
      name: 'Buttermilk Pancakes',
      description: 'Stack of three fluffy pancakes with real maple syrup and butter',
      icon: '🥞',
    },
    {
      name: 'Biscuits & Gravy',
      description: 'Homemade buttermilk biscuits smothered in savory sausage gravy',
      icon: '🫓',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-[#B0E0E6]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-chalk text-4xl sm:text-5xl text-[#89CFF0] mb-6">
            Breakfast Favorites
          </h2>
          <div className="w-24 h-1 bg-[#B0E0E6] mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#E8DCC8]"
            >
              <div className="text-5xl mb-4 text-center">{item.icon}</div>
              <h3 className="font-chalk text-2xl text-[#6B5B3E] mb-3 text-center">
                {item.name}
              </h3>
              <p className="text-[#8B6F47] text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
