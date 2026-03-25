# Villa Gorilla V2

**Visual redesign of Villa Gorilla website matching Minibojarna.se aesthetic**

---

## 📋 Project Overview

- **Design Reference:** https://www.minibojarna.se/
- **Content Source:** Villa Gorilla V1 (https://villagorilla.vercel.app)
- **Deployment:** Separate Vercel project
- **Status:** Architecture complete, ready for implementation

---

## 🎯 Key Objectives

1. **Maintain 100% functionality** from V1 (content, admin, forms, öppet hus)
2. **Redesign visual style** to match Minibojarna's clean, minimal aesthetic
3. **Deploy to separate Vercel project** (villagorilla-v2)

---

## 📚 Documentation

### Core Documents

1. **VILLAGORILLA-V2-ARCHITECTURE.md** - Complete technical specification
   - Design system (colors, typography, spacing)
   - Component redesigns (homepage, forms, admin)
   - Integration points (admin system, Vercel Blob, signup form)
   - Implementation checklist
   - Deployment guide

2. **IMAGE-EXTRACTION-GUIDE.md** - Image asset management
   - List of all available images from villagorilla.se
   - Download commands
   - Usage examples
   - Optimization guidelines

---

## 🎨 Design Changes (V1 → V2)

| Aspect | V1 | V2 |
|--------|----|----|
| **Font** | Inter | Poppins |
| **Colors** | Jungle green, banana yellow | Neutral blacks/grays |
| **Buttons** | Rounded, colored | Square, black/white |
| **Spacing** | Compact | Generous whitespace |
| **Feel** | Playful, energetic | Calm, professional |

---

## 🔧 Tech Stack (Unchanged)

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 4
- **Forms:** React Hook Form + Zod
- **Storage:** Vercel Blob (events.json)
- **Email:** Resend
- **Deployment:** Vercel

---

## 🚀 Quick Start

### 1. Setup

```bash
# Navigate to project
cd /Users/administrator/.openclaw/workspace/villagorilla-v2

# Copy V1 codebase (if not done)
cp -r ../villagorilla/{app,components,lib,types,public} .
cp ../villagorilla/{package.json,tsconfig.json,next.config.js,tailwind.config.ts,postcss.config.js} .

# Install dependencies
npm install

# Install Poppins font package (if needed)
npm install @fontsource/poppins
```

### 2. Extract Images

```bash
# Create images directory
mkdir -p public/images

# Run extraction script (see IMAGE-EXTRACTION-GUIDE.md)
cd public/images
# ... download commands ...
```

### 3. Update Design System

```bash
# Update Tailwind config (see VILLAGORILLA-V2-ARCHITECTURE.md)
# - Remove jungle, banana, beige colors
# - Add Poppins font
# - Configure neutral palette

# Update components/ui/button.tsx
# - Square corners (rounded-none)
# - Black/white variants

# Update app/layout.tsx
# - Add Google Fonts link for Poppins
```

### 4. Redesign Components

**Priority Order:**
1. Homepage (`app/page.tsx`)
2. Header/Footer (`components/layout/`)
3. Contact form (`app/kontakt/`)
4. Öppet hus page (`app/oppet-hus/`)
5. Admin pages (`app/admin/`)

### 5. Test Locally

```bash
npm run dev
# Visit http://localhost:3000
```

### 6. Deploy to Vercel

```bash
# Initialize Git
git init
git remote add origin https://github.com/svantepagels/villagorilla-v2.git
git add .
git commit -m "Initial V2 setup"
git push -u origin main

# In Vercel dashboard:
# - Import villagorilla-v2 repo
# - Set environment variables (see below)
# - Deploy
```

---

## 🔐 Environment Variables

**Required for Vercel:**

```bash
# Admin authentication
ADMIN_TOKEN=villagorilla-admin-2026

# Vercel Blob storage (reuse from V1)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_cxCQsjaPveM95vPO_8AwF55imJ9Xr47EJ0GA7yIBAY78tHn

# Email (Resend)
RESEND_API_KEY=[from V1 project]

# Site URL
NEXT_PUBLIC_SITE_URL=https://villagorilla-v2.vercel.app
```

---

## 🧩 Integration Points

### Admin System

- **Login:** `/admin/login`
- **Events Management:** `/admin/events`
- **Authentication:** Cookie-based (`admin_auth`)

**CRITICAL:** Same admin system as V1, only UI styling changes

### Vercel Blob Storage

- **File:** `events.json`
- **Functions:** `getEvents()`, `saveEvents()`, `addRegistration()`
- **Location:** `lib/events.ts`

**CRITICAL:** Can share Blob storage with V1 (same token) or use separate token

### Signup Form

**4 Required Fields:**
1. `parentName` - Förälderns namn
2. `email` - E-post
3. `phone` - Telefonnummer
4. `childAge` - Barnets ålder

**Plus:** `gdprConsent` checkbox

**Validation:** Same Zod schema as V1

---

## 📁 Project Structure

```
villagorilla-v2/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   ├── om-oss/page.tsx       # About
│   ├── lokaler/page.tsx      # Facilities
│   ├── inskolning/page.tsx   # Enrollment
│   ├── kooperativ/page.tsx   # Cooperative
│   ├── oppet-hus/            # Open house
│   │   ├── page.tsx
│   │   └── OppetHusClient.tsx
│   ├── kontakt/              # Contact
│   │   ├── page.tsx
│   │   └── ContactForm.tsx
│   ├── admin/                # Admin interface
│   │   ├── login/page.tsx
│   │   └── events/page.tsx
│   └── api/
│       ├── contact/route.ts
│       ├── admin/
│       │   ├── login/route.ts
│       │   └── events/route.ts
│       └── oppet-hus/
│           └── signup/route.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   ├── events.ts             # Blob storage functions
│   └── email.ts              # Resend integration
├── types/
│   └── events.ts             # TypeScript definitions
├── public/
│   └── images/               # Extracted images
│       ├── VG_garden_1.jpg
│       ├── children_1.jpg
│       └── VG-logo.png
├── VILLAGORILLA-V2-ARCHITECTURE.md
├── IMAGE-EXTRACTION-GUIDE.md
└── README.md                 # This file
```

---

## ✅ Implementation Checklist

### Setup
- [ ] Copy V1 codebase
- [ ] Install dependencies
- [ ] Extract images from villagorilla.se
- [ ] Initialize Git repository

### Design System
- [ ] Update Tailwind config (Poppins, neutral colors)
- [ ] Add Google Fonts link
- [ ] Update Button component (square, minimal)
- [ ] Update Input/Textarea components

### Component Redesign
- [ ] Homepage hero section
- [ ] Stats bar
- [ ] Perks grid
- [ ] Pedagogy section
- [ ] Staff section
- [ ] Header/Footer
- [ ] Contact form
- [ ] Öppet hus calendar
- [ ] Admin login
- [ ] Admin events management

### Testing
- [ ] Local development testing
- [ ] Form validation
- [ ] Admin CRUD operations
- [ ] Mobile responsiveness
- [ ] Cross-browser testing

### Deployment
- [ ] Push to GitHub
- [ ] Create Vercel project
- [ ] Set environment variables
- [ ] Deploy to production
- [ ] Test live site

---

## 🎨 Design Principles (Minibojarna Style)

### Typography
- **Poppins** font (rounded, friendly)
- Generous line-height (1.75-1.8)
- Clear hierarchy via size, not color

### Colors
- Neutral palette (black, grays, white)
- Minimal accent color (indigo for links)
- No bright colors (unlike V1's jungle/banana)

### Spacing
- Generous whitespace between sections (py-20 to py-28)
- Narrower content max-width (768-1024px)
- Breathing room around elements

### Components
- Square corners (no border-radius)
- Minimal shadows (or none)
- Clean focus states
- No hover animations (lift, scale)

---

## 📊 Success Criteria

### Visual
- ✅ Matches Minibojarna's clean aesthetic
- ✅ Poppins font throughout
- ✅ Neutral color palette
- ✅ Square components
- ✅ Generous whitespace

### Functional
- ✅ All pages render correctly
- ✅ Admin system works
- ✅ Öppet hus calendar functional
- ✅ Forms validate and submit
- ✅ Email confirmations sent
- ✅ Blob storage integration

### Performance
- ✅ Lighthouse score >90
- ✅ Mobile-responsive
- ✅ Fast page loads

---

## 🔗 Links

- **V1 (Current):** https://villagorilla.vercel.app
- **Design Reference:** https://www.minibojarna.se/
- **V2 Deployment:** https://villagorilla-v2.vercel.app (after deployment)

---

## 📞 Support

For questions about implementation:
1. Read `VILLAGORILLA-V2-ARCHITECTURE.md` for technical details
2. Read `IMAGE-EXTRACTION-GUIDE.md` for image asset management
3. Refer to V1 codebase at `/workspace/villagorilla/`

---

**Version:** 1.0  
**Last Updated:** 2026-03-25  
**Status:** Ready for implementation 🚀
