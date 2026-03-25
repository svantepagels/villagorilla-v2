import type { Metadata } from 'next';
import Image from 'next/image';
import { getEvents } from '@/lib/events';
import { OppetHusClient } from './OppetHusClient';

export const metadata: Metadata = {
  title: 'Öppet hus – Boka din visning',
  description: 'Välkommen på öppet hus på Villa Gorilla förskola.',
};

export const revalidate = 60;

export default async function OppetHusPage() {
  const events = await getEvents();
  const upcoming = events
    .filter((e) => e.isActive && new Date(e.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/VG_garden_1.jpg"
          alt="Villa Gorilla öppet hus"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Öppet hus</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding section-padding-y">
        <div className="max-site max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-center mb-12">
            Välkommen att besöka Villa Gorilla! På våra öppet hus-tillfällen får du träffa
            personalen, se våra nyrenoverade lokaler och ställa alla frågor du har.
          </p>

          {upcoming.length > 0 ? (
            <OppetHusClient events={upcoming} />
          ) : (
            <div className="text-center py-12 border-t-2 border-black">
              <p className="text-secondary mb-4">
                Just nu finns inga planerade öppet hus-tillfällen.
              </p>
              <p className="text-sm text-secondary">
                Kontakta oss på{' '}
                <a href="mailto:info@villagorilla.se" className="text-black underline">
                  info@villagorilla.se
                </a>{' '}
                för att boka en privat visning.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image grid */}
      <section className="section-padding pb-[4vw]">
        <div className="max-site grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-square overflow-hidden">
            <Image src="/images/children_1.jpg" alt="Verksamheten" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="/images/VG_garden_2.jpg" alt="Lokaler" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="/images/crafts_1.jpg" alt="Aktiviteter" fill className="object-cover" sizes="33vw" />
          </div>
        </div>
      </section>
    </>
  );
}
