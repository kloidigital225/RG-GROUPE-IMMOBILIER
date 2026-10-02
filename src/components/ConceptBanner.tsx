import { useState } from 'react';
import { Info, X } from 'lucide-react';

export default function ConceptBanner() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="bg-[#111111] text-[#F7F6F2] border-b border-[#222222] text-xs py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <Info className="w-3.5 h-3.5 text-[#C8B79C] shrink-0" aria-hidden="true" />
          <p className="truncate text-[11px] sm:text-xs text-[#E5E3DD]">
            <span className="font-medium text-[#C8B79C] uppercase tracking-wider">Concept Digital</span>
            <span className="mx-2 text-[#555555]">·</span>
            Proposition de modernisation par <span className="font-semibold text-white">KLOI DIGITAL</span> pour R&amp;G GROUPE IMMOBILIER
            <span className="hidden md:inline text-[#8A8882]"> (Démonstration non officielle)</span>
          </p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-[#8A8882] hover:text-white transition-colors p-1 -mr-1"
          aria-label="Fermer le bandeau"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
