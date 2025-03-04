import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-transparent.png";
import { BiShoppingBag } from 'react-icons/bi';
import HamburgerMenu from "../Hamburgermenu/Hamburgermenu"; // Stellen sicher, dass dies korrekt importiert ist

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
    <nav className="bg-white">
      <div className="navbar-left">
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Burger Menu für kleine Bildschirme */}
        <div className="block md:hidden">
          <HamburgerMenu />
        </div>
        <ul className="list-none">
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

      <div className="navbar-middle">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="navbar-right">
        <Link to="/cart">
          <button className="cart-icon" onClick={toggleCart}>
            <BiShoppingBag />
          </button>
          {showCart && <Cart />}
          <span className="cart-count">0</span>
        </Link>
      </div>
    </nav>
  );
}


{
  /* 
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../../assets/logo-transparent.png";
// import Cart from "../Cart/Cart.jsx";
// import {BiShoppingBag} from 'react-icons/bi';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const [showCart, setShowCart] = useState(false);

//   const toggleCart = () => {
//     setShowCart(!showCart);
//   };

//   return (
//     <nav className="navbar">
//       <div className={`navbar-left ${isOpen ? "open" : ""}`}>
//         <div className="hamburger" onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/angebote">Angebote</Link>
//           </li>
//           <li>
//             <Link to="/kontakt">Kontakt</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-middle">
//         <Link to="/" className="logo">
//           <img src={logo} alt="Logo" />
//         </Link>
//       </div>

//       <div className="navbar-right">
//         <Link to={"/cart"}>
//           <button className="cart-icon" onClick={toggleCart}>
//             <BiShoppingBag />
//           </button>
//           {showCart && <Cart />}
//           <span className="cart-count">0</span>
//         </Link>
//       </div>
//     </nav>
//   );
// } */
}
