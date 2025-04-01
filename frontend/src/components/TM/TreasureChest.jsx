
// TreasureChest.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ChestBody from './TreasureBottomSVG.jsx';
import ChestLid from './LidOpenSVG.jsx';
import ChestLidClosed from './LidClosedSVG.jsx';
import styles from './TreasureChest.module.css';

const TreasureChest = ({ solvedAll, discountCode }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  // Overlay automatisch anzeigen, wenn solvedAll true wird
  useEffect(() => {
    if (solvedAll) {
      setTimeout(() => {
        setShowOverlay(true);
      }, 1000);
    }
  }, [solvedAll]);

  const handleChestClick = () => {
    if (solvedAll) {
      // Overlay ein-/ausblenden
      setShowOverlay(!showOverlay);
    }
  };

  return (

    <div className={styles.chestContainer} onClick={handleChestClick}>
      <motion.svg
        viewBox="0 0 2360 1640"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
       
        <ChestBody />
        {solvedAll ? <ChestLid open={solvedAll} /> : <ChestLidClosed />}
        </motion.svg> 
     
    
    {showOverlay && (
      <div className={styles.overlay} onClick={() => setShowOverlay(false)}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          {/*<h2>Rabattcode:</h2>*/}
          <p className={styles.discountCode}>{discountCode}</p>
          <button
            className={styles.copyButton}
            onClick={() => {
              navigator.clipboard.writeText(discountCode);
              alert('Rabattcode kopiert!');
            }}
          >
            Code kopieren
          </button>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default TreasureChest;

