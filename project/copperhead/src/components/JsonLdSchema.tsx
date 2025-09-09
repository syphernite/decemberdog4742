import { motion } from 'framer-motion'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import siteData from '../content/site.json';

export const JsonLdSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://copperheadcuts.com/",
    "name": siteData.business.name,
    "description": "Professional mobile barber service bringing quality cuts directly to you.",
    "url": "https://copperheadcuts.com/",
    "telephone": siteData.business.phone,
    "email": siteData.business.email,
    "areaServed": {
      "@type": "City",
      "name": siteData.business.city
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 40.7128,
        "longitude": -74.0060
      },
      "geoRadius": siteData.business.radius
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Barber Services",
      "itemListElement": siteData.services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        },
        "price": service.price.replace(/[^0-9.]/g, ''),
        "priceCurrency": "USD",
        "position": index + 1
      }))
    },
    "sameAs": [
      siteData.business.instagram
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "paymentAccepted": ["Cash", "Credit Card"],
    "priceRange": "$25-$55"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};