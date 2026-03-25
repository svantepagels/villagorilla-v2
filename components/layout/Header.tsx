'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold text-xl text-charcoal tracking-tight">
            Villa Gorilla
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-charcoal transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="ml-3" asChild>
              <Link href="/oppet-hus">Boka visning</Link>
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 border-t border-gray-200 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-charcoal"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 px-3">
              <Button className="w-full" asChild>
                <Link href="/oppet-hus" onClick={() => setOpen(false)}>Boka visning</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
