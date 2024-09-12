import './App.css';  // Assuming your CSS is saved as App.css
import logoImage from './Logo.png';

function App() {
  return (
    <div>
      <nav>
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
