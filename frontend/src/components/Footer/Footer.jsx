import { Link } from 'react-router-dom';
import "./Footer.css";

export default function Footer() {
  return (
   <>
   <footer className="footer">
    <div className="logo-container">
        <h3>Schatzbox</h3>
    </div>
    <div className="footer-links-container">
            <li><Link to="/impressum">Impressum</Link></li>
            <li><Link to="/datenschutz">Datenschutz</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
    </div>
   </footer>
   </>
  );
}
