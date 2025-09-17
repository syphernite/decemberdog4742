# SeoEcon - Demo SEO Agency Website

A modern, responsive demo website for an SEO agency built with React, TypeScript, and Tailwind CSS. This is a portfolio showcase project with example content only.

## ⚠️ Important Disclaimer

This is a **demo website for portfolio purposes only**. All testimonials, performance claims, and client references are examples and do not represent actual business results. The content must not be presented as actual client work or results.

## Features

- **Responsive Design**: Mobile-first approach supporting screens from 320px+
- **Modern UI**: Dark theme with gradient accents and subtle animations
- **Contact Form**: Integrated with Formspree for form submissions
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features
- **Fast Performance**: Optimized build with minimal dependencies
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## Quick Start

### 1. Environment Setup

Copy the sample environment file and configure it:

```bash
cp .env.sample .env
```

Edit `.env` and set your Formspree endpoint:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
VITE_SHOW_DEMO_BADGE=true
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Formspree Setup

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy the form endpoint URL
3. Add the endpoint to your `.env` file as `VITE_FORMSPREE_ENDPOINT`

The contact form includes:
- Client-side validation
- Spam protection with honeypot field
- Success/error state handling
- Responsive design

## Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Deploy to GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Set source to "GitHub Actions"
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Method 2: Manual Deployment

```bash
npm run build
# Upload the contents of dist/ to your web server
```

## Project Structure

```
src/
├── components/
│   ├── Layout/          # Header, Footer, Layout components
│   ├── Home/           # Home page sections
│   └── Contact/        # Contact form component
├── pages/              # Page components
├── styles/             # Design tokens and utilities
└── App.tsx            # Main app with routing
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_FORMSPREE_ENDPOINT` | Formspree form endpoint URL | Yes |
| `VITE_SHOW_DEMO_BADGE` | Show "Demo" badge in header | No |

## Customization

### Design Tokens

Modify `src/styles/tokens.ts` to customize:
- Color schemes and gradients
- Typography scales
- Spacing and layout
- Component styles

### Content

Update the following files to customize content:
- `src/components/Home/Hero.tsx` - Main headline and CTA
- `src/components/Home/Services.tsx` - Service offerings
- `src/components/Home/Testimonials.tsx` - Client testimonials
- `src/pages/Contact.tsx` - Contact page content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a demo project for portfolio purposes. Feel free to use as a template for your own projects.

## Support

For questions about this demo project, please create an issue in the repository.