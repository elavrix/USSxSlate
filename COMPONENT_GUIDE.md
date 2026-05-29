# Component Guide

Complete reference for all landing page components.

## 1. Header Component

**File:** `src/components/Header.jsx` + `Header.css`

**Purpose:** Sticky navigation bar visible throughout the page

**Features:**
- Fixed position (stays at top)
- Glass morphism effect
- Scroll detection (changes style when scrolled)
- Responsive menu

**Usage:**
```jsx
import Header from './components/Header'

<Header />
```

**Customization:**
- Edit navigation links in `Header.jsx` line ~20
- Change logo text: Find "USSC" and "SLATE"
- Modify button text in CTA button

**Props:** None (internal state management)

---

## 2. Hero Section

**File:** `src/components/Hero.jsx` + `Hero.css`

**Purpose:** First impression - 100vh hero section with vehicle image

**Features:**
- Asymmetrical grid layout
- Large headline + subheadline
- Two CTA buttons
- Hero vehicle image (right side)
- 4 floating KPI pills below

**Usage:**
```jsx
<Hero />
```

**Customization:**
- Headline: Line ~20
- Subheadline: Line ~24
- Button text: Lines ~28-29
- Hero image: `/assets/images/vehicles/slate-pickup-hero.jpg`
- KPI pills: Lines ~40-46 (add/remove items)

**Key CSS Classes:**
- `.hero` - Container
- `.hero-headline` - Large heading
- `.hero-buttons` - Button group
- `.kpi-pill` - Individual stat

---

## 3. Partnership Component

**File:** `src/components/Partnership.jsx` + `Partnership.css`

**Purpose:** Centered statement section emphasizing the partnership

**Features:**
- Logo display (USSC × SLATE)
- Single powerful statement
- Minimal design

**Usage:**
```jsx
<Partnership />
```

**Customization:**
- Logo names: Lines ~15-18
- Partnership statement: Line ~24

---

## 4. VehicleCarousel Component

**File:** `src/components/VehicleCarousel.jsx` + `VehicleCarousel.css`

**Purpose:** Interactive carousel showing 3 vehicle types

**Features:**
- Swiper.js carousel
- Fade transition effect
- Vehicle specs display
- Custom navigation controls
- Progress indicator

**Usage:**
```jsx
<VehicleCarousel />
```

**Customization:**
- Edit vehicles array (lines ~10-32):
  ```javascript
  const vehicles = [
    {
      name: 'Vehicle Name',
      description: 'Short description',
      image: '/assets/images/vehicles/name.jpg',
      specs: [
        { label: 'Spec Name', value: 'Value' },
      ]
    }
  ]
  ```
- Change carousel effect: Line ~65 `effect="fade"`
- Modify navigation: Lines ~88-90

**Dependencies:**
- Swiper.js (npm install swiper)
- Framer Motion

---

## 5. Industries Component

**File:** `src/components/Industries.jsx` + `Industries.css`

**Purpose:** Display 6 industry sectors as editorial cards

**Features:**
- 6 large image cards
- Hover animations
- Industry labels
- Responsive grid

**Usage:**
```jsx
<Industries />
```

**Customization:**
- Edit industries array (lines ~10-18):
  ```javascript
  const industries = [
    {
      name: 'Industry Name',
      icon: '🏢',
      image: '/assets/images/industries/name.jpg'
    }
  ]
  ```
- Add/remove industries: Just add/remove array items
- Change grid columns: `Industries.css` line ~47

---

## 6. WhyPartnership Component

**File:** `src/components/WhyPartnership.jsx` + `WhyPartnership.css`

**Purpose:** Split-screen explanation of partnership benefits

**Features:**
- Left/right content layout
- Center illuminated line
- Minimal text approach

**Usage:**
```jsx
<WhyPartnership />
```

**Customization:**
- Left heading: Line ~21
- Left description: Line ~23
- Right heading: Line ~36
- Right description: Line ~38

---

## 7. Benefits Component

**File:** `src/components/Benefits.jsx` + `Benefits.css`

**Purpose:** Display 3 key benefits with icons

**Features:**
- 3 large panels
- Icon + heading + description
- Hover effects with glow

**Usage:**
```jsx
<Benefits />
```

**Customization:**
- Edit benefits array (lines ~10-19):
  ```javascript
  const benefits = [
    {
      title: 'Title',
      description: 'Description',
      icon: '💰'
    }
  ]
  ```
- Panel styling: `Benefits.css` line ~50

---

## 8. ProcurementJourney Component

**File:** `src/components/ProcurementJourney.jsx` + `ProcurementJourney.css`

**Purpose:** Timeline showing 6-step procurement process

**Features:**
- Horizontal timeline (desktop)
- Vertical timeline (mobile)
- Numbered circles
- Gold connecting line

**Usage:**
```jsx
<ProcurementJourney />
```

**Customization:**
- Edit steps array (lines ~10-17):
  ```javascript
  const steps = [
    'Step Name',
    // ... more steps
  ]
  ```
- Add/remove steps automatically updates numbering

---

## 9. VehicleGallery Component

**File:** `src/components/VehicleGallery.jsx` + `VehicleGallery.css`

**Purpose:** Masonry-style gallery of 4 vehicle images

**Features:**
- Varying aspect ratios
- Hover zoom effect
- Labels overlay
- Responsive layout

**Usage:**
```jsx
<VehicleGallery />
```

**Customization:**
- Edit vehicles array (lines ~10-14):
  ```javascript
  const vehicles = [
    {
      id: 1,
      name: 'Vehicle Name',
      span: 'col-span-2', // or 'col-span-1'
      image: '/assets/images/vehicles/name.jpg'
    }
  ]
  ```
- `span` determines grid width (2x = wider, 1x = normal)

---

## 10. Impact Component

**File:** `src/components/Impact.jsx` + `Impact.css`

**Purpose:** Display monumental statistics section

**Features:**
- Large typography
- Gold gradient text
- 4 key metrics
- Investor presentation style

**Usage:**
```jsx
<Impact />
```

**Customization:**
- Edit metrics array (lines ~10-14):
  ```javascript
  const metrics = [
    { label: 'Label', value: '999+' },
  ]
  ```
- Gradient styling: `Impact.css` line ~52

---

## 11. Deployment Component

**File:** `src/components/Deployment.jsx` + `Deployment.css`

**Purpose:** USA map-style visualization of deployment network

**Features:**
- SVG map outline
- Animated glowing deployment points
- Hover labels
- Pulsing animation

**Usage:**
```jsx
<Deployment />
```

**Customization:**
- Edit deployment points (lines ~12-17):
  ```javascript
  const deploymentPoints = [
    { x: '15%', y: '30%', label: 'Region Name' },
  ]
  ```
- Modify SVG path for different map

---

## 12. Consultation Component

**File:** `src/components/Consultation.jsx` + `Consultation.css`

**Purpose:** Lead capture form with glass morphism design

**Features:**
- 7 form fields
- Glass background
- Success message
- Premium styling

**Usage:**
```jsx
<Consultation />
```

**Customization:**
- Add/remove form fields:
  ```javascript
  const [formData, setFormData] = useState({
    fieldName: '', // Add new field
  })
  ```
- Update form fields in JSX (lines ~45-100)
- Connect to backend: Modify `handleSubmit` function

**Form Fields:**
1. Name (text input)
2. Organization (text input)
3. Fleet Size (dropdown)
4. Industry (dropdown)
5. Email (email input)
6. Phone (tel input)
7. Requirements (textarea)

---

## 13. Footer Component

**File:** `src/components/Footer.jsx` + `Footer.css`

**Purpose:** Footer with links, logos, and legal information

**Features:**
- Logo display
- Navigation links
- Contact information
- Legal links
- Background typography

**Usage:**
```jsx
<Footer />
```

**Customization:**
- Logo names: Lines ~14-18
- Navigation links: Lines ~22-28
- Contact info: Lines ~31-36
- Legal links: Lines ~60-64

---

## Global Styles

**File:** `src/styles/global.css`

**Purpose:** Design system and global styles

**Contains:**
- Color variables
- Typography scale
- Global resets
- Utility classes

**Key Variables:**
```css
--primary-bg: #0F1115
--secondary-bg: #1A1D22
--accent: #C79A3B
--text: #FFFFFF
--text-muted: #A9B0BA
--border: rgba(255,255,255,0.08)
```

**Customization:**
- Change all colors by editing `:root` section
- Modify typography scale (h1, h2, p, etc.)
- Add new utility classes as needed

---

## Main App Component

**File:** `src/App.jsx`

**Purpose:** Component orchestration

**Usage:**
```jsx
import Header from './components/Header'
import Hero from './components/Hero'
// ... import all components

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* ... all components */}
    </>
  )
}
```

**Customization:**
- Reorder sections: Change import order
- Hide sections: Comment out component
- Add new sections: Import and add component

---

## Animation Patterns

All components use Framer Motion:

```jsx
// Fade in on scroll
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, margin: '-100px' }}
>
  Content
</motion.div>

// Staggered children
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
>
  {items.map(item => (
    <motion.div variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## Responsive Breakpoints

Used consistently across all components:

```css
/* Desktop */
@media (max-width: 1024px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Mobile */
@media (max-width: 480px) { }
```

---

## Best Practices

✅ **DO:**
- Keep components under 300 lines
- Use CSS variables for styling
- Test on all breakpoints
- Use Framer Motion for animations
- Add error handling for images

❌ **DON'T:**
- Hardcode colors (use variables)
- Add too many dependencies
- Forget mobile responsiveness
- Use `px` for spacing (use relative units)
- Leave console errors

---

## Quick Reference

| Component | Purpose | Lines | State |
|-----------|---------|-------|-------|
| Header | Sticky nav | 50 | Scroll tracking |
| Hero | Main hero section | 80 | None |
| Partnership | Logo statement | 40 | None |
| VehicleCarousel | Vehicle showcase | 120 | Swiper state |
| Industries | Industry cards | 70 | None |
| WhyPartnership | Split-screen | 60 | None |
| Benefits | 3 panels | 70 | None |
| ProcurementJourney | Timeline | 80 | None |
| VehicleGallery | Image gallery | 70 | None |
| Impact | Statistics | 50 | None |
| Deployment | Map viz | 100 | None |
| Consultation | Form | 150 | Form state |
| Footer | Footer | 60 | None |

---

This guide covers all components. For specific questions, refer to individual component files with inline comments.
