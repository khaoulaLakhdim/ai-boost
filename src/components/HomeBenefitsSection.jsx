import React from 'react';
import { FaChartLine, FaShieldAlt, FaUserFriends, FaRobot } from 'react-icons/fa';
import './HomeBenefitsSection.css';

const benefits = [
  {
    icon: <FaChartLine />,
    title: '+20% Conversion',
    desc: 'Boostez vos taux de conversion grâce à l’IA.'
  },
  {
    icon: <FaShieldAlt />,
    title: '100% RGPD',
    desc: 'Conformité totale et sécurité des données.'
  },
  {
    icon: <FaUserFriends />,
    title: 'Support dédié',
    desc: 'Accompagnement personnalisé pour chaque client.'
  },
  {
    icon: <FaRobot />,
    title: 'Automatisation IA',
    desc: 'Automatisez vos processus pour gagner du temps.'
  }
];

const HomeBenefitsSection = () => (
  <section className="home-benefits-section">
    <div className="home-benefits-list">
      {benefits.map((b, i) => (
        <div className="home-benefit-pill" key={i}>
          <span className="home-benefit-icon">{b.icon}</span>
          <div className="home-benefit-title">{b.title}</div>
          <div className="home-benefit-desc">{b.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default HomeBenefitsSection; 