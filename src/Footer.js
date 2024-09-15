import React from 'react';
import './Footer.css';
import logoImage from './Logo.png';


const Footer = () => {
  return (
    <div class="container">
        <footer>
            <div className="logo">
                <img src={logoImage} alt="Logo" className="logo-image" />
                <a> SMC Dundas</a>
            </div>
        </footer>
    </div>
  );
};

export default Footer;
