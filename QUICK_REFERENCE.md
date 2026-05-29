# Quick Reference Card

Print or bookmark this for quick access during development.

## 🚀 Commands

```bash
npm install          # Install dependencies
npm run dev         # Start dev server (localhost:3000)
npm run build       # Build for production
npm run preview     # Preview production build
```

## 📁 Key File Locations

| What | Where |
|------|-------|
| Main App | `src/App.jsx` |
| Global Styles | `src/styles/global.css` |
| Components | `src/components/` |
| Images | `public/assets/` |
| Config | `src/config/imageConfig.js` |

## 🎨 Color Variables

```css
--primary-bg: #0F1115
--secondary-bg: #1A1D22
--accent: #C79A3B
--text: #FFFFFF
--text-muted: #A9B0BA
--border: rgba(255,255,255,0.08)
```

## 📐 Responsive Breakpoints

```css
/* Desktop */
@media (max-width: 1024px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Mobile */
@media (max-width: 480px) { }
```

## 🧩 Components

```jsx
<Header />              // Sticky nav
<Hero />               // 100vh hero
<Partnership />        // Logo statement
<VehicleCarousel />    // Carousel (Swiper)
<Industries />         // 6 industry cards
<WhyPartnership />     // Split-screen
<Benefits />           // 3 panels
<ProcurementJourney /> // Timeline
<VehicleGallery />     // Masonry gallery
<Impact />             // Statistics
<Deployment />         // Map visualization
<Consultation />       // Contact form
<Footer />             // Footer
```

## 🎬 Common Animations

```jsx
// Fade in on scroll
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>

// Staggered children
variants={{
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}}
```

## 🖼️ Image Setup

```
public/assets/
├── images/
│   ├── vehicles/
│   ├── environments/
│   └── industries/
└── logos/
```

Usage:
```jsx
<img src="/assets/images/vehicles/name.jpg" alt="Description" />
```

## 📝 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Start here |
| `SETUP.md` | Complete setup |
| `COMPONENT_GUIDE.md` | Component reference |
| `DEPLOYMENT_CHECKLIST.md` | Launch checklist |
| `PROJECT_SUMMARY.md` | Project overview |

## 🔧 Edit Quick Links

| To Change | File | Line |
|-----------|------|------|
| Headlines | Component file | ~20 |
| Colors | `global.css` | 2-8 |
| Spacing | `global.css` | 15-20 |
| Images | `imageConfig.js` | All |
| Form fields | `Consultation.jsx` | 40-100 |
| Navigation | `Header.jsx` | 20 |

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not loading | Check `public/assets/` folder structure |
| Styles not applying | Clear cache (Cmd+Shift+R) |
| Dev server won't start | Run `npm install` again |
| Console errors | Check for typos in component files |

## 📱 Responsive Testing

```
Desktop: 1920px, 1440px, 1024px
Tablet:  768px
Mobile:  480px, 375px
```

Use Chrome DevTools → Responsive Device Mode

## ⚙️ Dev Server URL

```
http://localhost:3000
```

(Auto-opens in browser when you run `npm run dev`)

## 🎯 Deployment

```bash
npm run build        # Creates dist/ folder

# Deploy dist/ folder to:
- Vercel (recommended)
- Netlify
- Your web server
```

## 🎨 Edit Styles

**Global theme:**
```
src/styles/global.css
```

**Component styles:**
```
src/components/ComponentName.css
```

## 📊 Design System

- **Font:** System UI (Apple/SF Pro)
- **Size scale:** 1rem base (16px)
- **Color mode:** Dark luxury
- **Spacing unit:** 1rem (16px)

## 🔐 Environment Variables

Create `.env` from `.env.example`:
```
VITE_API_URL=your_url
VITE_APP_NAME=USSC × Slate Auto
```

## 🚀 Performance Targets

- Lighthouse score: 90+
- Load time: < 3s
- Images: < 2MB each
- Mobile FCP: < 2.5s

## 📚 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.16",
  "swiper": "^10.1.0"
}
```

## 🎁 Bonus Tips

1. **Use CSS variables** for everything
2. **Test on mobile** before desktop
3. **Optimize images** before deployment
4. **Keep components under 300 lines**
5. **Use Framer Motion** for animations
6. **Check accessibility** regularly
7. **Monitor performance** with Lighthouse

## 📞 Quick Support

| Need | Look Here |
|------|-----------|
| Setup help | `SETUP.md` |
| Component help | `COMPONENT_GUIDE.md` |
| Launch help | `DEPLOYMENT_CHECKLIST.md` |
| Code examples | Component files themselves |

## ✅ Pre-Launch Checklist

- [ ] All images optimized
- [ ] All links tested
- [ ] Form working
- [ ] Mobile responsive
- [ ] Lighthouse 90+
- [ ] No console errors
- [ ] Accessibility tested
- [ ] Cross-browser tested

---

**Bookmark this page for quick reference!**

Last updated: 2024
