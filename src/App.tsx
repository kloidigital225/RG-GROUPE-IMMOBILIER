/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import ConceptBanner from './components/ConceptBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Expertises from './components/Expertises';
import Properties from './components/Properties';
import Immersion from './components/Immersion';
import WhyUs from './components/WhyUs';
import About from './components/About';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import PropertyDetailModal from './components/PropertyDetailModal';
import ExpertiseModal from './components/ExpertiseModal';
import { PropertyItem, ExpertiseItem } from './types';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string>('Achat');
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);
  const [selectedExpertise, setSelectedExpertise] = useState<ExpertiseItem | null>(null);

  const openContact = (subject?: string) => {
    if (subject) {
      if (subject.toLowerCase().includes('location')) setContactSubject('Location');
      else if (subject.toLowerCase().includes('gestion')) setContactSubject('Gestion');
      else if (subject.toLowerCase().includes('conseil')) setContactSubject('Conseil');
      else if (subject.toLowerCase().includes('vente')) setContactSubject('Vente');
      else setContactSubject('Achat');
    }
    setIsContactOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#111111] flex flex-col font-sans selection:bg-[#C8B79C]/30 selection:text-[#111111]">
      {/* Top Concept Notification Notice */}
      <ConceptBanner />

      {/* Primary Fixed Navigation (Top Bar Contract) */}
      <Header onOpenContact={() => openContact()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <Hero
          onDiscoverProperties={() => scrollToSection('biens')}
          onExploreExpertise={() => scrollToSection('expertise')}
        />

        {/* SECTION 01 — INTRODUCTION */}
        <Introduction />

        {/* SECTION 02 — NOS EXPERTISES */}
        <Expertises onSelectExpertise={(item) => setSelectedExpertise(item)} />

        {/* SECTION 03 — LES BIENS */}
        <Properties onSelectProperty={(prop) => setSelectedProperty(prop)} />

        {/* SECTION 04 — IMMERSION VISUELLE */}
        <Immersion onOpenContact={() => openContact()} />

        {/* SECTION 05 — POURQUOI NOUS */}
        <WhyUs />

        {/* SECTION 06 — À PROPOS */}
        <About />

        {/* SECTION 07 — CTA FINAL */}
        <FinalCta onOpenContact={() => openContact()} />
      </main>

      {/* FOOTER */}
      <Footer onOpenContact={() => openContact()} />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        preselectedSubject={contactSubject}
      />

      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onInquire={(title) => openContact(title)}
      />

      <ExpertiseModal
        expertise={selectedExpertise}
        onClose={() => setSelectedExpertise(null)}
        onInquire={(title) => openContact(title)}
      />
    </div>
  );
}
