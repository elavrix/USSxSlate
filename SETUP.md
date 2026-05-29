# Complete Setup Guide

## Step 1: Project Installation

```bash
cd "USSC × Slate Auto"
npm install
```

This will install all dependencies:
- React 18
- Vite
- Framer Motion (animations)
- Swiper.js (carousel)

## Step 2: Prepare Assets from Dropbox

Your Dropbox link contains ~33 vehicle and brand images.

### Download & Organize

1. Download all images from: [Your Dropbox Link]
2. Extract to a temp folder
3. Organize according to this structure in `public/assets/`:

```
public/assets/
├── images/
│   ├── vehicles/
│   │   ├── slate-pickup-hero.jpg (main hero image)
│   │   ├── slate-pickup.jpg (carousel)
│   │   ├── slate-utility.jpg (carousel)
│   │   ├── slate-service-van.jpg (carousel)
│   │   ├── slate-pickup-gallery.jpg (gallery)
│   │   ├── slate-utility-fleet.jpg (gallery)
│   │   ├── slate-service-van-gallery.jpg (gallery)
│   │   ├── slate-chassis-cab.jpg (gallery)
│   ├── environments/
│   │   └── industrial-warehouse.jpg (hero background)
│   ├── industries/
│   │   ├── utilities.jpg
│   │   ├── government.jpg
│   │   ├── municipal.jpg
│   │   ├── energy.jpg
│   │   ├── logistics.jpg
│   │   └── enterprise.jpg
├── logos/
│   ├── ussc-logo.svg (or .png)
│   └── slate-logo.svg (or .png)
```

### Image Selection Tips

When choosing images from your ~33 assets:

- **Hero vehicle**: Choose the most premium, side-profile truck image (landscape)
- **Carousel vehicles**: Select 3 distinct vehicle types with good lighting
- **Gallery images**: Pick 4 premium vehicle images with varying compositions
- **Industry cards**: Match images to industries (e.g., electrical infrastructure for utilities)
- **Environment**: Choose industrial/logistics facility for warehouse feel
- **Logos**: Use high-res SVG or PNG for crisp rendering

## Step 3: Image Optimization

Before deployment, optimize all images:

```bash
# Install ImageMagick (macOS)
brew install imagemagick

# Batch optimize JPEGs
for file in public/assets/images/**/*.jpg; do
  convert "$file" -quality 85 -strip "$file"
done
```

Or use online tools like:
- TinyPNG (free compression)
- Squoosh.app (Google's tool)

**Target sizes:**
- Hero image: 2-4 MB (large high-res)
- Carousel images: 1.5-2.5 MB each
- Other images: 500KB - 1.5 MB each

## Step 4: Start Development Server

```bash
npm run dev
```

Your site will open at `http://localhost:3000`

The page includes:
- ✅ Premium sticky header
- ✅ 100vh hero section
- ✅ Partnership statement
- ✅ Vehicle carousel (swiper)
- ✅ 6-industry cards
- ✅ Split-screen partnership info
- ✅ 3 benefit panels
- ✅ Procurement timeline
- ✅ Vehicle gallery (masonry)
- ✅ Impact statistics
- ✅ Deployment map
- ✅ Consultation form
- ✅ Premium footer

## Step 5: Customize Content

### Edit Text
Open `src/components/` files and update:
- Headlines
- Descriptions
- Form labels
- Section content

### Update Colors
Edit `src/styles/global.css`:
```css
:root {
  --accent: #C79A3B; /* Change gold color */
  --primary-bg: #0F1115; /* Background */
  /* ... more colors */
}
```

### Update Form
Edit `src/components/Consultation.jsx` to:
- Change form fields
- Add validation
- Connect to backend service

## Step 6: Build for Production

```bash
npm run build
```

Output in `dist/` folder - ready for deployment.

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Connect your GitHub repo
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to Your Server

Upload `dist/` folder contents to your web server.

## Step 7: Responsive Testing

Test on all devices:

```bash
# Desktop
# - Open in browser
# - Resize to 1024px+ width

# Tablet
# - Chrome DevTools → iPad dimensions
# - Test at 768px width

# Mobile
# - Chrome DevTools → Mobile dimensions
# - Test at 480px width
```

## File Structure Reference

```
src/
├── components/          # 13 reusable components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Partnership.jsx
│   ├── VehicleCarousel.jsx (uses Swiper)
│   ├── Industries.jsx
│   ├── WhyPartnership.jsx
│   ├── Benefits.jsx
│   ├── ProcurementJourney.jsx
│   ├── VehicleGallery.jsx
│   ├── Impact.jsx
│   ├── Deployment.jsx
│   ├── Consultation.jsx
│   ├── Footer.jsx
│   └── [Component].css (individual styles)
├── config/
│   └── imageConfig.js   # Image path mappings
├── styles/
│   └── global.css       # Design system & globals
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## Key Features

✨ **Premium Design**
- Dark luxury color scheme
- Large typography
- Generous whitespace
- Glass morphism effects

🎬 **Animations**
- Framer Motion scroll effects
- Swiper carousel transitions
- Smooth button hover states
- Staggered element reveals

📱 **Responsive**
- Mobile: 480px
- Tablet: 768px
- Desktop: 1024px+
- All breakpoints preserved premium feel

⚡ **Performance**
- Optimized images
- Minimal dependencies
- Lazy loading ready
- Production-ready build

## Troubleshooting

### Images not loading?
1. Check file paths in `src/config/imageConfig.js`
2. Verify images exist in `public/assets/`
3. Restart dev server: `npm run dev`
4. Browser cache: Hard refresh (Cmd+Shift+R)

### Carousel not working?
1. Ensure `node_modules` installed: `npm install`
2. Check console for errors
3. Verify Swiper CSS imported in VehicleCarousel.jsx

### Form not submitting?
1. Review `Consultation.jsx` for backend connection
2. Add API endpoint handling
3. Test with browser console

### Mobile layout issues?
1. Check responsive styles in component CSS files
2. Test with Chrome DevTools responsive mode
3. Verify media queries match breakpoints

## Next Steps

1. ✅ Download and organize images
2. ✅ Run dev server
3. ✅ Customize content
4. ✅ Test on devices
5. ✅ Build for production
6. ✅ Deploy

## Support Resources

- React docs: https://react.dev
- Vite docs: https://vitejs.dev
- Framer Motion: https://www.framer.com/motion/
- Swiper.js: https://swiperjs.com

---

**Ready to launch your premium partnership landing page!** 🚀
