import { ArrowUpRight } from 'lucide-react';
import { EXPERTISES } from '../data/content';
import { ExpertiseItem } from '../types';

interface ExpertisesProps {
  onSelectExpertise: (item: ExpertiseItem) => void;
}

export default function Expertises({ onSelectExpertise }: ExpertisesProps) {
  return (
    <section id="expertise" className="py-24 sm:py-36 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8B79C] font-semibold block mb-3">
              Notre Savoir-Faire
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#111111] tracking-tight">
              Nos expertises
            </h2>
          </div>
          <p className="text-sm text-[#8A8882] max-w-sm">
            Une gamme complète de services immobiliers structurés avec rigueur et transparence à Abidjan.
          </p>
        </div>

        {/* 4 Large Elegant Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {EXPERTISES.map((item) => (
            <div
              key={item.number}
              onClick={() => onSelectExpertise(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectExpertise(item);
                }
              }}
              className="group relative p-8 sm:p-12 bg-white/70 hover:bg-white border border-[#111111]/8 hover:border-[#C8B79C]/80 transition-all duration-400 ease-out cursor-pointer hover:-translate-y-1 focus:outline-none focus:ring-1 focus:ring-[#C8B79C]"
            >
              {/* Card Header: Editorial Number & Arrow Indicator */}
              <div className="flex items-center justify-between mb-8 sm:mb-12">
                <span className="font-serif text-3xl sm:text-4xl text-[#C8B79C] group-hover:text-[#111111] transition-colors duration-300">
                  {item.number}
                </span>
                <div className="w-9 h-9 flex items-center justify-center rounded-full border border-[#111111]/10 group-hover:border-[#111111] group-hover:bg-[#111111] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#8A8882] group-hover:text-[#F7F6F2] transition-colors duration-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111] mb-4">
                {item.title}
              </h3>

              {/* Tagline */}
              <p className="text-sm sm:text-base text-[#111111]/70 font-light leading-relaxed mb-8">
                {item.tagline}
              </p>

              {/* Subtle hover detail preview */}
              <div className="pt-6 border-t border-[#111111]/8 flex items-center justify-between text-xs text-[#8A8882] group-hover:text-[#111111] transition-colors">
                <span className="uppercase tracking-wider">En savoir plus</span>
                <span className="text-[#C8B79C] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
