interface ImmersionProps {
  onOpenContact: () => void;
}

export default function Immersion({ onOpenContact }: ImmersionProps) {
  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#111111] py-24 sm:py-32">
      {/* Background Architectural Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/immersion_archi_1790947344417.jpg"
          alt="Immersion architecturale contemporaine"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Deep Contrast Scrim */}
        <div className="absolute inset-0 bg-[#111111]/65 backdrop-contrast-110" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center text-[#F7F6F2]">
        <span className="text-xs uppercase tracking-[0.3em] text-[#C8B79C] font-medium block mb-6">
          Immersion Architecturale
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F7F6F2] font-normal leading-tight mb-6 text-balance">
          Votre prochain projet commence ici.
        </h2>

        <p className="text-sm sm:text-lg text-[#F7F6F2]/80 uppercase tracking-[0.25em] font-light mb-10">
          Acheter · Louer · Investir · Construire
        </p>

        <div>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-widest font-medium text-[#111111] bg-[#C8B79C] hover:bg-[#d8c7ad] active:scale-[0.99] transition-all duration-300 shadow-lg"
          >
            Parlons de votre projet
          </button>
        </div>
      </div>
    </section>
  );
}
