import type { Metadata } from 'next';
import Image from 'next/image';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt – Hör av dig till oss',
  description: 'Kontakta Villa Gorilla förskola på Kungsholmen.',
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/images/VG_garden_3.jpg"
          alt="Kontakta Villa Gorilla"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Kontakta oss</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding section-padding-y">
        <div className="max-site max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-medium text-black mb-8">Skicka ett meddelande</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-medium text-black mb-8">Hitta oss</h2>
              <div className="space-y-6 mb-10">
                <div>
                  <p className="font-medium text-black text-sm uppercase tracking-wider mb-1">Adress</p>
                  <p>Hjärnegatan 6, 112 30 Stockholm</p>
                </div>
                <div>
                  <p className="font-medium text-black text-sm uppercase tracking-wider mb-1">Telefon</p>
                  <a href="tel:+46812345678" className="hover:text-black transition-colors">
                    08-123 456 78
                  </a>
                </div>
                <div>
                  <p className="font-medium text-black text-sm uppercase tracking-wider mb-1">E-post</p>
                  <a href="mailto:info@villagorilla.se" className="hover:text-black transition-colors">
                    info@villagorilla.se
                  </a>
                </div>
                <div>
                  <p className="font-medium text-black text-sm uppercase tracking-wider mb-1">Öppettider</p>
                  <p>Måndag–Fredag 07:00–18:00</p>
                </div>
              </div>

              <div className="border-t-2 border-black pt-6">
                <p className="text-sm">
                  <strong className="text-black">Närmaste tunnelbana:</strong> Rådhuset (blå linjen), ca 3 min gångväg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
