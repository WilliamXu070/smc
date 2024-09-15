import './App.css';  // Assuming your CSS is saved as App.css
import logoImage from './Logo.png';
import React, { useState, useEffect } from 'react';

function App() {

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollThreshold = 100; // Adjust this value to change how much scroll is needed before hiding/showing

      if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Scrolling down & passed threshold
        setIsNavbarVisible(false);
      } else {
        // Scrolling up or haven't scrolled enough
        setIsNavbarVisible(true);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]); // Dependency array


  return (
    <div>
      <nav className={isNavbarVisible ? 'navbar visible' : 'navbar hidden'}>
        <div className="navbar">
          <div className="logo">
            <img src={logoImage} alt="Logo" className="logo-image" />
            <a href="#">SMC Dundas</a>
          </div>

          <ul className="menu">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About Us</a></li>
            <li><a href="#Gallery">Gallery</a></li>
            <li><a href="#Donate">Donate</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <section id="Home">Home Section</section>
      <section id="About">About Section</section>
      <section id="Gallery">Gallery Section</section>
      <section id="Donate">Donate Section</section>
      <section id="Contact">Contact Section</section>
      <div className="button">
        <a href="#Home"><i className="fas fa-arrow-up"></i></a>
      </div>
    </div>
  );
}

export default App;
