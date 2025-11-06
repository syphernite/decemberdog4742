import menuData from '../data/menu';

type MenuItem = {
  name: string;
  price?: string;
  description?: string;
};

export default function MenuSection() {
  // menuData should be an object with a `sections` array: [{ title, items: MenuItem[] }]
  const sections: { title: string; items: MenuItem[] }[] = menuData.sections ?? [];

  return (
    <section id="menu" className="py-20 px-4 bg-gradient-to-br from-white to-[#B0E0E6]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-chalk text-4xl sm:text-5xl text-[#89CFF0] mb-6">Menu</h2>
          <div className="w-24 h-1 bg-[#B0E0E6] mx-auto" />
        </div>

        <div className="space-y-12">
          {sections.map((section, sIdx) => (
            <div key={sIdx}>
              <h3 className="text-2xl font-semibold text-[#6B5B3E] mb-4">{section.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {section.items.map((item: MenuItem, idx: number) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#E8DCC8]">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-chalk text-xl text-[#6B5B3E]">{item.name}</h4>
                        {item.description && <p className="text-[#8B6F47] mt-2">{item.description}</p>}
                      </div>
                      {item.price && <div className="text-lg font-medium text-[#6B5B3E] ml-4">{item.price}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
