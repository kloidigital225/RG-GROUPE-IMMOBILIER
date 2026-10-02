interface FinalCtaProps {
  onOpenContact: () => void;
}

export default function FinalCta({ onOpenContact }: FinalCtaProps) {
  return (
    <section className="py-28 sm:py-36 bg-[#111111] text-[#F7F6F2] relative overflow-hidden">
      {/* Subtle architectural ambient accent */}
      <div className="absolute inset-0 bg-radial from-[#C8B79C]/10 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F7F6F2] font-normal leading-[1.15] mb-6 text-balance tracking-tight">
          Parlons de votre prochain projet.
        </h2>

        <p className="text-base sm:text-xl text-[#F7F6F2]/75 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Un projet immobilier mérite une approche qui lui ressemble.
        </p>

        <div>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center px-9 py-4 text-xs uppercase tracking-widest font-medium bg-[#C8B79C] text-[#111111] hover:bg-[#d8c7ad] active:scale-[0.99] transition-all duration-300 shadow-sm"
          >
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}
