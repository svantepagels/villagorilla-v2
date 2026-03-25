# Villa Gorilla V2 - Image Extraction Guide

**Source:** https://www.villagorilla.se/ (Squarespace CDN)  
**Destination:** `/Users/administrator/.openclaw/workspace/villagorilla-v2/public/images/`

---

## Available Images from villagorilla.se

### 1. Garden/Outdoor Spaces

**VG_garden.jpg (Primary)**
- URL: `https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/4f2384a4-94d4-4917-b2d0-bf51cdd8b879/VG_garden.jpg`
- Dimensions: 2500×1297
- Usage: Homepage hero background (subtle), Lokaler page

**VG_garden (Version 2)**
- URL: `https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/9e2fc3f5-a074-43d1-be7d-a3be1d51d165/VG_garden.jpg`
- Dimensions: 2861×1820
- Usage: Alternative garden view

**VG_garden_2.jpg**
- URL: `https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/7e3992b9-e483-4123-b890-8a41150f4a7a/VG_garden_2.jpg`
- Dimensions: 2500×3411 (portrait)
- Usage: Lokaler gallery

**VG_garden_3.jpg**
- URL: `https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/79bdf378-b597-4725-9dc3-0d4692493bc9/VG_garden_3.jpg`
- Dimensions: 2441×3345 (portrait)
- Usage: Lokaler gallery

---

### 2. Children Activity Photos

**IMG_5133.jpg**
- URL: `https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/e41e77c0-42a9-4bb4-8934-1fd6d4bb2934/IMG_5133.jpg`
- Dimensions: 4284×5712 (portrait)
- Usage: Homepage staff section background, Om oss page

**IMG_5145.jpg**
- URL: `https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/ffe24044-c008-474e-ae42-0f906a24556e/IMG_5145.jpg`
- Dimensions: 4284×5712 (portrait)
- Usage: Pedagogy section, Om oss page

**IMG_5158.jpg**
- URL: `https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/2aa1ddbd-e662-44b4-a916-c753cf23c23f/IMG_5158.jpg`
- Dimensions: 4284×5712 (portrait)
- Usage: Activities showcase

**lek-i-snon-2.jpg** (Snow Play)
- URL: `https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/8fb2b71c-5e87-494e-a515-99d5d7baca15/lek-i-snon-2.jpg`
- Dimensions: 4000×6000 (portrait)
- Usage: Seasonal activities, outdoor play section

---

### 3. Crafts/Activities

**pyssel1-mini.jpg**
- URL: `https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/0a5128b9-eaa1-4222-956c-677528775828/pyssel1-mini.jpg`
- Dimensions: 1200×800 (landscape)
- Usage: Pedagogy section, creative activities

---

### 4. Logo

**VG-logo.png**
- URL: `https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/985dd43f-2eeb-4d1d-b380-a2cb93c63483/VG-logo.png`
- Dimensions: 500×224
- Usage: Header, footer, favicon generation

---

## Extraction Commands

```bash
# Create images directory
mkdir -p /Users/administrator/.openclaw/workspace/villagorilla-v2/public/images

cd /Users/administrator/.openclaw/workspace/villagorilla-v2/public/images

# Download garden images
curl -o VG_garden_1.jpg "https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/4f2384a4-94d4-4917-b2d0-bf51cdd8b879/VG_garden.jpg"

curl -o VG_garden_2.jpg "https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/9e2fc3f5-a074-43d1-be7d-a3be1d51d165/VG_garden.jpg"

curl -o VG_garden_3.jpg "https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/7e3992b9-e483-4123-b890-8a41150f4a7a/VG_garden_2.jpg"

curl -o VG_garden_4.jpg "https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/79bdf378-b597-4725-9dc3-0d4692493bc9/VG_garden_3.jpg"

# Download children activity photos
curl -o children_1.jpg "https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/e41e77c0-42a9-4bb4-8934-1fd6d4bb2934/IMG_5133.jpg"

curl -o children_2.jpg "https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/ffe24044-c008-474e-ae42-0f906a24556e/IMG_5145.jpg"

curl -o children_3.jpg "https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/2aa1ddbd-e662-44b4-a916-c753cf23c23f/IMG_5158.jpg"

curl -o snow_play.jpg "https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/8fb2b71c-5e87-494e-a515-99d5d7baca15/lek-i-snon-2.jpg"

# Download craft photo
curl -o crafts_1.jpg "https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/0a5128b9-eaa1-4222-956c-677528775828/pyssel1-mini.jpg"

# Download logo
curl -o VG-logo.png "https://images.squarespace-cdn.com/content/v1/55278fa6e4b0be723b18072a/985dd43f-2eeb-4d1d-b380-a2cb93c63483/VG-logo.png"

# Verify downloads
ls -lh
```

---

## Image Optimization (Optional)

### Using ImageOptim (Mac)
```bash
# Install ImageOptim CLI
brew install imageoptim-cli

# Optimize all images
imageoptim --quality=85 *.jpg
imageoptim --quality=85 *.png
```

### Using Next.js Image Component

Next.js will automatically optimize images at request time. No manual optimization needed if you use:

```tsx
import Image from 'next/image';

<Image 
  src="/images/VG_garden_1.jpg"
  alt="Villa Gorilla gård"
  width={2500}
  height={1297}
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={85}
  priority // for above-the-fold images
/>
```

---

## Usage Examples in V2

### Homepage Hero (Subtle Background)

```tsx
// app/page.tsx
<section className="relative bg-white py-20 md:py-32">
  {/* Optional subtle background image */}
  <div className="absolute inset-0 opacity-3">
    <Image 
      src="/images/VG_garden_1.jpg"
      alt=""
      fill
      className="object-cover"
      quality={50}
      priority
    />
  </div>
  
  <div className="relative container mx-auto px-6 max-w-4xl text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
      Ditt barns pedagogiska resa börjar här
    </h1>
    {/* ... */}
  </div>
</section>
```

### Lokaler Page Gallery

```tsx
// app/lokaler/page.tsx
<section className="py-20">
  <div className="container mx-auto px-6 max-w-6xl">
    <h1 className="text-4xl font-bold text-charcoal mb-12 text-center">
      Våra lokaler
    </h1>
    
    <div className="grid md:grid-cols-2 gap-4">
      <Image 
        src="/images/VG_garden_1.jpg"
        alt="Gård med lekutrustning"
        width={2500}
        height={1297}
        className="w-full h-auto"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      
      <Image 
        src="/images/VG_garden_3.jpg"
        alt="Gård från annan vinkel"
        width={2500}
        height={3411}
        className="w-full h-auto"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      
      <Image 
        src="/images/children_1.jpg"
        alt="Barn leker"
        width={4284}
        height={5712}
        className="w-full h-auto"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      
      <Image 
        src="/images/crafts_1.jpg"
        alt="Skapande aktiviteter"
        width={1200}
        height={800}
        className="w-full h-auto"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  </div>
</section>
```

### Om Oss Page (Split Layout)

```tsx
// app/om-oss/page.tsx
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 max-w-6xl">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-semibold text-charcoal mb-6">
          Vår pedagogik
        </h2>
        <div className="prose prose-lg">
          <p className="text-gray-600 leading-relaxed">
            Vi arbetar efter läroplanen Lpfö-18...
          </p>
        </div>
      </div>
      
      <Image 
        src="/images/children_2.jpg"
        alt="Pedagogisk aktivitet"
        width={4284}
        height={5712}
        className="w-full h-auto rounded-sm"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  </div>
</section>
```

---

## Image Treatment Philosophy (Minibojarna Style)

**Key Principles:**

1. **Natural, Candid Photos**
   - Children in authentic moments (not posed)
   - Natural lighting preferred
   - Capture everyday activities

2. **Minimal Processing**
   - No heavy filters or color adjustments
   - No overlays or gradients on images
   - Let images speak for themselves

3. **Generous Whitespace**
   - Don't crowd images with text overlays
   - Give each image breathing room
   - Use images as full blocks, not backgrounds

4. **Portrait Orientation**
   - Many Minibojarna photos are portrait (taller than wide)
   - Creates different feel from typical landscape-heavy sites
   - Works well for children photos (natural framing)

5. **Responsive Sizing**
   ```tsx
   // Mobile: full-width
   // Desktop: 50% width in 2-column grids
   sizes="(max-width: 768px) 100vw, 50vw"
   
   // For hero images
   sizes="100vw"
   
   // For smaller accent images
   sizes="(max-width: 768px) 100vw, 33vw"
   ```

---

## Alternative: If Images Don't Download

If Squarespace blocks direct downloads, use screenshots:

1. Open https://www.villagorilla.se/ in browser
2. Right-click image → "Open Image in New Tab"
3. Save image (Cmd+S on Mac)
4. Rename to match conventions above

Or use browser DevTools:
1. Open DevTools (Cmd+Option+I)
2. Network tab → Filter by "Img"
3. Reload page
4. Right-click image request → "Copy URL"
5. Download with curl

---

## Image Inventory Checklist

After extraction, verify you have:

- [ ] 4× Garden/outdoor photos (VG_garden_1 through 4)
- [ ] 3× Children activity photos (children_1, 2, 3)
- [ ] 1× Snow play photo (snow_play.jpg)
- [ ] 1× Crafts photo (crafts_1.jpg)
- [ ] 1× Logo (VG-logo.png)

**Total:** 10 image files

---

## Next Steps After Extraction

1. Place images in `/public/images/`
2. Update all Image components in:
   - `app/page.tsx` (homepage)
   - `app/om-oss/page.tsx`
   - `app/lokaler/page.tsx`
   - `components/layout/Header.tsx` (logo)
3. Generate favicon from logo:
   ```bash
   # Convert logo to favicon
   npx sharp-cli resize 32 32 --input public/images/VG-logo.png --output public/favicon-32x32.png
   npx sharp-cli resize 16 16 --input public/images/VG-logo.png --output public/favicon-16x16.png
   ```

---

**Document Version:** 1.0  
**Last Updated:** 2026-03-25  
**Status:** Ready for execution
