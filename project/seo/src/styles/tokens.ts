// Professional monotone design tokens
export const tokens = {
  // Colors - Monotone palette
  colors: {
    background: 'bg-neutral-50',
    surface: 'bg-white',
    surfaceElevated: 'bg-neutral-100',
    border: 'border-neutral-200',
    borderSubtle: 'border-neutral-100',
    text: {
      primary: 'text-neutral-900',
      secondary: 'text-neutral-600',
      tertiary: 'text-neutral-500',
    },
    accent: 'bg-neutral-900',
    accentText: 'text-white',
  },
  
  // Cards and surfaces
  card: 'bg-white border border-neutral-200 rounded-lg shadow-sm',
  cardHover: 'hover:shadow-md hover:border-neutral-300 transition-all duration-300',
  
  // Typography
  heading: {
    h1: 'text-5xl md:text-7xl font-light text-neutral-900 leading-tight tracking-tight',
    h2: 'text-3xl md:text-5xl font-light text-neutral-900 tracking-tight',
    h3: 'text-xl md:text-2xl font-medium text-neutral-900',
    h4: 'text-lg font-medium text-neutral-900',
  },
  
  // Text styles
  text: {
    body: 'text-neutral-600 leading-relaxed',
    bodyLarge: 'text-lg text-neutral-600 leading-relaxed',
    caption: 'text-sm text-neutral-500',
  },
  
  // Buttons
  button: {
    primary: 'px-8 py-4 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2',
    secondary: 'px-8 py-4 border border-neutral-300 text-neutral-900 font-medium rounded-lg hover:bg-neutral-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2',
    ghost: 'px-4 py-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200 focus:outline-none focus:text-neutral-900',
  },
  
  // Form elements
  input: 'w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus:outline-none transition-colors',
  
  // Layout
  container: 'max-w-6xl mx-auto px-6 sm:px-8 lg:px-12',
  section: 'py-20 md:py-32',
  
  // Spacing
  spacing: {
    xs: 'space-y-4',
    sm: 'space-y-6',
    md: 'space-y-8',
    lg: 'space-y-12',
    xl: 'space-y-16',
  },
} as const;