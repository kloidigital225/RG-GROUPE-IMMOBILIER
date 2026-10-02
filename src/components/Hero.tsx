interface HeroProps {
  onDiscoverProperties: () => void;
  onExploreExpertise: () => void;
}

export default function Hero({ onDiscoverProperties, onExploreExpertise }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-end pb-16 sm:pb-24 pt-32 overflow-hidden bg-[#111111]">
      {/* Background Hero Image with Slow Ken-Burns / Gentle Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero_abidjan_villa_1790947295686.jpg"
          alt="Architecture résidentielle contemporaine à Abidjan (Visuel conceptuel)"
          className="w-full h-full object-cover object-center scale-100 animate-[pulse_10s_ease-in-out_infinite] motion-safe:transition-transform motion-safe:duration-1000 motion-safe:ease-out"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured Scrim & Subtle Dark Gradient Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-[#111111]/40" />
      </div>

      {/* Conceptual Disclaimer Pill - Unobtrusive & Clear */}
      <div className="absolute top-24 sm:top-28 right-6 sm:right-10 z-10">
        <span className="text-[10px] sm:text-xs tracking-wider uppercase text-[#F7F6F2]/70 bg-[#111111]/60 backdrop-blur-xs px-3 py-1 border border-white/10">
          Visuel conceptuel — Démonstration KLOI DIGITAL
        </span>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-3xl">
          {/* Company Label */}
          <div className="mb-4 sm:mb-5">
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C8B79C] font-medium">
              R&amp;G GROUPE IMMOBILIER
            </span>
          </div>

          {/* Grand Headline with Balanced Text */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F7F6F2] leading-[1.1] sm:leading-[1.08] mb-6 text-balance tracking-tight">
            Des espaces pensés pour votre avenir.
          </h1>

          {/* Small Body */}
          <p className="text-base sm:text-lg text-[#F7F6F2]/80 font-light max-w-xl mb-10 leading-relaxed">
            Une approche professionnelle de l'immobilier, pensée autour de vos projets.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onDiscoverProperties}
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-widest font-medium bg-[#F7F6F2] text-[#111111] hover:bg-[#C8B79C] active:scale-[0.99] transition-all duration-300"
            >
              Découvrir nos biens
            </button>
            <button
              onClick={onExploreExpertise}
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-widest font-medium border border-[#F7F6F2]/40 text-[#F7F6F2] hover:bg-[#F7F6F2]/10 hover:border-[#F7F6F2] active:scale-[0.99] transition-all duration-300"
            >
              Notre expertise
            </button>
          </div>
        </div>

        {/* Quiet Location Anchor at Bottom Right */}
        <div className="hidden lg:flex items-center justify-end pt-12 border-t border-white/10 mt-16 text-xs text-[#F7F6F2]/60 tracking-wider">
          <span>Riviera Palmeraie · Abidjan, Côte d'Ivoire</span>
        </div>
      </div>
    </section>
  );
}
