'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { OpenHouseEvent } from '@/types/events';
import { Trash2, Plus, Users, Eye, EyeOff } from 'lucide-react';

export default function AdminEventsPage() {
  const [events, setEvents] = useState<OpenHouseEvent[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const res = await fetch('/api/admin/events');
    if (res.ok) {
      const data = await res.json();
      setEvents(data.events || []);
    }
    setLoading(false);
  }

  async function createEvent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await fetch('/api/admin/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: fd.get('title'),
        date: fd.get('date'),
        duration: Number(fd.get('duration')) || 90,
        description: fd.get('description'),
        maxAttendees: Number(fd.get('maxAttendees')) || undefined,
        location: fd.get('location') || 'Villa Gorilla, Hjärnegatan 6, Kungsholmen',
        contactPerson: fd.get('contactPerson') || 'Rektor',
        contactEmail: fd.get('contactEmail') || 'info@villagorilla.se',
      }),
    });
    if (res.ok) {
      setShowForm(false);
      fetchEvents();
    }
  }

  async function toggleActive(event: OpenHouseEvent) {
    await fetch('/api/admin/events', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: event.id, isActive: !event.isActive }),
    });
    fetchEvents();
  }

  async function deleteEvent(id: string) {
    if (!confirm('Är du säker?')) return;
    await fetch('/api/admin/events', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchEvents();
  }

  if (loading) return <div className="p-8 text-center text-gray-500">Laddar...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-semibold text-charcoal">Öppet hus – Admin</h1>
          <Button onClick={() => setShowForm(!showForm)}>
            <Plus size={16} className="mr-2" /> Nytt evenemang
          </Button>
        </div>

        {showForm && (
          <form onSubmit={createEvent} className="bg-white border border-gray-200 p-8 mb-10 space-y-5">
            <h2 className="font-semibold text-lg text-charcoal">Skapa nytt öppet hus</h2>
            <Input name="title" placeholder="Titel (t.ex. Öppet hus våren 2026)" required />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-charcoal">Datum & tid</label>
                <Input name="date" type="datetime-local" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-charcoal">Längd (min)</label>
                <Input name="duration" type="number" defaultValue="90" />
              </div>
            </div>
            <Textarea name="description" placeholder="Beskrivning" />
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="maxAttendees" type="number" placeholder="Max antal deltagare (valfritt)" />
              <Input name="location" placeholder="Plats" defaultValue="Villa Gorilla, Hjärnegatan 6, Kungsholmen" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="contactPerson" placeholder="Kontaktperson" defaultValue="Rektor" />
              <Input name="contactEmail" type="email" placeholder="Kontakt-epost" defaultValue="info@villagorilla.se" />
            </div>
            <div className="flex gap-3">
              <Button type="submit">Skapa</Button>
              <Button type="button" variant="ghost" onClick={() => setShowForm(false)}>Avbryt</Button>
            </div>
          </form>
        )}

        {events.length === 0 ? (
          <div className="bg-white border border-gray-200 p-10 text-center text-gray-400">
            Inga evenemang skapade ännu.
          </div>
        ) : (
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="bg-white border border-gray-200 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-charcoal flex items-center gap-2">
                      {event.title}
                      {!event.isActive && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5">Dold</span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(event.date).toLocaleString('sv-SE')} · {event.duration} min
                    </p>
                    <p className="text-sm text-gray-400 mt-1">{event.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-sm text-gray-500 bg-gray-50 px-3 py-1">
                      <Users size={14} />
                      <span>{event.registrations.length}</span>
                      {event.maxAttendees && <span>/ {event.maxAttendees}</span>}
                    </div>
                    <Button size="icon" variant="ghost" onClick={() => toggleActive(event)} title={event.isActive ? 'Dölj' : 'Visa'}>
                      {event.isActive ? <Eye size={16} /> : <EyeOff size={16} />}
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => deleteEvent(event.id)} title="Ta bort">
                      <Trash2 size={16} className="text-red-500" />
                    </Button>
                  </div>
                </div>

                {event.registrations.length > 0 && (
                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <h4 className="text-sm font-medium mb-3 text-charcoal">Anmälda ({event.registrations.length})</h4>
                    <div className="space-y-2 text-sm">
                      {event.registrations.map((r) => (
                        <div key={r.id} className="flex items-center gap-4 text-gray-500">
                          <span className="font-medium text-charcoal">{r.parentName}</span>
                          <span>{r.email}</span>
                          <span>{r.phone}</span>
                          <span>Barn: {r.childAge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
