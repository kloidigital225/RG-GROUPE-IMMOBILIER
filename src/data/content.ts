import { PropertyItem, ExpertiseItem } from '../types';

export const PROPERTIES: PropertyItem[] = [
  {
    id: 'villa-contemporaine',
    title: 'Villa contemporaine',
    category: 'Architecture résidentielle',
    location: 'Abidjan',
    status: 'Concept',
    image: '/images/prop_villa_contemp_1790947309438.jpg',
    description: 'Une étude architecturale axée sur la pureté des lignes, la fluidité des volumes intérieurs et extérieurs, et une intégration paysagère tropicale soignée.',
    features: [
      'Conception bioclimatique adaptée au climat ivoirien',
      'Volumes ouverts avec baies vitrées toute hauteur',
      'Bassin de réflexion et patio végétalisé',
      'Matériaux minéraux et essences de bois nobles'
    ],
    dimensions: 'Concept 5 pièces · 420 m²',
    orientation: 'Exposition traversante sud-ouest'
  },
  {
    id: 'appartement-cocody',
    title: 'Appartement contemporain',
    category: 'Résidence de standing',
    location: 'Cocody',
    status: 'Concept',
    image: '/images/prop_apt_cocody_1790947322159.jpg',
    description: 'Proposition d\'aménagement pour un appartement de grand confort situé au cœur de Cocody, alliant lumière naturelle zénithale et finitions artisanales raffinées.',
    features: [
      'Hauteur sous plafond généreuse',
      'Terrasse paysagère en belvédère',
      'Agencement ergonomique et suite parentale intime',
      'Isolation acoustique et thermique renforcée'
    ],
    dimensions: 'Concept 4 pièces · 210 m²',
    orientation: 'Vue dégagée sur la canopée arborée'
  },
  {
    id: 'residence-riviera',
    title: 'Résidence moderne',
    category: 'Ensemble résidentiel',
    location: 'Riviera',
    status: 'Concept',
    image: '/images/prop_res_riviera_1790947333708.jpg',
    description: 'Vision d\'une résidence collective moderne conjuguant intimité privée, espaces de convivialité partagés et performance énergétique durable.',
    features: [
      'Façade architecturale à brise-soleil en terre cuite',
      'Circulations douces et jardins intérieurs ombragés',
      'Sécurité intégrée discrète et accès privatif',
      'Confort moderne et gestion domotique'
    ],
    dimensions: 'Concept modulaire · Du T3 au Penthouse',
    orientation: 'Quartier résidentiel calme à la Riviera'
  }
];

export const EXPERTISES: ExpertiseItem[] = [
  {
    number: '01',
    title: 'TRANSACTION',
    tagline: 'Accompagner vos projets d\'achat et de vente avec une approche structurée.',
    description: 'De l\'estimation rigoureuse d\'un bien jusqu\'à la signature définitive, nous structurons chaque étape pour garantir la sérénité et la clarté des échanges entre acquéreurs et cédants.',
    details: [
      'Analyse comparative et valorisation objective',
      'Sélection rigoureuse des acquéreurs potentiels',
      'Coordination documentaire et suivi notarial',
      'Transparence intégrale à chaque étape'
    ]
  },
  {
    number: '02',
    title: 'LOCATION',
    tagline: 'Faciliter la recherche et la mise en relation autour de biens adaptés aux besoins de chacun.',
    description: 'Trouver le lieu de vie idéal ou louer votre bien en toute quiétude. Nous mettons en œuvre une méthodologie fluide qui valorise la qualité de la relation humaine.',
    details: [
      'Ciblage précis selon votre cahier des charges',
      'Étude de solvabilité et constitution du dossier',
      'Visites accompagnées et compte-rendu personnalisé',
      'Rédaction d\'états des lieux rigoureux'
    ]
  },
  {
    number: '03',
    title: 'GESTION',
    tagline: 'Une approche professionnelle pour accompagner la gestion et la valorisation des biens immobiliers.',
    description: 'Préserver la valeur patrimoniale de vos actifs immobiliers à travers une gestion administrative, technique et locative proactive et rigoureuse.',
    details: [
      'Suivi régulier des encaissements et charges',
      'Entretien préventif et valorisation du bâti',
      'Relation locataire attentive et réactive',
      'Rapports d\'activité périodiques clairs'
    ]
  },
  {
    number: '04',
    title: 'CONSEIL',
    tagline: 'Vous aider à mieux comprendre et structurer vos projets immobiliers.',
    description: 'Une prise de recul stratégique pour vos arbitrages patrimoniaux, investissements locatifs ou projets de développement résidentiel en Côte d\'Ivoire.',
    details: [
      'Études d\'opportunités et de rentabilité',
      'Orientation sur les dynamiques du marché abidjanais',
      'Conseil en restructuration d\'espaces',
      'Écoute impartiale de vos objectifs à long terme'
    ]
  }
];

export const WHY_US_ITEMS = [
  {
    number: '01',
    title: 'ÉCOUTER',
    text: 'Comprendre vos besoins avant de proposer une solution.'
  },
  {
    number: '02',
    title: 'ACCOMPAGNER',
    text: 'Vous guider à chaque étape de votre projet immobilier.'
  },
  {
    number: '03',
    title: 'CONSEILLER',
    text: 'Apporter une vision claire pour faciliter vos décisions.'
  }
];
