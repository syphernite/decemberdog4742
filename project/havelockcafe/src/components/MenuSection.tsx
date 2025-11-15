import { useState } from 'react';
import menuData from '../data/menu.ts';

type MenuItem = {
  name: string;
  price?: string;
  description?: string;
};

export default function MenuSection() {
  const sections: { title: string; items: MenuItem[] }[] = menuData.sections ?? [];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['All', ...sections.map(s => s.title)];

  return (
    <div className="bg-gradient-to-br from-white to-[#B0E0E6]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="font-chalk text-4xl sm:text-5xl text-[#89CFF0] mb-4">Menu</h2>
          <div className="w-24 h-1 bg-[#B0E0E6] mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === 'All' ? null : cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === (cat === 'All' ? null : cat)
                  ? 'bg-[#89CFF0] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {sections
            .filter(section => !selectedCategory || selectedCategory === section.title)
            .map((section, sIdx) => (
              <div key={sIdx}>
                <h3 className="text-2xl font-semibold text-[#6B5B3E] mb-2">{section.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {section.items.map((item: MenuItem, idx: number) => (
                    <div key={idx} className="bg-white rounded-2xl p-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#E8DCC8]">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-chalk text-lg text-[#6B5B3E]">{item.name}</h4>
                          {item.description && <p className="text-[#8B6F47] mt-1 text-sm">{item.description}</p>}
                        </div>
                        {item.price && <div className="text-base font-medium text-[#6B5B3E] ml-2">{item.price}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
