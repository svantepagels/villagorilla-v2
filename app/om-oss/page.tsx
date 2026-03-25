import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Om oss – Vår pedagogik och värderingar',
  description: 'Lär känna Villa Gorilla – en föräldrakooperativ förskola med erfarna pedagoger, hög personaltäthet och en pedagogik byggd på Lpfö-18.',
};

export default function OmOssPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-semibold mb-8 text-charcoal">Om Villa Gorilla</h1>
        <p className="text-lg text-gray-500 mb-12 leading-relaxed">
          Villa Gorilla är en föräldrakooperativ förskola på Kungsholmen i Stockholm.
          Vi värdesätter ditt barns lärande och skapar en trygg och lugn miljö där varje
          barn får utvecklas i sin egen takt.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-charcoal">Vår pedagogik</h2>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Vi ser barnen som kompetenta individer som kan och vill lära, utvecklas och ställas
            inför nya utmaningar. Vi uppmuntrar till självständighet och vi ger barnen den tid
            de behöver.
          </p>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Rutiner och upprepningar är en viktig byggsten i vår verksamhet. Genom upprepning
            lär och utvecklas barnen, och rutinerna skapar trygghet.
          </p>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Vår pedagogiska verksamhet är planerad och uppbyggd utifrån de mål och riktlinjer
            som läroplanen innehåller. Vi jobbar efter den senast uppdaterade versionen av
            förskolans läroplan (Lpfö-18).
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-charcoal">Blandade åldersgrupper</h2>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Den blandade åldersgruppen på Villa Gorilla är en styrka. Stora och små lär av
            varandra. Det utvecklar barnens empati, förmåga att samarbeta, att visa hänsyn,
            dela med sig och lösa konflikter.
          </p>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Naturligtvis delar vi även upp gruppen efter ålder och mognad, eftersom barn i
            skiftande åldrar har olika behov. Vi ordnar femårsverksamhet i samarbete med
            andra kooperativ på Kungsholmen för att förbereda våra äldsta barn inför
            skolstarten.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-charcoal">Vårt team</h2>
          <p className="text-gray-500 mb-4 leading-relaxed">
            På Villa Gorilla är pedagogerna det viktigaste för att få förskolan att fungera
            på bästa vis. Vi har <strong>7 fast anställda</strong>, varav <strong>3 legitimerade
            förskolelärare</strong>. Övriga är erfarna barnskötare.
          </p>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Vår personaltäthet är <strong>4,7 barn per pedagog</strong> – något vi är mycket
            stolta över och prioriterar högt. Pedagogerna har en lång och gedigen erfarenhet
            av att arbeta på förskola.
          </p>
          <p className="text-gray-500 leading-relaxed">
            De undervisar bl.a. i skapande, rörelse, sång, musik, svenska, natur, teknik och
            matematik – utefter barnens intressen, mognad och ålder.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-charcoal">Hälsa och kost</h2>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Barnens hälsa är en grundsten i deras välmående. Vi serverar hälsosam och god kost
            och föredrar ekologiska råvaror. Vi undviker halvfabrikat och följer Livsmedelsverkets
            rekommendationer.
          </p>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Måltiderna präglas av lugn och ro med tid för samtal och övning i att skära, smöra,
            hälla och skicka runt till bordsgrannen. Vi prioriterar rörelse genom bl.a. &quot;Mini-röris&quot;
            och fredagsdisco!
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-charcoal">Traditioner</h2>
          <p className="text-gray-500 mb-4 leading-relaxed">
            På Villa Gorilla uppmärksammar vi årets högtider: Lucia, julgransplundring,
            Halloween och gemensam sommaravslutning. Vår trivselgrupp ordnar även aktiviteter
            för föräldrar och barn under året, som t.ex. &quot;after-föris&quot;.
          </p>
        </section>

        <div className="bg-gray-50 p-10 text-center">
          <h3 className="text-xl font-semibold mb-3 text-charcoal">Nyfiken på att besöka oss?</h3>
          <p className="text-gray-500 mb-6">
            Kom på vårt öppet hus och se hur det ser ut hos oss.
          </p>
          <Button asChild>
            <Link href="/oppet-hus">Se kommande öppet hus</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
