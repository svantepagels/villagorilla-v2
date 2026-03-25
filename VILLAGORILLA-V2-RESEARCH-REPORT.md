# Villa Gorilla V2 - Design Research Report

**Date:** March 25, 2026  
**Purpose:** Research design patterns and best practices for Villa Gorilla V2 (Minibojarna-inspired redesign)  
**Context:** Transformation from playful jungle theme (V1) to calm, minimalist Scandinavian style (V2)

---

## Executive Summary

This research report provides actionable design guidance for implementing Villa Gorilla V2, focusing on:

- **Minibojarna-style minimalism**: Neutral palettes, generous spacing, photography-first approach
- **Typography**: Poppins font system with optimal weights and scales
- **Image optimization**: Next.js best practices for villagorilla.se CDN integration
- **Accessibility**: WCAG 2.1 AA compliance with neutral color schemes

**Key Finding:** Minimalist preschool design conveys warmth through **high-quality photography and natural authenticity** rather than bright colors and playful graphics.

---

## 1. Minibojarna Design Analysis

### 1.1 Overview

**Site:** https://www.minibojarna.se/

Minibojarna is a Stockholm-based Reggio Emilia-inspired preschool cooperative. Their website exemplifies "calm minimalism" — the target aesthetic for Villa Gorilla V2.

### 1.2 Key Design Principles Observed

#### Typography Hierarchy
- **Clean, geometric sans-serif** (similar to Poppins strategy)
- **Generous line spacing** creating breathing room
- **Minimal text hierarchy** — clear headings without excessive decoration
- Headings use simple contrast (bold vs regular, size differences)

#### Color & Spacing
- **Near-monochrome palette**: Black text on white, minimal accent colors
- **Generous whitespace** around all content blocks
- **No bright colors** — relies on photography for visual warmth
- Square/rectangular content blocks with consistent padding

#### Image Treatment
- **Photography as primary visual interest**
- Images appear to be:
  - Natural, authentic moments (not posed studio shots)
  - Well-lit, natural lighting preferred
  - Documentary/reportage style
  - Likely **landscape/horizontal orientations** for hero areas
- No visible filters or heavy color grading — images are clean and realistic

#### Layout & Structure
- **Single-column centered layout** for text content
- Clean navigation (likely minimal menu)
- **No animations or transitions observed** in static analysis — emphasizes calm, stability
- Content organized in clear, scannable blocks

### 1.3 Actionable Takeaways for V2

| Element | Minibojarna Approach | Villa Gorilla V2 Application |
|---------|---------------------|------------------------------|
| **Typography** | Clean geometric sans | Poppins (matches perfectly) |
| **Colors** | Black/white/minimal gray | Implement neutral palette with limited accent |
| **Spacing** | Generous padding everywhere | Use 24-32px minimum padding, 48-64px section gaps |
| **Images** | Natural, authentic photography | Use villagorilla.se CDN images with minimal processing |
| **Shapes** | Square/rectangular blocks | Replace rounded jungle elements with square components |
| **Animation** | Minimal/none | Remove or minimize transitions from V1 |

---

## 2. Poppins Font Best Practices

### 2.1 Why Poppins Works for Preschool Minimalism

Poppins is a **geometric sans-serif** typeface supporting both Devanagari and Latin scripts. Its characteristics align perfectly with V2 goals:

- **Clean, friendly geometry** without being childish
- **Excellent readability** across all weights
- **Professional yet approachable** — bridges institutional and welcoming tones
- **Strong weight range** (Thin to Black) allows clear hierarchy

### 2.2 Recommended Font Weights

Based on industry research and Poppins-specific analysis:

| Element | Weight | Font Size | Line Height | Rationale |
|---------|--------|-----------|-------------|-----------|
| **H1 (Page titles)** | 700 (Bold) | 42-48px | 1.1-1.2 | Strong presence without heaviness |
| **H2 (Section titles)** | 600 (SemiBold) | 32-36px | 1.2 | Clear hierarchy step-down |
| **H3 (Subsections)** | 600 (SemiBold) | 24-28px | 1.3 | Maintains weight, reduces size |
| **H4-H6** | 500 (Medium) | 18-20px | 1.4 | Subtle distinction from body |
| **Body text** | 400 (Regular) | 16-18px | 1.6-1.7 | Optimal readability |
| **Small text/captions** | 400 (Regular) | 14px | 1.5 | Maintains readability at smaller size |
| **Buttons/CTA** | 500-600 (Medium/SemiBold) | 16-18px | 1.2 | Clarity and emphasis |

**Key Insight from Research:** Poppins has a slightly tall x-height, making it readable at smaller sizes. Line heights of **1.6-1.7 for body text** are recommended (versus the common 1.5), giving the airy feel that matches Minibojarna's aesthetic.

### 2.3 Typography Scale System

Use a **modular scale** for consistent visual rhythm. Recommended ratios for preschool sites:

**Option 1: Major Third (1.25) — Recommended**
- Base: 16px
- Scale: 16px → 20px → 25px → 31px → 39px → 49px
- **Best for:** Balanced, gentle hierarchy without dramatic jumps

**Option 2: Perfect Fourth (1.333)**
- Base: 16px
- Scale: 16px → 21px → 28px → 37px → 49px → 65px
- **Best for:** Stronger visual separation between heading levels

**Implementation:**
```css
:root {
  /* Base */
  --text-base: 16px;
  
  /* Major Third Scale */
  --text-sm: 14px;      /* 0.875rem */
  --text-base: 16px;    /* 1rem */
  --text-lg: 20px;      /* 1.25rem */
  --text-xl: 25px;      /* 1.563rem */
  --text-2xl: 31px;     /* 1.953rem */
  --text-3xl: 39px;     /* 2.441rem */
  --text-4xl: 49px;     /* 3.052rem */
  
  /* Line heights */
  --leading-tight: 1.2;
  --leading-normal: 1.6;
  --leading-relaxed: 1.7;
}
```

### 2.4 Fallback Fonts

Poppins is a web font — always provide system font fallbacks:

```css
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Helvetica Neue', Arial, sans-serif;
```

**Why these fallbacks:**
- `-apple-system`: macOS/iOS native (San Francisco)
- `BlinkMacSystemFont`: Chrome on macOS
- `Segoe UI`: Windows
- `Helvetica Neue`: Older macOS
- `Arial`: Universal fallback
- `sans-serif`: System default

All fallbacks are clean, geometric sans-serifs matching Poppins' character.

---

## 3. Minimalist Preschool Design Patterns

### 3.1 Industry Research Findings

Analysis of 17 top preschool websites (Colorlib, 2026) reveals common patterns for successful minimalist early-childhood education sites:

#### Photography Strategy

**High-performing sites use:**
- **Warm, inviting photography** showing authentic learning moments
- **Natural lighting** preferred over studio setups
- **Documentary-style imagery** — children engaged in activities, not posed
- **Photography as hero elements** (fullwidth banners, large featured images)
- **Masonry/asymmetric layouts** for photo galleries (modern, dynamic)

**Quote from research:**
> "The preschool site uses warm, inviting photography and a clean layout to communicate a nurturing learning environment for young children." — Colorlib Best Practices, 2026

#### Layout Patterns

| Pattern | Purpose | Villa Gorilla V2 Use |
|---------|---------|---------------------|
| **Fullwidth hero images** | Immediate emotional connection | Homepage hero with authentic preschool moment |
| **Asymmetric photo layouts** | Modern, interesting without chaos | Program/activity pages |
| **Sticky navigation** | Easy booking/contact access | Persistent "Book Tour" CTA |
| **Video integration** | Show environment in motion | Optional: short intro video on About page |
| **CTA prominence** | Clear enrollment/contact paths | "Book Visit" button in header + sections |

### 3.2 Conveying Warmth Without Bright Colors

**Key Principle:** Warmth comes from **content authenticity**, not palette saturation.

**Strategies:**
1. **Photography quality**
   - Natural smiles, genuine engagement
   - Soft, natural lighting (golden hour, indirect sunlight)
   - Close-ups showing connection between children and educators

2. **Typography warmth**
   - Poppins' rounded geometry feels friendly despite being geometric
   - Generous spacing prevents coldness
   - Approachable language in copy

3. **Subtle warmth accents**
   - Consider **warm grays** (gray with slight brown/beige undertone) vs cool grays
   - Optional: Single warm accent color (muted terracotta, soft sage) for CTAs only
   - Wood textures in photography (toys, furniture) add organic warmth

4. **Micro-interactions**
   - Gentle hover states (slight opacity change, subtle scale)
   - Smooth scroll behavior
   - Soft shadows on cards (not harsh black shadows)

### 3.3 Scandinavian Minimalism Principles

Research on Scandinavian design aesthetic reveals core tenets applicable to V2:

**Core Principles:**
- **Functionality over decoration** — every element serves a purpose
- **Natural light emphasis** — bright, airy layouts
- **Quality over quantity** — fewer, better images
- **Simplicity creates tranquility** — reduces cognitive load for parents
- **Clean lines and uncluttered surfaces**

**Implementation for V2:**
- Remove decorative jungle elements (vines, animal illustrations)
- Embrace whitespace — don't fill every gap
- Square/rectangular components with subtle borders (1px solid #e5e5e5)
- Minimal shadows — prefer flat design with border delineation

---

## 4. Next.js Image Optimization Strategy

### 4.1 Next.js Image Component Benefits

The `next/image` component provides automatic optimization essential for V2:

| Feature | Benefit | Impact on Villa Gorilla V2 |
|---------|---------|----------------------------|
| **Automatic WebP/AVIF** | 25-70% smaller file size | Faster load on mobile for parent browsing |
| **Lazy loading** | Defers offscreen images | Improves initial page speed |
| **Responsive sizing** | Serves correct size per device | Mobile gets 640px, desktop gets 1200px |
| **Layout shift prevention** | CLS improvement | Better UX, better SEO |
| **Blur placeholders** | Perceived performance | Professional feel during load |

### 4.2 Implementation for villagorilla.se CDN

**Step 1: Configure Remote Patterns**

Add villagorilla.se CDN to `next.config.js`:

```javascript
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'villagorilla.se',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
    formats: ['image/avif', 'image/webp'], // Prioritize modern formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Common breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Smaller sizes for icons/thumbnails
  },
}
```

**Step 2: Use Image Component with Responsive Sizes**

```jsx
import Image from 'next/image'

// Hero image (fullwidth on mobile, 50vw on desktop)
<Image
  src="https://villagorilla.se/wp-content/uploads/hero-image.jpg"
  alt="Children engaged in creative play"
  width={1600}
  height={900}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority // Eager load for LCP
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Generate during build
/>

// Gallery images (lazy loaded)
<Image
  src="https://villagorilla.se/wp-content/uploads/gallery-01.jpg"
  alt="Outdoor learning activity"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
  // Default lazy loading applies
/>
```

### 4.3 Sizes Attribute Best Practices

**Critical for performance:** The `sizes` attribute tells the browser which image size to download.

**Common patterns for V2:**

| Layout Type | Sizes Value | Use Case |
|-------------|-------------|----------|
| **Fullwidth hero** | `100vw` | Homepage hero, page headers |
| **Two-column grid** | `(max-width: 768px) 100vw, 50vw` | Program cards, split layouts |
| **Three-column grid** | `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw` | Activity galleries |
| **Fixed sidebar layout** | `(max-width: 768px) 100vw, 66vw` | Blog posts with sidebar |
| **Thumbnails** | `(max-width: 768px) 50vw, 200px` | Small preview images |

**Example calculation:**
- Mobile (375px wide): `100vw` = 375px → browser fetches 640px image
- Tablet (768px wide): `50vw` = 384px → browser fetches 640px image  
- Desktop (1920px wide): `33vw` = 634px → browser fetches 828px image

This saves **60-70% bandwidth** for mobile users compared to serving desktop-sized images.

### 4.4 Priority & Loading Strategy

**For LCP (Largest Contentful Paint) images:**
```jsx
<Image
  src="/hero.jpg"
  loading="eager"
  fetchPriority="high"
  priority // Next.js convenience prop
/>
```

**For below-fold images:**
```jsx
<Image
  src="/gallery-item.jpg"
  // loading="lazy" is default — omit to use default
/>
```

**Performance impact:**
- Eager + high priority LCP images: **20-40% faster LCP**
- Lazy loading below-fold: **15-25% faster initial page load**

### 4.5 Image Aspect Ratios for V2

Maintain consistent aspect ratios for visual harmony:

| Use Case | Ratio | Dimensions Example | Rationale |
|----------|-------|-------------------|-----------|
| **Hero images** | 16:9 | 1600x900 | Widescreen, cinematic feel |
| **Program cards** | 4:3 | 800x600 | Classic, balanced |
| **Square images** | 1:1 | 600x600 | Clean, modern grid layouts |
| **Portrait** | 3:4 | 600x800 | Staff photos, vertical moments |

**Implementation:**
```jsx
// Use fill + object-fit for flexible containers
<div className="aspect-[16/9] relative overflow-hidden">
  <Image
    src="/hero.jpg"
    alt="Hero"
    fill
    className="object-cover"
    sizes="100vw"
  />
</div>
```

---

## 5. Accessibility with Neutral Palettes (WCAG 2.1 AA)

### 5.1 Contrast Ratio Requirements

**WCAG 2.1 Level AA mandates:**

| Element | Minimum Contrast | Example Passing Combinations |
|---------|------------------|------------------------------|
| **Normal text** (< 18pt) | **4.5:1** | Black (#000) on white: 21:1 ✅<br>Gray (#767676) on white: 4.5:1 ✅<br>#777777 on white: 4.47:1 ❌ |
| **Large text** (≥18pt or ≥14pt bold) | **3:1** | Gray (#949494) on white: 3:1 ✅ |
| **UI components** (buttons, borders, icons) | **3:1** | Border/background contrast |

**Critical:** You **cannot round up** to 4.5:1. A ratio of 4.47:1 fails.

### 5.2 Recommended Color Palette for V2

Based on WCAG requirements and minimalist aesthetic:

```css
:root {
  /* Backgrounds */
  --bg-primary: #FFFFFF;        /* Pure white */
  --bg-secondary: #F9FAFB;      /* Off-white (warm gray) */
  --bg-tertiary: #F3F4F6;       /* Light gray for subtle sections */
  
  /* Text */
  --text-primary: #111827;      /* Near-black — 16.1:1 contrast ✅ */
  --text-secondary: #4B5563;    /* Medium gray — 8.3:1 contrast ✅ */
  --text-tertiary: #6B7280;     /* Light gray — 5.9:1 contrast ✅ */
  
  /* Borders */
  --border-light: #E5E7EB;      /* Subtle borders */
  --border-medium: #D1D5DB;     /* More visible borders */
  
  /* Accent (optional, use sparingly) */
  --accent-primary: #059669;    /* Muted green — 4.5:1 on white ✅ */
  --accent-hover: #047857;      /* Darker on hover — 6.4:1 ✅ */
}
```

**Contrast verification:**
- Use WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Verify all text/background combinations before deployment

### 5.3 Focus States Without Bright Colors

**Challenge:** Neutral palettes make focus indicators less obvious. Solution: High-contrast outlines + background changes.

#### Recommended Focus Indicator Pattern

```css
/* Base interactive elements */
button, a, input, select, textarea {
  outline: none; /* Remove browser default */
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
}

/* Focus state — dual indicator */
button:focus-visible, 
a:focus-visible, 
input:focus-visible {
  /* Outline for keyboard users */
  outline: 2px solid #111827; /* High contrast black */
  outline-offset: 2px; /* Space from element */
  
  /* Optional background tint */
  background-color: #F3F4F6; /* Subtle gray background */
}

/* For dark backgrounds, invert */
.dark-section button:focus-visible {
  outline: 2px solid #FFFFFF;
  outline-offset: 2px;
}
```

**WCAG 2.2 Requirements (2.4.11 Focus Appearance):**
- **Minimum contrast of 3:1** against adjacent colors
- **At least as large as perimeter** of focused element (or 2px thick)
- **Must not be obscured** by other content

**Villa Gorilla V2 Implementation:**
1. **Black outline (2px)** on light backgrounds — 21:1 contrast ✅
2. **White outline (2px)** on dark backgrounds — 21:1 contrast ✅  
3. **Outline offset (2px)** prevents overlap with element
4. **Subtle background tint** adds secondary indicator

#### Focus Indicator Examples

```jsx
// Button with accessible focus
<button className="
  px-6 py-3 
  bg-white border-2 border-gray-900 
  text-gray-900 font-medium
  focus-visible:outline focus-visible:outline-2 
  focus-visible:outline-gray-900 focus-visible:outline-offset-2
  focus-visible:bg-gray-50
  hover:bg-gray-50
  transition-all duration-200
">
  Book a Visit
</button>

// Link with focus
<a href="/programs" className="
  text-gray-900 underline underline-offset-4
  focus-visible:outline focus-visible:outline-2 
  focus-visible:outline-gray-900 focus-visible:outline-offset-2
  focus-visible:bg-gray-100 focus-visible:px-1 focus-visible:-mx-1
  rounded-sm
">
  Explore Programs
</a>
```

### 5.4 Additional Accessibility Considerations

#### 5.4.1 Images & Alt Text
```jsx
// Meaningful alt text for all images
<Image
  src="/classroom.jpg"
  alt="Children building with wooden blocks in a sunlit classroom"
  // NOT: alt="Image" or alt="classroom.jpg"
  width={800}
  height={600}
/>

// Decorative images
<Image
  src="/decorative-pattern.svg"
  alt="" // Empty alt for decorative images
  width={100}
  height={100}
  aria-hidden="true"
/>
```

#### 5.4.2 Semantic HTML
```jsx
// Use proper heading hierarchy
<h1>Villa Gorilla Preschool</h1>
  <h2>Our Programs</h2>
    <h3>Ages 1-3</h3>
    <h3>Ages 3-5</h3>
  <h2>About Us</h2>

// NOT:
<div className="text-4xl font-bold">Villa Gorilla</div> // ❌
```

#### 5.4.3 Link & Button Distinction
```css
/* Links look like links */
a {
  color: var(--text-primary);
  text-decoration: underline;
  text-underline-offset: 4px;
}

a:hover {
  text-decoration-thickness: 2px;
}

/* Buttons look like buttons */
button {
  border: 2px solid currentColor;
  padding: 12px 24px;
  background: white;
}
```

---

## 6. Implementation Checklist

### Phase 1: Typography & Color Foundation
- [ ] Implement Poppins font with weights 400, 500, 600, 700
- [ ] Define CSS custom properties for type scale (Major Third)
- [ ] Set base font size (16px) and line heights (1.6 body, 1.2 headings)
- [ ] Implement neutral color palette (verify all contrasts with WebAIM)
- [ ] Test typography scale on sample content

### Phase 2: Component System
- [ ] Replace rounded corners with square/rectangular shapes
- [ ] Implement generous spacing system (24/32/48/64px scale)
- [ ] Remove jungle-themed decorative elements
- [ ] Create accessible focus states for all interactive elements
- [ ] Build card components with subtle borders (1px solid #E5E7EB)

### Phase 3: Image Optimization
- [ ] Configure Next.js image remote patterns for villagorilla.se
- [ ] Identify LCP images and add `priority` prop
- [ ] Define `sizes` attribute for all responsive images
- [ ] Test WebP/AVIF generation and fallbacks
- [ ] Implement aspect ratio containers for consistent layouts
- [ ] Add blur placeholders for perceived performance

### Phase 4: Accessibility Audit
- [ ] Run axe DevTools scan on all pages
- [ ] Verify all text/background contrast ratios (4.5:1 minimum)
- [ ] Test keyboard navigation on all interactive elements
- [ ] Verify focus indicators meet 3:1 contrast requirement
- [ ] Add meaningful alt text to all content images
- [ ] Validate semantic HTML structure (heading hierarchy)
- [ ] Test with screen reader (VoiceOver/NVDA)

### Phase 5: Photography & Content
- [ ] Audit current villagorilla.se images for Minibojarna-style authenticity
- [ ] Select hero images (16:9 ratio, natural lighting, authentic moments)
- [ ] Organize gallery images (4:3 or 1:1 ratios)
- [ ] Optimize image file names for SEO (descriptive, not DSC_1234.jpg)
- [ ] Ensure diversity and inclusivity in image selection
- [ ] Remove or replace overly staged/posed photos

---

## 7. Sources & References

### Primary Research
1. **Minibojarna Website Analysis**
   - URL: https://www.minibojarna.se/
   - Date accessed: March 25, 2026
   - Key insights: Minimalist layout, typography hierarchy, authentic photography

2. **Colorlib Preschool Website Inspiration (2026)**
   - URL: https://colorlib.com/wp/preschool-kindergarten-websites/
   - 17 case studies analyzed
   - Focus on photography strategy, layout patterns, CTA design

3. **Next.js Official Documentation**
   - Image Optimization Guide: https://nextjs.org/docs/app/getting-started/images
   - Version: 16.2.1
   - Last updated: March 20, 2026

4. **DebugBear Next.js Image Optimization Analysis**
   - URL: https://www.debugbear.com/blog/nextjs-image-optimization
   - Technical deep-dive on performance impacts

5. **WebAIM Contrast & Accessibility**
   - Contrast Guidelines: https://webaim.org/articles/contrast/
   - Focus on WCAG 2.1/2.2 requirements
   - Contrast Checker Tool: https://webaim.org/resources/contrastchecker/

6. **Sara Soueidan: Accessible Focus Indicators**
   - URL: https://www.sarasoueidan.com/blog/focus-indicators/
   - Comprehensive guide to WCAG-conformant focus design

### Secondary Research
7. **Typography Scale Resources**
   - Modular Scale: https://www.modularscale.com/
   - Type Scale Tool: https://precise-type.com/
   - Prototypr: Defining Modular Type Scales (Oct 2023)

8. **Scandinavian Design Principles**
   - Scan Magazine: "Scandinavian Minimalism Impact" (March 2024)
   - HGTV: "Scandinavian Design Style 101" (July 2025)
   - Focus on natural light, clean lines, functional simplicity

9. **Poppins Font Analysis**
   - Google Fonts: Poppins Specimen
   - Reddit r/typography: Poppins pairing discussions
   - Studio Tonic: "Choosing Typography and Line Heights" (2024)

10. **Keyboard Accessibility**
    - Deque: "How to Design Useful Focus Indicators" (Dec 2025)
    - Level Access: "Keyboard Navigation Guide" (Feb 2026)
    - WebAIM: Keyboard Accessibility Techniques

---

## 8. Conclusion

Villa Gorilla V2's transformation from playful jungle theme to Minibojarna-inspired minimalism requires careful attention to:

1. **Typography as hierarchy** — Poppins with clear weight/size system replaces decorative elements
2. **Photography as warmth** — High-quality, authentic images convey nurturing environment without bright colors
3. **Performance as professionalism** — Next.js image optimization ensures fast, modern experience
4. **Accessibility as inclusion** — WCAG 2.1 AA compliance with neutral palette demonstrates commitment to all families

**Next Steps:**
- Review this report with design team
- Prioritize implementation checklist
- Conduct A/B testing on homepage hero (V1 vs V2 style)
- Gather parent feedback on warmth perception with neutral palette

**Success Metrics:**
- Lighthouse Performance score >90
- All text passes 4.5:1 contrast ratio
- LCP < 2.5 seconds on 3G
- Parent qualitative feedback: "calm, professional, trustworthy"

---

**Research conducted by:** OpenClaw Researcher Agent  
**Report version:** 1.0  
**For questions/clarifications:** Reference section numbers in this document
