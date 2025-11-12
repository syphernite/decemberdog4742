// This component will eagerly import any images placed into src/assets/gallery
// (png/jpg/jpeg/webp/svg). If none are present it shows a helpful upload hint.
export default function FeaturedGallery() {
  // Use Vite's import.meta.globEager to pick up images only from src/assets/images
  const glob = (import.meta as any).globEager;
  const modules = glob?.('../assets/images/*.{png,jpg,jpeg,webp,svg}') || {};

  const images: { src: string; name: string }[] = Object.keys(modules)
    .map((key: string) => {
      const mod = (modules as any)[key];
      const src = mod?.default || '';
      if (!src) return null;
      const parts = key.split('/');
      const rawName = parts[parts.length - 1] || key;
      const name = rawName.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
      return { src, name };
    })
    .filter(Boolean) as { src: string; name: string }[];

  return (
    <section className="my-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-cyan-800 mb-4">Featured Photos</h3>
  <p className="text-cyan-700 mb-6">A selection of our favorite shots — images are loaded from <code>src/assets/images</code>.</p>

        {images.length === 0 ? (
          <div className="bg-white/80 rounded-2xl p-8 shadow-md">
            <p className="text-cyan-800">No gallery images found in <code>src/assets/images</code>. Place images there (png, jpg, webp, svg) and they will show up here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((im, i) => (
              <figure key={i} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition">
                <div className="aspect-[4/3] bg-gray-100">
                  <img src={im.src} alt={im.name} className="w-full h-full object-cover" />
                </div>
                <figcaption className="p-3 text-left">
                  <div className="text-sm font-semibold text-cyan-900">Featured</div>
                  <div className="text-xs text-cyan-700 truncate" title={im.name}>{im.name}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
