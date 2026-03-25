import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'Villa Gorilla – Förskola på Kungsholmen, Stockholm',
    template: '%s | Villa Gorilla',
  },
  description:
    'Föräldrakooperativ förskola på Kungsholmen med hög personaltäthet, nyrenoverade lokaler och egen gård. Trygg och lugn miljö för ditt barns utveckling.',
  keywords: ['förskola', 'kungsholmen', 'stockholm', 'kooperativ', 'villa gorilla', 'pedagogik'],
  openGraph: {
    title: 'Villa Gorilla – Förskola på Kungsholmen',
    description: 'Föräldrakooperativ förskola med hög personaltäthet och modern pedagogik',
    url: 'https://villagorilla-v2.vercel.app',
    siteName: 'Villa Gorilla',
    locale: 'sv_SE',
    type: 'website',
  },
  metadataBase: new URL('https://villagorilla-v2.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Preschool',
              name: 'Villa Gorilla Förskola',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Hjärnegatan 6',
                addressLocality: 'Stockholm',
                postalCode: '112 30',
                addressCountry: 'SE',
              },
              telephone: '+46-8-123-456-78',
              url: 'https://villagorilla-v2.vercel.app',
              openingHours: 'Mo-Fr 07:00-18:00',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 59.3325,
                longitude: 18.0539,
              },
            }),
          }}
        />
      </head>
      <body className={poppins.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
