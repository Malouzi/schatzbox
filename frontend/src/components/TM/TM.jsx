//TM.jsx;

import React from 'react';
import Background from './Background.jsx';
//import { ReactComponent as Schatzkarte } from '../../assets/schatzkarte.svg';
//import Schatzkarte from './Schatzkarte.jsx';
import Coins from './Coins.jsx';
import Compass from './Compass.jsx';
import Path from './Path.jsx';
import TreasureChest from './TreasureChest.jsx';
import styles from './TM.module.css';
import Hintergrund from './Background.jsx';

const TM = () => {
  return (
    <div className={styles.mapContainer}>
      {/* Hintergrundbild */}
      <Background className={styles.background} />

      {/* Animationen */}
      <svg viewBox="0 0 2360 1640" xmlns="http://www.w3.org/2000/svg">
        <Path />
        <Coins />
        <Compass />
        <TreasureChest />
        
      </svg>
    </div>
  );
};

export default TM; 

/*import React from 'react';
import schatzkarteUrl from '../../assets/SchatzkarteLeer .svg';
import Coins from './Coins';
import Compass from './Compass';
import Path from './Path';
import styles from './TM.module.css';

const TM = () => {
  return (
    <div className={styles.mapContainer}>
      {/* SVG als Bild einbinden }
      <img
        src={schatzkarteUrl}
        alt="Schatzkarte"
        className={styles.background}
      />
      {/* Überlagerndes SVG für Animationen }
      <svg viewBox="0 0 2360 1640" xmlns="http://www.w3.org/2000/svg">
        <Path />
        <Coins />
        <Compass />
      </svg>
    </div>
  );
};

export default TM; */
