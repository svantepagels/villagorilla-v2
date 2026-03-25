import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Hero - Full width image with overlay */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <Image
          src="/images/VG_garden_1.jpg"
          alt="Villa Gorilla förskola gård"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="section-padding">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Villa Gorilla
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              En trygg förskola på Kungsholmen med erfarna pedagoger,
              nyrenoverade lokaler och en stark gemenskap
            </p>
            <Link href="/oppet-hus" className="btn-primary">
              Boka öppet hus
            </Link>
          </div>
        </div>
      </section>

      {/* Intro text block */}
      <section className="section-padding section-padding-y">
        <div className="max-site text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            den lilla förskolan på Kungsholmen
          </h2>
          <p className="text-lg leading-relaxed">
            Vi värdesätter ditt barns lärande. En trygg och lugn miljö är viktig för barns
            utveckling. Vi ser barnen som kompetenta individer som kan och vill lära,
            utvecklas och ställas inför nya utmaningar.
          </p>
        </div>
      </section>

      {/* Large photo grid - 2 column */}
      <section className="section-padding pb-[4vw]">
        <div className="max-site grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/children_1.jpg"
              alt="Barn i aktivitet på Villa Gorilla"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/VG_garden_2.jpg"
              alt="Villa Gorillas gård"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Pedagogy - Image + Text side by side */}
      <section className="section-padding section-padding-y">
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
          <div className="md:pl-8">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Vår pedagogik</h2>
            <p className="mb-4 leading-relaxed">
              Vår pedagogiska verksamhet bygger på läroplanen Lpfö-18. Vi arbetar med
              språk, matematik, naturkunskap, teknik, skapande, rörelse, sång och musik –
              utefter barnens intressen, mognad och ålder.
            </p>
            <p className="mb-8 leading-relaxed">
              Den blandade åldersgruppen är en styrka. Stora och små lär av varandra,
              vilket utvecklar empati, samarbetsförmåga och hänsyn.
            </p>
            <Link href="/om-oss" className="btn-outline">
              Läs mer om oss
            </Link>
          </div>
        </div>
      </section>

      {/* Full width image break */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/crafts_1.jpg"
          alt="Skapande aktivitet"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Stats */}
      <section className="section-padding section-padding-y bg-neutral-50">
        <div className="max-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '4,7', label: 'barn per pedagog' },
              { value: '7', label: 'fast anställda' },
              { value: '3', label: 'leg. förskolelärare' },
              { value: '40,5%', label: 'andel förskolelärare' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-sm text-secondary uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo grid - 3 images */}
      <section className="section-padding section-padding-y">
        <div className="max-site grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/VG_garden_3.jpg"
              alt="Gården"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/children_3.jpg"
              alt="Barn leker"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/snow_play.jpg"
              alt="Lek i snön"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* Lokaler - Text + Image */}
      <section className="section-padding section-padding-y bg-neutral-50">
        <div className="max-site grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Våra lokaler</h2>
            <p className="mb-4 leading-relaxed">
              Villa Gorilla håller till i nyrenoverade lokaler på Hjärnegatan, en lugn gata
              nära Rådhuset på Kungsholmen. Ytorna är generösa med rum för bygglek,
              skapande, rollekar och rörelse.
            </p>
            <p className="mb-8 leading-relaxed">
              Vi har en egen tryggt inhägnad gård och nära till fina parker och Judarskogen.
            </p>
            <Link href="/lokaler" className="btn-outline">
              Se våra lokaler
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/VG_garden_4.jpg"
              alt="Villa Gorillas utomhusmiljö"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* CTA with background image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/VG_garden_2.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center section-padding">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
            Vill du veta mer?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto font-light">
            Kom på vårt öppet hus och träffa personalen, se våra lokaler och ställ alla
            frågor du har.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/oppet-hus" className="btn-primary bg-white text-black hover:bg-gray-100">
              Boka öppet hus
            </Link>
            <Link href="/kontakt" className="btn-primary border-2 border-white bg-transparent hover:bg-white/20">
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
