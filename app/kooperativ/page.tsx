import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Kooperativ – Så fungerar vårt föräldrakooperativ',
  description: 'Sedan 2015 drivs Villa Gorilla som ett personal- och föräldrakooperativ.',
};

export default function KooperativPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/VG_garden_4.jpg"
          alt="Villa Gorilla kooperativ"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Kooperativet</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding section-padding-y">
        <div className="max-site max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed">
            Sedan januari 2015 drivs Villa Gorilla som ett <strong className="text-black">personal- och
            föräldrakooperativ</strong>. Det innebär en unik gemenskap mellan barn,
            personal och föräldrar.
          </p>
        </div>
      </section>

      {/* Board + Image */}
      <section className="section-padding pb-[4vw]">
        <div className="max-site grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-medium mb-6">Styrelse och beslut</h2>
            <p className="mb-4 leading-relaxed">
              Styrelsen består av lika många föräldrar som personalrepresentanter,
              med en ordförande som alltid är förälder. Styrelsen är huvudman för förskolan.
            </p>
            <p className="leading-relaxed">
              Professionell och engagerad personal har huvudansvaret för den pedagogiska
              verksamheten. På årsmötet röstar personal och föräldrar tillsammans.
            </p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/children_1.jpg"
              alt="Gemenskap"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Parent contributions */}
      <section className="section-padding section-padding-y bg-neutral-50">
        <div className="max-site max-w-4xl mx-auto">
          <h2 className="text-3xl font-medium text-center mb-12">Föräldrarnas insatser</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="border-t-2 border-black pt-6">
              <h3 className="font-medium text-black text-lg mb-4">Det här gör vi föräldrar</h3>
              <ul className="space-y-2 text-secondary">
                <li>• Styrelseuppdrag</li>
                <li>• Arbetsgrupper</li>
                <li>• Gemensam storstädning</li>
                <li>• Bidrar till gemenskap</li>
              </ul>
            </div>
            <div className="border-t-2 border-neutral-300 pt-6">
              <h3 className="font-medium text-black text-lg mb-4">Det här gör vi INTE</h3>
              <ul className="space-y-2 text-secondary">
                <li>• Aktiva i verksamheten</li>
                <li>• Jour vid sjukdom</li>
                <li>• Tillagar mat</li>
                <li>• Vi låter proffsen göra sitt jobb!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full width image */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/images/crafts_1.jpg" alt="Aktiviteter" fill className="object-cover" sizes="100vw" />
      </section>

      {/* Money goes to kids */}
      <section className="section-padding section-padding-y">
        <div className="max-site max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-6">Pengarna går till barnen</h2>
          <p className="text-lg leading-relaxed">
            Syftet med föräldrarnas insatser är att frigöra ekonomiska resurser som går
            direkt till den pedagogiska verksamheten: hög personaltäthet, tillgång till
            material och möjligheter till spännande aktiviteter.
            <strong className="text-black"> Hela ditt barns kommunala förskolepeng går till verksamheten.</strong>
          </p>
        </div>
      </section>
    </>
  );
}
