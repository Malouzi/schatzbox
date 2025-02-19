import { useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/Logo-transparent.svg";

export function Navbar() {
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
          <li>Angebote</li>
          <li>individuelle Schatzbox</li>
          <li>Kontakt</li>
        </ul>
      </div>

    </nav>
  );
}
