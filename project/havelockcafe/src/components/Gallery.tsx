import { Coffee } from 'lucide-react';

export default function Gallery() {
    const images = [
    { alt: 'Cozy cafe interior', bg: 'from-[#B0E0E6] to-white' },
    { alt: 'Fresh breakfast plate', bg: 'from-[#89CFF0] to-[#B0E0E6]' },
    { alt: 'Coffee and pastries', bg: 'from-white to-[#B0E0E6]' },
    { alt: 'Sunny morning atmosphere', bg: 'from-[#B0E0E6] to-[#89CFF0]' },
  ];  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-chalk text-4xl sm:text-5xl text-[#6B5B3E] mb-6">
            A Peek Inside
          </h2>
          <div className="w-24 h-1 bg-[#F4C430] mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-full h-full bg-gradient-to-br ${image.bg} flex items-center justify-center`}>
                <Coffee size={48} className="text-white/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
