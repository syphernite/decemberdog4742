import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO: React.FC = () => {
  const location = useLocation();
  
  const getPageData = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'Shine Xpress - Premium Mobile Car Detailing | We Come To You',
          description: 'Professional mobile car detailing services delivered to your door. Interior, exterior, and ceramic coating packages. Fully insured with satisfaction guarantee.',
          keywords: 'mobile car detailing, car wash, ceramic coating, auto detailing, mobile service'
        };
      case '/services':
        return {
          title: 'Car Detailing Packages & Booking | Shine Xpress Mobile Service',
          description: 'Choose from Basic, Deluxe, Ultimate, and Ceramic packages. Book your mobile car detailing service online. We bring water, power, and professional equipment.',
          keywords: 'car detailing packages, mobile detailing booking, ceramic coating, interior detailing'
        };
      case '/results':
        return {
          title: 'Before & After Results | Shine Xpress Car Detailing Gallery',
          description: 'See stunning before and after results from our mobile car detailing services. Over 500 cars detailed on-site with guaranteed satisfaction.',
          keywords: 'car detailing results, before after photos, mobile detailing gallery'
        };
      default:
        return {
          title: 'Shine Xpress - Premium Mobile Car Detailing',
          description: 'Professional mobile car detailing services',
          keywords: 'mobile car detailing, auto detailing'
        };
    }
  };

  const { title, description, keywords } = getPageData();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Shine Xpress" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* JSON-LD Structured Data */}
      {location.pathname === '/' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shine Xpress",
            "description": "Premium mobile car detailing services",
            "url": window.location.origin,
            "telephone": "(555) 123-SHINE",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Metro Area",
              "addressRegion": "State",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "40.7128",
                "longitude": "-74.0060"
              },
              "geoRadius": "25"
            },
            "serviceType": ["Car Detailing", "Mobile Car Wash", "Ceramic Coating"],
            "openingHours": "Mo,Tu,We,Th,Fr,Sa 08:00-18:00"
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;