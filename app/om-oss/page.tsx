import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Om oss – Vår pedagogik och värderingar',
  description: 'Lär känna Villa Gorilla – en föräldrakooperativ förskola med erfarna pedagoger, hög personaltäthet och en pedagogik byggd på Lpfö-18.',
};

const staff = [
  { name: 'Maria Andersson', role: 'Rektor & Förskolelärare' },
  { name: 'Erik Johansson', role: 'Leg. Förskolelärare' },
  { name: 'Sara Lindgren', role: 'Leg. Förskolelärare' },
  { name: 'Anna Svensson', role: 'Barnskötare' },
  { name: 'Johan Pettersson', role: 'Barnskötare' },
  { name: 'Lisa Karlsson', role: 'Barnskötare' },
  { name: 'Karin Nilsson', role: 'Barnskötare' },
];

export default function OmOssPage() {
  return (
    <>
      {/* Hero image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/children_1.jpg"
          alt="Barn på Villa Gorilla"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Om Villa Gorilla</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding section-padding-y">
        <div className="max-site max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed">
            Villa Gorilla är en föräldrakooperativ förskola på Kungsholmen i Stockholm.
            Vi värdesätter ditt barns lärande och skapar en trygg och lugn miljö där varje
            barn får utvecklas i sin egen takt.
          </p>
        </div>
      </section>

      {/* Pedagogy - Image left, text right */}
      <section className="section-padding pb-[4vw]">
        <div className="max-site grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/children_2.jpg"
              alt="Pedagogisk aktivitet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-medium mb-6">Vår pedagogik</h2>
            <p className="mb-4 leading-relaxed">
              Vi ser barnen som kompetenta individer som kan och vill lära, utvecklas och
              ställas inför nya utmaningar. Vi uppmuntrar till självständighet och vi ger
              barnen den tid de behöver.
            </p>
            <p className="mb-4 leading-relaxed">
              Rutiner och upprepningar är en viktig byggsten. Genom upprepning lär och
              utvecklas barnen, och rutinerna skapar trygghet.
            </p>
            <p className="leading-relaxed">
              Vår pedagogiska verksamhet är planerad utifrån de mål och riktlinjer som
              läroplanen Lpfö-18 innehåller.
            </p>
          </div>
        </div>
      </section>

      {/* Full width image */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/images/crafts_1.jpg"
          alt="Skapande aktiviteter"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Mixed ages */}
      <section className="section-padding section-padding-y">
        <div className="max-site grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-medium mb-6">Blandade åldersgrupper</h2>
            <p className="mb-4 leading-relaxed">
              Den blandade åldersgruppen på Villa Gorilla är en styrka. Stora och små lär av
              varandra. Det utvecklar barnens empati, förmåga att samarbeta, att visa hänsyn,
              dela med sig och lösa konflikter.
            </p>
            <p className="leading-relaxed">
              Naturligtvis delar vi även upp gruppen efter ålder och mognad. Vi ordnar
              femårsverksamhet i samarbete med andra kooperativ på Kungsholmen.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/children_3.jpg"
              alt="Barn i blandade åldrar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="section-padding section-padding-y bg-neutral-50">
        <div className="max-site text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Vårt team</h2>
          <p className="text-secondary max-w-2xl mx-auto mb-12">
            7 fast anställda med lång och gedigen erfarenhet. 3 legitimerade förskolelärare.
            Personaltäthet: 4,7 barn per pedagog.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {staff.map((person) => (
              <div key={person.name} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-neutral-200 rounded-full flex items-center justify-center text-2xl font-medium text-secondary">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-medium text-black text-sm">{person.name}</h3>
                <p className="text-xs text-secondary mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health & food - with image */}
      <section className="section-padding section-padding-y">
        <div className="max-site grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/snow_play.jpg"
              alt="Utomhuslek"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-medium mb-6">Hälsa och kost</h2>
            <p className="mb-4 leading-relaxed">
              Vi serverar hälsosam och god kost och föredrar ekologiska råvaror. Vi undviker
              halvfabrikat och följer Livsmedelsverkets rekommendationer.
            </p>
            <p className="leading-relaxed">
              Alla barn är utomhus minst en gång per dag. Vi prioriterar rörelse genom
              bl.a. &quot;Mini-röris&quot; och fredagsdisco!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[40vh] overflow-hidden flex items-center justify-center">
        <Image src="/images/VG_garden_1.jpg" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center section-padding">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Nyfiken?</h2>
          <Link href="/oppet-hus" className="btn-primary bg-white text-black hover:bg-gray-100">
            Boka öppet hus
          </Link>
        </div>
      </section>
    </>
  );
}
