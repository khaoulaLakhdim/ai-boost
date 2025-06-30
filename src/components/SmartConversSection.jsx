import React from 'react';
import './SmartConversSection.css';

const SmartConversSection = () => {
  return (
    <section className="smartconvers-section">
      <div className="smartconvers-img-wrapper">
        <img src="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI Robot Hand Touching Digital Screen" />
      </div>
      <div className="smartconvers-content-box">
        <h2 className="smartconvers-title">SMART CONVERS</h2>
        <p className="smartconvers-desc">
          Smart Convers est une plateforme de centralisation et de gestion des leads qui optimise la performance des campagnes en garantissant la qualité des données et la conformité réglementaire.<br /><br />
          Fini les faux numéros, les leads hors cible et le manque de transparence : <b>Smart Convers vous offre une solution clé en main pour améliorer vos taux de conversion et rentabiliser vos campagnes.</b><br /><br />
          Boosté par Databowl, leader aux Etats Unis et au Royaume-Uni, Smart Convers est adapté aux besoins du marché français.
        </p>
      </div>
    </section>
  );
};

export default SmartConversSection; 