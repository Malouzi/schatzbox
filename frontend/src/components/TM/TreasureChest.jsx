
// TreasureChest.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ChestBody from './TreasureBottomSVG.jsx';
import ChestLid from './LidOpenSVG.jsx';
import OverlayChest from './OverlayChest.jsx';
import styles from './TreasureChest.module.css';

const TreasureChest = ({ solvedAll, discountCode }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  // Overlay automatisch anzeigen, wenn solvedAll true wird
  useEffect(() => {
    if (solvedAll) {
      console.log("All solved - triggering overlay in 1s"); //DEBUG TEST HIER
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
        {/* Truhenkörper */}
        <ChestBody />
        {/* Ausgelagerte Deckel-Komponente */}
        <ChestLid open={solvedAll} />
      </motion.svg>
      {showOverlay && (
        <OverlayChest onClose={() => setShowOverlay(false)}>
          <div>
            <h2>Rabattcode: 10%</h2>
            <p>{discountCode}</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(discountCode);
                alert('Rabattcode kopiert!');
              }}
            >
              Code kopieren
            </button>
          </div>
        </OverlayChest>
      )}
    </div>
  );
};

export default TreasureChest;

/*
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChestBody from './TreasureBottomSVG.jsx';
import ChestLidClosed from './LidClosedSVG.jsx';
import ChestLidOpen from './LidOpenSVG.jsx';
import styles from './TreasureChest.module.css';
*/
/*
const DiscountOverlay = ({ discountCode, onClose }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(discountCode);
    alert('Rabattcode kopiert!');
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.overlayContent}>
        <h2>Rabattcode: 10%</h2>
        <p>{discountCode}</p>
        <button onClick={handleCopy}>Code kopieren</button>
        <button onClick={onClose}>Schließen</button>
      </div>
    </div>
  );
};

const TreasureChest = ({ solvedAll, discountCode }) => {
  const [showOverlay, setShowOverlay] = useState(false);
*//*
  // Overlay automatisch anzeigen, wenn solvedAll true wird
  useEffect(() => {
    if (solvedAll) {
      setTimeout(() => {
        setShowOverlay(true);
      }, 1000); // 1 Sekunde Verzögerung
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
        {/* Truhenkörper 
        <ChestBody />
        <AnimatePresence exitBeforeEnter>
          {solvedAll ? (
            <motion.g
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <ChestLidOpen />
            </motion.g>
          ) : (
            <motion.g
              key="closed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <ChestLidClosed />
            </motion.g>
          )}
        </AnimatePresence>
      </motion.svg>
      {showOverlay && (
        <DiscountOverlay 
          discountCode={discountCode} 
          onClose={() => setShowOverlay(false)}
        />
      )}
    </div>
  );
};

export default TreasureChest;
*/
/*

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChestBody from './TreasureBottomSVG.jsx';
import ChestLidClosed from './LidClosedSVG.jsx';
import ChestLidOpen from './LidOpenSVG.jsx';
import styles from './TreasureChest.module.css';

const TreasureChest = ({ solvedAll, onClose }) => {
  return (
    <div 
      className={styles.chestContainer} 
      onClick={solvedAll ? onClose : undefined}
    >
      <motion.svg
        viewBox="0 0 2360 1640"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Truhenkörper 
        <ChestBody />
        {/* AnimatePresence für einen sanften Übergang 
        <AnimatePresence exitBeforeEnter>
          {solvedAll ? (
            <motion.g
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <ChestLidOpen />
            </motion.g>
          ) : (
            <motion.g
              key="closed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <ChestLidClosed />
            </motion.g>
          )}
        </AnimatePresence>
      </motion.svg>
    </div>
  );
};

export default TreasureChest;

*/