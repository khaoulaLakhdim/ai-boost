import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__overlay">
        <h1 className="hero-section__title">DÉCOUVREZ L'INNOVATION</h1>
        <p className="hero-section__subtitle">
          Bienvenue chez Connexe Venture, votre partenaire pour des solutions avancées en intelligence artificielle et en gestion de leads.
        </p>
      </div>
    </section>
  );
};

export default HeroSection; 