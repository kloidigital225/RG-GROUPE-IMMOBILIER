import { X, MapPin, Check, ArrowRight } from 'lucide-react';
import { PropertyItem } from '../types';

interface PropertyDetailModalProps {
  property: PropertyItem | null;
  onClose: () => void;
  onInquire: (propertyTitle: string) => void;
}

export default function PropertyDetailModal({
  property,
  onClose,
  onInquire,
}: PropertyDetailModalProps) {
  if (!property) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/80 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="property-modal-title"
    >
      <div className="relative w-full max-w-3xl bg-[#F7F6F2] text-[#111111] shadow-2xl border border-[#111111]/10 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#111111]/80 text-[#F7F6F2] hover:bg-[#111111] transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Visual Header */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#111111]/10">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 z-10">
            <span className="text-xs uppercase tracking-widest bg-[#111111]/85 backdrop-blur-xs text-[#F7F6F2] px-3 py-1 font-medium">
              Visuel Conceptuel · {property.status}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#8A8882] uppercase tracking-wider mb-2">
              <span>{property.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-[#111111]">
                <MapPin className="w-3 h-3 text-[#C8B79C]" />
                {property.location}
              </span>
            </div>
            <h2 id="property-modal-title" className="font-serif text-3xl sm:text-4xl text-[#111111] font-normal">
              {property.title}
            </h2>
          </div>

          {/* Description */}
          <p className="text-base text-[#111111]/80 font-light leading-relaxed">
            {property.description}
          </p>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[#111111]/10 text-xs">
            <div>
              <span className="text-[#8A8882] uppercase tracking-wider block mb-1">Dimensions &amp; Typologie</span>
              <span className="font-medium text-[#111111]">{property.dimensions}</span>
            </div>
            <div>
              <span className="text-[#8A8882] uppercase tracking-wider block mb-1">Cadre &amp; Orientation</span>
              <span className="font-medium text-[#111111]">{property.orientation}</span>
            </div>
          </div>

          {/* Architectural Points */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C8B79C] font-semibold mb-4">
              Caractéristiques Conceptuelles Clés
            </h4>
            <ul className="space-y-2.5">
              {property.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#111111]/80">
                  <Check className="w-4 h-4 text-[#C8B79C] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer & Action */}
          <div className="pt-6 border-t border-[#111111]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-[11px] text-[#8A8882] max-w-sm">
              Présentation conceptuelle KLOI DIGITAL pour R&amp;G GROUPE IMMOBILIER. Aucune donnée commerciale contractuelle.
            </p>
            <button
              onClick={() => {
                onClose();
                onInquire(property.title);
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-medium bg-[#111111] text-[#F7F6F2] hover:bg-[#C8B79C] hover:text-[#111111] transition-all"
            >
              <span>Se renseigner sur ce type de bien</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
