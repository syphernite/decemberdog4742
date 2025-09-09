import React from 'react';
export function JsonLdSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Barbershop",
    "name": "Copperhead Cutz",
    "image": (import.meta as any).env.BASE_URL + "logo.png",
    "address": { "@type": "PostalAddress", "addressLocality": "Lawton", "addressRegion": "OK" },
    "url": "https://booksy.com/en-us/1282324_copperhead-cutz_barber-shop_32141_lawton",
    "sameAs": [
      "https://www.facebook.com/copperheadcutz/",
      "https://www.kswo.com/2025/06/19/good-news-local-barber-aims-help-community-with-free-cuts-those-need/"
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
