import React from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import { LuSearchCheck } from "react-icons/lu";
import { TbFlagCheck } from "react-icons/tb";
import Slideshow from "../Slideshow/Slideshow";
import styles from "./Welcome.module.css";
import Circles from "../Circles/Circles";

export default function Welcome() {
  return (
    <>
      <Slideshow />
      <Circles />
      <div className={styles.container1}>
        <h1>Willkommen bei Schatzbox</h1><br />
        <h2>
          Plane den perfekten Kindergeburtstag mit unseren spannenden
          Schatzsuch-Vorlagen!
        </h2>
        <p>
          Bei uns findest du liebevoll gestaltete Abenteuer, die du mit einem
          Mausklick kaufen, downloaden und ausdrucken kannst. Ob Piraten,
          Detektive oder magische Welten – wir haben die passende Schatzsuche
          für jedes Kind! Unsere Schatzboxen sind entweder nach Thema wählbar
          oder wir stellen individuell für euch eine Schatzsuche nach euren
          persönlichen Wünschen zusammen. Nutze dafür unsere individuelle
          Schatzsuche.
        </p>
        <p>
          Entdecke jetzt die passende Schatzsuche für deine Liebsten und mache
          den nächsten Kindergeburtstag zu einem unvergesslichen Erlebnis!
        </p> <br /><br /><br />
        <h1>Und so einfach funktioniert's:</h1>
      </div>

      <div className={styles.container2}>
        <ul className={styles.listWelcome}>
          <li>
          <button className={styles.downloadButton}>
              <LuSearchCheck size={50} />
            </button>
            Schatzsuche auswählen – <br />
            und schon kann der Spaß beginnen
          </li>
        </ul>
      </div>

      <div className={styles.container3}>
        <ul className={styles.listWelcome}>
          <li>
            <button className={styles.downloadButton}>
              <HiArrowDownTray size={50} />
            </button>
            Direkt Download – Schnell vorbereitet & los geht's
            
          </li>
        </ul>
      </div>

      <div className={styles.container4}>
        <ul className={styles.listWelcome}>
          <li>
          <button className={styles.downloadButton}>
              <TbFlagCheck size={50} />
            </button>
          Perfekt für drinnen & draußen – Flexible Nutzung</li>
        </ul>
      </div>
    </>
  );
}