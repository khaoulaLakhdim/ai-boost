import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-left">
        <div className="contact-message">
          <span>Laissez un<br />message.<br />Nous revenons<br />vers vous.</span>
        </div>
        <div className="contact-images">
          <div className="contact-main-img">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Blue lines" />
          </div>
          <div className="contact-overlap-img">
            <img src="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=400&auto=format&fit=crop" alt="Robot hand" />
          </div>
        </div>
      </div>
      <form className="contact-form">
        <label>
          Prénom
          <input type="text" name="prenom" autoComplete="given-name" />
        </label>
        <label>
          Nom
          <input type="text" name="nom" autoComplete="family-name" />
        </label>
        <label>
          E-mail *
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Objet
          <input type="text" name="objet" />
        </label>
        <label>
          <textarea name="message" placeholder="Rédigez votre message ici..." rows={4}></textarea>
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default ContactSection; 