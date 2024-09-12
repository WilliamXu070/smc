import './App.css';  // Assuming your CSS is saved as App.css

function App() {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo"><a href="#">CodingLab</a></div>
          <ul className="menu">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Category">Category</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#Feedback">Feedback</a></li>
          </ul>
        </div>
      </nav>
      <section id="Home">Home Section</section>
      <section id="About">About Section</section>
      <section id="Category">Category Section</section>
      <section id="Contact">Contact Section</section>
      <section id="Feedback">Feedback Section</section>
      <div className="button">
        <a href="#Home"><i className="fas fa-arrow-up"></i></a>
      </div>
    </div>
  );
}

export default App;
