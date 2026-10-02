interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#0A0A0A] text-[#F7F6F2] pt-20 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Name */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F7F6F2] block">
              « VOTRE LOGO »
            </span>
            <p className="font-serif text-2xl text-[#F7F6F2] font-normal tracking-wide">
              R&amp;G GROUPE IMMOBILIER
            </p>
            <p className="text-xs text-[#8A8882] tracking-wider uppercase">
              Intermédiation · Courtage · Gestion · Conseil
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#C8B79C] font-semibold block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-[#E5E3DD]">
              <li>
                <button
                  onClick={() => scrollTo('#hero')}
                  className="hover:text-white hover:underline underline-offset-4 decoration-[#C8B79C] transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#biens')}
                  className="hover:text-white hover:underline underline-offset-4 decoration-[#C8B79C] transition-colors"
                >
                  Nos biens
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#expertise')}
                  className="hover:text-white hover:underline underline-offset-4 decoration-[#C8B79C] transition-colors"
                >
                  Notre expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#a-propos')}
                  className="hover:text-white hover:underline underline-offset-4 decoration-[#C8B79C] transition-colors"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white hover:underline underline-offset-4 decoration-[#C8B79C] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Location Area (No invented email or phone as explicitly instructed) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#C8B79C] font-semibold block mb-4">
              Localisation
            </span>
            <p className="text-sm text-[#F7F6F2] font-light">
              Riviera Palmeraie — Abidjan, Côte d'Ivoire
            </p>
            <p className="text-xs text-[#8A8882] pt-2">
              Présence locale et accompagnement sur mesure pour vos projets résidentiels et d'investissement.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex text-xs uppercase tracking-widest text-[#C8B79C] hover:text-white transition-colors underline underline-offset-4"
              >
                Formuler une demande de contact →
              </button>
            </div>
          </div>
        </div>

        {/* Required Notices as explicitly instructed */}
        <div className="pt-10 space-y-3 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0 text-xs text-[#8A8882]">
          <p className="font-medium text-[#C8B79C] tracking-wide">
            CONCEPT DIGITAL — Préparé par KLOI DIGITAL
          </p>
          <p className="text-[11px] text-[#777777] max-w-xl">
            Cette interface est une proposition conceptuelle et ne constitue pas le site officiel de R&amp;G GROUPE IMMOBILIER.
          </p>
        </div>
      </div>
    </footer>
  );
}
