export default function Introduction() {
  return (
    <section className="py-24 sm:py-36 bg-[#F7F6F2] border-b border-[#111111]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Label & Focus */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8B79C] font-semibold block mb-4">
              R&amp;G GROUPE IMMOBILIER
            </span>
            <div className="w-12 h-[1px] bg-[#C8B79C] mb-6" />
            <p className="text-xs uppercase tracking-widest text-[#8A8882]">
              Riviera Palmeraie · Abidjan
            </p>
          </div>

          {/* Right Column: Grand Title & Conceptual Narrative */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#111111] leading-[1.15] tracking-tight text-balance">
              L'immobilier avec une vision plus simple.
            </h2>

            <p className="text-lg sm:text-xl text-[#111111]/75 font-light leading-relaxed max-w-2xl">
              Qu'il s'agisse d'acquérir, de louer, de gérer ou de valoriser un bien, R&amp;G GROUPE IMMOBILIER accompagne ses clients dans leurs projets immobiliers avec une approche fondée sur la proximité, la compréhension des besoins et le conseil.
            </p>

            {/* Quiet Unboxed Metadata Separation */}
            <div className="pt-6 border-t border-[#111111]/10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#8A8882]">
              <span className="text-[#111111] font-medium">Intermédiation</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#111111] font-medium">Courtage</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#111111] font-medium">Gestion</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#111111] font-medium">Transactions</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#111111] font-medium">Conseil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
