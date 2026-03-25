import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/children_3.jpg"
          alt="Inskolning på Villa Gorilla"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Inskolning</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding section-padding-y">
        <div className="max-site max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed">
            Vi tillämpar <strong className="text-black">föräldraaktiv inskolning</strong>, vilket innebär att en av
            barnets vårdnadshavare är med barnet i verksamheten tre dagar i följd.
          </p>
        </div>
      </section>

      {/* Why + image */}
      <section className="section-padding pb-[4vw]">
        <div className="max-site grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/children_2.jpg"
              alt="Trygg inskolning"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-medium mb-6">Varför föräldraaktiv?</h2>
            <p className="leading-relaxed">
              Idén är att det är du som förälder som förmedlar till barnet att förskolan är
              en trygg miljö. Under dessa tre dagar är du med barnet hela tiden och deltar
              i alla rutiner – blöjbyten, måltider, vila, med mera.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding section-padding-y bg-neutral-50">
        <div className="max-site max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium text-center mb-12">Så går det till</h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-medium shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-medium text-black text-lg">{step.title}</h3>
                  <p className="mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full width image */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/images/VG_garden_1.jpg" alt="Gården" fill className="object-cover" sizes="100vw" />
      </section>

      {/* CTA */}
      <section className="section-padding section-padding-y">
        <div className="max-site max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed mb-8">
            Vi har mycket goda erfarenheter av våra inskolningar. Oftast är det inte särskilt
            många barn som skolas in samtidigt, vilket leder till en ökad trygghet.
          </p>
          <Link href="/kontakt" className="btn-primary">
            Kontakta oss
          </Link>
        </div>
      </section>
    </>
  );
}
