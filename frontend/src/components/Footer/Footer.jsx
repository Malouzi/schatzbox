import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinksContainer}>
            <Link to="/Imprint">Impressum</Link>
            <Link to="/PrivacyPolicy">Datenschutz</Link>
            <Link to="/Contact">Kontakt</Link>
          </div>
          <div className={styles.copyright}>
            Schatzbox&copy;{new Date().getFullYear()} <br />Alle Rechte
            vorbehalten
          </div>
        </div>
      </footer>
    </>
  );
}
