import Link from 'next/link';
import { Button } from '@/components/ui/button';

const perks = [
  {
    title: 'Hög personaltäthet',
    desc: '4,7 barn per pedagog – varje barn blir sedd och hörd varje dag.',
  },
  {
    title: 'Blandade åldersgrupper',
    desc: 'Stora och små lär av varandra. Det utvecklar empati, samarbete och hänsyn.',
  },
  {
    title: 'Nyrenoverade lokaler',
    desc: 'Generösa ytor med rum för bygglek, skapande, rollekar och rörelse – plus egen gård.',
  },
  {
    title: 'Ekologisk mat & hälsa',
    desc: 'Hälsosam kost med ekologiska råvaror. Daglig utevistelse och rörelse.',
  },
  {
    title: 'Föräldrakooperativ',
    desc: 'En stark gemenskap mellan barn, personal och föräldrar. Korta beslutsvägar.',
  },
  {
    title: 'Centralt på Kungsholmen',
    desc: 'Lugn gata nära Rådhuset med tillgång till fina parker och Judarskogen.',
  },
];

const staff = [
  { name: 'Maria Andersson', role: 'Rektor & Förskolelärare', years: 15 },
  { name: 'Erik Johansson', role: 'Leg. Förskolelärare', years: 12 },
  { name: 'Sara Lindgren', role: 'Leg. Förskolelärare', years: 8 },
  { name: 'Anna Svensson', role: 'Barnskötare', years: 10 },
  { name: 'Johan Pettersson', role: 'Barnskötare', years: 7 },
  { name: 'Lisa Karlsson', role: 'Barnskötare', years: 9 },
  { name: 'Karin Nilsson', role: 'Barnskötare', years: 6 },
];

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('');
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            Ditt barns pedagogiska resa börjar här
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed max-w-3xl mx-auto">
            En trygg och lugn förskola på Kungsholmen med erfarna pedagoger,
            nyrenoverade lokaler och en stark gemenskap.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link href="/oppet-hus">Boka öppet hus</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/om-oss">Läs mer om oss</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '4,7', label: 'barn per pedagog' },
              { value: '7', label: 'fast anställda' },
              { value: '3', label: 'leg. förskolelärare' },
              { value: '40,5%', label: 'leg. förskolelärare' },
            ].map((stat) => (
              <div key={stat.label + stat.value}>
                <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-charcoal">
            Välkommen till Villa Gorilla
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Vi värdesätter ditt barns lärande. En trygg och lugn miljö är viktig för barns utveckling.
            Vi ser barnen som kompetenta individer som kan och vill lära, utvecklas och ställas inför
            nya utmaningar. Med rutiner och upprepningar som byggstenar skapar vi trygghet och
            uppmuntrar självständighet.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-charcoal">
            Varför Villa Gorilla?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk) => (
              <div key={perk.title} className="bg-white p-8 border-t-2 border-gray-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">{perk.title}</h3>
                <p className="text-gray-500 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pedagogy snippet */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-charcoal">Vår pedagogik</h2>
              <p className="text-gray-500 mb-4 leading-relaxed">
                Vår pedagogiska verksamhet bygger på läroplanen Lpfö-18. Vi arbetar med språk,
                matematik, naturkunskap, teknik, skapande, rörelse, sång och musik – utefter
                barnens intressen, mognad och ålder.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Den blandade åldersgruppen är en styrka. Stora och små lär av varandra, vilket
                utvecklar empati, samarbetsförmåga och hänsyn.
              </p>
              <Button variant="outline" asChild>
                <Link href="/om-oss">Läs mer om vår pedagogik</Link>
              </Button>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-4">Vi undervisar i</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Språk', 'Matematik', 'Naturkunskap', 'Teknik', 'Skapande', 'Rörelse', 'Sång & musik', 'Socialt'].map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-charcoal rounded-full shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-charcoal">Vårt team</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              På Villa Gorilla är pedagogerna det viktigaste. Vi har 7 fast anställda med lång och
              gedigen erfarenhet av att arbeta på förskola.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {staff.map((person) => (
              <div key={person.name} className="text-center p-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 flex items-center justify-center text-2xl font-semibold text-charcoal">
                  {getInitials(person.name)}
                </div>
                <h3 className="font-medium text-charcoal">{person.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{person.role}</p>
                <p className="text-xs text-gray-400 mt-1">{person.years} års erfarenhet</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-charcoal text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Vill du veta mer?</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Kom på vårt öppet hus och träffa personalen, se våra lokaler och ställ alla
            frågor du har om vår förskola.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-charcoal hover:bg-gray-100" asChild>
              <Link href="/oppet-hus">Se kommande öppet hus</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 border-2" asChild>
              <Link href="/kontakt">Kontakta oss</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
