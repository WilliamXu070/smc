import React from 'react';
import './Footer.css';
import logoImage from './Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src={logoImage} alt="Logo" className="logo-image" />
          <h2>SMC Dundas</h2>
          <p>Innovating for a better tomorrow</p>
        </div>
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <p>Email: info@smcdundas.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Tech Lane, Innovation City, IN 54321</p>
        </div>
        <div className="footer-section social-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SMC Dundas. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;