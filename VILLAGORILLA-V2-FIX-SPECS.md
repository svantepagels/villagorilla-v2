# Villa Gorilla V2 - Fix Specifications

**Date:** 2026-03-25  
**Task:** Fix V2 to match Minibojarna aesthetic  
**Reference Site:** https://www.minibojarna.se/  
**Current V2:** https://villagorilla-v2.vercel.app/

---

## Executive Summary

**CRITICAL ISSUE:** Current V2 is fundamentally text-heavy while Minibojarna is **image-heavy**. The entire design philosophy is wrong.

### What's Wrong (Priority Order)

1. **❌ IMAGE USAGE** - CRITICAL: V2 has almost no images. Minibojarna uses large, full-width hero images throughout
2. **❌ COLOR PALETTE** - Wrong: V2 uses charcoal (#2C2C2C) and indigo accent. Minibojarna uses neutral/warm tones
3. **❌ SPACING** - Wrong: V2 uses Tailwind defaults. Minibojarna uses 4vw padding consistently  
4. **❌ TYPOGRAPHY** - Partially correct: Both use Poppins, but weights and scales differ
5. **❌ LAYOUT** - Wrong: V2 is narrow and compact. Minibojarna is spacious with full-width sections

---

## 1. COLOR PALETTE (EXACT VALUES NEEDED)

### Current V2 (WRONG)
```css
--charcoal: #2C2C2C;
--accent: #4F46E5;
--accent-hover: #4338CA;
--gray: #6B7280;
--background: #FFFFFF;
```

### Minibojarna Style (Based on Squarespace Template)

**⚠️ ACTION REQUIRED:** Since I cannot visually inspect the site, these are estimates based on Squarespace defaults. **You MUST extract exact hex codes using browser DevTools:**

1. Visit https://www.minibojarna.se/
2. Open DevTools (F12)
3. Inspect elements and check computed styles
4. Extract ALL color values from CSS variables

**Expected Palette (TO BE VERIFIED):**
- Background: `#FFFFFF` (white)
- Primary Text: Likely `#000000` or very dark gray (#1A1A1A)
- Secondary Text: Medium gray (estimate: #666666 or similar)
- Accent/Links: Likely black or very dark tone (NOT indigo)
- Button Background: Likely black or very dark gray
- Button Text: White
- Border/Divider: Light gray (#E5E5E5 or similar)

**Minibojarna uses CSS variables in Squarespace:**
- Check for: `--siteBackgroundColor`, `--primaryButtonBackgroundColor`, `--paragraphMediumColor`, etc.
- Extract these from the actual site CSS

---

## 2. TYPOGRAPHY SYSTEM

### Font Family ✅ (CORRECT)
Both sites use **Poppins** from Google Fonts.

Current V2:
```
font-family: Poppins, system-ui, sans-serif
```

Minibojarna loads:
```
Poppins: weights 300, 400, 500, 700 (normal + italic for 300, 400, 700)
```

### Font Weights & Usage

| Element | Minibojarna | Current V2 | Status |
|---------|-------------|------------|--------|
| Body Text | 400 | 400 | ✅ OK |
| Headings (H1) | 700 | 700 (bold) | ✅ OK |
| Headings (H2/H3) | 600 | 600 (semibold) | ✅ OK |
| Buttons | 500-700 | medium | ⚠️ Check |
| Nav Links | 400-500 | medium | ⚠️ Check |

### Font Sizes (EXACT VALUES NEEDED)

**⚠️ ACTION REQUIRED:** Extract exact font sizes from Minibojarna using DevTools.

**Expected Hierarchy (estimates based on Squarespace):**
- H1: ~48-60px (desktop), ~32-40px (mobile)
- H2: ~36-42px (desktop), ~28-32px (mobile)
- H3: ~28-32px (desktop), ~24px (mobile)
- Body: ~16-18px
- Small text/captions: ~14px

### Line Heights
- Headings: 1.2-1.3 (tight)
- Body text: 1.6-1.8 (comfortable reading)

### Letter Spacing
- Headings: Normal or slightly tight (-0.01em to 0)
- Body: Normal
- Buttons/CTAs: Possibly slightly wide (+0.02em) - CHECK THIS

---

## 3. IMAGE USAGE 🔴 CRITICAL - THIS IS THE MAIN PROBLEM

### Current V2 (WRONG)
- **Homepage has ZERO images**
- Text-only stat cards
- Text-only feature grid
- No hero image
- No visual content

### Minibojarna Pattern (IMAGE-HEAVY)

Based on Squarespace structure and typical förskola sites:

#### **Homepage Should Have:**

1. **HERO SECTION** (Full-width)
   - Large hero image of children/förskola exterior
   - Aspect ratio: 16:9 or similar (full-bleed)
   - Size: 100vw × ~60-70vh
   - Text overlay: Title + subtitle + CTA
   - Image should be warm, welcoming, show real kids

2. **INTRO/ABOUT SECTION**
   - Side-by-side image + text layout
   - Image: ~50% width on desktop
   - Aspect ratio: 3:2 or 4:3
   - Shows: Interior, kids learning, or outdoor play

3. **FEATURES/VALUES GRID**
   - 2-3 column grid
   - Each card should have an image (NOT icons)
   - Images show: classroom, playground, activities, meal times
   - Aspect ratio: 3:2 or square (1:1)

4. **PEDAGOGY SECTION**
   - Alternating image-text layout (side-by-side)
   - Multiple images showing different activities
   - Images: ~40-50% width

5. **TEAM SECTION**
   - Photos of actual staff (not initials)
   - Real headshots or team photos
   - Circular crops or square with rounded corners

6. **CALL-TO-ACTION**
   - Background image with text overlay
   - Or image + form side-by-side

#### **Image Specifications:**

**Quality:**
- High resolution (at least 1920px wide for full-width)
- Optimized (WebP format where possible)
- Alt text for accessibility

**Style:**
- Warm, natural lighting
- Real photos (not stock if possible)
- Show actual förskola environment
- Children engaged in activities
- Welcoming, safe atmosphere

**Aspect Ratios Used:**
- Hero/Full-width: 16:9 or 2.35:1
- Side-by-side: 3:2 or 4:3
- Grid items: 3:2 or 1:1 (square)
- Thumbnails: 1:1 (square)

**Placement Pattern:**
```
[FULL-WIDTH HERO IMAGE]
[Text section]
[Image + Text side-by-side]
[Text section]
[Grid with 3 images]
[Image + Text side-by-side (alternating)]
[Full-width CTA with background image]
```

---

## 4. SPACING SYSTEM

### Current V2 (WRONG - uses Tailwind defaults)
```css
container: max-w-5xl (640px-1024px)
padding: px-6 (24px)
sections: py-20 (80px)
```

### Minibojarna (CORRECT)
```css
max-width: 1400px
page-padding: 4vw (responsive, ~56px on 1400px screen)
section-padding-top: 4vw
section-padding-bottom: 4vw
mobile-padding: 6vw
```

**Implementation:**
```css
/* Container */
.page-container {
  max-width: 1400px;
  padding-left: 4vw;
  padding-right: 4vw;
  margin: 0 auto;
}

/* Sections */
.section {
  padding-top: 4vw;
  padding-bottom: 4vw;
}

/* Mobile */
@media (max-width: 767px) {
  .page-container {
    padding-left: 6vw;
    padding-right: 6vw;
  }
  .section {
    padding-top: 6vw;
    padding-bottom: 6vw;
  }
}
```

### Spacing Values
- Section padding: **4vw** vertical
- Container padding: **4vw** horizontal
- Element spacing: Consistent rhythm (use multiples of 8px or 1rem)
- Grid gaps: 30-50px (check actual values)

---

## 5. COMPONENT STYLES

### Buttons

**Current V2:**
```css
bg-charcoal (#2C2C2C)
text-white
rounded-none (square)
px-10 py-4
```

**Minibojarna Style:**
- Background: Black or very dark (#000000 or similar)
- Text: White
- Shape: **SQUARE** (border-radius: 0 or 2px) - NOT rounded
- Padding: Check exact values (likely ~16px vertical, ~32px horizontal)
- Font weight: 500-600
- Text transform: Possibly uppercase or normal - CHECK
- Hover state: Slight opacity change or background darken

### Navigation

**Header:**
- Width: Full
- Background: White (with transparency when scrolling)
- Logo: Centered or left-aligned - CHECK
- Logo height: 88px (desktop), 35px (mobile)
- Header vertical padding: 3vw (desktop), 6vw (mobile)
- Nav links: Horizontal, simple text links
- Link style: Plain text, no background
- Active state: Bold or underline

**Mobile Menu:**
- Hamburger icon
- Overlay or slide-in menu

### Cards/Feature Blocks

**Current V2:**
- Border-top only
- Background: white
- Padding: p-8
- Text-heavy

**Minibojarna:**
- Should include images
- Minimal borders
- Spacious padding
- Image-first, then text

### Forms

- Square inputs (border-radius: 0)
- Solid borders
- Simple, clean styling
- Focus states: outline or border color change

---

## 6. LAYOUT PATTERNS

### Grid Layouts

**Blog/Content Grid:**
- 2 columns on desktop
- 1 column on mobile
- Gap: 40-50px horizontal, 60-70px vertical
- Images: 3:2 aspect ratio

**Feature Grid:**
- 3 columns on desktop
- 2 columns on tablet
- 1 column on mobile
- Each item has image + text

### Side-by-Side Sections

**Image + Text:**
- 40-50% image width
- 50-60% text width
- Gap: 6% (based on Squarespace settings)
- Alternating (image left, then image right)
- Vertical alignment: middle

**Responsive:**
- Stack on mobile (image first)
- Full width for each

---

## 7. IMPLEMENTATION CHECKLIST

### Phase 1: Color System (HIGH PRIORITY)
- [ ] Extract exact color values from Minibojarna using DevTools
- [ ] Update Tailwind config with correct palette
- [ ] Replace all charcoal (#2C2C2C) with black or correct dark tone
- [ ] Remove indigo accent (#4F46E5)
- [ ] Update button colors
- [ ] Update text colors

### Phase 2: Spacing System (HIGH PRIORITY)
- [ ] Change max-width from 1024px to 1400px
- [ ] Replace px-6 with 4vw horizontal padding
- [ ] Replace py-20 with 4vw vertical padding
- [ ] Update mobile spacing to 6vw
- [ ] Create consistent spacing utilities

### Phase 3: Images (CRITICAL - HIGHEST PRIORITY)
- [ ] Add full-width hero image to homepage
- [ ] Source/create high-quality photos of förskola
- [ ] Replace stat cards with image+text cards
- [ ] Add images to feature grid (3-6 images)
- [ ] Add team photos (real photos, not initials)
- [ ] Add pedagogy section images
- [ ] Add background images to CTAs
- [ ] Optimize all images (WebP, lazy loading)
- [ ] Add alt text to all images

### Phase 4: Typography (MEDIUM PRIORITY)
- [ ] Verify font sizes match Minibojarna
- [ ] Check letter-spacing values
- [ ] Update heading hierarchy
- [ ] Ensure line-heights are correct

### Phase 5: Components (MEDIUM PRIORITY)
- [ ] Update button styles (check text transform, padding)
- [ ] Update navigation (check logo size, padding, layout)
- [ ] Update card styles (add images)
- [ ] Update form styles

### Phase 6: Content (ONGOING)
- [ ] Rewrite copy to match Minibojarna tone
- [ ] Add more visual content
- [ ] Less text, more images

---

## 8. SIDE-BY-SIDE COMPARISON

### Homepage Structure

| Section | Minibojarna | Current V2 | Fix Required |
|---------|-------------|------------|--------------|
| Hero | ✅ Full-width image | ❌ Text only | 🔴 ADD IMAGE |
| Intro | ✅ Image + text | ✅ Text | 🔴 ADD IMAGE |
| Stats | ✅ Visual cards | ❌ Text boxes | 🔴 ADD IMAGES |
| Features | ✅ Image grid | ❌ Text grid | 🔴 ADD IMAGES |
| Pedagogy | ✅ Images + text | ✅ Text | 🔴 ADD IMAGES |
| Team | ✅ Photos | ❌ Initials | 🔴 ADD PHOTOS |
| CTA | ✅ Image background | ❌ Solid color | 🔴 ADD IMAGE |

### Visual Density

**Minibojarna:**
- Image-to-text ratio: ~60-40 (images dominate)
- Large, prominent photos
- Text is supporting element
- Visual storytelling

**Current V2:**
- Image-to-text ratio: ~5-95 (almost all text)
- No photos
- Text is primary element
- Minimal visual interest

---

## 9. RECOMMENDED IMAGES NEEDED

To match Minibojarna style, Villa Gorilla needs:

1. **Homepage Hero** (1)
   - Full-width exterior or happy kids playing
   - 1920×1080px minimum

2. **Feature/Activity Images** (6-8)
   - Kids doing activities
   - Classroom scenes
   - Outdoor play
   - Meal times
   - Each ~800×600px

3. **Team Photos** (7)
   - Individual headshots of staff
   - Professional but warm
   - Each ~400×400px

4. **Pedagogy/Environment Images** (4-6)
   - Interior spaces
   - Learning areas
   - Playground/outdoor area
   - Each ~800×600px

5. **Background Images** (2-3)
   - For CTA sections
   - Subtle, can be slightly desaturated
   - 1920×1080px

**Total: ~20-25 high-quality photos needed**

---

## 10. TECHNICAL NOTES

### Image Implementation (Next.js)

```tsx
import Image from 'next/image'

// Hero Image
<div className="relative h-[60vh] w-full">
  <Image
    src="/images/hero.jpg"
    alt="Villa Gorilla förskola"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <h1 className="text-white text-5xl font-bold">Hero Text</h1>
  </div>
</div>

// Side-by-side
<div className="grid md:grid-cols-2 gap-[6%]">
  <div className="relative aspect-[3/2]">
    <Image
      src="/images/about.jpg"
      alt="Description"
      fill
      className="object-cover"
    />
  </div>
  <div>
    <h2>Text content</h2>
  </div>
</div>
```

### CSS Variables (Minibojarna uses these)

Extract from actual site and implement:
```css
:root {
  --siteBackgroundColor: #FFFFFF;
  --primaryButtonBackgroundColor: #000000;
  --paragraphMediumColor: #666666;
  /* ... extract all others */
}
```

---

## 11. FINAL NOTES & ACTION ITEMS

### IMMEDIATE NEXT STEPS:

1. **🔴 CRITICAL:** Visit Minibojarna site with DevTools open
   - Screenshot the homepage
   - Extract ALL color hex codes
   - Measure exact spacing values
   - Count number of images per section
   - Note image aspect ratios

2. **🔴 CRITICAL:** Source or create images
   - Contact Villa Gorilla for photos
   - Or use placeholder images temporarily
   - Ensure high quality

3. **🟠 HIGH:** Update spacing system
   - Change to 4vw/6vw padding
   - Update max-width to 1400px

4. **🟠 HIGH:** Update color palette
   - Replace charcoal with correct dark tone
   - Remove indigo accent
   - Implement neutral palette

5. **🟡 MEDIUM:** Fine-tune typography
   - Verify font sizes
   - Check letter-spacing

### Success Criteria:

✅ V2 matches Minibojarna's image-heavy aesthetic
✅ Same color palette (exact hex codes)
✅ Same spacing system (4vw padding)
✅ Same layout patterns (side-by-side, grids)
✅ Same typography scale
✅ Visual, not text-heavy

---

## CONCLUSION

The **fundamental issue** is that Current V2 is text-centric while Minibojarna is image-centric. This requires a complete visual redesign, not just color tweaks.

**The fix is NOT about adjusting colors and spacing** - it's about **adding 20+ high-quality images** and restructuring the entire homepage around visual content.

Without images, V2 will never match Minibojarna's style, no matter how perfect the colors and spacing are.

**PRIORITY ORDER:**
1. Get images ← THIS IS 80% OF THE PROBLEM
2. Update spacing system
3. Update colors
4. Fine-tune typography
5. Update components
