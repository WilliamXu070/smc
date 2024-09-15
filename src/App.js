import './App.css';
import logoImage from './Logo.png';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollTop = useRef(0);
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrollingRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollThreshold = 100;

        if (scrollTop > lastScrollTop.current && scrollTop > scrollThreshold) {
          setIsNavbarVisible(false);
        } else {
          setIsNavbarVisible(true);
        }

        lastScrollTop.current = scrollTop;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleNavClick = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    
    setIsNavbarVisible(true);
    isScrollingRef.current = true;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      timeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000); // Adjust this delay as needed
    }, 0);
  };

  return (
    <div>
      <nav className={isNavbarVisible ? 'navbar visible' : 'navbar hidden'}>
        <div className="navbar">
          <div className="logo">
            <img src={logoImage} alt="Logo" className="logo-image" />
            <a href="#Home" onClick={handleNavClick}>SMC Dundas</a>
          </div>

          <ul className="menu">
            <li><a href="#Home" onClick={handleNavClick}>Home</a></li>
            <li><a href="#About" onClick={handleNavClick}>About Us</a></li>
            <li><a href="#Gallery" onClick={handleNavClick}>Gallery</a></li>
            <li><a href="#Donate" onClick={handleNavClick}>Donate</a></li>
            <li><a href="#Contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </div>
      </nav>
      <section id="Home">Home Section</section>
      <section id="About">About Section</section>
      <section id="Gallery">Gallery Section</section>
      <section id="Donate">Donate Section</section>
      <section id="Contact">Contact Section</section>
    </div>
  );
}

export default App;