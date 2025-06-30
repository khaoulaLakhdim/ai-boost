import React from 'react';
import './AIBoostSection.css';
import DemoSection from './DemoSection';
import SmartConversUseCasesSection from './SmartConversUseCasesSection';
import MainServicesSection from './MainServicesSection';
import ContactSection from './ContactSection';

const DPOSpecialIASection = () => (
  <section className="dpo-special-ia-section">
    <h3 className="dpo-special-ia-title">Pourquoi un DPO spécialisé en IA est-il indispensable ?</h3>
    <ul className="dpo-special-ia-list">
      <li>L'IA traite souvent des données sensibles.</li>
      <li>Les règles évoluent vite (RGPD, CNIL, IA Act…).</li>
      <li>Les risques d'abus de données doivent être anticipés.</li>
      <li>Les équipes doivent être formées et sensibilisées au RGPD.</li>
    </ul>
  </section>
);

const AIBoostSection = () => {
  return (
    <>
      <section className="aiboost-section-redesign">
        <div className="aiboost-img-wrapper">
          <img src="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI Robot Hand Touching Digital Screen" />
        </div>
        <div className="aiboost-content-box">
          <h2 className="aiboost-title">SOLUTIONS AIBOOST</h2>
          <p className="aiboost-desc">
            Aiboost est une solution innovante spécialisée dans l'optimisation des performances et aide la productivité grâce à l'intelligence artificielle. Conçu pour les centres d'appels et les entreprises cherchant à améliorer leur efficacité, Aiboost intègre des outils avancés tels que Satisf'ai, un copilote intelligent boosté par l'IA.
          </p>
        </div>
      </section>
      <DemoSection />
      <SmartConversUseCasesSection />
      <DPOSpecialIASection />
      <MainServicesSection />
      <ContactSection />
    </>
  );
};

export default AIBoostSection; 