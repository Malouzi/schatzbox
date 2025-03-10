import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo-transparent.png";
import Cart from "../Cart/Cart.jsx";
import { BiShoppingBag } from "react-icons/bi";

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
    <nav className={styles.navbar}>
      <div
        className={`${styles["navbar-left"]} ${isOpen ? styles["open"] : ""}`}
      >
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={styles.dropdown}>
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
      <div className={styles.navbarMiddle}>
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className={styles.navbarRight}>
        <Link to={"/cart"}>
          <button className={styles.cartIcon} onClick={toggleCart}>
            <BiShoppingBag />
          </button>
          {showCart && <Cart />}
          <span className={styles.cartCount}>0</span>
        </Link>
      </div>
    </nav>
  );
}
