# Villa Gorilla V2 - Implementation Notes

## Live Site
**Production URL:** https://villagorilla-v2.vercel.app

## GitHub
**Repository:** https://github.com/svantepagels/villagorilla-v2

## Design Changes (V1 → V2)

| Aspect | V1 | V2 |
|--------|----|----|
| Font | Inter | Poppins (next/font/google) |
| Colors | Jungle green, banana yellow, beige | Neutral charcoal/grays, white |
| Buttons | Rounded, colored | Square, black/white |
| Cards | Rounded, shadows, hover lift | Square, minimal borders, no hover |
| Spacing | Compact (py-16) | Generous (py-20 to py-28) |
| Max Width | 1200px | 768-1024px (narrower, reading-focused) |
| Hero | Gradient green bg, emoji 🦍 | Clean white, typography-focused |
| Staff | Icon circles | Initial squares |
| Overall | Playful, energetic | Calm, sophisticated (Minibojarna-inspired) |

## Functionality (100% Preserved)
- ✅ All 7 Swedish pages with exact same content
- ✅ Admin login (`/admin/login`) - password: `villagorilla-admin-2026`
- ✅ Admin event CRUD (`/admin/events`) - real Vercel Blob storage
- ✅ Öppet hus calendar with signup form (4 fields)
- ✅ Contact form with email integration
- ✅ Middleware auth for admin routes
- ✅ Zod validation on all forms

## Environment Variables (Vercel)
- `BLOB_READ_WRITE_TOKEN` ✅ Configured (shared with V1)
- `ADMIN_TOKEN` ✅ Configured
- `NEXT_PUBLIC_SITE_URL` ✅ Configured
- `RESEND_API_KEY` ⚠️ **PLACEHOLDER** - Set to `re_placeholder_configure_before_use`
  - Email sending is gracefully disabled until a real Resend API key is configured
  - The app logs email actions to console instead of sending
  - To enable: Get a key from https://resend.com and update in Vercel dashboard

## Local Development
```bash
cd villagorilla-v2
npm install
npm run dev
# Open http://localhost:3000
```

## Architecture
- Next.js 14 (App Router)
- Tailwind CSS 3 with @tailwindcss/typography
- Poppins font via next/font/google
- Vercel Blob for event storage
- Resend for transactional emails (when configured)
- Zod for form validation
- Radix UI for accessible button primitives

## Notes
- V1 and V2 share the same Blob storage token, so events are shared between both sites
- Removed @radix-ui/react-dialog (not used in V2 - simpler inline forms)
- No images extracted yet - pages are text-focused per Minibojarna style
