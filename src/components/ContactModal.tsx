import { useState } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSubject?: string;
}

export default function ContactModal({ isOpen, onClose, preselectedSubject }: ContactModalProps) {
  const [projectType, setProjectType] = useState(preselectedSubject || 'Achat');
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setContactInfo('');
    setMessage('');
    onClose();
  };

  const projectTypes = ['Achat', 'Vente', 'Location', 'Gestion', 'Conseil'];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/80 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="relative w-full max-w-xl bg-[#F7F6F2] text-[#111111] p-6 sm:p-10 shadow-2xl border border-[#111111]/10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#8A8882] hover:text-[#111111] transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8B79C] font-semibold block mb-2">
                R&amp;G GROUPE IMMOBILIER
              </span>
              <h3 id="contact-modal-title" className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
                Parlons de votre projet
              </h3>
              <p className="text-xs text-[#8A8882] mt-1">
                Riviera Palmeraie — Abidjan, Côte d'Ivoire
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Type Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#111111] font-medium mb-3">
                  Nature de votre projet
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`py-2 px-3 text-xs tracking-wider uppercase font-medium transition-all ${
                        projectType === type
                          ? 'bg-[#111111] text-[#F7F6F2]'
                          : 'bg-white border border-[#111111]/15 text-[#111111]/70 hover:border-[#111111]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#111111] font-medium mb-2">
                  Votre nom complet
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex. Koffi Amani"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-[#111111]/15 text-sm text-[#111111] placeholder:text-[#8A8882]/60 focus:outline-none focus:border-[#C8B79C]"
                />
              </div>

              {/* Contact Detail Input */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#111111] font-medium mb-2">
                  Coordonnées souhaitées (Téléphone ou Email)
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex. +225 07 00 00 00 00 ou contact@exemple.ci"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-[#111111]/15 text-sm text-[#111111] placeholder:text-[#8A8882]/60 focus:outline-none focus:border-[#C8B79C]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#111111] font-medium mb-2">
                  Détails du projet (facultatif)
                </label>
                <textarea
                  rows={3}
                  placeholder="Localisation recherchée, calendrier, critères essentiels..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-[#111111]/15 text-sm text-[#111111] placeholder:text-[#8A8882]/60 focus:outline-none focus:border-[#C8B79C] resize-none"
                />
              </div>

              {/* Demo notice disclaimer */}
              <div className="p-3 bg-[#EFECE3] border-l-2 border-[#C8B79C] text-[11px] text-[#8A8882] leading-relaxed">
                <span className="font-semibold text-[#111111]">Note conceptuelle :</span> Ceci est un formulaire de démonstration interactif réalisé par KLOI DIGITAL. Aucun message réel n'est envoyé à des serveurs tiers.
              </div>

              {/* Action Button */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 text-xs uppercase tracking-widest text-[#8A8882] hover:text-[#111111]"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3 text-xs uppercase tracking-widest font-medium bg-[#111111] text-[#F7F6F2] hover:bg-[#252525] active:scale-[0.99] transition-all"
                >
                  <span>Transmettre ma demande</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center space-y-5">
            <div className="w-14 h-14 bg-[#C8B79C]/20 text-[#111111] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 text-[#111111]" />
            </div>

            <h3 className="font-serif text-2xl text-[#111111]">
              Simulation de prise de contact réussie
            </h3>

            <p className="text-sm text-[#111111]/75 max-w-md mx-auto leading-relaxed">
              Merci, <span className="font-medium">{name || 'Client'}</span>. Votre simulation pour un projet de <span className="font-medium text-[#111111]">{projectType}</span> a été enregistrée dans ce prototype de démonstration.
            </p>

            <div className="p-4 bg-[#EFECE3] text-xs text-[#8A8882] max-w-md mx-auto">
              CONCEPT DIGITAL — Préparé par KLOI DIGITAL pour illustrer le parcours utilisateur de R&amp;G GROUPE IMMOBILIER.
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs uppercase tracking-widest font-medium bg-[#111111] text-[#F7F6F2] hover:bg-[#252525]"
              >
                Fermer la fenêtre
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
