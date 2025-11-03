# Havelock Cafe Website Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based with Custom Aesthetic
Drawing inspiration from successful cafe/restaurant websites like Bluestone Lane, Sqirl, and local cafe designs, while maintaining the specific warm, small-town character requested.

**Core Principle:** Create an inviting, community-focused digital presence that makes visitors feel the cafe's warmth before they walk through the door.

## Typography System

**Font Families:**
- Headings: Google Fonts "Playfair Display" or "Merriweather" (serif, warm and welcoming)
- Body Text: Google Fonts "Inter" or "Nunito Sans" (clean sans-serif, highly legible)
- Accent/Menu Items: "Lora" (subtle serif for menu items to add elegance)

**Hierarchy:**
- Hero Headline: text-5xl lg:text-6xl xl:text-7xl, font-bold
- Section Headers: text-3xl lg:text-4xl, font-semibold
- Subsection Headers: text-xl lg:text-2xl, font-medium
- Body Text: text-base lg:text-lg, font-normal, leading-relaxed
- Menu Items: text-lg, font-medium
- Captions/Small Text: text-sm, font-normal

## Layout & Spacing System

**Spacing Units:** Use Tailwind's 4, 6, 8, 12, 16, 20, and 24 units (e.g., p-4, mb-8, space-y-12)

**Section Padding:**
- Mobile: py-12 px-4
- Desktop: py-20 lg:py-24 px-6 lg:px-8

**Container Widths:**
- Full-width sections: w-full with max-w-7xl mx-auto
- Content sections: max-w-6xl mx-auto
- Menu/text content: max-w-4xl mx-auto

**Grid Systems:**
- Menu items: grid-cols-1 md:grid-cols-2 gap-8
- Features/highlights: grid-cols-1 md:grid-cols-3 gap-6
- Gallery: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4

## Component Library

### Navigation
**Desktop:** Horizontal navigation bar with logo left, menu items center-right (Home, Menu, About, Hours & Location, Contact). Fixed or sticky on scroll with subtle shadow.

**Mobile:** Hamburger menu with slide-in drawer, smooth transitions.

### Hero Section
**Full-width hero** (80vh-90vh) featuring a large, inviting cafe exterior/interior photograph with:
- Centered headline overlay: "Welcome to Havelock Cafe"
- Subheading: "Fresh Breakfast & Lunch in the Heart of Havelock"
- Primary CTA button with blurred background: "View Our Menu"
- Operating hours badge in corner
- Gentle overlay to ensure text readability

### Menu Display
**Structured menu layout:**
- Category headers (Breakfast, Lunch, Beverages)
- Two-column grid on desktop, single column on mobile
- Each item: Name (bold), description (lighter), price (prominent)
- Section dividers with decorative elements
- Featured/signature items highlighted with subtle badge or border

### Hours & Location
**Two-column layout** (desktop) with:
- Left: Interactive embedded Google Maps (responsive iframe)
- Right: Operating hours table, address, phone number with click-to-call, directions link

### Image Gallery
**Masonry-style grid** showcasing:
- Interior shots: wooden tables, natural lighting, local artwork
- Exterior: signboard, outdoor seating area
- Food photography: signature dishes
- Hover effects: subtle zoom or overlay with caption

### Contact Section
**Split layout:**
- Contact form (left): Name, Email, Phone, Message fields with submit button
- Information card (right): Phone, email, social media icons, quick response time note

### Footer
Multi-column footer with:
- Logo and tagline
- Quick links (Menu, About, Contact)
- Hours summary
- Address and phone
- Social media icons
- Newsletter signup (optional)

## Cards & Content Blocks

**Feature Cards:** Rounded corners (rounded-lg), subtle shadows (shadow-md), padding (p-6), hover lift effect (hover:shadow-lg transition)

**Menu Item Cards:** Clean separation with border-b or subtle background cards, consistent spacing between items

**Testimonial Cards:** Customer quotes with name attribution, star ratings, photo (if available)

## Buttons & CTAs

**Primary Buttons:** Rounded (rounded-full or rounded-lg), medium padding (px-8 py-3), bold text, prominent placement

**Secondary Buttons:** Outlined style or subtle background, same sizing as primary

**Buttons on Images:** Implement backdrop-blur effect for background, white or light text

## Images Strategy

**Required Images:**
1. **Hero Image:** Large, high-quality exterior or interior shot showing the cafe's welcoming atmosphere (1920x1080 minimum)
2. **About Section:** 2-3 interior photos showing wooden tables, natural light, artwork
3. **Gallery Section:** 8-12 images mixing interior, exterior, and food photography
4. **Background Textures:** Subtle wood grain or textured patterns for section backgrounds (optional)

**Image Treatment:** Warm color grading to match earth-tone palette, consistent aspect ratios within sections

## Animations & Interactions

**Minimal, purposeful animations:**
- Smooth scroll behavior for navigation links
- Fade-in on scroll for section content (subtle, using Intersection Observer)
- Button hover states with smooth transitions
- Menu hover effects (slight scale or color shift)
- Gallery image hover with overlay reveal

**No carousel/slider animations** unless specifically needed for testimonials

## Accessibility

- High contrast ratios for text readability
- Focus states for all interactive elements (ring-2 ring-offset-2)
- Semantic HTML structure (header, nav, main, section, footer)
- Alt text for all images
- ARIA labels for icon buttons and navigation
- Keyboard navigation support throughout

## Responsive Breakpoints

**Mobile-first approach:**
- Base (mobile): Single column, stacked sections
- md (768px): Two-column layouts where appropriate
- lg (1024px): Full desktop layout, multi-column grids
- xl (1280px+): Maximum content width with generous margins

## Page Structure

**Homepage:** Hero → About/Welcome section → Featured menu highlights → Hours snapshot → Gallery preview → Contact CTA → Footer

**Menu Page:** Hero header → Category navigation → Menu sections by category → Dietary info footnote

**About Page:** Story section with images → Mission/values → Community involvement → Team (if applicable)

**Hours & Location:** Map + hours → Directions → Parking info → Special hours notices

**Contact Page:** Form + info → FAQ section → Social media links

This design creates a warm, approachable digital presence that reflects Havelock Cafe's cozy atmosphere while ensuring excellent usability and mobile responsiveness.