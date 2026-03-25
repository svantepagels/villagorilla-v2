# Villa Gorilla V2 - Integration Reference

**Quick reference for maintaining exact functionality from V1**

---

## 🔐 Admin System

### Authentication Flow

**Login Page:** `/admin/login`

```typescript
// app/admin/login/page.tsx
'use client';

export default function AdminLoginPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get('password') as string;
    
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    
    if (res.ok) {
      window.location.href = '/admin/events';
    } else {
      alert('Fel lösenord');
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-charcoal mb-6">
          Admin Login
        </h1>
        <input 
          type="password" 
          name="password" 
          required
          className="w-full border border-gray-300 px-4 py-3 mb-4"
          placeholder="Lösenord"
        />
        <button 
          type="submit"
          className="w-full bg-charcoal text-white py-3 px-6"
        >
          Logga in
        </button>
      </form>
    </div>
  );
}
```

### Login API Route

```typescript
// app/api/admin/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { password } = await req.json();
  const validToken = process.env.ADMIN_TOKEN || 'villagorilla-admin-2026';
  
  if (password === validToken) {
    const response = NextResponse.json({ success: true });
    response.cookies.set('admin_auth', validToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  }
  
  return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
}
```

### Middleware Protection

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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

export const config = {
  matcher: '/admin/:path*',
};
```

---

## 📦 Vercel Blob Integration

### Environment Variable

```bash
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_cxCQsjaPveM95vPO_8AwF55imJ9Xr47EJ0GA7yIBAY78tHn
```

### Events Library

```typescript
// lib/events.ts
import { put, list } from '@vercel/blob';
import type { OpenHouseEvent, Registration } from '@/types/events';

const BLOB_KEY = 'events.json';

export async function getEvents(): Promise<OpenHouseEvent[]> {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) {
      console.warn('No BLOB_READ_WRITE_TOKEN, using fallback');
      return [];
    }

    const result = await list({ token, prefix: BLOB_KEY });
    
    if (result.blobs.length === 0) {
      return [];
    }

    const response = await fetch(result.blobs[0].url, { 
      next: { revalidate: 60 } 
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch blob');
    }

    const data = await response.json();
    return data.events || [];
  } catch (error) {
    console.error('Blob fetch error:', error);
    return [];
  }
}

export async function saveEvents(events: OpenHouseEvent[]): Promise<void> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    throw new Error('BLOB_READ_WRITE_TOKEN not set');
  }

  await put(BLOB_KEY, JSON.stringify({ events }, null, 2), {
    access: 'public',
    addRandomSuffix: false,
    token,
  });
}

export async function addRegistration(
  eventId: string,
  reg: Omit<Registration, 'id' | 'registeredAt'>
): Promise<{ registration: Registration; event: OpenHouseEvent } | null> {
  const events = await getEvents();
  const event = events.find((e) => e.id === eventId);
  
  if (!event) {
    return null;
  }

  if (event.maxAttendees && event.registrations.length >= event.maxAttendees) {
    throw new Error('Event is full');
  }

  const registration: Registration = {
    ...reg,
    id: crypto.randomUUID(),
    registeredAt: new Date().toISOString(),
  };

  event.registrations.push(registration);
  event.updatedAt = new Date().toISOString();

  await saveEvents(events);

  return { registration, event };
}
```

### Type Definitions

```typescript
// types/events.ts
export interface OpenHouseEvent {
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

export interface Registration {
  id: string;
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  registeredAt: string;
}
```

---

## 📝 Signup Form

### Validation Schema

```typescript
// Exact same Zod schema as V1
import { z } from 'zod';

export const signupSchema = z.object({
  eventId: z.string().min(1),
  parentName: z.string().min(2, 'Ange ditt namn'),
  email: z.string().email('Ange en giltig e-postadress'),
  phone: z.string().min(8, 'Ange ett giltigt telefonnummer'),
  childAge: z.string().min(1, 'Ange barnets ålder'),
  gdprConsent: z.boolean().refine((v) => v, 'Du måste godkänna villkoren'),
});
```

### API Route

```typescript
// app/api/oppet-hus/signup/route.ts
import { NextResponse } from 'next/server';
import { signupSchema } from '@/lib/validation';
import { addRegistration } from '@/lib/events';
import { sendSignupConfirmation, sendStaffNotification } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = signupSchema.parse(body);

    const result = await addRegistration(data.eventId, {
      parentName: data.parentName,
      email: data.email,
      phone: data.phone,
      childAge: data.childAge,
    });

    if (!result) {
      return NextResponse.json(
        { error: 'Evenemanget hittades inte' }, 
        { status: 404 }
      );
    }

    // Send emails (don't block response)
    Promise.all([
      sendSignupConfirmation(result.registration, result.event),
      sendStaffNotification(result.registration, result.event),
    ]).catch((err) => console.error('Email send error:', err));

    return NextResponse.json({ success: true });
    
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Valideringsfel', details: err.issues }, 
        { status: 400 }
      );
    }
    
    if (err instanceof Error && err.message === 'Event is full') {
      return NextResponse.json(
        { error: 'Evenemanget är fullt' }, 
        { status: 409 }
      );
    }
    
    console.error('Signup error:', err);
    return NextResponse.json(
      { error: 'Internt serverfel' }, 
      { status: 500 }
    );
  }
}
```

### Client Component (V2 Styled)

```typescript
// app/oppet-hus/SignupModal.tsx
'use client';

import { useState } from 'react';
import { signupSchema } from '@/lib/validation';

interface Props {
  eventId: string;
  onClose: () => void;
}

export function SignupModal({ eventId, onClose }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      eventId,
      parentName: formData.get('parentName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      childAge: formData.get('childAge') as string,
      gdprConsent: formData.get('gdprConsent') === 'on',
    };

    try {
      signupSchema.parse(data); // Client-side validation
      
      const res = await fetch('/api/oppet-hus/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Något gick fel');
      }

      alert('Tack för din anmälan! Du får en bekräftelse via e-post.');
      onClose();
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Något gick fel');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white max-w-md w-full p-8">
        <h2 className="text-2xl font-semibold text-charcoal mb-6">
          Anmäl dig till öppet hus
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">
              Förälderns namn
            </label>
            <input
              type="text"
              name="parentName"
              required
              className="w-full border border-gray-300 px-4 py-3"
              placeholder="Ditt namn"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">
              E-post
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 px-4 py-3"
              placeholder="din@email.se"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">
              Telefonnummer
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border border-gray-300 px-4 py-3"
              placeholder="070-123 45 67"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">
              Barnets ålder
            </label>
            <input
              type="text"
              name="childAge"
              required
              className="w-full border border-gray-300 px-4 py-3"
              placeholder="T.ex. 3 år"
            />
          </div>

          <div className="flex items-start gap-2">
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

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-charcoal text-white py-3 px-6 disabled:opacity-50"
            >
              {loading ? 'Skickar...' : 'Anmäl dig'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-charcoal"
            >
              Avbryt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
```

---

## 📧 Email Integration (Resend)

### Environment Variable

```bash
RESEND_API_KEY=[from V1]
```

### Email Functions

```typescript
// lib/email.ts
import { Resend } from 'resend';
import type { Registration, OpenHouseEvent } from '@/types/events';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendSignupConfirmation(
  registration: Registration,
  event: OpenHouseEvent
) {
  await resend.emails.send({
    from: 'info@villagorilla.se',
    to: registration.email,
    subject: `Bekräftelse: ${event.title}`,
    html: `
      <h2>Tack för din anmälan!</h2>
      <p>Hej ${registration.parentName},</p>
      <p>Vi har tagit emot din anmälan till vårt öppet hus.</p>
      
      <h3>Detaljer:</h3>
      <ul>
        <li><strong>Datum:</strong> ${new Date(event.date).toLocaleString('sv-SE')}</li>
        <li><strong>Plats:</strong> ${event.location}</li>
        <li><strong>Längd:</strong> ${event.duration} minuter</li>
      </ul>
      
      <p>Vi ser fram emot att träffa dig och ditt barn!</p>
      
      <p>Med vänliga hälsningar,<br>
      ${event.contactPerson}<br>
      Villa Gorilla</p>
    `,
  });
}

export async function sendStaffNotification(
  registration: Registration,
  event: OpenHouseEvent
) {
  await resend.emails.send({
    from: 'info@villagorilla.se',
    to: event.contactEmail,
    subject: `Ny anmälan: ${event.title}`,
    html: `
      <h2>Ny anmälan till öppet hus</h2>
      
      <h3>Förälder:</h3>
      <ul>
        <li><strong>Namn:</strong> ${registration.parentName}</li>
        <li><strong>E-post:</strong> ${registration.email}</li>
        <li><strong>Telefon:</strong> ${registration.phone}</li>
        <li><strong>Barnets ålder:</strong> ${registration.childAge}</li>
      </ul>
      
      <h3>Evenemang:</h3>
      <ul>
        <li><strong>Titel:</strong> ${event.title}</li>
        <li><strong>Datum:</strong> ${new Date(event.date).toLocaleString('sv-SE')}</li>
        <li><strong>Antal anmälda:</strong> ${event.registrations.length}${event.maxAttendees ? ` / ${event.maxAttendees}` : ''}</li>
      </ul>
    `,
  });
}
```

---

## 🎯 Admin Events CRUD

### API Routes

```typescript
// app/api/admin/events/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getEvents, saveEvents } from '@/lib/events';
import type { OpenHouseEvent } from '@/types/events';

function isAuthed(req: NextRequest): boolean {
  const token = req.cookies.get('admin_auth')?.value;
  return token === (process.env.ADMIN_TOKEN || 'villagorilla-admin-2026');
}

// GET - List all events
export async function GET(req: NextRequest) {
  if (!isAuthed(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const events = await getEvents();
  return NextResponse.json({ events });
}

// POST - Create new event
export async function POST(req: NextRequest) {
  if (!isAuthed(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const events = await getEvents();

  const newEvent: OpenHouseEvent = {
    id: crypto.randomUUID(),
    title: body.title,
    date: body.date,
    duration: body.duration || 90,
    description: body.description || '',
    maxAttendees: body.maxAttendees || undefined,
    location: body.location || 'Villa Gorilla, Hjärnegatan 6, Kungsholmen',
    contactPerson: body.contactPerson || 'Rektor',
    contactEmail: body.contactEmail || 'info@villagorilla.se',
    registrations: [],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  events.push(newEvent);
  await saveEvents(events);

  return NextResponse.json({ event: newEvent });
}

// PUT - Update event
export async function PUT(req: NextRequest) {
  if (!isAuthed(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const events = await getEvents();
  const idx = events.findIndex((e) => e.id === body.id);

  if (idx === -1) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  events[idx] = { 
    ...events[idx], 
    ...body, 
    updatedAt: new Date().toISOString() 
  };
  
  await saveEvents(events);
  return NextResponse.json({ event: events[idx] });
}

// DELETE - Delete event
export async function DELETE(req: NextRequest) {
  if (!isAuthed(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await req.json();
  const events = await getEvents();
  const filtered = events.filter((e) => e.id !== id);

  if (filtered.length === events.length) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  await saveEvents(filtered);
  return NextResponse.json({ success: true });
}
```

---

## 🔄 ISR (Incremental Static Regeneration)

**Öppet Hus Page:**

```typescript
// app/oppet-hus/page.tsx
import { getEvents } from '@/lib/events';

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function OppetHusPage() {
  const events = await getEvents();
  
  const upcomingEvents = events
    .filter(e => e.isActive && new Date(e.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div>
      {/* Render events */}
    </div>
  );
}
```

---

## ✅ Testing Checklist

### Admin System
- [ ] Login with correct password → redirects to /admin/events
- [ ] Login with wrong password → shows error
- [ ] Access /admin/events without login → redirects to /admin/login
- [ ] Cookie persists across page reloads

### Events CRUD
- [ ] Create new event → appears in list
- [ ] Toggle event active/inactive → updates in list
- [ ] Delete event → removed from list
- [ ] View registrations → displays correctly

### Signup Form
- [ ] Submit with valid data → success message
- [ ] Submit with invalid email → validation error
- [ ] Submit without GDPR consent → blocked
- [ ] Event at max capacity → "fullt" error
- [ ] Confirmation email sent to parent
- [ ] Notification email sent to staff

### Blob Storage
- [ ] Events persist after page reload
- [ ] Events shared between V1 and V2 (if using same token)
- [ ] Manual Blob inspection shows correct JSON structure

---

**Version:** 1.0  
**Last Updated:** 2026-03-25  
**Purpose:** Developer quick reference for maintaining V1 functionality in V2
