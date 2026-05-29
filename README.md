# USSC × Slate Auto - Premium Landing Page

A production-ready, premium React landing page for the USSC × Slate Auto strategic commercial EV partnership.

## 🎨 Design Concept

This landing page is designed to feel like:
- Apple keynote presentation
- Tesla Fleet Solutions
- Rivian Commercial
- Stripe Enterprise
- McKinsey Digital

**Core principles:** Calm, premium, spacious, and cinematic.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
cd "USSC × Slate Auto"
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx / Header.css
│   ├── Hero.jsx / Hero.css
│   ├── Partnership.jsx / Partnership.css
│   ├── VehicleCarousel.jsx / VehicleCarousel.css
│   ├── Industries.jsx / Industries.css
│   ├── WhyPartnership.jsx / WhyPartnership.css
│   ├── Benefits.jsx / Benefits.css
│   ├── ProcurementJourney.jsx / ProcurementJourney.css
│   ├── VehicleGallery.jsx / VehicleGallery.css
│   ├── Impact.jsx / Impact.css
│   ├── Deployment.jsx / Deployment.css
│   ├── Consultation.jsx / Consultation.css
│   ├── Footer.jsx / Footer.css
├── config/
│   ├── imageConfig.js (image path mappings)
├── styles/
│   ├── global.css (design system & globals)
├── App.jsx
├── main.jsx
```

## 🎯 Sections Overview

### 1. Header (Sticky)
- Premium glassy navbar
- USSC logo (left)
- Navigation menu (center)
- Slate logo + CTA button (right)
- Smooth scroll animations

### 2. Hero Section (100vh)
- Asymmetrical layout
- Large headline + subheadline
- Two CTA buttons
- Massive vehicle image (right)
- 4 floating KPI pills below

### 3. Partnership Statement (80vh)
- Centered logos (USSC × Slate)
- Single powerful statement
- Minimal, lots of whitespace

### 4. Vehicle Carousel (100vh)
- Swiper.js carousel with fade effect
- 3 vehicle types (Pickup, Utility, Service)
- Vehicle specs with metrics
- Custom navigation controls

### 5. Industries (Full-width grid)
- 6 large industry cards
- Editorial images
- Tiny gold labels
- Hover animations

### 6. Why Partnership (Split-screen)
- USSC expertise (left)
- Slate innovation (right)
- Center illuminated connection line
- Minimal text, maximum impact

### 7. Benefits (3 panels)
- Lower Operating Costs
- Simplified Procurement
- Future-Ready Electrification
- Large icons, minimal descriptions
- Hover state with glow

### 8. Procurement Journey (Timeline)
- 6 steps with numbered circles
- Thin gold connecting line
- One phrase per step
- Responsive vertical on mobile

### 9. Vehicle Gallery (Masonry)
- 4 oversized image cards
- Varying aspect ratios
- Premium shadows
- Image-focused design

### 10. Impact Section
- 4 monumental KPI statistics
- Investor presentation style
- Gold gradient text
- Large typography

### 11. Deployment (Map)
- USA-style visualization
- Glowing deployment points
- Minimal text
- Animated pulsing dots

### 12. Consultation Form (80vh)
- Centered glass form
- Premium input styling
- 7 form fields
- Success message animation

### 13. Footer
- Minimal layout
- Logo + navigation + contact
- Massive low-opacity background text
- Legal links

## 🎨 Design System

### Colors
```css
--primary-bg: #0F1115
--secondary-bg: #1A1D22
--accent: #C79A3B
--text: #FFFFFF
--text-muted: #A9B0BA
--border: rgba(255,255,255,0.08)
```

### Typography
- Headlines: 2.5rem - 5rem (fluid)
- Body: 1rem - 1.25rem (fluid)
- Font: System UI stack
- Letter spacing: -0.02em headlines, 0.3-0.5px body

### Spacing
- Large section padding: 100px
- Gap between elements: 2-4rem
- Generous whitespace throughout

### Effects
- Soft gradients
- Premium shadows
- Subtle parallax
- Smooth transitions (0.3s ease)
- Framer Motion animations on scroll

## 📸 Image Setup

The Dropbox folder contains ~33 vehicle and brand images.

### Organization
Create this structure in `public/assets/`:

```
public/
├── assets/
│   ├── images/
│   │   ├── vehicles/
│   │   ├── environments/
│   │   ├── industries/
│   ├── logos/
```

### Configuration
Update paths in `src/config/imageConfig.js`:

```javascript
export const imageConfig = {
  hero: {
    vehicleMain: '/assets/images/vehicles/slate-pickup-hero.jpg',
    // ... more paths
  }
}
```

Then import in components:

```javascript
import { imageConfig } from '@/config/imageConfig'

// Use:
<img src={imageConfig.hero.vehicleMain} alt="Vehicle" />
```

## 🛠 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Swiper.js** - Carousel
- **CSS Modules / Vanilla CSS** - Styling

## 📱 Responsive Design

- **Desktop** (1024px+): Full premium cinematic experience
- **Tablet** (768px - 1023px): Large visuals, maintained spacing
- **Mobile** (< 768px): Stacked sections, clean layout

All breakpoints maintain premium spacing and visual hierarchy.

## ✨ Key Features

- ✅ Premium, enterprise-grade design
- ✅ Fully responsive
- ✅ Smooth scroll animations
- ✅ Glass morphism effects
- ✅ Glowing accents
- ✅ Image-focused sections
- ✅ Minimal text, maximum impact
- ✅ Production-ready
- ✅ Easy to customize

## 🔧 Customization

### Change Colors
Edit `src/styles/global.css`:
```css
:root {
  --accent: #C79A3B; /* Update here */
}
```

### Add/Remove Sections
Edit `src/App.jsx`:
```javascript
import NewComponent from './components/NewComponent';

function App() {
  return (
    <>
      <Header />
      <NewComponent /> {/* Add here */}
    </>
  )
}
```

### Update Content
Each component accepts content as props or has hardcoded data. 
Search for component files and update text/images as needed.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the dist/ folder
```

### Netlify
```bash
npm run build
# Connect your repo and deploy
```

### Any Static Host
```bash
npm run build
# Upload dist/ folder contents
```

## 📝 Performance

- Optimized images (placeholder system for development)
- Lazy loading with Intersection Observer
- CSS animations for better performance
- Minimal JavaScript dependencies
- Production-ready bundle

## 🎯 Best Practices

1. **Images**: Always optimize and compress before deployment
2. **Forms**: Connect Consultation form to backend service
3. **Analytics**: Add Google Analytics / Mixpanel tracking
4. **SEO**: Update meta tags in `index.html`
5. **Accessibility**: Test with screen readers

## 📖 Development Notes

- Use CSS variables for theming
- Keep component files under 300 lines
- Use Framer Motion for scroll animations
- Test on mobile devices before deploy
- Lighthouse score target: 90+

## 📞 Support

For issues or questions about the landing page structure, refer to individual component files. Each file is well-commented and follows React best practices.

---

**Built with ❤️ for USSC × Slate Auto Partnership**
