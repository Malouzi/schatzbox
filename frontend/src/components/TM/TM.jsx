//TM.jsx;

import React from 'react';
import Background from './Background.jsx';
import TreasureChest from './TreasureChest.jsx';
import styles from './TM.module.css';
import Coins from './Coins.jsx';
import Squirrel from './Squirrel.jsx';
import Path from './Path.jsx';
import Compass from './Compass.jsx';



const TM = () => {
  return (
    <div className={styles.mapContainer}>
      {/* Hintergrundbild */}
      <Background className={styles.background} />

      {/* Animationen */}
      <svg viewBox="0 0 2360 1640" xmlns="http://www.w3.org/2000/svg">
  <Coins />
  <Squirrel />
  <Path />
        <TreasureChest />
        <Compass />
        
      </svg>
    </div>
  );
};

export default TM; 

