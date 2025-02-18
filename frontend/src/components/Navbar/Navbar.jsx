import "./Navbar.css";
import logo from "../../assets/logo.png";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-right">
          <li><a href="#">Angebote</a></li>
          <li><a href="#">individuelle Schatzbox</a></li>
          <li><a href="#">Kontakt</a></li>
      </div>
    </nav>
  );
}