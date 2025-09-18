// Professional monotone design tokens for Tailwind utility composition
export const tokens = {
  // Headings
  heading: {
    h1: 'text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900',
    h2: 'text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900',
    h3: 'text-xl md:text-2xl font-semibold text-neutral-900',
  },

  // Body text
  text: {
    lead: 'text-lg md:text-xl text-neutral-700',
    body: 'text-base text-neutral-700',
    muted: 'text-sm text-neutral-600',
  },

  // Buttons
  button: {
    primary:
      'inline-flex items-center justify-center rounded-full px-5 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors',
    secondary:
      'inline-flex items-center justify-center rounded-full px-5 py-3 bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-colors',
    ghost:
      'inline-flex items-center justify-center rounded-full px-5 py-3 border border-neutral-200 hover:bg-neutral-50 transition-colors',
  },

  // Cards
  card:
    'rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-3',

  // Inputs
  input:
    'w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900/40 outline-none transition',

  // Layout
  container: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-12 md:py-16',

  // Spacing scale
  spacing: {
    xs: 'space-y-4',
    sm: 'space-y-6',
    md: 'space-y-8',
    lg: 'space-y-12',
    xl: 'space-y-16',
  },
} as const;
