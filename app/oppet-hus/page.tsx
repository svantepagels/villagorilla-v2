import type { Metadata } from 'next';
import { getEvents } from '@/lib/events';
import { OppetHusClient } from './OppetHusClient';

export const metadata: Metadata = {
  title: 'Öppet hus – Boka din visning',
  description: 'Välkommen på öppet hus på Villa Gorilla förskola. Träffa personalen, se våra lokaler och ställ alla frågor du har.',
};

export const revalidate = 60;

export default async function OppetHusPage() {
  const events = await getEvents();
  const upcoming = events
    .filter((e) => e.isActive && new Date(e.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-semibold mb-6 text-charcoal">Öppet hus</h1>
        <p className="text-lg text-gray-500 mb-12 leading-relaxed">
          Välkommen att besöka Villa Gorilla! På våra öppet hus-tillfällen får du träffa
          personalen, se våra nyrenoverade lokaler och ställa alla frågor du har.
        </p>

        {upcoming.length > 0 ? (
          <OppetHusClient events={upcoming} />
        ) : (
          <div className="bg-gray-50 p-10 text-center">
            <p className="text-gray-500 mb-2">
              Just nu finns inga planerade öppet hus-tillfällen.
            </p>
            <p className="text-gray-400 text-sm">
              Kontakta oss på{' '}
              <a href="mailto:info@villagorilla.se" className="text-accent underline">
                info@villagorilla.se
              </a>{' '}
              för att boka en privat visning.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
