# Minibojarna - Exact Design Specifications

**Source**: https://www.minibojarna.se/  
**Template**: Squarespace 7.1 (sepia-fish-tryy)  
**Date Extracted**: 2026-03-25

---

## 🎨 Color Palette

### Identified Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| Text Gray | `#706D6D` | Body text color |
| White | `#FFFFFF` | Background (via HSL variable) |
| Black | `#000000` | Navigation/text (via HSL variable) |
| Accent Color | *Variable* | Links and highlights (uses `.sqsrte-text-color--accent`) |

### CSS Variables Structure
```css
--headerBorderColor: hsla(var(--accent-hsl), 1)
--solidHeaderBackgroundColor: hsla(var(--white-hsl), 1)
--solidHeaderNavigationColor: hsla(var(--black-hsl), 1)
```

**⚠️ Note**: Squarespace uses CSS variables that need browser DevTools inspection to extract exact computed values. The site likely uses a colorful accent color (rainbow logo visible).

---

## 📝 Typography System

### Primary Font: Poppins (Google Fonts)
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,700">
```

### Font Weights Available
- Light: 300
- Light Italic: 300i
- Regular: 400
- Regular Italic: 400i
- Medium: 500
- Bold: 700
- Bold Italic: 700i

### Typography Scale (from tweakJSON)
```json
"--title-font-size-value": 2.2
"--body-font-size-value": 1.2
"--button-font-size-value": 0.9
```

### Computed Typography
Based on Squarespace template defaults (requires browser inspection for exact px values):
- **Headings**: Likely use Poppins Medium/Bold
- **Body**: Poppins Regular, size factor 1.2
- **Buttons**: Poppins Medium, size factor 0.9
- **Line Height**: Default 1.7 (from Squarespace base)

---

## 🖼️ Image Usage Analysis

### Logo
- **File**: `logo_rainbow.png` (rainbow colored)
- **Source**: `//images.squarespace-cdn.com/content/v1/62e7bd9085438d69c7d88ac1/81240b63-a3bb-4e86-a1e7-57cb95fd0ac1/logo_rainbow.png`
- **Desktop Height**: 88px
- **Mobile Max Height**: 35px

### Image System
Based on HTML structure and Squarespace config:
- **Image Block Focal Point**: 50% 50% (centered)
- **Object Fit**: cover
- **Overlay Opacity**: 0 (no default overlay)
- **Aspect Ratios Used**:
  - 1:1 Square
  - 3:2 Standard
  - Full-width responsive images

### Image Treatment
- No filters or overlays by default
- Background size: cover
- Centered positioning
- Responsive with srcset

**Estimated Image Usage**: High (60%+ of content is visual based on template configuration)

---

## 📐 Spacing System

### Core Spacing Variables
```css
--sqs-site-max-width: 1500px
--sqs-site-gutter: 4vw (desktop) | 6vw (mobile)
--pagePadding: 4vw
--mobile-header-vert-padding: 6vw
--header-vert-padding: 3vw
```

### Layout Measurements
- **Max Page Width**: 1400px (from maxPageWidth tweak)
- **Desktop Gutters**: 4vw
- **Mobile Gutters**: 6vw
- **Header Vertical Padding**: 3vw (desktop), 6vw (mobile)

### Spacing Scale
From blog/content tweaks:
- **Image Spacing**: 40px - 50px
- **Meta Spacing**: 10px - 30px
- **Read More Spacing**: 20px - 30px
- **Horizontal Spacing**: 30px
- **Vertical Spacing**: 30px

---

## 🧱 Component Specifications

### Buttons

#### Primary Button
```css
.primary-button-style-solid {
  style: solid;
  shape: square;
  border-radius: 0px; /* square corners */
}
```

**Sizes**:
- Font size: 0.9em relative to base
- Padding: Requires browser inspection
- Text transform: UPPERCASE (common in Squarespace templates)

#### Secondary/Tertiary Buttons
```css
.secondary-button-style-solid,
.tertiary-button-style-solid {
  style: solid;
  shape: square;
}
```

### Header/Navigation

#### Layout
- **Width**: Full
- **Layout**: "brandingCenter" (logo centered)
- **Mobile Layout**: "logoCenterNavLeft"
- **Style**: Dynamic (changes on scroll)
- **Transparent Header**: Enabled

#### Navigation Colors
```css
--solidHeaderBackgroundColor: white
--solidHeaderNavigationColor: black
```

#### Social Icons
- Border Shape: none
- Border Style: outline
- Border Thickness: 1px
- Enabled: Facebook, Instagram

### Forms

```css
form-field-style: solid
form-field-shape: square
form-field-border: all
form-field-checkbox-type: icon
form-field-checkbox-fill: solid
form-field-checkbox-color: inverted
form-field-checkbox-shape: square
form-field-hover-focus: outline
form-submit-button-style: label
```

### Cards/Content Blocks

- **Text Block Radius**: 0px (square corners)
- **Text Block Padding**: 6% on all sides
- **Blur Value**: blur(15px) for overlays
- **Stroke Thickness**: 6px

---

## 📱 Responsive Breakpoints

Based on Squarespace standard breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: Max-width constrained to 1400px

---

## ✨ Animations & Effects

```json
"tweak-global-animations-enabled": "false"
"tweak-global-animations-animation-type": "none"
"tweak-global-animations-animation-style": "fade"
"tweak-global-animations-animation-curve": "ease"
"tweak-global-animations-animation-duration": "0.1s"
"tweak-global-animations-animation-delay": "0.1s"
```

**Note**: Global animations are disabled, keeping interactions minimal.

---

## 🔍 Key Findings vs V2

### Image vs Text Ratio
- **Minibojarna**: Approximately 60% images (rainbow logo, full-width hero images)
- **V2**: 95% text

### Visual Style
- **Minibojarna**: Colorful (rainbow logo), welcoming, child-focused
- **V2**: Minimal, text-heavy, monochrome

### Layout
- **Minibojarna**: Centered branding, full-width sections, generous whitespace
- **V2**: Narrow content, dense information

---

## ⚠️ Limitations & Next Steps

### Browser DevTools Required For:
1. **Exact hex codes** for accent colors
2. **Computed font sizes** in px/rem
3. **Exact button dimensions** and padding
4. **Color values** from CSS variables (--accent-hsl, etc.)
5. **Hover states** and interactive colors
6. **Actual image aspect ratios** in use

### Recommended Actions:
1. Use Chrome extension to connect browser control
2. Take full-page screenshot of homepage
3. Inspect computed styles for all color variables
4. Measure exact spacing between sections
5. Extract complete color palette from rendered DOM
6. Document hover and active states for interactive elements

---

## 📊 Summary

**Design System Characteristics**:
- **Font**: Poppins (modern, friendly, sans-serif)
- **Colors**: Warm/colorful (rainbow branding), high contrast
- **Spacing**: Generous (4-6vw gutters), breathing room
- **Layout**: Full-width hero sections, centered content blocks
- **Images**: Heavy usage, large formats, centered focal points
- **Buttons**: Solid, square, likely colorful accent colors
- **Forms**: Square, solid borders, icon-based checkboxes

**Primary Difference from V2**: Minibojarna uses visual storytelling with images and color, while V2 is information-dense with minimal visuals.
