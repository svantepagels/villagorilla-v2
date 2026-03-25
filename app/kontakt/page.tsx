import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt – Hör av dig till oss',
  description: 'Kontakta Villa Gorilla förskola på Kungsholmen. Hjärnegatan 6, 112 30 Stockholm.',
};

export default function KontaktPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-semibold mb-8 text-charcoal">Kontakta oss</h1>
        <p className="text-lg text-gray-500 mb-16 leading-relaxed">
          Har du frågor om Villa Gorilla eller vill boka en privat visning? Hör av dig!
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl font-semibold mb-8 text-charcoal">Skicka ett meddelande</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-8 text-charcoal">Hitta oss</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-3">
                <MapPin className="text-gray-400 mt-0.5 shrink-0" size={20} />
                <div>
                  <p className="font-medium text-charcoal">Adress</p>
                  <p className="text-gray-500 text-sm">Hjärnegatan 6, 112 30 Stockholm</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-gray-400 mt-0.5 shrink-0" size={20} />
                <div>
                  <p className="font-medium text-charcoal">Telefon</p>
                  <a href="tel:+46812345678" className="text-accent text-sm hover:underline">
                    08-123 456 78
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-gray-400 mt-0.5 shrink-0" size={20} />
                <div>
                  <p className="font-medium text-charcoal">E-post</p>
                  <a href="mailto:info@villagorilla.se" className="text-accent text-sm hover:underline">
                    info@villagorilla.se
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-gray-400 mt-0.5 shrink-0" size={20} />
                <div>
                  <p className="font-medium text-charcoal">Öppettider</p>
                  <p className="text-gray-500 text-sm">Måndag–Fredag 07:00–18:00</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6">
              <p className="text-sm text-gray-500">
                <strong>Närmaste tunnelbana:</strong> Rådhuset (blå linjen), ca 3 min gångväg.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
