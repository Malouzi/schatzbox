import React, { useState } from 'react';
import Background from "./Background.jsx";
import TreasureChest from "./TreasureChest.jsx";
import styles from "./TM.module.css";
import Coins from "./Coins.jsx";
import EichhoernchenMitSprechblase from "./Squirrel.jsx";
import Path from "./Path.jsx";
import Compass from "./Compass.jsx";
import coinsData from "./CoinsData.jsx";


const TM = () => {

   // Beispiel: Hier wird ein Zustand simuliert, der angibt, ob alle Münzen gefunden wurden.
   const [activeCoin, setActiveCoin] = useState(0);
   const coinsTotal = coinsData.length; // Beispiel: 10 Münzen insgesamt
   const solvedAll = activeCoin === coinsTotal; // Oder passe die Logik an


   console.log("solvedAll:", solvedAll); // Debug-Ausgabe zum TESTEN 

  return (
    <div className={styles.mapContainer}>
      {/* Hintergrundbild */}
        <Background className={styles.background} /> 
        

      {/* SVG-Container für die Animationen */}
      <svg
        viewBox="0 0 2360 1640"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svgContainer}
      >
        <Coins activeCoin={activeCoin} setActiveCoin={setActiveCoin}/>
        <Path />
        <Compass /> 
        <EichhoernchenMitSprechblase /> 
      </svg>
         {/* TreasureChest-Komponente mit Test-Props */}
         <TreasureChest solvedAll={solvedAll} discountCode="SCHATZBOX10"/> 
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