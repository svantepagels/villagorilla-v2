import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="section-padding section-padding-y max-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <Image
              src="/images/VG-logo.png"
              alt="Villa Gorilla"
              width={150}
              height={67}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-secondary leading-relaxed">
              Föräldrakooperativ förskola på Kungsholmen med hög personaltäthet,
              erfarna pedagoger och en trygg miljö.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-black mb-4 uppercase text-sm tracking-wider">Kontakt</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>Hjärnegatan 6, 112 30 Stockholm</li>
              <li>
                <a href="tel:+46812345678" className="hover:text-black transition-colors">
                  08-123 456 78
                </a>
              </li>
              <li>
                <a href="mailto:info@villagorilla.se" className="hover:text-black transition-colors">
                  info@villagorilla.se
                </a>
              </li>
              <li>Mån–Fre 07:00–18:00</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-black mb-4 uppercase text-sm tracking-wider">Sidor</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/om-oss', label: 'Om oss' },
                { href: '/lokaler', label: 'Lokaler' },
                { href: '/oppet-hus', label: 'Öppet hus' },
                { href: '/inskolning', label: 'Inskolning' },
                { href: '/kooperativ', label: 'Kooperativ' },
                { href: '/kontakt', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-secondary hover:text-black transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-xs text-secondary">
          <p>© {new Date().getFullYear()} Villa Gorilla Förskola</p>
        </div>
      </div>
    </footer>
  );
}
