// src/lib/gallery.ts
export type GalleryImage = { src: string; caption?: string };

function joinBase(base: string, path: string) {
  const b = (base || '/').replace(/\/+$/, '');
  const p = (path || '').replace(/^\/+/, '');
  return `${b}/${p}`;
}

function normalizeImages(base: string, items: Array<string | GalleryImage>): GalleryImage[] {
  return items
    .map((it) => (typeof it === 'string' ? { src: it } : it))
    .filter((it) => !!it && !!it.src)
    .map((it) => ({
      ...it,
      src: it.src.startsWith('http') ? it.src : joinBase(base, it.src),
    }));
}

export async function loadGallery(): Promise<GalleryImage[]> {
  const base = (import.meta as any).env.BASE_URL || '/';
  const url = joinBase(base, 'content/gallery.json'); // lives in /public/content/gallery.json

  try {
    const resp = await fetch(url, { cache: 'no-store' });
    if (resp.ok) {
      const data = await resp.json();
      if (data && Array.isArray(data.images) && data.images.length > 0) {
        return normalizeImages(base, data.images);
      }
    }
  } catch {
    // ignore and fall back
  }

  // Fallback to local images placed under /public/images
  const local = [
    'images/gallery1.jpg',
    'images/gallery2.jpg',
    'images/gallery3.jpg',
    'images/gallery4.jpg',
    'images/gallery5.jpg',
  ];
  return normalizeImages(base, local);
}
