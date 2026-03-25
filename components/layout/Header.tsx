'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/om-oss', label: 'Om oss' },
  { href: '/lokaler', label: 'Lokaler' },
  { href: '/inskolning', label: 'Inskolning' },
  { href: '/kooperativ', label: 'Kooperativ' },
  { href: '/oppet-hus', label: 'Öppet hus' },
  { href: '/kontakt', label: 'Kontakt' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="section-padding max-site">
        <div className="flex flex-col items-center py-4">
          {/* Centered logo */}
          <Link href="/" className="mb-3">
            <Image
              src="/images/VG-logo.png"
              alt="Villa Gorilla"
              width={200}
              height={90}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Centered nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-secondary hover:text-black transition-colors tracking-wide uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden absolute right-4 top-6 p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium text-secondary hover:text-black uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
