import React from 'react';
import './ServicesSection.css';

const services = [
  {
    title: 'Automatisation IA',
    description: 'Optimisez vos processus métier grâce à l’intelligence artificielle et l’automatisation avancée.'
  },
  {
    title: 'Gestion de Leads',
    description: 'Générez, suivez et convertissez plus de prospects avec nos solutions sur mesure.'
  },
  {
    title: 'Analyse de Données',
    description: 'Prenez de meilleures décisions grâce à l’analyse intelligente de vos données.'
  }
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-section__title">NOS SERVICES</h2>
      <div className="services-section__cards">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection; 