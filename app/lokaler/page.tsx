import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Lokaler – Nyrenoverade utrymmen',
  description: 'Villa Gorillas nyrenoverade lokaler på Hjärnegatan, Kungsholmen. Generösa ytor med rum för bygglek, skapande, rollekar och en trygg gård.',
};

const spaces = [
  { title: 'Skapanderum', desc: 'Här får barnen uttrycka sig genom målning, lera, klippande och klistrande. Vi väljer helst naturmaterial.' },
  { title: 'Byggleksrum', desc: 'Ett dedikerat rum för konstruktion och bygglek där barnen utvecklar kreativitet och problemlösning.' },
  { title: 'Rolleksrum', desc: 'Här spelar barnen rollekar som stimulerar fantasin, språkutvecklingen och den sociala kompetensen.' },
  { title: 'Rörelserum', desc: 'Ett öppet rum för dans, Mini-röris och fredagsdisco. Rörelse är en viktig del av vardagen.' },
];

export default function LokalerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/VG_garden_2.jpg"
          alt="Villa Gorillas lokaler"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Våra lokaler</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding section-padding-y">
        <div className="max-site max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed">
            Villa Gorilla håller till i nyrenoverade lokaler på Hjärnegatan, en lugn gata nära
            Rådhuset på Kungsholmen. Ytorna är generösa och det finns särskilda rum för
            olika aktiviteter.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="section-padding pb-[4vw]">
        <div className="max-site grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/VG_garden_1.jpg"
              alt="Gård med lekutrustning"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/VG_garden_4.jpg"
              alt="Gården"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/VG_garden_3.jpg"
              alt="Utomhusmiljö"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/crafts_1.jpg"
              alt="Skapande aktiviteter"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="section-padding section-padding-y bg-neutral-50">
        <div className="max-site">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">Våra rum</h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {spaces.map((space) => (
              <div key={space.title} className="border-t-2 border-black pt-6">
                <h3 className="text-xl font-medium text-black mb-3">{space.title}</h3>
                <p className="leading-relaxed">{space.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor - image + text */}
      <section className="section-padding section-padding-y">
        <div className="max-site grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-medium mb-6">Utomhusmiljö</h2>
            <p className="mb-4 leading-relaxed">
              Alla barn är utomhus minst en gång per dag, antingen i någon av alla fina parker
              i närområdet, på en längre utflykt, eller på den trygga gården.
            </p>
            <p className="leading-relaxed">
              Barnen upptäcker platser utanför förskolans område – lekparker i staden och
              Judarskogen är populära utflyktsmål.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/snow_play.jpg"
              alt="Utomhuslek i snön"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/images/VG_garden_2.jpg"
          alt="Utemiljö"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Location info */}
      <section className="section-padding section-padding-y">
        <div className="max-site max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-6">Hitta hit</h2>
          <p className="text-lg mb-2">Hjärnegatan 6, 112 30 Stockholm</p>
          <p className="text-sm text-secondary">
            Närmaste tunnelbana: Rådhuset (blå linjen). Gångavstånd ca 3 minuter.
          </p>
        </div>
      </section>
    </>
  );
}
