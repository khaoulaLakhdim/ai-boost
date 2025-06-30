import React from 'react';
import './SmartConversFeaturesSection.css';

const features = [
  {
    number: "01.",
    title: "CENTRALISATION DES LEADS",
    desc: "Une seule interface pour piloter tous vos fournisseurs."
  },
  {
    number: "02.",
    title: "DÉDUPLICATION AVANCÉE & QUALITÉ DES LEADS",
    desc: "Élimination automatique des doublons entre plusieurs sources.\nVérification HLR intégrée pour détecter les faux numéros."
  },
  {
    number: "03.",
    title: "SUIVI EN TEMPS RÉEL & TABLEAU DE BORD DYNAMIQUE",
    desc: "Accès instantané aux performances des campagnes. Classement des brokers selon leurs résultats."
  },
  {
    number: "04.",
    title: "CONFORMITÉ RGPD & SÉCURITÉ DES DONNÉES",
    desc: "Archivage automatique des consentements. Surveillance continue des pratiques des fournisseurs."
  },
  {
    number: "05.",
    title: "GESTION DYNAMIQUE DES FLUX",
    desc: "Ajustement des volumes envoyés selon la capacité des centres d'appels. Blocage automatique des leads convertis ou blacklistés."
  },
  {
    number: "06.",
    title: "RELANS SMS INTELLIGENTE",
    desc: "Relance automatisée des prospects avec choix de créneau pour maximiser les conversions."
  }
];

const SmartConversFeaturesSection = () => {
  return (
    <section className="smartconvers-features-section">
      <h2 className="smartconvers-features-title">FONCTIONNALITÉS CLÉS</h2>
      <div className="smartconvers-features-grid">
        {features.map((f, i) => (
          <div className="smartconvers-feature-card" key={i}>
            <div className="smartconvers-feature-number">{f.number}</div>
            <div className="smartconvers-feature-title">{f.title}</div>
            <div className="smartconvers-feature-desc">{f.desc.split('\n').map((line, idx) => <div key={idx}>{line}</div>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmartConversFeaturesSection; 