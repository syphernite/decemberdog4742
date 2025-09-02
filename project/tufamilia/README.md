# Robert Familia - Mexican Restaurant Website

A production-ready, mobile-first React + Vite + TypeScript + Tailwind + Framer Motion website for Robert Familia Mexican Restaurant.

## Theme & Design

**Aesthetic**: Vibrant Mexican street festival meets upscale cocina
**Colors**: 
- Chili Red (#E53935)
- Marigold (#FFC107) 
- Nopal Green (#2E7D32)
- Cobalt Blue (#1E40AF)
- Off-White Papel (#FFF8F0)
- Charcoal Ink (#111827)

## Features

- **Responsive Design**: Mobile-first with breakpoints for tablet and desktop
- **Smooth Animations**: Framer Motion with scroll-triggered effects and micro-interactions
- **Mexican-Inspired Decorative Elements**: SVG papel picado, Talavera tiles, and chili accents
- **Performance Optimized**: Lazy loading, image optimization, and prefetch on hover
- **SEO Ready**: Semantic HTML, meta tags, and structured data
- **Accessibility**: Focus states, alt text, and reduced-motion support

## Pages

1. **Home**: Hero with parallax effects, signature dishes carousel, and sticky reservation bar
2. **Menu**: Category filtering with animated chips and dish detail modals
3. **Reservations**: Multi-step form with OpenTable integration and localStorage demo
4. **Gallery**: Masonry grid with hover effects and lightbox
5. **About**: Timeline with Talavera nodes and chef highlight
6. **Contact**: Contact form, map integration, and job application modal

## Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router DOM

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Replacing Assets
- **Images**: Update image URLs in components to use your own assets
- **Logo**: Replace the RF monogram in Navbar component
- **Favicon**: Update `/public/favicon.svg`

### Content Updates
- **Menu Items**: Edit the `menuItems` array in `/src/pages/Menu.tsx`
- **Restaurant Info**: Update contact details in Footer and Contact components
- **Timeline**: Modify `timelineEvents` in `/src/pages/About.tsx`

### Reservation Integration
- **OpenTable**: Replace the placeholder button in Reservations with your OpenTable widget
- **Form Processing**: Add backend integration to handle reservation submissions

### Colors & Theming
Colors are defined in `tailwind.config.js` and can be easily customized:
```js
colors: {
  chili: '#E53935',      // Primary brand color
  marigold: '#FFC107',   // Secondary/accent color
  nopal: '#2E7D32',      // Success/positive actions
  cobalt: '#1E40AF',     // Links and secondary actions
  papel: '#FFF8F0',      // Background/light text
  charcoal: '#111827',   // Main text color
}
```

## Performance Notes

The site is optimized for Lighthouse scores of 90+ on mobile:
- Images are properly sized and compressed
- Components are lazy loaded
- Critical CSS is inlined
- Fonts are preloaded
- Reduced motion is respected

## Special Features

- **Papel Picado Animations**: SVG banner animations on page load
- **Parallax Effects**: Subtle parallax on hero elements
- **Micro-interactions**: Button hover effects, card tilts, and ripple animations
- **Confetti Effects**: Success state celebrations
- **Steam Animations**: Decorative SVG effects

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## License

This project is for Robert Familia Restaurant. All rights reserved.