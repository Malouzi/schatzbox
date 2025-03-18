import React from "react";
import styles from "./Imprint.module.css";

export default function Imprint() {
  return (
    <div className={styles.container}>
      <h1>Impressum</h1>

      <h2 id="m46">Diensteanbieter</h2>
      <p>Schatzbox GbR</p>
      <p>Marie Zirzlaff, Nell Konersmann, Simia Karegar</p>
      <p>Musterstraße 10</p>
      <p>12345 Musterstadt</p>

      <h2 id="m56">Kontaktmöglichkeiten</h2>
      <p>E-Mail-Adresse: <a href="mailto:kontakt@schatzbox.de">kontakt@schatzbox.de</a></p>
      <p>Telefon: 0123456789</p>
      <p>Fax: 0123456789</p>

      <h2 id="m72">Berufshaftpflichtversicherung</h2>
      <p>HUK Coburg<br/>Mainzstraße 12 <br/>28329 Bremen<br/><br/></p>

      <p className={styles.seal}>
        <a 
          href="https://datenschutz-generator.de/" 
          title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." 
          target="_blank" 
          rel="noopener noreferrer nofollow"
        >
          Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
        </a>
      </p>

      <button className={styles.button}>Mehr erfahren</button>
    </div> 
  );
}


{/* 
// export default function Impressum() {
//   return (
//     <div className="impressum">
//       <h1>Impressum</h1>
//       <p>Hier kommt der Inhalt des Impressums.</p>
//     </div>
//   );
// } */}