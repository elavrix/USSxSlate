# Asset Management Guide

This directory contains all static assets for the USSC × Slate Auto landing page.

## 📸 Image Organization

### vehicles/
- **slate-pickup-hero.jpg** - Large hero section vehicle (main image)
- **slate-pickup.jpg** - Carousel vehicle image
- **slate-pickup-gallery.jpg** - Gallery section
- **slate-utility.jpg** - Carousel utility vehicle
- **slate-utility-fleet.jpg** - Gallery utility fleet
- **slate-service-van.jpg** - Carousel service vehicle
- **slate-service-van-gallery.jpg** - Gallery service van
- **slate-chassis-cab.jpg** - Gallery chassis cab

### environments/
- **industrial-warehouse.jpg** - Background for hero section

### industries/
- **utilities.jpg** - Utilities industry card
- **government.jpg** - Government industry card
- **municipal.jpg** - Municipal industry card
- **energy.jpg** - Energy industry card
- **logistics.jpg** - Logistics industry card
- **enterprise.jpg** - Enterprise industry card

### logos/
- **ussc-logo.svg** - USSC brand logo
- **slate-logo.svg** - Slate brand logo

## 📥 Adding Images from Dropbox

1. Download the images from: [Dropbox Link]
2. Organize them according to the structure above
3. Optimize images:
   - Use WebP format where possible
   - Compress JPGs to 80-90% quality
   - Keep file sizes under 2MB
4. Update paths in `src/config/imageConfig.js` if needed

## 🖼️ Image Optimization Tips

```bash
# Using ImageMagick (install first)
convert input.jpg -quality 85 -strip output.jpg

# Using ffmpeg for batch
for file in *.jpg; do
  ffmpeg -i "$file" -q:v 6 "optimized_$file"
done
```

## 🔗 Reference in Code

```javascript
import { imageConfig } from '@/config/imageConfig'

// In components:
<img src={imageConfig.hero.vehicleMain} alt="Slate Vehicle" />
```

## 📝 Notes

- All images should be in landscape orientation for hero/carousel
- Keep consistent aspect ratios within sections
- Use high-res images (2x pixel density for displays)
- Test loading performance with DevTools

---

For more details, see `src/config/imageConfig.js`
