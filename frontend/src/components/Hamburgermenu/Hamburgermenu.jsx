import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Hamburgermenu.css";


export const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="relative">
      {/* Burger Menu */}
      <Menu
        right
        isOpen={menuOpen}
        onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
        customBurgerIcon={<div className="text-white text-3xl">&#9776;</div>}
        customCrossIcon={<div className="text-white text-xl">✖</div>}
        width={"200px"}
        className="bg-gray-800"
      >
        <Link className="menu-item text-white block py-2 px-4 hover:bg-gray-700" to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link className="menu-item text-white block py-2 px-4 hover:bg-gray-700" to="/angebote" onClick={closeMenu}>
          Angebote
        </Link>
        <Link className="menu-item text-white block py-2 px-4 hover:bg-gray-700" to="/kontakt" onClick={closeMenu}>
          Kontakt
        </Link>
      </Menu>
    </div>
  );
};









