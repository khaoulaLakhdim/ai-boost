import React from 'react';
import './SmartConversWhySection.css';

const SmartConversWhySection = () => {
  return (
    <section className="smartconvers-why-section">
      <div className="smartconvers-why-content">
        <h2 className="smartconvers-why-title">POURQUOI CHOISIR<br />SMART CONVERS</h2>
        <ul className="smartconvers-why-list">
          <li><b>Une gestion centralisée :</b> Tous vos fournisseurs regroupés sur une seule plateforme.</li>
          <li><b>Une qualité optimisée :</b> Déduplication, validation en temps réel et conformité RGPD.</li>
          <li><b>Un suivi transparent :</b> Dashboard détaillé avec reporting et analyse en temps réel. Une conformité totale : Respect des réglementations (RGPD, ARCEP).</li>
          <li><b>Une flexibilité avancée :</b> Gestion des cappings, filtres personnalisés, relance SMS.</li>
        </ul>
      </div>
      <div className="smartconvers-why-img-wrapper">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="AI Face" />
      </div>
    </section>
  );
};

export default SmartConversWhySection; 