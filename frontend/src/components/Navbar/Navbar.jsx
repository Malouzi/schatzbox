import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../../assets/logo-transparent.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/angebote">Angebote</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
}
