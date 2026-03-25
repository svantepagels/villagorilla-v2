import { put } from '@vercel/blob';
import type { OpenHouseEvent, Registration } from '@/types/events';

const BLOB_URL = process.env.BLOB_STORE_URL || '';
const BLOB_KEY = 'events.json';

export async function getEvents(): Promise<OpenHouseEvent[]> {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) return getLocalEvents();

    const { list } = await import('@vercel/blob');
    const result = await list({ token, prefix: BLOB_KEY });

    if (result.blobs.length === 0) return [];

    const response = await fetch(result.blobs[0].url, { next: { revalidate: 60 } });
    if (!response.ok) return [];

    const data = await response.json();
    return data.events || [];
  } catch {
    console.error('Blob fetch failed, using local fallback');
    return getLocalEvents();
  }
}

function getLocalEvents(): OpenHouseEvent[] {
  return [
    {
      id: '1',
      title: 'Öppet hus våren 2026',
      date: '2026-04-15T17:00:00',
      duration: 90,
      description: 'Välkommen att besöka Villa Gorilla! Träffa personalen, se våra lokaler och ställ alla frågor du har om vår förskola.',
      maxAttendees: 20,
      location: 'Villa Gorilla, Hjärnegatan 6, Kungsholmen',
      contactPerson: 'Rektor',
      contactEmail: 'info@villagorilla.se',
      registrations: [],
      isActive: true,
      createdAt: '2026-03-01T00:00:00',
      updatedAt: '2026-03-01T00:00:00',
    },
  ];
}

export async function saveEvents(events: OpenHouseEvent[]): Promise<void> {
  await put(BLOB_KEY, JSON.stringify({ events }, null, 2), {
    access: 'public',
    addRandomSuffix: false,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
}

export async function addRegistration(
  eventId: string,
  reg: Omit<Registration, 'id' | 'registeredAt'>
): Promise<{ registration: Registration; event: OpenHouseEvent } | null> {
  const events = await getEvents();
  const event = events.find((e) => e.id === eventId);
  if (!event) return null;

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

  try {
    await saveEvents(events);
  } catch {
    // In dev, silently continue
  }

  return { registration, event };
}
