
export type GalleryImage = { src: string; caption?: string };
export async function loadGallery(): Promise<GalleryImage[]> {
  try {
    const resp = await fetch(import.meta.env.BASE_URL + 'src/content/gallery.json', { cache: 'no-store' });
    if (resp.ok) {
      const data = await resp.json();
      if (Array.isArray(data.images)) {
        return data.images.map((url: string) => ({ src: url }));
      }
    }
  } catch (_e) {}
  const base = (import.meta as any).env.BASE_URL || '/';
  const local = ['gallery1.jpg','gallery2.jpg','gallery3.jpg','gallery4.jpg','gallery5.jpg'].map(n => (base + 'images/' + n));
  return local.map(src => ({ src }));
}
