import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './SmartConversContactSection.css';

const SmartConversContactSection = () => {
  return (
    <section className="smartconvers-contact-section" id="contact-form">
      <h2 className="smartconvers-contact-title">CONTACT</h2>
      <div className="smartconvers-contact-subtitle">
        Notre travail vous plaît ? Contactez-nous pour en savoir plus.
      </div>
      <div className="smartconvers-contact-socials">
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
      </div>
      <form className="smartconvers-contact-form">
        <div className="smartconvers-contact-form-left">
          <label>
            Prénom
            <input type="text" name="prenom" />
          </label>
          <label>
            Nom de famille
            <input type="text" name="nom" />
          </label>
          <label>
            E-mail *
            <input type="email" name="email" required />
          </label>
        </div>
        <div className="smartconvers-contact-form-right">
          <label>
            Message
            <textarea name="message" rows={6} />
          </label>
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </section>
  );
};

export default SmartConversContactSection; 