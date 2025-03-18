import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo-transparent.png";
import { BiShoppingBag } from "react-icons/bi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useContext(CartContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effekt, um das Menü beim Scrollen zu schließen
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles["navbar-left"]} ${isOpen ? styles["open"] : ""}`}>
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
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className={styles.navbarMiddle}>
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className={styles.navbarRight}>
        <Link to={"/cart"} className={styles.cartIcon}>
          <BiShoppingBag />
          <span className={styles.cartCount}>{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}