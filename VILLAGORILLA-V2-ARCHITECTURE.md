# Villa Gorilla V2 - Architecture Document

**Project:** Villa Gorilla Website V2  
**Design Reference:** Minibojarna.se visual style  
**Content Source:** Villa Gorilla V1 (villagorilla.vercel.app)  
**Deployment:** Separate Vercel project (villagorilla-v2)  
**Date:** 2026-03-25

---

## Executive Summary

This document outlines Villa Gorilla V2, a visual redesign of the existing website matching Minibojarna's clean, minimal aesthetic while **maintaining exact same functionality** (content, admin system, öppet hus, forms) from V1.

**Key Principle:** Content & functionality stay identical → Only visual design changes.

---

## Design Analysis: Minibojarna.se

### Visual Style Summary

**Font Family:**
- **Primary:** Poppins (Google Fonts)
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)
- **Contrast with V1:** V1 uses Inter (geometric, tech-feel) → V2 uses Poppins (rounded, friendly, warmer)

**Color Palette:**
Minibojarna uses a clean, neutral palette with minimal accent colors:
- **Base White:** `#FFFFFF` (primary background)
- **Text Dark:** `#2C2C2C` (headings, body text)
- **Text Gray:** `#6B7280` (secondary text)
- **Accent:** Minimal use, appears in logo (rainbow) but interface is neutral
- **Light backgrounds:** `#F9FAFB`, `#F4F4F4` (very subtle grays for section separation)

**Key Difference from V1:**
- V1: Bold jungle green (#2D7A4F), bright banana yellow (#FFD93D) → High contrast, playful
- V2: Neutral blacks/grays, minimal color → Clean, sophisticated, calming

**Typography Scale:**
```css
h1: 2.5rem (40px) desktop, 2rem (32px) mobile
h2: 2rem (32px) desktop, 1.75rem (28px) mobile
h3: 1.5rem (24px)
body: 1rem (16px) - larger line-height (1.7-1.8)
small: 0.875rem (14px)
```

**Spacing:**
- Generous whitespace between sections (80-120px desktop, 40-60px mobile)
- Narrower max content width: ~900px for text sections (V1 uses ~1200px)
- More breathing room around text blocks

**Layout Patterns:**

1. **Single-column, centered content** - Most sections are narrow, centered columns
2. **Minimal visual hierarchy** - Uses whitespace & typography scale instead of colors
3. **Text-first design** - Images support text, not vice versa
4. **Simple navigation** - Clean header, minimal menu items
5. **No hero image overlay** - Text sections typically on plain backgrounds

**Component Style:**

**Buttons:**
- **Primary:** Black background, white text, square corners (border-radius: 0 or 2px max)
- **Secondary:** White background, black border, black text
- **Hover:** Subtle opacity change (0.8-0.9), no transform animations
- **Padding:** Generous (px-8 py-4)

**Cards/Sections:**
- No shadows or borders (V1 uses shadow-md on cards)
- Separation via whitespace and subtle background color changes
- No hover lift effects (V1 has hover:-translate-y-1)

**Forms:**
- Square input fields (form-field-shape-square)
- Solid borders, no rounded corners
- Normal fill (not colored backgrounds)
- Simple focus states (border color change)

**Navigation:**
- Fixed/sticky header possible but minimal
- Clean horizontal menu (desktop)
- Simple folder dropdowns for subpages
- No complex mega-menus

**Images:**
- Full-width or constrained within content width
- No overlay effects or parallax
- Natural aspect ratios (not forced into grids)
- Often portrait-oriented photos of children (candid, natural light)

---

## V2 Design System

### Color Palette

**Primary Colors:**
```css
--color-white: #FFFFFF;
--color-black: #1A1A1A;
--color-charcoal: #2C2C2C;
--color-gray-600: #6B7280;
--color-gray-400: #9CA3AF;
--color-gray-200: #E5E7EB;
--color-gray-100: #F3F4F6;
--color-gray-50: #F9FAFB;
```

**Accent (Minimal Use):**
```css
--color-accent-primary: #4F46E5; /* Indigo - for links, CTAs */
--color-accent-hover: #4338CA;
```

**Rationale:** Move away from playful jungle/banana to sophisticated neutral palette. Indigo accent for professional trust while remaining approachable.

### Typography

**Font Stack:**
```typescript
// tailwind.config.ts
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
}
```

**Preload Google Fonts:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
```

**Type Scale:**
```css
h1: 2.5rem (40px), font-weight: 700, line-height: 1.2
h2: 2rem (32px), font-weight: 600, line-height: 1.3
h3: 1.5rem (24px), font-weight: 600, line-height: 1.4
body: 1rem (16px), font-weight: 400, line-height: 1.75
small: 0.875rem (14px), font-weight: 400, line-height: 1.6
```

**Desktop/Mobile Adjustments:**
```css
/* Mobile-first approach */
@media (max-width: 768px) {
  h1: 2rem (32px)
  h2: 1.75rem (28px)
  h3: 1.25rem (20px)
}
```

### Spacing

**Section Padding:**
```css
Desktop: py-20 md:py-28 (80-112px)
Mobile: py-12 md:py-20 (48-80px)
```

**Content Max Width:**
```css
Text sections: max-w-3xl (768px)
Full-width sections: max-w-6xl (1152px)
Default container: max-w-5xl (1024px)
```

**Grid Gaps:**
```css
Card grids: gap-8 md:gap-12 (32-48px)
Element spacing: gap-4 md:gap-6 (16-24px)
```

### Component Styles

**Buttons:**
```typescript
// components/ui/button.tsx modifications
variants: {
  variant: {
    default: 'bg-charcoal text-white hover:bg-black transition-colors',
    outline: 'border-2 border-charcoal text-charcoal bg-white hover:bg-gray-50',
    ghost: 'text-charcoal hover:bg-gray-100',
  },
  size: {
    default: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
    sm: 'px-6 py-2 text-sm',
  }
}
// Remove rounded corners: rounded-none or rounded-sm (2px max)
```

**Cards:**
```css
/* Remove shadows, use subtle borders */
.card {
  background: white;
  border: 1px solid var(--color-gray-200); /* optional, minimal */
  padding: 2rem; /* more spacious */
  transition: none; /* no hover lift */
}
```

**Forms:**
```css
input, textarea {
  border: 1px solid var(--color-gray-300);
  border-radius: 0; /* square corners */
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background: white;
  transition: border-color 0.2s;
}

input:focus, textarea:focus {
  border-color: var(--color-charcoal);
  outline: none;
  box-shadow: none; /* no glow effects */
}
```

---

## Content Structure (Unchanged from V1)

**Pages:**
1. `/` - Homepage
2. `/om-oss` - About (pedagogy, staff, philosophy)
3. `/lokaler` - Facilities
4. `/inskolning` - Enrollment process
5. `/kooperativ` - Cooperative explanation
6. `/oppet-hus` - Open house calendar
7. `/kontakt` - Contact form
8. `/admin/login` - Admin login
9. `/admin/events` - Event management

**Content Blocks (Same as V1):**
- Hero section
- Stats bar (4.7 barn/pedagog, etc.)
- Welcome/intro text
- Perks grid (6 benefits)
- Pedagogy section
- Staff highlight
- CTA sections

---

## Visual Redesign: Component by Component

### Homepage

#### 1. Hero Section

**V1 Design:**
```tsx
// Gradient background (jungle green), emoji 🦍, large heading
<section className="bg-gradient-to-br from-jungle to-jungle-dark text-white">
  <span className="text-6xl">🦍</span>
  <h1 className="text-4xl md:text-6xl font-bold">
    Ditt barns pedagogiska resa börjar här
  </h1>
  <Button variant="banana">Boka öppet hus</Button>
</section>
```

**V2 Design:**
```tsx
// Clean white background, centered text, minimal styling
<section className="bg-white py-20 md:py-32">
  <div className="container mx-auto px-6 max-w-4xl text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
      Ditt barns pedagogiska resa börjar här
    </h1>
    <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
      En trygg och lugn förskola på Kungsholmen med erfarna pedagoger,
      nyrenoverade lokaler och en stark gemenskap.
    </p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Button size="lg" className="rounded-none">Boka öppet hus</Button>
      <Button size="lg" variant="outline" className="rounded-none">Läs mer om oss</Button>
    </div>
  </div>
</section>
```

**Changes:**
- ❌ Remove gradient background, emoji
- ✅ White background, clean typography
- ✅ Larger line-height (leading-relaxed)
- ✅ Narrower max-width (max-w-4xl instead of full-width)
- ✅ Square buttons (rounded-none)
- ✅ Black/outline buttons instead of banana/jungle colors

#### 2. Stats Bar

**V1:**
```tsx
<section className="bg-banana py-6">
  <div className="grid grid-cols-2 md:grid-cols-4">
    <div className="text-2xl font-bold text-charcoal">4,7</div>
  </div>
</section>
```

**V2:**
```tsx
<section className="bg-gray-50 py-12 md:py-16">
  <div className="container mx-auto px-6 max-w-5xl">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map(stat => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Changes:**
- ❌ Remove bright banana yellow background
- ✅ Subtle gray-50 background
- ✅ More spacing (py-12 instead of py-6)
- ✅ Larger gaps between items

#### 3. Welcome Section

**V1:**
```tsx
<section className="py-16 md:py-24 bg-beige-light">
  <div className="max-w-3xl">...</div>
</section>
```

**V2:**
```tsx
<section className="py-20 md:py-28 bg-white">
  <div className="container mx-auto px-6 max-w-3xl">
    <h2 className="text-3xl md:text-4xl font-semibold text-charcoal mb-8 text-center">
      Välkommen till Villa Gorilla
    </h2>
    <div className="prose prose-lg max-w-none">
      <p className="text-lg text-gray-600 leading-relaxed">
        Vi värdesätter ditt barns lärande...
      </p>
    </div>
  </div>
</section>
```

**Changes:**
- ✅ White background (not beige)
- ✅ More generous vertical padding
- ✅ Use Tailwind's `prose` class for optimal reading typography
- ✅ Center-aligned heading

#### 4. Perks Grid

**V1:**
```tsx
<div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md hover:-translate-y-1">
  <div className="w-12 h-12 rounded-lg bg-jungle/10">
    <perk.icon className="text-jungle" />
  </div>
  <h3 className="font-bold">{perk.title}</h3>
</div>
```

**V2:**
```tsx
<div className="bg-white p-8 border-t-2 border-gray-200">
  {/* Remove icon backgrounds, use minimal icons */}
  <h3 className="text-xl font-semibold text-charcoal mb-3">
    {perk.title}
  </h3>
  <p className="text-gray-600 leading-relaxed">
    {perk.desc}
  </p>
</div>
```

**Changes:**
- ❌ Remove rounded corners, shadows, hover animations
- ❌ Remove icon colored backgrounds
- ✅ Subtle top border for visual separation
- ✅ More padding (p-8 instead of p-6)
- ✅ Focus on typography hierarchy

#### 5. Pedagogy Section

**V1:**
```tsx
<section className="bg-beige">
  <div className="grid md:grid-cols-2">
    <div>...</div>
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <Star className="text-banana" />
    </div>
  </div>
</section>
```

**V2:**
```tsx
<section className="bg-gray-50 py-20 md:py-28">
  <div className="container mx-auto px-6 max-w-5xl">
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-3xl font-semibold text-charcoal mb-6">
          Vår pedagogik
        </h2>
        <div className="prose prose-lg">
          <p className="text-gray-600 leading-relaxed">...</p>
        </div>
      </div>
      <div className="bg-white p-8 border border-gray-200">
        <h3 className="text-lg font-semibold text-charcoal mb-4">
          Vi undervisar i
        </h3>
        <ul className="space-y-2">
          {subjects.map(s => (
            <li className="text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-charcoal rounded-full" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>
```

**Changes:**
- ✅ Replace colored star icons with simple bullet points
- ✅ Square card with subtle border (no shadow, no rounded corners)
- ✅ Cleaner list styling

#### 6. Staff Section

**V1:**
```tsx
<div className="bg-white rounded-xl p-4 shadow-sm">
  <div className="w-16 h-16 rounded-full bg-jungle/10">
    <GraduationCap className="text-jungle" />
  </div>
  <h3 className="font-semibold text-sm">{person.name}</h3>
  <p className="text-jungle">{person.years} års erfarenhet</p>
</div>
```

**V2:**
```tsx
<div className="text-center p-6">
  {/* No icon background - use initials or simple placeholder */}
  <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 flex items-center justify-center text-2xl font-semibold text-charcoal">
    {getInitials(person.name)}
  </div>
  <h3 className="font-medium text-charcoal">{person.name}</h3>
  <p className="text-sm text-gray-600 mt-1">{person.role}</p>
  <p className="text-sm text-gray-500 mt-1">{person.years} års erfarenhet</p>
</div>
```

**Changes:**
- ✅ Replace icon circles with initials (or actual photos if available)
- ✅ Remove colored accents (jungle green)
- ✅ Cleaner typography hierarchy

#### 7. CTA Section

**V1:**
```tsx
<section className="bg-jungle text-white">
  <Button variant="banana">Se kommande öppet hus</Button>
</section>
```

**V2:**
```tsx
<section className="bg-charcoal text-white py-20 md:py-28">
  <div className="container mx-auto px-6 max-w-4xl text-center">
    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
      Vill du veta mer?
    </h2>
    <p className="text-xl text-gray-300 mb-10 leading-relaxed">
      Kom på vårt öppet hus och träffa personalen, se våra lokaler och ställ alla
      frågor du har om vår förskola.
    </p>
    <div className="flex gap-4 justify-center">
      <Button size="lg" className="bg-white text-charcoal hover:bg-gray-100 rounded-none">
        Se kommande öppet hus
      </Button>
      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-none">
        Kontakta oss
      </Button>
    </div>
  </div>
</section>
```

**Changes:**
- ✅ Dark charcoal background instead of jungle green
- ✅ White/outline buttons (no banana yellow)
- ✅ More generous padding and line-height

---

## Image Assets from V1

**Available Images (from villagorilla.se):**

1. **Garden/Outdoor:**
   - `VG_garden.jpg` (multiple versions, 2500x1297, 2861x1820, 2441x3345)
   - Primary outdoor space photos

2. **Children Activities:**
   - `IMG_5133.jpg` (4284x5712) - Portrait child photo
   - `IMG_5145.jpg` (4284x5712) - Portrait child photo
   - `IMG_5158.jpg` (4284x5712) - Portrait child photo
   - `lek-i-snon-2.jpg` (4000x6000) - Snow play

3. **Crafts/Activities:**
   - `pyssel1-mini.jpg` (1200x800) - Craft activities

4. **Logo:**
   - `VG-logo.png` (500x224) - Villa Gorilla logo

**Image Usage in V2:**

```tsx
// Example: Homepage hero background (optional)
<section className="relative">
  <div className="absolute inset-0 opacity-5">
    <Image 
      src="/images/VG_garden.jpg" 
      alt="" 
      fill 
      className="object-cover"
      priority
    />
  </div>
  <div className="relative">
    {/* Hero content */}
  </div>
</section>

// Lokaler page: Full-width gallery
<div className="grid md:grid-cols-2 gap-4">
  <Image src="/images/VG_garden.jpg" alt="Gård" width={2500} height={1297} />
  <Image src="/images/IMG_5133.jpg" alt="Barn" width={4284} height={5712} />
</div>
```

**Image Extraction Process:**

1. Download all images from villagorilla.se Squarespace CDN
2. Optimize with Next.js Image component (automatic WebP conversion)
3. Store in `/public/images/` directory
4. Use responsive sizes attribute:
```tsx
sizes="(max-width: 768px) 100vw, 50vw"
```

**Recommended Image Treatment:**
- **V1:** Used as decorative backgrounds, icon-heavy sections
- **V2:** Use images sparingly, full-bleed when used, no overlays or filters
- Natural, candid photos of children (match Minibojarna's authentic feel)

---

## Integration Points (CRITICAL - Exact Same as V1)

### 1. Admin System

**Endpoint:** `/admin/events`  
**Authentication:** Cookie-based (`admin_auth` cookie)  
**Token:** `process.env.ADMIN_TOKEN` (default: `'villagorilla-admin-2026'`)

**Implementation (UNCHANGED):**
```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authCookie = request.cookies.get('admin_auth');
    const validToken = process.env.ADMIN_TOKEN || 'villagorilla-admin-2026';
    
    if (authCookie?.value !== validToken) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  return NextResponse.next();
}
```

**Admin Pages:**
- `/admin/login` - Password entry form
- `/admin/events` - Event CRUD interface

**API Routes (UNCHANGED):**
- `POST /api/admin/login` - Set auth cookie
- `GET /api/admin/events` - List all events
- `POST /api/admin/events` - Create event
- `PUT /api/admin/events` - Update event (toggle isActive, etc.)
- `DELETE /api/admin/events` - Delete event

**Only Change in V2:** UI styling matches new design system (square inputs, minimal buttons)

### 2. Vercel Blob Storage

**Connection:**
```typescript
// lib/events.ts (EXACT SAME)
import { put, list } from '@vercel/blob';

const BLOB_KEY = 'events.json';

export async function getEvents(): Promise<OpenHouseEvent[]> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  const { list: listFn } = await import('@vercel/blob');
  const result = await listFn({ token, prefix: BLOB_KEY });
  
  if (result.blobs.length === 0) return [];
  
  const response = await fetch(result.blobs[0].url, { 
    next: { revalidate: 60 } 
  });
  const data = await response.json();
  return data.events || [];
}

export async function saveEvents(events: OpenHouseEvent[]): Promise<void> {
  await put(BLOB_KEY, JSON.stringify({ events }, null, 2), {
    access: 'public',
    addRandomSuffix: false,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
}
```

**Environment Variables (REUSE FROM V1):**
```bash
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_cxCQsjaPveM95vPO_8AwF55imJ9Xr47EJ0GA7yIBAY78tHn
```

**Data Structure (UNCHANGED):**
```typescript
interface OpenHouseEvent {
  id: string;
  title: string;
  date: string; // ISO 8601
  duration: number; // minutes
  description: string;
  maxAttendees?: number;
  location: string;
  contactPerson: string;
  contactEmail: string;
  registrations: Registration[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Registration {
  id: string;
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  registeredAt: string;
}
```

### 3. Signup Form (Exact 4 Fields)

**Form Fields (UNCHANGED):**
```typescript
// Zod validation schema (EXACT SAME)
const schema = z.object({
  eventId: z.string().min(1),
  parentName: z.string().min(2, 'Ange ditt namn'),
  email: z.string().email('Ange en giltig e-postadress'),
  phone: z.string().min(8, 'Ange ett giltigt telefonnummer'),
  childAge: z.string().min(1, 'Ange barnets ålder'),
  gdprConsent: z.boolean().refine((v) => v, 'Du måste godkänna villkoren'),
});
```

**API Endpoint (UNCHANGED):**
```typescript
// app/api/oppet-hus/signup/route.ts
export async function POST(req: Request) {
  const body = await req.json();
  const data = schema.parse(body);
  
  const result = await addRegistration(data.eventId, {
    parentName: data.parentName,
    email: data.email,
    phone: data.phone,
    childAge: data.childAge,
  });
  
  // Send confirmation emails
  await sendSignupConfirmation(result.registration, result.event);
  await sendStaffNotification(result.registration, result.event);
  
  return NextResponse.json({ success: true });
}
```

**Form UI (UPDATED STYLING ONLY):**
```tsx
// V2 styling
<form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
  <div>
    <label className="block text-sm font-medium text-charcoal mb-2">
      Förälderns namn
    </label>
    <input
      type="text"
      name="parentName"
      required
      className="w-full border border-gray-300 px-4 py-3 text-base focus:border-charcoal transition-colors"
      placeholder="Ditt namn"
    />
  </div>
  
  <div>
    <label className="block text-sm font-medium text-charcoal mb-2">
      E-post
    </label>
    <input
      type="email"
      name="email"
      required
      className="w-full border border-gray-300 px-4 py-3 text-base focus:border-charcoal transition-colors"
      placeholder="din@email.se"
    />
  </div>
  
  <div>
    <label className="block text-sm font-medium text-charcoal mb-2">
      Telefonnummer
    </label>
    <input
      type="tel"
      name="phone"
      required
      className="w-full border border-gray-300 px-4 py-3 text-base focus:border-charcoal transition-colors"
      placeholder="070-123 45 67"
    />
  </div>
  
  <div>
    <label className="block text-sm font-medium text-charcoal mb-2">
      Barnets ålder
    </label>
    <input
      type="text"
      name="childAge"
      required
      className="w-full border border-gray-300 px-4 py-3 text-base focus:border-charcoal transition-colors"
      placeholder="T.ex. 3 år"
    />
  </div>
  
  <div className="flex items-start gap-3">
    <input 
      type="checkbox" 
      name="gdprConsent" 
      required 
      className="mt-1"
    />
    <label className="text-sm text-gray-600">
      Jag godkänner att mina uppgifter sparas för hantering av anmälan
    </label>
  </div>
  
  <button 
    type="submit"
    className="w-full bg-charcoal text-white py-3 px-6 font-medium hover:bg-black transition-colors"
  >
    Anmäl dig
  </button>
</form>
```

**Changes:** Only visual (square inputs, no rounded corners, minimal focus states)

---

## Tailwind Configuration for V2

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2C2C2C',
        'gray-600': '#6B7280',
        'gray-400': '#9CA3AF',
        'gray-200': '#E5E7EB',
        'gray-100': '#F3F4F6',
        'gray-50': '#F9FAFB',
        accent: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '3xl': '768px',
        '4xl': '896px',
        '5xl': '1024px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.600'),
            lineHeight: '1.75',
            h2: {
              color: theme('colors.charcoal'),
              fontWeight: '600',
            },
            h3: {
              color: theme('colors.charcoal'),
              fontWeight: '600',
            },
            a: {
              color: theme('colors.accent.DEFAULT'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.accent.hover'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
```

**Key Removals from V1:**
- ❌ `jungle`, `banana`, `beige` color definitions
- ✅ Replace with neutral palette

---

## Deployment: Separate Vercel Project

### GitHub Repository

**New Repo:** `svantepagels/villagorilla-v2`

**Steps:**
```bash
# Initialize new repo
cd /Users/administrator/.openclaw/workspace/villagorilla-v2
git init
git remote add origin https://github.com/svantepagels/villagorilla-v2.git

# Copy V1 codebase as starting point
cp -r ../villagorilla/{app,components,lib,types,public,*.ts,*.js,*.json} .

# Make design system changes (colors, fonts, components)
# ...

# Commit and push
git add .
git commit -m "Initial V2 setup with Minibojarna-inspired design"
git push -u origin main
```

### Vercel Project

**Create New Project:**
1. Go to Vercel dashboard
2. Click "Add New Project"
3. Import `villagorilla-v2` repo
4. Project name: `villagorilla-v2`

**Environment Variables (SAME AS V1):**
```bash
ADMIN_TOKEN=villagorilla-admin-2026
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_cxCQsjaPveM95vPO_8AwF55imJ9Xr47EJ0GA7yIBAY78tHn
RESEND_API_KEY=[same as V1]
NEXT_PUBLIC_SITE_URL=https://villagorilla-v2.vercel.app
```

**Build Settings:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

**Domain:**
- Production URL: `https://villagorilla-v2.vercel.app`
- (Later can switch to villagorilla.se once approved)

### Blob Storage Sharing

**CRITICAL:** V1 and V2 will share the same Vercel Blob store (same token)

**Implication:**
- Both sites will show identical öppet hus events
- Admin changes in V1 admin → reflected in V2
- Admin changes in V2 admin → reflected in V1

**To Keep Separate (if needed):**
Create new Blob token:
```bash
# In V2 project
vercel blob create villagorilla-v2-events

# Use new token in V2 env vars
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_[NEW_TOKEN]
```

**Recommendation:** Start with shared Blob (easier testing), separate later if needed.

---

## Implementation Checklist

### Phase 1: Setup (Day 1)
- [x] Create `/workspace/villagorilla-v2/` directory
- [ ] Copy V1 codebase
- [ ] Initialize Git repository
- [ ] Create GitHub repo `villagorilla-v2`
- [ ] Install dependencies (`npm install`)

### Phase 2: Design System (Day 1-2)
- [ ] Update `tailwind.config.ts` (new colors, Poppins font)
- [ ] Add Google Fonts link in `app/layout.tsx`
- [ ] Update `components/ui/button.tsx` (square, minimal variants)
- [ ] Update `components/ui/input.tsx` (square, clean focus)
- [ ] Remove unused V1 color classes (jungle, banana, beige)

### Phase 3: Component Redesign (Day 2-3)
- [ ] Redesign `app/page.tsx` (homepage)
  - [ ] Hero section
  - [ ] Stats bar
  - [ ] Welcome section
  - [ ] Perks grid
  - [ ] Pedagogy section
  - [ ] Staff section
  - [ ] CTA section
- [ ] Redesign `components/layout/Header.tsx`
- [ ] Redesign `components/layout/Footer.tsx`
- [ ] Update all page files (`/om-oss`, `/lokaler`, etc.)

### Phase 4: Forms & Interactions (Day 3)
- [ ] Redesign `app/kontakt/ContactForm.tsx`
- [ ] Redesign `app/oppet-hus/OppetHusClient.tsx`
- [ ] Update signup modal styling
- [ ] Test form validation (same Zod schemas)

### Phase 5: Admin Interface (Day 3-4)
- [ ] Redesign `/admin/login` page
- [ ] Redesign `/admin/events` page
  - [ ] Event list cards
  - [ ] Create event form
  - [ ] Registration display
- [ ] Test CRUD operations

### Phase 6: Images (Day 4)
- [ ] Download all images from villagorilla.se
- [ ] Optimize images (ImageOptim or Squoosh)
- [ ] Place in `/public/images/`
- [ ] Update Image components with proper sizes

### Phase 7: Testing (Day 4-5)
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Mobile responsiveness
- [ ] Form validation
- [ ] Admin login/CRUD
- [ ] Blob storage integration
- [ ] Email sending (Resend)

### Phase 8: Deployment (Day 5)
- [ ] Push to GitHub
- [ ] Create Vercel project
- [ ] Set environment variables
- [ ] Deploy to production
- [ ] Test live site
- [ ] Share preview link

---

## Success Criteria

**Visual Design:**
- ✅ Poppins font throughout
- ✅ Neutral color palette (no jungle green, banana yellow)
- ✅ Clean, minimal component styling (no shadows, rounded corners)
- ✅ Generous whitespace and line-height
- ✅ Typography-first hierarchy

**Functionality (100% Preserved):**
- ✅ All 7 pages render correctly
- ✅ Admin login works
- ✅ Admin can create/edit/delete events
- ✅ Public can view öppet hus calendar
- ✅ Signup form submits successfully
- ✅ Email confirmations sent
- ✅ Blob storage integration works
- ✅ Forms validate correctly (same Zod schemas)

**Performance:**
- ✅ Lighthouse score >90
- ✅ LCP <2.5s
- ✅ Mobile-responsive

---

## Design Comparison Summary

| Aspect | V1 (Current) | V2 (Minibojarna-inspired) |
|--------|--------------|---------------------------|
| **Font** | Inter (geometric) | Poppins (rounded, friendly) |
| **Colors** | Jungle green, banana yellow, beige | Neutral blacks/grays, white |
| **Buttons** | Rounded, colored (jungle/banana) | Square, black/white |
| **Cards** | Rounded corners, shadows, hover lift | Square, minimal borders, no hover |
| **Spacing** | Compact (py-16) | Generous (py-20 to py-28) |
| **Max Width** | 1200px | 768-1024px (narrower) |
| **Hero** | Gradient background, emoji | Clean white, typography-focused |
| **Icons** | Colored backgrounds (jungle/10) | Minimal or none |
| **Overall Feel** | Playful, energetic, colorful | Calm, professional, sophisticated |

---

## Next Steps

1. **Review this architecture** - Confirm design direction
2. **Extract images** - Download all assets from villagorilla.se
3. **Begin implementation** - Start with Phase 1 (setup)
4. **Iterative design** - Review components as they're built
5. **Testing** - Ensure 100% functional parity with V1
6. **Deploy** - Launch to villagorilla-v2.vercel.app

---

**Document Version:** 1.0  
**Last Updated:** 2026-03-25  
**Author:** OpenClaw Architect  
**Status:** Ready for implementation
