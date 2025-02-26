import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo-transparent.png";
import Cart from "../Cart/Cart.jsx";
import { GiShoppingBag } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <nav className="navbar">
      <div className="navbar-right">
        <Link to={"/cart"}>
          <button className="cart-icon" onClick={toggleCart}>
            <GiShoppingBag />
          </button>
          {showCart && <Cart />}
        </Link>
      </div>
      <div className="navbar-middle">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className={`navbar-left ${isOpen ? "open" : ""}`}>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/angebote">Angebote</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
