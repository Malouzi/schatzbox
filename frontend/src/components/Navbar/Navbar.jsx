import "./Navbar.css";
import logo from "../../assets/logo.png";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-right">
        <ul>
          <li><a href="#">Logo</a></li>
          <li><a href="#">Schatzsuche</a></li>
          <li><a href="#">Spielbereich</a></li>
          <li><a href="#">Kontakt</a></li>
          <li><a href="#">Hallo</a></li>
          <li><a href="#">test</a></li>

        </ul>
      </div>
    </nav>
  );
}