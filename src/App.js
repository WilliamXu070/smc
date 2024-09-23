import './App.css';
import logoImage from './Logo.png';
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Gallery from './Pages/Gallery.js';
import Contact from './Pages/Contact.js';

// Import other pages like Gallery and Contact

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
          setIsNavbarVisible(false);  // Hide navbar on scroll down
        } else {
          setIsNavbarVisible(true);  // Show navbar on scroll up
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
    setIsNavbarVisible(true); // Show the navbar when clicking a link
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  };

  return (
    <Router>
      <div>
        <nav className={isNavbarVisible ? 'navbar visible' : 'navbar hidden'}>
          <div className="navbar">
            <div className="logo">
              <img src={logoImage} alt="Logo" className="logo-image" />
              <Link to="/" onClick={handleNavClick}>SMC Dundas</Link>
            </div>

            <ul className="menu">
              <li><Link to="/" onClick={handleNavClick}>Home</Link></li>
              <li><Link to="/about" onClick={handleNavClick}>About</Link></li>
              <li><Link to="/gallery" onClick={handleNavClick}>Gallery</Link></li>
              <li><Link to="/contact" onClick={handleNavClick}>Contact</Link></li>
            </ul>
          </div>
        </nav>

        {/* Routes for navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add routes for other pages like Gallery and Contact */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
