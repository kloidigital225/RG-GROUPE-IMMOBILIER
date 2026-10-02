import { X, Check, ArrowRight } from 'lucide-react';
import { ExpertiseItem } from '../types';

interface ExpertiseModalProps {
  expertise: ExpertiseItem | null;
  onClose: () => void;
  onInquire: (expertiseTitle: string) => void;
}

export default function ExpertiseModal({
  expertise,
  onClose,
  onInquire,
}: ExpertiseModalProps) {
  if (!expertise) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/80 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="expertise-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#F7F6F2] text-[#111111] p-6 sm:p-10 shadow-2xl border border-[#111111]/10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#8A8882] hover:text-[#111111] transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Number & Category */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-serif text-3xl sm:text-4xl text-[#C8B79C]">
            {expertise.number}
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-[#8A8882] font-semibold">
            Pôle d'Expertise
          </span>
        </div>

        <h2 id="expertise-modal-title" className="font-serif text-3xl sm:text-4xl text-[#111111] font-normal mb-3">
          {expertise.title}
        </h2>

        <p className="text-sm sm:text-base text-[#111111]/80 font-medium mb-6">
          « {expertise.tagline} »
        </p>

        <p className="text-sm text-[#111111]/70 font-light leading-relaxed mb-8">
          {expertise.description}
        </p>

        {/* Methodological Details */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-widest text-[#C8B79C] font-semibold mb-4">
            Engagements méthodologiques
          </h4>
          <ul className="space-y-2.5">
            {expertise.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#111111]/80">
                <Check className="w-4 h-4 text-[#C8B79C] shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-[#111111]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-[11px] text-[#8A8882]">
            R&amp;G GROUPE IMMOBILIER · Riviera Palmeraie, Abidjan
          </p>
          <button
            onClick={() => {
              onClose();
              onInquire(`Expertise ${expertise.title}`);
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-medium bg-[#111111] text-[#F7F6F2] hover:bg-[#C8B79C] hover:text-[#111111] transition-all"
          >
            <span>Échanger sur ce besoin</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
