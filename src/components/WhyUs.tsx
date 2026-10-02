import { WHY_US_ITEMS } from '../data/content';

export default function WhyUs() {
  return (
    <section className="py-24 sm:py-36 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-20 sm:mb-24">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C8B79C] font-semibold block mb-3">
            Philosophie de Travail
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#111111] tracking-tight">
            Une approche centrée sur votre projet.
          </h2>
        </div>

        {/* 3 Minimalist Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {WHY_US_ITEMS.map((item) => (
            <div key={item.number} className="relative pt-8 group">
              {/* Subtle top hairline */}
              <div className="w-12 h-[1px] bg-[#C8B79C] mb-8 group-hover:w-20 transition-all duration-400" />

              {/* Large Elegant Serif Number */}
              <span className="font-serif text-5xl sm:text-6xl text-[#C8B79C]/90 font-light block mb-4 select-none">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-medium uppercase tracking-wider text-[#111111] mb-3">
                {item.title}
              </h3>

              {/* Body Text */}
              <p className="text-sm sm:text-base text-[#111111]/70 font-light leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
