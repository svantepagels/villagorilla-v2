import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kooperativ – Så fungerar vårt föräldrakooperativ',
  description: 'Sedan 2015 drivs Villa Gorilla som ett personal- och föräldrakooperativ. Läs om hur det fungerar och vad det innebär som förälder.',
};

export default function KooperativPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-semibold mb-8 text-charcoal">Kooperativet</h1>
        <p className="text-lg text-gray-500 mb-12 leading-relaxed">
          Sedan januari 2015 drivs Villa Gorilla som ett <strong>personal- och
          föräldrakooperativ</strong>. Det innebär en unik gemenskap mellan barn,
          personal och föräldrar.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-charcoal">Styrelse och beslut</h2>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Styrelsen består av lika många föräldrar som personalrepresentanter,
            med en ordförande som alltid är förälder. Styrelsen är huvudman för förskolan.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Professionell och engagerad personal har huvudansvaret för den pedagogiska
            verksamheten. På årsmötet röstar personal och föräldrar tillsammans fram
            samtliga styrelseledamöter.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-charcoal">Föräldrarnas insatser</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Föräldrarnas åtaganden varierar och kan innebära styrelseuppdrag,
            arbetsgrupper (lokalgrupp, trivselgrupp m.fl.) och gemensam storstädning
            en helg per termin.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8">
              <h3 className="font-semibold mb-4 text-charcoal">Det här gör vi föräldrar</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-charcoal rounded-full" /> Styrelseuppdrag</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-charcoal rounded-full" /> Arbetsgrupper</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-charcoal rounded-full" /> Gemensam storstädning</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-charcoal rounded-full" /> Bidrar till gemenskap</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8">
              <h3 className="font-semibold mb-4 text-charcoal">Det här gör vi INTE</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full" /> Aktiva i verksamheten</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full" /> Jour vid sjukdom</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full" /> Tillagar mat</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full" /> Vi låter proffsen göra sitt jobb!</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-10">
          <h2 className="text-xl font-semibold mb-3 text-charcoal">Pengarna går till barnen</h2>
          <p className="text-gray-500 leading-relaxed">
            Syftet med föräldrarnas insatser är att frigöra ekonomiska resurser som går
            direkt till den pedagogiska verksamheten: hög personaltäthet, tillgång till
            material och möjligheter till spännande aktiviteter.
            <strong> Hela ditt barns kommunala förskolepeng går till verksamheten.</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
