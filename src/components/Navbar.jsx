import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Connexe Venture</div>
      <ul className="navbar__menu">
        <li onClick={() => onMenuClick('home')}>Accueil</li>
        <li onClick={() => onMenuClick('aiboost')}>Ai Boost</li>
        <li onClick={() => onMenuClick('smartconvers')}>Smart Convers</li>
        <li>More</li>
      </ul>
      <div className="navbar__search">
        <input type="text" placeholder="Search" />
        <span className="navbar__search-icon"><FiSearch /></span>
      </div>
    </nav>
  );
};

export default Navbar; 