# Built4You Command Center - Design Guidelines

## Design Philosophy
**Cyber-Organic Futurism**: A fusion of Blade Runner's cyberpunk aesthetic with Apple's refined minimalism. Sharp, technical glass-morphism elements contrast with fluid, biomorphic shapes creating an immersive digital ecosystem experience.

## Color System
**Foundation**
- Base Dark: `#0D0F12` (rich near-black, not pure black)
- Surface Dark: `#161A1F`
- Elevated Surface: `#1E2329`

**Electric Accents**
- Neon Cyan: `#00F5FF` (primary interactive elements, data pulses)
- Magenta: `#FF00C8` (secondary highlights, success states)
- Electric Purple: `#8A2BE2` (tertiary accents, gradients)

**Functional Colors**
- Success Glow: Cyan with 40% opacity blur
- Alert Pulse: Magenta with pulsing animation
- Neutral Text: `#E5E7EB` (high contrast on dark)
- Muted Text: `#9CA3AF` (secondary information)

**Gradient Applications**
- Primary Gradient: Cyan → Purple (headlines, CTAs)
- Data Flow Gradient: Purple → Magenta (circuit animations)
- Glass Tint: White 10% with backdrop blur

## Typography System
**Primary Font**: Inter or Outfit (modern, geometric, excellent at small sizes for data displays)
**Accent Font**: Space Grotesk or Orbitron (technical, futuristic for headlines)

**Type Scale**
- Hero Display: 4.5rem/72px (tight leading, gradient applied)
- Section Headers: 3rem/48px (Space Grotesk, tracking wide)
- Subsection Titles: 1.5rem/24px (medium weight)
- Body Text: 1rem/16px (Inter, relaxed leading for readability)
- Data Labels: 0.875rem/14px (uppercase, tracked)
- Micro Text: 0.75rem/12px (system metrics, timestamps)

## Layout Architecture
**Spacing System**: Use Tailwind units 2, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Public Website Grid**
- Max container: 1280px
- Section padding: py-20 md:py-32
- Column gaps: gap-8 for hexagonal grids
- Asymmetric layouts encouraged (avoid centered predictability)

**Dashboard Layout**
- Full viewport immersive experience (no traditional containers)
- Central hologram: 60% viewport width
- Orbital panels: positioned absolutely around hologram
- Side panels: glass-morphism cards floating over dark canvas
- Z-index layers: Background (-1), Hologram (0), Metrics (10), Panels (20), Modals (30)

## Glass-Morphism System
**Standard Glass Card**
```
Background: rgba(255, 255, 255, 0.05)
Backdrop Filter: blur(12px) saturate(180%)
Border: 1px solid rgba(255, 255, 255, 0.1)
Box Shadow: 0 8px 32px rgba(0, 0, 0, 0.3)
```

**Elevated Glass (interactive elements)**
```
Background: rgba(255, 255, 255, 0.08)
Backdrop Filter: blur(16px)
Border: 1px solid rgba(0, 245, 255, 0.2) /* Cyan glow */
Box Shadow: 0 12px 48px rgba(0, 245, 255, 0.15)
```

## Component Library

### Hero Section (Public Site)
- Full viewport height with interactive particle background (Three.js)
- Particles form business icons on mouse movement
- Typewriter animation for headline (60-80 char/second speed)
- "Initiate System Scan" CTA button with glowing border, 3-second analysis animation on click
- Glass-morphism overlay for text readability

### Service Matrix (Hexagonal Grid)
- 3x3 hexagonal cards using clip-path
- Base size: 240px width, 32px gap
- Hover state: scale(1.05) + cyan glow + side panel data viz
- Each hex contains icon, title, micro-description
- Side animation panel: 400px width, shows live metrics for hovered service

### Live Client Pulse Feed
- Scrolling marquee-style or vertical ticker
- Each item: glass card with activity text + timestamp
- Color-coded by activity type (lead=cyan, sale=magenta, engagement=purple)
- Auto-refresh every 5 seconds with smooth fade transitions

### Digital Gateway Login
- Circular iris scanner design (400px diameter)
- Animated concentric rings on hover
- Click triggers full-screen transition with "powering up" animation sequence
- 2.5-second cinematic transition to dashboard

### Central Hologram (Dashboard)
- Three.js 3D neural network/tree visualization
- Root nodes: foundational services (larger, static glow)
- Branch nodes: growth metrics (animated pulses on data updates)
- Particle connections between nodes showing data flow
- Real-time bloom effects on new leads/sales
- Interactive: click nodes for drill-down details

### N8N Nexus Panel
- Animated circuit board layout with flowing "electricity"
- Each workflow node represented as circuit component
- Live data pulses (cyan particles) flow through active paths
- Click node: expand to show logs in glass modal
- Pause button: dims circuit segment with red overlay

### Orbital Metrics Display
- 4-6 "planets" orbiting central hologram
- Each planet: small graph preview (150px sphere)
- Hover: enlarges to 400px with detailed chart
- Orbit speed correlates to metric change rate
- Color-coded orbits matching metric type

### Mission Control Task Panel
- Right-side fixed panel (360px width)
- Alert-style cards with priority color bars
- "Acknowledge" and "Resolve" buttons with satisfying click animations
- Badge count for pending tasks

### Omni-Channel Inbox
- Left-side slide-out panel (480px width)
- Channel tabs with unread indicators
- Message list with sender, preview, timestamp
- AI-suggested quick replies as chips below message
- Glass-morphism throughout

## Animation Principles
**Timing**: Use 200ms for micro-interactions, 400-600ms for transitions, 1-2s for cinematic moments
**Easing**: Cubic-bezier(0.4, 0.0, 0.2, 1) for most, spring physics for playful elements
**Purpose**: Every animation communicates state change or guides attention

**Key Animations**
- Particle systems: constant subtle motion
- Data pulses: travel from source to destination at 2s duration
- Card hovers: lift + glow in 200ms
- Page transitions: cinematic wipes/fades at 800ms
- Success states: bloom/expand effect at 400ms

## Imagery & Visual Assets
**Hero Background**: Abstract cyber-cityscape or digital neural network (dark with electric highlights)
**Service Icons**: Minimalist line icons with neon stroke, 64px size
**3D Elements**: All via Three.js (no static 3D images)
**Data Visualizations**: Real-time generated graphs using D3.js or Chart.js with custom neon styling

## Responsive Strategy
**Desktop-First Philosophy** (dashboard is desktop-optimized)
- Desktop (1920px): Full immersive experience
- Laptop (1440px): Slightly compressed orbital radius
- Tablet (1024px): Switch to tabbed interface for panels
- Mobile (768px): Linear vertical stack, simplified visualizations

**Public Site**: Fully responsive
- Hexagonal grid: 3 cols → 2 cols → 1 col
- Particle background: reduced complexity on mobile

## Accessibility Considerations
- Maintain 4.5:1 contrast ratio for all text on glass surfaces
- Keyboard navigation for all interactive elements
- Focus states: cyan outline with 3px offset
- Reduced motion mode: disable particle systems and complex animations
- ARIA labels for all dashboard visualizations

## Technical Implementation Notes
- Glass-morphism requires backdrop-filter support (graceful degradation)
- Particle backgrounds should pause when tab inactive (performance)
- WebSocket connections for real-time updates with reconnection logic
- Modular API integration layer for n8n, Notion, Google Analytics
- Component-based architecture (React/Vite) with isolated, reusable elements