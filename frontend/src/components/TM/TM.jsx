//TM.jsx

import React, { useState } from 'react';
import Background from "./Background.jsx";
import TreasureChest from "./TreasureChest.jsx";
import styles from "./TM.module.css";
import Coins from "./Coins.jsx";
import EichhoernchenMitSprechblase from "./Squirrel.jsx";
import SVGPfad3 from "./Pfad3.jsx";
import Compass from "./Compass.jsx";
import coinsData from "./CoinsData.jsx";


const TM = () => {

   // Sind alle Münzen gefunden?
   const [activeCoin, setActiveCoin] = useState(0);
   const coinsTotal = coinsData.length;
   const solvedAll = activeCoin === coinsTotal; 

   //console.log("solvedAll:", solvedAll);  Debug-Ausgabe zum TESTEN 

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
        <Coins activeCoin={activeCoin} setActiveCoin={setActiveCoin} />
        {/* übergibt den activeCoin und den Callback an den SVG Pfad*/}
        <SVGPfad3 activeCoin={activeCoin} coinsTotal={coinsTotal} />
        <Compass /> 
        <EichhoernchenMitSprechblase /> 
      </svg>
         {/* TreasureChest-Komponente mit Props*/}
         <TreasureChest solvedAll={solvedAll} discountCode="SCHATZBOX10" className={styles.treasureChest}/> 
    </div>
  );
};

export default TM;


