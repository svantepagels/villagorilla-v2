# Implementation Notes - V2 Redesign

**Date:** 2026-03-25
**Deployed to:** https://villagorilla-v2.vercel.app

## What Changed

### Complete visual redesign from text-heavy to image-heavy (matching Minibojarna)

**Before:** 95% text, Tailwind defaults, indigo accent, narrow layout
**After:** ~60% images, Minibojarna-matching design system

### Design System Applied
- **Typography:** Poppins 300-700 (unchanged font, fixed weights/usage)
- **Colors:** `#706D6D` body text, `#000000` headings/buttons, white background
- **Spacing:** `4vw`/`6vw` padding, `1400px` max-width
- **Buttons:** Square (0 border-radius), uppercase, tracking-wider
- **Navigation:** Centered layout with logo on top (brandingCenter pattern)

### Images Downloaded (10 total)
- 4× Garden/outdoor photos (VG_garden_1-4.jpg)
- 3× Children activity photos (children_1-3.jpg)
- 1× Snow play photo
- 1× Crafts photo
- 1× Logo (VG-logo.png)

### Pages Redesigned
1. **Homepage:** Full-width hero with overlay → intro → 2-col photo grid → pedagogy (image+text) → full-width craft image → stats → 3-col photo grid → lokaler section → CTA with bg image
2. **Om oss:** Hero image → pedagogy with photos → team section → health/food
3. **Lokaler:** Hero → 4-photo grid → room descriptions → outdoor section → location
4. **Inskolning:** Hero → steps with image → CTA
5. **Kooperativ:** Hero → board info with image → parent contributions → full-width image
6. **Öppet hus:** Hero → events → 3-photo grid
7. **Kontakt:** Hero → form + info
8. **Header:** Centered logo + centered nav (uppercase, tracking-wider)
9. **Footer:** White bg, clean 3-col layout with logo

### CSS Architecture
- Custom `@layer components` for `.section-padding`, `.max-site`, `.btn-primary`, `.btn-outline`
- Responsive: mobile uses `6vw` gutters, desktop `4vw`
- All images use Next.js `<Image>` with proper `sizes` and `fill`/`object-cover`
