# Manuel Food Truck Website

A bold, mobile-first single-page website for Manuel Food Truck built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Mobile-first responsive design** optimized for all devices
- **Bold street-food energy** with clean, uncluttered layout
- **Smooth animations** including truck roll-in, menu card hovers, and section reveals
- **Interactive menu system** with tabbed navigation (Combos / Burgers & Sides)
- **Direct call integration** with prominent call-to-action buttons
- **SMS ordering support** with pre-filled message templates
- **Weekly schedule display** showing food truck locations
- **Performance optimized** with reduced motion support
- **SEO friendly** with proper meta tags and semantic HTML
- **Accessibility compliant** with ARIA labels and keyboard navigation

## Brand System

- **Primary Red**: #C71418
- **Deep Black**: #0B0B0B  
- **White**: #FFFFFF
- **Metal Gray**: #B8BCC2
- **Typography**: Display (Bebas Neue), Body (Inter)
- **Buttons**: Rounded XL with bold borders and soft inner glow

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customization

### Updating Menu Items

Edit `src/data/menuData.ts` to modify menu items, prices, and descriptions:

```typescript
export const menuItems: MenuItem[] = [
  {
    id: 'combo-chicken',
    name: 'Combo Fried Rice with Chicken',
    description: 'Fresh wok-fried rice with tender chicken...',
    price: '$12.99',
    category: 'combos',
    featured: true,
  },
  // Add more items...
];
```

### Updating Contact Information

- Phone numbers: Search and replace `580-771-6373` across all files
- SMS prefill: Update the `href` in FindUs component SMS link
- Location schedule: Modify the `locations` array in `FindUs.tsx`

### Adding Images

1. Add images to `/public/images/` directory
2. Use WebP format for best performance with JPEG fallbacks
3. Update image paths in components as needed

### Customizing Animations

All animations use Framer Motion and respect user's reduced motion preferences:

- **Hero truck roll-in**: Modify initial position in `Hero.tsx`
- **Menu card hovers**: Adjust hover effects in `Menu.tsx`  
- **Section reveals**: Update wipe-reveal animations in each section
- **Button pulses**: Customize pulse timing in component styles

## Performance Features

- **Responsive images** with proper loading optimization
- **Code splitting** for heavy motion libraries
- **Reduced motion support** respects user accessibility preferences
- **Optimized animations** with transform-based movements
- **Clean Tailwind classes** with no external UI dependencies

## Design Philosophy

- **Big, bold, clean** - Make it feel like the red trailer just pulled onto the page
- **Mobile first** - Optimized for phone ordering and quick access
- **Zero clutter** - Every element serves a purpose
- **Strong contrast** - Clear hierarchy and readable text
- **Fast interactions** - Instant call and map access

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- iOS Safari 14+
- Chrome Android 88+

## License

Private project for Manuel Food Truck. All rights reserved.

## Contact

For technical support or customization requests, contact the development team.