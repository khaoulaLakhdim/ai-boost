import React from 'react';
import { MdAutoAwesome } from 'react-icons/md';
import './ContactButton.css';

const ContactButton = ({ onContactClick }) => {
  return (
    <button className="contact-btn" onClick={onContactClick}>
      <span className="contact-btn__icon"><MdAutoAwesome /></span>
      Nous contacter
    </button>
  );
};

export default ContactButton; 