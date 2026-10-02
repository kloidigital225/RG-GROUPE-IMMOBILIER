import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { PROPERTIES } from '../data/content';
import { PropertyItem } from '../types';

interface PropertiesProps {
  onSelectProperty: (property: PropertyItem) => void;
}

export default function Properties({ onSelectProperty }: PropertiesProps) {
  return (
    <section id="biens" className="py-24 sm:py-36 bg-[#F0EEE6] border-y border-[#111111]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C8B79C]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8B79C] font-semibold">
              Sélection Conceptuelle
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#111111] tracking-tight mb-4">
            Des espaces qui attirent le regard.
          </h2>
          <p className="text-base text-[#8A8882] font-light max-w-xl">
            Découvrez une sélection de propriétés présentées dans notre concept digital.
          </p>
        </div>

        {/* 3 Conceptual Property Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {PROPERTIES.map((property) => (
            <div
              key={property.id}
              className="group bg-[#F7F6F2] flex flex-col justify-between border border-[#111111]/8 hover:border-[#C8B79C] transition-all duration-500 overflow-hidden"
            >
              {/* Card Image Container with Subtle Zoom on Hover */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111111]/10">
                <img
                  src={property.image}
                  alt={`${property.title} — ${property.location} (Visuel conceptuel)`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] uppercase tracking-widest bg-[#111111]/80 backdrop-blur-xs text-[#F7F6F2] px-2.5 py-1 font-medium">
                    {property.status}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Location metadata without pill borders */}
                  <div className="flex items-center gap-2 text-xs text-[#8A8882] mb-3">
                    <span className="text-[#8A8882]">{property.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-[#111111]">
                      <MapPin className="w-3 h-3 text-[#C8B79C]" />
                      {property.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#111111] mb-3 font-normal group-hover:text-[#111111] transition-colors">
                    {property.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#111111]/70 font-light leading-relaxed line-clamp-3 mb-6">
                    {property.description}
                  </p>
                </div>

                {/* Card CTA Action */}
                <div className="pt-5 border-t border-[#111111]/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#8A8882] uppercase tracking-wider">
                    {property.dimensions}
                  </span>
                  <button
                    onClick={() => onSelectProperty(property)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#111111] hover:text-[#C8B79C] group-hover:translate-x-1 transition-all whitespace-nowrap"
                  >
                    <span>Découvrir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conceptual Note footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#8A8882] tracking-wide">
            Ces fiches sont des représentations conceptuelles destinées à illustrer l'expérience utilisateur moderne.
          </p>
        </div>
      </div>
    </section>
  );
}
