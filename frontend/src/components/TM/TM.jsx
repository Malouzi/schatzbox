// TM.jsx
import React from "react";
import Background from "./Background.jsx";
import TreasureChest from "./TreasureChest.jsx";
import styles from "./TM.module.css";
import Coins from "./Coins.jsx";
import EichhoernchenMitSprechblase from "./Squirrel.jsx";
import Path from "./Path.jsx";
import Compass from "./Compass.jsx";
//import SquirrelSVG from "./SquirrelSVG.jsx";

const TM = () => {
  return (
    <div className={styles.mapContainer} style={{ position: "relative" }}>
      {/* Hintergrundbild */}
      <Background className={styles.background} />

      {/* SVG-Element mit den reinen SVG-Komponenten */}
      <svg viewBox="0 0 2360 1640" xmlns="http://www.w3.org/2000/svg">
        <Coins />
        <Path />
        <TreasureChest />
        <Compass />
      </svg>

      {/* Eichhörnchen mit Sprechblase (als HTML außerhalb des SVG) */}
      <EichhoernchenMitSprechblase />
    </div>
  );
};

export default TM;


/* const TM = () => {
  const [solvedAll, setSolvedAll] = useState(false);

  // Sobald alle Münzen gelöst sind solvedAll auf true setzen
  // in der Coins-Component realisieren und dann via Callback an TM übergeben?

  const handleAllSolved = () => {
    setSolvedAll(true);
  };

  const handleCloseChest = () => {
    // Hier z.B. den Rabattcode ausgeben oder die Truhe wieder schließen
    setSolvedAll(false);
  };

  return (
    <div className={styles.mapContainer}>
      <Background className={styles.background} />
      <svg viewBox="0 0 2360 1640" xmlns="http://www.w3.org/2000/svg">
        <Coins onAllSolved={handleAllSolved} />
        <Squirrel />
        <Path />
        <TreasureChest solvedAll={solvedAll} onClose={handleCloseChest} />
        <Compass />
      </svg>
    </div>
  );
};

export default TM; */