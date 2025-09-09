// src/lib/gallery.ts
export type GalleryImage = { src: string; caption?: string };

const joinBase = (base: string, path: string) => {
  const b = (base || '/').replace(/\/+$/, '');
  const p = (path || '').replace(/^\/+/, '');
  return `${b}/${p}`;
};

const normalize = (base: string, items: Array<string | GalleryImage>): GalleryImage[] =>
  items
    .map((it) => (typeof it === 'string' ? { src: it } : it))
    .filter((it): it is GalleryImage => !!it && !!it.src)
    .map((it) => ({
      ...it,
      src: it.src.startsWith('http') ? it.src : joinBase(base, it.src),
    }));

export async function loadGallery(): Promise<GalleryImage[]> {
  const base = (import.meta as any).env.BASE_URL || '/';
  const url = joinBase(base, 'content/gallery.json'); // lives in public/content/gallery.json

  try {
    const resp = await fetch(url, { cache: 'no-store' });
    if (resp.ok) {
      const data = await resp.json();
      if (Array.isArray(data?.images) && data.images.length) return normalize(base, data.images);
    }
  } catch {}

  // Fallback to 6 local images in /public/images
  const local = [
    'images/gallery1.jpg',
    'images/gallery2.jpg',
    'images/gallery3.jpg',
    'images/gallery4.jpg',
    'images/gallery5.jpg',
    'images/gallery6.jpg',
  ];
  return normalize(base, local);
}
