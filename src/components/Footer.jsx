import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__main">
      <div className="footer__socials">
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
      </div>
    </div>
    <div className="footer__copyright">
      &copy; {new Date().getFullYear()} Connexe Venture. Tous droits réservés.
    </div>
  </footer>
);

export default Footer; 