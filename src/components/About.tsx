export default function About() {
  return (
    <section id="a-propos" className="py-24 sm:py-36 bg-[#F0EEE6] border-t border-[#111111]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Great Architectural Photography */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111111]/10">
              <img
                src="/src/assets/images/about_archi_west_1790947354958.jpg"
                alt="Architecture contemporaine ouest-africaine à Abidjan"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 z-10 bg-[#111111]/80 backdrop-blur-xs text-[#F7F6F2] text-[10px] uppercase tracking-widest px-3 py-1">
                Riviera Palmeraie · Abidjan
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8B79C] font-semibold block">
              R&amp;G GROUPE IMMOBILIER
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#111111] leading-tight tracking-tight text-balance">
              Une nouvelle manière de présenter l'immobilier.
            </h2>

            <p className="text-base sm:text-lg text-[#111111]/75 font-light leading-relaxed">
              Notre approche repose sur une relation de proximité, une compréhension précise des besoins et une volonté de rendre chaque projet immobilier plus clair et plus accessible.
            </p>

            <div className="pt-6 border-t border-[#111111]/10">
              <p className="text-xs text-[#8A8882] tracking-wider uppercase font-medium mb-1">
                Implantation &amp; Écoute
              </p>
              <p className="text-sm text-[#111111]">
                Riviera Palmeraie — Abidjan, Côte d'Ivoire
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
