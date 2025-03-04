import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Hamburgermenu.css";

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Menu
      right
      isOpen={menuOpen}
      onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
      width={"250px"}
      className="bm-menu"  // Die Hauptklasse für das Menü
    >
      <Link className="bm-item" to="/" onClick={closeMenu}>
        Home
      </Link>
      <Link className="bm-item" to="/angebote" onClick={closeMenu}>
        Angebote
      </Link>
      <Link className="bm-item" to="/kontakt" onClick={closeMenu}>
        Kontakt
      </Link>
    </Menu>
  );
}

