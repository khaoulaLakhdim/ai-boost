import React from 'react';
import './MainServicesSection.css';

const services = [
  {
    icon: '🤖',
    iconBg: '#e3e7fa',
    title: "SATISF'AI",
    features: [
      "Analyse d'appels",
      'Contrôle Qualité sur mesure',
      'Rapports stratégiques à tous les niveaux',
      "... et bien d'autres fonctionnalités"
    ]
  },
  {
    icon: '🛠️',
    iconBg: '#e3f7f2',
    title: 'ACCOMPAGNEMENT DE PROJETS IA',
    features: [
      'Développement sur mesure',
      "Intégration d'outils",
      'Automatisation des processus'
    ]
  },
  {
    icon: '♟️',
    iconBg: '#ffe7d1',
    title: 'CONFÉRENCES & FORMATIONS',
    features: [
      'Catalogues des formations',
      '(Initiation avancé ou expert)',
      'Intervention en entreprise',
      <span key="dates"><b>Nos prochaines dates</b> <span role="img" aria-label="calendar">📅</span></span>
    ]
  },
  {
    icon: '🤖♟️',
    iconBg: '#ffe7d1',
    title: 'DPO & PROTECTION DES DONNÉES',
    features: [
      'Audit de conformité RGPD',
      'Mise en conformité des outils IA'
    ]
  }
];

const MainServicesSection = () => {
  return (
    <section className="main-services-section">
      <h2 className="main-services-title">SERVICES</h2>
      <div className="main-services-cards">
        {services.map((service, idx) => (
          <div className="main-service-card" key={idx}>
            <div className="main-service-icon" style={{ background: service.iconBg }}>{service.icon}</div>
            <h3 className="main-service-title">{service.title}</h3>
            <ul className="main-service-features">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainServicesSection; 