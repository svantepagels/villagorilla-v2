import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Inskolning – Föräldraaktiv inskolning',
  description: 'Läs om Villa Gorillas föräldraaktiva inskolning där du som förälder är med ditt barn tre dagar i verksamheten.',
};

const steps = [
  { num: '1', title: 'Välkomstbrev', desc: 'När en plats erbjuds får ni ett välkomstbrev med praktisk information.' },
  { num: '2', title: 'Förberedelse', desc: 'Innan inskolning får ni ytterligare information från rektor och ansvarig förälder.' },
  { num: '3', title: 'Tre dagar tillsammans', desc: 'Du som förälder är med ditt barn hela dagarna – blöjbyten, måltider, vila och lek.' },
  { num: '4', title: 'Informationsmöte', desc: 'Efter inskolningen hålls ett möte för alla nya föräldrar.' },
  { num: '5', title: 'Uppföljning', desc: 'Pedagogerna återkopplar hur tiden efter inskolningen går.' },
];

export default function InskolningPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-semibold mb-8 text-charcoal">Inskolning</h1>
        <p className="text-lg text-gray-500 mb-12 leading-relaxed">
          Vi tillämpar <strong>föräldraaktiv inskolning</strong>, vilket innebär att en av
          barnets vårdnadshavare är med barnet i verksamheten tre dagar i följd.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-charcoal">Varför föräldraaktiv?</h2>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Idén är att det är du som förälder som förmedlar till barnet att förskolan är en
            trygg miljö. Under dessa tre dagar är du med barnet hela tiden och deltar i alla
            rutiner – blöjbyten, måltider, vila, med mera.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-charcoal">Så går det till</h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-charcoal text-white flex items-center justify-center font-semibold shrink-0 text-sm">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-medium text-charcoal">{step.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gray-50 p-10">
          <p className="text-gray-500 leading-relaxed mb-6">
            Vi har mycket goda erfarenheter av våra inskolningar. Oftast är det inte särskilt
            många barn som skolas in samtidigt, vilket leder till en ökad trygghet. Våra
            &quot;stora&quot; barn tycker alltid att det är spännande med nya kompisar!
          </p>
          <Button asChild>
            <Link href="/kontakt">Har du frågor? Kontakta oss</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
