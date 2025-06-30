import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './TestimonialCarouselSection.css';

const testimonials = [
  {
    name: 'Didier Manzari, CEO, Konecta Maroc',
    quote: '"Depuis que nous avons adopté Smart Convers, nous avons enfin pu bénéficier d\'un pilotage centralisé et uniforme de l\'ensemble de nos fournisseurs de leads. Cela a permis une réduction significative des coûts liés aux flux non conformes et une augmentation notable de la productivité de nos campagnes."'
  },
  {
    name: 'Sophie Martin, Directrice Marketing, CallPro',
    quote: '"Smart Convers a transformé notre gestion des leads. Nous avons gagné en efficacité et en transparence, tout en respectant les exigences RGPD."'
  },
  {
    name: 'Jean Dupont, Responsable Acquisition, LeadGenX',
    quote: '"Grâce à la centralisation et à la déduplication avancée, nous avons réduit nos coûts et augmenté notre taux de conversion de façon significative."'
  }
];

const TestimonialCarouselSection = () => {
  const [index, setIndex] = useState(0);
  const goTo = (i) => setIndex((i + testimonials.length) % testimonials.length);

  return (
    <section className="testimonial-carousel-section">
      <div className="testimonial-carousel-inner">
        <div className="testimonial-carousel-name">{testimonials[index].name}</div>
        <div className="testimonial-carousel-divider" />
        <div className="testimonial-carousel-quote">{testimonials[index].quote}</div>
        <button className="testimonial-carousel-arrow left" onClick={() => goTo(index - 1)}><FiChevronLeft /></button>
        <button className="testimonial-carousel-arrow right" onClick={() => goTo(index + 1)}><FiChevronRight /></button>
        <div className="testimonial-carousel-dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={i === index ? 'active' : ''}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarouselSection; 