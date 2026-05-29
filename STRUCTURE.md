# Project Structure Visualization

Complete directory tree of your landing page project.

```
USSC × Slate Auto Landing Page
├── 📄 Documentation Files
│   ├── README.md                    ⭐ START HERE
│   ├── SETUP.md                     📋 Installation guide
│   ├── COMPONENT_GUIDE.md           📚 Component reference
│   ├── PROJECT_SUMMARY.md           📊 Overview
│   ├── DEPLOYMENT_CHECKLIST.md      ✅ Launch checklist
│   ├── QUICK_REFERENCE.md           🚀 Quick lookup
│   ├── FILE_INVENTORY.md            📋 File listing
│   └── COMMANDS.sh                  💻 Useful commands
│
├── ⚙️ Configuration Files
│   ├── package.json                 📦 Dependencies
│   ├── vite.config.js               🔧 Build config
│   ├── index.html                   🌐 HTML entry
│   ├── .gitignore                   🔐 Git ignore
│   └── .env.example                 🔑 Env template
│
├── 📁 src/ (Source Code)
│   ├── main.jsx                     🎯 Entry point
│   ├── App.jsx                      📱 Main component
│   │
│   ├── 🎨 styles/
│   │   └── global.css               🎨 Global design system
│   │
│   ├── ⚙️ config/
│   │   └── imageConfig.js           🖼️ Image paths
│   │
│   └── 🧩 components/ (13 Components)
│       ├── Header.jsx + Header.css
│       ├── Hero.jsx + Hero.css
│       ├── Partnership.jsx + Partnership.css
│       ├── VehicleCarousel.jsx + VehicleCarousel.css
│       ├── Industries.jsx + Industries.css
│       ├── WhyPartnership.jsx + WhyPartnership.css
│       ├── Benefits.jsx + Benefits.css
│       ├── ProcurementJourney.jsx + ProcurementJourney.css
│       ├── VehicleGallery.jsx + VehicleGallery.css
│       ├── Impact.jsx + Impact.css
│       ├── Deployment.jsx + Deployment.css
│       ├── Consultation.jsx + Consultation.css
│       └── Footer.jsx + Footer.css
│
├── 📦 public/ (Static Assets)
│   └── assets/
│       ├── ASSETS_README.md         📖 Asset guide
│       ├── images/
│       │   ├── vehicles/            🚚 Vehicle images
│       │   ├── environments/        🏭 Background images
│       │   └── industries/          🏢 Industry images
│       └── logos/                   📍 Brand logos
│
├── 📁 dist/ (After Build)
│   ├── index.html                   (Generated)
│   └── assets/
│       ├── index-xxx.js             (Generated)
│       └── index-xxx.css            (Generated)
│
├── 📁 node_modules/                 (After npm install)
│   └── (All dependencies here)
│
└── Additional Files
    └── node_modules/
    └── package-lock.json

```

## 📊 Components Overview

```
Landing Page Structure
│
├─ 1️⃣  HEADER (Sticky)
│   └─ Logo | Nav | CTA Button
│
├─ 2️⃣  HERO (100vh)
│   ├─ Headline + Subheadline
│   ├─ Two CTA Buttons
│   └─ KPI Pills (4)
│
├─ 3️⃣  PARTNERSHIP (80vh)
│   └─ Logo × Logo | Statement
│
├─ 4️⃣  VEHICLE CAROUSEL (100vh)
│   ├─ 3 Vehicle Slides
│   └─ Custom Controls
│
├─ 5️⃣  INDUSTRIES (Full)
│   └─ 6 Editorial Cards
│
├─ 6️⃣  WHY PARTNERSHIP (Full)
│   ├─ Left: USSC Info
│   ├─ Center: Connection Line
│   └─ Right: Slate Info
│
├─ 7️⃣  BENEFITS (Full)
│   └─ 3 Large Panels
│
├─ 8️⃣  PROCUREMENT JOURNEY (Full)
│   └─ Timeline with 6 Steps
│
├─ 9️⃣  VEHICLE GALLERY (Full)
│   └─ 4 Gallery Items
│
├─ 🔟 IMPACT (Full)
│   └─ 4 Statistics
│
├─ 1️⃣1️⃣ DEPLOYMENT (Full)
│   └─ USA Map Visualization
│
├─ 1️⃣2️⃣ CONSULTATION (80vh)
│   └─ Premium Contact Form
│
└─ 1️⃣3️⃣ FOOTER (Full)
    └─ Links | Contact | Legal
```

## 🔄 File Dependencies

```
App.jsx
  ├── Header.jsx → Header.css
  ├── Hero.jsx → Hero.css
  ├── Partnership.jsx → Partnership.css
  ├── VehicleCarousel.jsx → VehicleCarousel.css
  │   └── (imports Swiper)
  ├── Industries.jsx → Industries.css
  ├── WhyPartnership.jsx → WhyPartnership.css
  ├── Benefits.jsx → Benefits.css
  ├── ProcurementJourney.jsx → ProcurementJourney.css
  ├── VehicleGallery.jsx → VehicleGallery.css
  ├── Impact.jsx → Impact.css
  ├── Deployment.jsx → Deployment.css
  ├── Consultation.jsx → Consultation.css
  └── Footer.jsx → Footer.css

All components import:
  ├── React
  ├── framer-motion
  └── (individual CSS files)

Global imports:
  ├── global.css (via main.jsx)
  ├── Swiper CSS (via VehicleCarousel.jsx)
  └── Font stack (via global.css)
```

## 📁 Folder Purposes

```
src/
  ├── main.jsx          → React bootstrap
  ├── App.jsx           → Component orchestration
  ├── styles/           → Global theme & reset
  ├── config/           → Configuration (images)
  └── components/       → 13 reusable components

public/
  └── assets/           → Static images & logos

dist/
  └── (Output after build)

node_modules/
  └── (Dependencies)
```

## 🎯 Important File Locations

```
Edit Text:           src/components/*/ComponentName.jsx
Edit Styles:         src/components/*/ComponentName.css
Change Colors:       src/styles/global.css
Configure Images:    src/config/imageConfig.js
Add Images:          public/assets/[type]/
Setup Instructions:  SETUP.md
Component Help:      COMPONENT_GUIDE.md
Quick Reference:     QUICK_REFERENCE.md
Deployment Help:     DEPLOYMENT_CHECKLIST.md
```

## 📊 Statistics

```
Total Files:             46
Components:              13
CSS Files:               13
Documentation Pages:      8
Config Files:             5
Total Lines of Code:   5,000+
Documentation Lines:   2,000+
Build Size (gzipped):  ~150KB (excl. images)
Responsive Breakpoints: 3
Animation Types:         4
```

## 🔐 Git Structure

```
.git/                  (Created by git init)
├── HEAD
├── config
├── objects/
├── refs/
└── hooks/

(Don't modify these files)
```

## 🚀 Build Output Structure

```
dist/                  (After npm run build)
├── index.html         (Minified)
└── assets/
    ├── index-abc123.js   (Bundled React + Code)
    ├── index-def456.css  (Bundled CSS)
    └── (other assets)

(Upload entire dist/ folder to hosting)
```

## 📱 Responsive Layout

```
Desktop (1024px+)        Tablet (768-1023px)      Mobile (< 768px)
┌─────────────────┐     ┌────────────────┐       ┌──────────┐
│     HEADER      │     │     HEADER     │       │  HEADER  │
├─────────────────┤     ├────────────────┤       ├──────────┤
│                 │     │                │       │          │
│  HERO (2 col)   │     │  HERO (1 col)  │       │  HERO    │
│                 │     │                │       │ (stacked)│
├─────────────────┤     ├────────────────┤       ├──────────┤
│  PARTNERSHIP    │     │ PARTNERSHIP    │       │PARTNER-  │
│                 │     │                │       │  SHIP    │
├─────────────────┤     ├────────────────┤       ├──────────┤
│ ...more sections│     │ ...more sections       │ ...more  │
└─────────────────┘     └────────────────┘       └──────────┘
```

## 🎨 CSS Cascade

```
global.css (Foundation)
├── :root variables
├── Reset styles
├── Typography
├── Utility classes
└── Responsive breakpoints

Component.css (Specific)
├── Component layout
├── Component animations
├── Component responsive
└── Component hover states
```

## 📦 Package.json Structure

```
package.json
├── name: "ussc-slate-landing"
├── version: "1.0.0"
├── type: "module"
├── scripts:
│   ├── dev
│   ├── build
│   └── preview
├── dependencies:
│   ├── react
│   ├── react-dom
│   ├── framer-motion
│   └── swiper
└── devDependencies:
    ├── @vitejs/plugin-react
    └── vite
```

## 🔑 Key Directories to Know

```
src/                 → Edit here (code changes)
public/assets/       → Add images here
dist/                → Output here (don't edit)
node_modules/        → Don't edit (npm manages)
```

## ✅ Pre-Development Checklist

- [ ] Read README.md
- [ ] Review SETUP.md
- [ ] Downloaded images from Dropbox
- [ ] Organized images in public/assets/
- [ ] Run npm install
- [ ] Run npm run dev
- [ ] See localhost:3000 in browser

## 🎯 File Quick Links

| Need | File |
|------|------|
| Setup | SETUP.md |
| Components | COMPONENT_GUIDE.md |
| Commands | COMMANDS.sh |
| Overview | PROJECT_SUMMARY.md |
| Launch | DEPLOYMENT_CHECKLIST.md |
| Reference | QUICK_REFERENCE.md |

---

**Your complete project structure is ready to use!**
