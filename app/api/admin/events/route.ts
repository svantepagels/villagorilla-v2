import { NextRequest, NextResponse } from 'next/server';
import { getEvents, saveEvents } from '@/lib/events';
import type { OpenHouseEvent } from '@/types/events';

function isAuthed(req: NextRequest) {
  const token = req.cookies.get('admin_auth')?.value;
  return token === (process.env.ADMIN_TOKEN || 'villagorilla-admin-2026');
}

export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const events = await getEvents();
  return NextResponse.json({ events });
}

export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

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

export async function PUT(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const events = await getEvents();
  const idx = events.findIndex((e) => e.id === body.id);

  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  events[idx] = { ...events[idx], ...body, updatedAt: new Date().toISOString() };
  await saveEvents(events);

  return NextResponse.json({ event: events[idx] });
}

export async function DELETE(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await req.json();
  const events = await getEvents();
  const filtered = events.filter((e) => e.id !== id);

  if (filtered.length === events.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  await saveEvents(filtered);
  return NextResponse.json({ success: true });
}
