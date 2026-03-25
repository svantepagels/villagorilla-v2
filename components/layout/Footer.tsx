import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Villa Gorilla</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Föräldrakooperativ förskola på Kungsholmen med hög personaltäthet,
              erfarna pedagoger och en trygg miljö för ditt barns utveckling.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Hjärnegatan 6, 112 30 Stockholm</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+46812345678" className="hover:text-white transition-colors">
                  08-123 456 78
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@villagorilla.se" className="hover:text-white transition-colors">
                  info@villagorilla.se
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="shrink-0" />
                <span>Mån–Fre 07:00–18:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/om-oss', label: 'Om oss' },
                { href: '/oppet-hus', label: 'Öppet hus' },
                { href: '/inskolning', label: 'Inskolning' },
                { href: '/kontakt', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Villa Gorilla Förskola. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}
