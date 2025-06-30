import React from 'react';
import './SmartConversUseCasesSection.css';

const SmartConversUseCasesSection = () => {
  return (
    <section className="smartconvers-usecases-section">
      <div className="smartconvers-usecases-img-wrapper">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Laptop and notebook" />
      </div>
      <div className="smartconvers-usecases-content">
        <h2 className="smartconvers-usecases-title">USES CASES</h2>
        <div className="smartconvers-usecases-subtitle">
          <span></span>
          Comment Konecta a optimisé sa gestion de leads avec Smart Convers ?
        </div>
        <div className="smartconvers-usecases-block">
          <b>Problème :</b> Konecta Maroc faisait face à des coûts élevés liés aux leads non conformes et à un manque de visibilité<br />sur l'origine des données.
        </div>
        <div className="smartconvers-usecases-block">
          <b>Solution apportée par Smart Convers</b>
          <ul>
            <li>Centralisation des fournisseurs sur une seule plateforme.</li>
            <li>Dédoublcation avancée éliminant 20% des leads inutiles.</li>
            <li>Automatisation des règles de gestion des flux et des cappings.</li>
            <li>Analyse en temps réel permettant d'ajuster les volumes dynamiquement.</li>
          </ul>
        </div>
        <div className="smartconvers-usecases-block">
          <b>Résultat:</b>
          <ul>
            <li>Réduction des coûts en éliminant les leads non conformes.</li>
            <li>Augmentation de 10% du taux de conversion, générant un CA additionnel.</li>
            <li>Amélioration de la transparence et conformité totale avec le RGPD.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SmartConversUseCasesSection; 