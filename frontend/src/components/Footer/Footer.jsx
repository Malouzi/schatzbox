import { Link } from 'react-router-dom';
import "./Footer.css";

export default function Footer() {
  return (
   <>
   <footer className="footer">
    <div className="footer-content">
        <div className="copyright">
            &copy; {new Date().getFullYear()} Schatzbox. Alle Rechte vorbehalten.
        </div>
        <div className="footer-links-container">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/kontakt">Kontakt</Link>
        </div>
    </div>
   </footer>
   </>
  );
}
