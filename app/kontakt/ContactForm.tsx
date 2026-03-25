'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
        }),
      });

      if (!res.ok) throw new Error('Något gick fel');
      setSuccess(true);
    } catch {
      setError('Kunde inte skicka meddelandet. Försök igen eller ring oss.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="bg-gray-50 p-10 text-center">
        <h3 className="font-semibold text-lg mb-2 text-charcoal">Tack för ditt meddelande!</h3>
        <p className="text-gray-500 text-sm">Vi återkommer så snart som möjligt.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 text-red-700 text-sm p-3">{error}</div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-charcoal">Namn *</label>
        <Input id="name" name="name" required autoComplete="name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-charcoal">E-post *</label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-charcoal">Telefon</label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-charcoal">Meddelande *</label>
        <Textarea id="message" name="message" required rows={5} />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? 'Skickar...' : 'Skicka meddelande'}
      </Button>
    </form>
  );
}
