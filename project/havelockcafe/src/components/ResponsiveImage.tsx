import { useEffect, useState } from 'react';

type Props = {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
};

export default function ResponsiveImage({ src, alt = '', className, width, height }: Props) {
  const [webpUrl, setWebpUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!src) return;

    // try to derive a .webp variant of the imported asset URL
    const candidate = src.replace(/\.png(\?.*)?$/i, '.webp');
    // try HEAD to see if it exists (dev server will 404 if not present)
    fetch(candidate, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) setWebpUrl(candidate);
      })
      .catch(() => {
        // ignore network errors
      });
  }, [src]);

  if (webpUrl) {
    return (
      <picture className={className}>
        <source srcSet={webpUrl} type="image/webp" />
        <img src={src} alt={alt} width={width} height={height} loading="lazy" style={{ display: 'block' }} />
      </picture>
    );
  }

  return <img src={src} alt={alt} className={className} width={width} height={height} loading="lazy" />;
}
