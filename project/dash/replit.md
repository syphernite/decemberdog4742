# Built4You - Digital Business Command Center

## Overview
Built4You is a revolutionary cyber-organic digital agency platform featuring an immersive public website and client dashboard. The design philosophy is "Cyber-Organic Futurism" - combining Blade Runner's cyberpunk aesthetic with Apple's refined minimalism.

## Design System

### Color Palette
- **Base Dark**: #0D0F12 (HSL: 210 16% 6%)
- **Neon Cyan** (Primary): #00F5FF (HSL: 182 100% 50%)
- **Magenta** (Secondary): #FF00C8 (HSL: 313 100% 50%)
- **Electric Purple** (Accent): #8A2BE2 (HSL: 271 76% 53%)

### Typography
- **Primary Font**: Inter, Outfit
- **Accent Font**: Space Grotesk
- **Mono Font**: Space Mono

### Key Design Elements
- Glass-morphism UI with backdrop blur effects
- Neon glow effects on interactive elements
- Smooth Framer Motion animations
- Three.js 3D visualizations
- Particle backgrounds using tsparticles

## Project Structure

### Frontend Architecture
```
client/src/
├── components/
│   ├── GlassCard.tsx           # Reusable glass-morphism card component
│   ├── GradientText.tsx        # Text with gradient effects
│   ├── HeroSection.tsx         # Landing page hero with particles
│   ├── ServiceMatrix.tsx       # 3x3 hexagonal service grid
│   ├── LiveClientPulse.tsx     # Real-time activity feed
│   ├── DigitalGateway.tsx      # Cinematic login portal
│   ├── CentralHologram.tsx     # 3D neural network visualization
│   ├── N8NNexus.tsx           # Circuit board workflow visualization
│   ├── OrbitalMetrics.tsx     # Orbiting metric displays
│   └── MissionControl.tsx     # Task/alert panel
├── pages/
│   ├── HomePage.tsx           # Public website
│   ├── LoginPage.tsx          # Login portal
│   └── DashboardPage.tsx      # Command center dashboard
└── App.tsx                    # Main router
```

### Data Models (shared/schema.ts)
- **Metrics**: Business performance metrics (traffic, conversion, engagement)
- **Workflows**: N8N automation workflow definitions
- **Tasks**: System alerts and pending actions
- **Activities**: Real-time activity feed items
- **Users**: Authentication and business association

## Features Implemented

### Public Website
- ✅ Hero section with interactive particle background
- ✅ Typewriter animation for headlines
- ✅ "Initiate System Scan" CTA with 3-second analysis animation
- ✅ Service Matrix with 3x3 hexagonal grid
- ✅ Hover effects showing live metrics on service cards
- ✅ Live Client Pulse scrolling feed with real-time updates
- ✅ Digital Gateway login with iris scanner animation

### Dashboard (Command Center)
- ✅ Central Hologram - 3D neural network with Three.js
- ✅ N8N Nexus - Animated circuit board showing workflow nodes
- ✅ Data flow visualization with particles
- ✅ Orbital Metrics Display - 4 key metrics with graph expansion on hover
- ✅ Mission Control - Alert-style task panel
- ✅ Glass-morphism UI throughout
- ✅ Smooth Framer Motion animations

## Tech Stack
- **Frontend**: React + Vite + TypeScript
- **Styling**: Tailwind CSS (customized)
- **Animations**: Framer Motion
- **3D Graphics**: Three.js
- **Particles**: @tsparticles/react + @tsparticles/slim
- **UI Components**: Shadcn/ui (customized)
- **Routing**: Wouter
- **State Management**: TanStack React Query

## Integration Architecture
The project is architected for seamless future integration:
- **N8N API**: Modular workflow data layer ready for connection
- **Notion Connector**: Available via Replit integration (connector:ccfg_notion_01K49R392Z3CSNMXCPWSV67AF4)
- **Google Analytics**: Blueprint available for future setup
- **WebSocket Layer**: Architecture prepared for real-time data streaming

## Development Guidelines
See `design_guidelines.md` for complete design system specifications including:
- Glass-morphism implementation
- Animation principles
- Color usage
- Component guidelines
- Responsive strategy

## Current Status
**Phase 1 (Schema & Frontend)**: ✅ Complete - All MVP components built with exceptional visual polish
**Phase 2 (Backend)**: 🔄 In Progress
**Phase 3 (Integration)**: ⏳ Pending

## Notes
- Default theme is dark mode (cyber-organic aesthetic)
- All animations use purpose-driven timing (200ms micro, 400-600ms transitions, 1-2s cinematic)
- Real-time features use mock data generators for demo functionality
- Production-ready for frontend showcase, backend integration pending
