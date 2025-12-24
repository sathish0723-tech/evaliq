# Evaliq Landing Page

A modern, animated landing page for Evaliq - an intelligent student management platform. Built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Pixel-perfect UI** matching the design screenshots
- 🎬 **Smooth animations** with Framer Motion (fade-in, slide-up, scale)
- 🎯 **Micro-interactions** on buttons (hover, click, ripple effects)
- 🌊 **Background animations** (gradient movement)
- 📱 **Fully responsive** design for desktop, tablet, and mobile
- ♿ **Accessible** with reduced motion support
- 🚀 **Modern SaaS-style UI** with soft shadows and rounded corners

## Tech Stack

- **Next.js 14** - React framework with App Router
- **JavaScript/JSX** - Component development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Cloudinary** - Image hosting and optimization

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory with your Cloudinary credentials:
```env
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
```

3. Upload your logo to Cloudinary:
   - Upload your logo image to your Cloudinary account
   - Note the public ID (e.g., if your image URL is `https://res.cloudinary.com/difauucm4/image/upload/logo.png`, the public ID is `logo`)
   - Update the `getCloudinaryImageUrl('logo', ...)` calls in `Header.jsx` and `Footer.jsx` with your actual image public ID

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main landing page
├── components/
│   ├── Header.tsx       # Navigation header with logo
│   ├── Hero.tsx         # Hero section with CTA
│   ├── WhyChooseEvaliq.tsx  # Features section
│   ├── HowItWorks.tsx   # Step-by-step guide
│   └── Footer.tsx       # Footer with links
└── package.json
```

## Animation Features

- **Entrance animations**: Sections fade in and slide up when scrolled into view
- **Hover effects**: Buttons and cards scale and glow on hover
- **Staggered animations**: Children elements animate in sequence
- **Background gradients**: Subtle animated gradients for depth
- **Micro-interactions**: Arrow icons pulse, buttons have ripple effects

## Customization

### Colors

The primary accent color is green (`green-400` to `green-500`). You can customize this in Tailwind classes throughout the components or update the Tailwind config.

### Animations

All animations use Framer Motion. You can adjust timing, easing, and effects in each component's motion props.

### Content

Update the content in each component file:
- `Hero.tsx` - Main headline and description
- `WhyChooseEvaliq.tsx` - Feature cards
- `HowItWorks.tsx` - Step-by-step process
- `Footer.tsx` - Footer links and branding

## Performance

- Optimized with Next.js automatic code splitting
- Images and assets are optimized
- Animations respect `prefers-reduced-motion` for accessibility

## License

This project is created for Evaliq platform.

# evaliq
