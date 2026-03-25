import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lokaler – Nyrenoverade utrymmen',
  description: 'Villa Gorillas nyrenoverade lokaler på Hjärnegatan, Kungsholmen. Generösa ytor med rum för bygglek, skapande, rollekar och en trygg gård.',
};

const spaces = [
  {
    title: 'Skapanderum',
    desc: 'Här får barnen uttrycka sig genom målning, lera, klippande och klistrande. Vi väljer helst naturmaterial för att minimera kemikalier.',
  },
  {
    title: 'Byggleksrum',
    desc: 'Ett dedikerat rum för konstruktion och bygglek, där barnen utvecklar sin kreativitet och problemlösningsförmåga.',
  },
  {
    title: 'Rolleksrum',
    desc: 'Här spelar barnen rollekar som stimulerar fantasin, språkutvecklingen och den sociala kompetensen.',
  },
  {
    title: 'Rörelserum',
    desc: 'Ett öppet rum för dans, Mini-röris och fredagsdisco. Rörelse är en viktig del av barnens vardag.',
  },
];

export default function LokalerPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-semibold mb-8 text-charcoal">Våra lokaler</h1>
        <p className="text-lg text-gray-500 mb-16 leading-relaxed max-w-3xl">
          Villa Gorilla håller till i nyrenoverade lokaler på Hjärnegatan, en lugn gata nära
          Rådhuset på Kungsholmen. Ytorna är generösa och det finns särskilda rum för olika
          aktiviteter.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-20">
          {spaces.map((space) => (
            <div key={space.title} className="p-8 border-t-2 border-gray-200">
              <h3 className="text-xl font-semibold text-charcoal mb-3">{space.title}</h3>
              <p className="text-gray-500 leading-relaxed">{space.desc}</p>
            </div>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-charcoal">Utomhusmiljö</h2>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Alla barn är utomhus minst en gång per dag, antingen i någon av alla fina parker
            i närområdet, på en längre utflykt, eller på den trygga och lekvänliga gården.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Barnen får från tidig ålder upptäcka platser utanför förskolans område – lekparker
            i staden och Judarskogen är populära utflyktsmål.
          </p>
        </section>

        <div className="bg-gray-50 p-8">
          <h3 className="font-semibold text-lg mb-2 text-charcoal">Hitta hit</h3>
          <p className="text-gray-500 mb-2">
            Hjärnegatan 6, 112 30 Stockholm
          </p>
          <p className="text-gray-400 text-sm">
            Närmaste tunnelbana: Rådhuset (blå linjen). Gångavstånd ca 3 minuter.
          </p>
        </div>
      </div>
    </div>
  );
}
