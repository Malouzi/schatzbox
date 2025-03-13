import React from "react";
import Slideshow from "../Slideshow/Slideshow";
import styles from "./Welcome.module.css";

export default function Welcome() {
  return (
    <>
      <Slideshow />
      <div className={styles.container1}>
        <h1>Willkommen bei Schatzbox</h1>
        <h2>
          Plane den perfekten Kindergeburtstag mit unseren spannenden
          Schatzsuch-Vorlagen!
        </h2>
        <p>
          Bei uns findest du liebevoll gestaltete Abenteuer, die Du mit einem
          Mausklick kaufen, downloaden und ausdrucken kannst. Ob Piraten,
          Detektive oder magische Welten – wir haben die passende Schatzsuche
          für jedes Kind! Unsere Schatzboxen sind entweder nach Thema wählbar
          oder wir stellen individuell für Euch eine Schatzsuche nach ganz
          ersönlichen Wünschen. Nutze dafür unsere individuelle Schatzsuche.
        </p>

        <p>
          Entdecke jetzt die passende Schatzsuche für Deine Liebsten und machen
          nächsten Kindergeburtstag zu einem unvergesslichen Erlebnis!
        </p>

        <h1>Und so einfach funktioniert's:</h1>
      </div>

      <div className={styles.container2}>
        <ul className={styles.listWelcome}>
          <li>
            Sofort-Download <br />
            Direkt nach dem Kauf verfügbar
          </li>
        </ul>
      </div>

      <div className={styles.container3}>
        <ul className={styles.listWelcome}>
          <li>
            Einfache Anleitung - Schnell vorbereitet & los
            geht&#39;s
          </li>
        </ul>
      </div>

      <div className={styles.container4}>
        <ul className={styles.listWelcome}>
          <li>
            Perfekt für drinnen & draußen - Flexible Nutzung
          </li>
        </ul>
      </div>
    </>
  );
}
