import "./Navbar.css";
import logo from "../../assets/Logo.png";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-right">
          <li>Angebote</li>
          <li>individuelle Schatzbox</li>
          <li>Kontakt</li>
      </div>
    </nav>
  );
}