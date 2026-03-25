'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { OpenHouseEvent } from '@/types/events';
import { formatDate, formatTime } from '@/lib/utils';

export function OppetHusClient({ events }: { events: OpenHouseEvent[] }) {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {events.map((event) => (
        <div key={event.id} className="border border-gray-200 overflow-hidden">
          <div className="p-8">
            <h2 className="text-xl font-semibold mb-4 text-charcoal">{event.title}</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-400" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gray-400" />
                <span>{formatTime(event.date)} ({event.duration} min)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <span>{event.location}</span>
              </div>
              {event.maxAttendees && (
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-gray-400" />
                  <span>{event.maxAttendees - event.registrations.length} platser kvar</span>
                </div>
              )}
            </div>
            <p className="text-gray-500 text-sm mb-6">{event.description}</p>

            {selectedEvent === event.id ? (
              <SignupForm eventId={event.id} onClose={() => setSelectedEvent(null)} />
            ) : (
              <Button onClick={() => setSelectedEvent(event.id)}>
                Anmäl dig
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function SignupForm({ eventId, onClose }: { eventId: string; onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
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
      gdprConsent: true,
    };

    try {
      const res = await fetch('/api/oppet-hus/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || 'Något gick fel');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Något gick fel');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="bg-gray-50 p-8 text-center">
        <h3 className="font-semibold text-lg mb-2 text-charcoal">Tack för din anmälan!</h3>
        <p className="text-gray-500 text-sm">
          Vi har skickat en bekräftelse till din e-post. Vi ser fram emot att träffa er!
        </p>
      </div>
    );
  }

  return (
    <div className="border-t border-gray-200 pt-8 mt-6">
      <h3 className="font-semibold mb-6 text-charcoal">Anmäl dig till öppet hus</h3>
      {error && (
        <div className="bg-red-50 text-red-700 text-sm p-3 mb-4">{error}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="parentName" placeholder="Ditt namn" required autoComplete="name" />
        <Input name="email" type="email" placeholder="E-postadress" required autoComplete="email" />
        <Input name="phone" type="tel" placeholder="Telefonnummer" required autoComplete="tel" />
        <Input name="childAge" placeholder="Barnets ålder (t.ex. 2 år)" required />
        <p className="text-xs text-gray-400">
          Genom att anmäla dig godkänner du att vi sparar dina uppgifter för att hantera din anmälan.
          Vi delar aldrig din information med tredje part.
        </p>
        <div className="flex gap-3">
          <Button type="submit" disabled={loading}>
            {loading ? 'Skickar...' : 'Boka din plats'}
          </Button>
          <Button type="button" variant="ghost" onClick={onClose}>
            Avbryt
          </Button>
        </div>
      </form>
    </div>
  );
}
