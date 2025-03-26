// TreasureChest.jsx
/*
import React from 'react';
import { motion } from 'framer-motion';
import ChestBody fr  <circle cx="1200" cy="1200" r="50" fill="red" />om './TreasureBottomSVG.jsx';
import ChestLid from './TreasureLidSVG.jsx';
import styles from './TreasureChest.module.css';

const chestVariants = {
  closed: { rotate: 0 },
  open: { rotate: -30 } // Der Deckel wird um 30° nach oben geschwungen
};

const TreasureChest = ({ solvedAll, onClose }) => {
  return (
    <div 
      className={styles.chestContainer} 
      onClick={solvedAll ? onClose : undefined}
    >
      <motion.svg
      width="2360"
      height="1640"
        viewBox="0 0 2360 1640"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Testkreis: Ein roter Kreis, der dir zeigt, dass das SVG sichtbar ist 
      
        {/* Truhe Körper 
        <ChestBody />
        {/* Animierter Deckel 
        <motion.g
          variants={chestVariants}
          initial="closed"
          animate={solvedAll ? "open" : "closed"}
          transition={{ duration: 1 }}
        >
          <ChestLid />
        </motion.g>
      </motion.svg>
    </div>
  );
};

export default TreasureChest;
*/

import React from 'react';
import { motion } from 'framer-motion';
import ChestBody from './TreasureBottomSVG.jsx';
import ChestLid from './TreasureLidSVG.jsx';
import styles from './TreasureChest.module.css';

const chestVariants = {
  closed: { rotate: 0 },
  open: { rotate: -30 } // Der Deckel wird um 30° nach oben geschwungen
};

const TreasureChest = ({ solvedAll, onClose }) => {
  return (
    <div className={styles.chestContainer} onClick={solvedAll ? onClose : undefined}>
      <motion.svg
        viewBox="0 0 2360 1640"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Truhe Körper */}
        <ChestBody />
        {/* Animierter Deckel */}
        <motion.g
          variants={chestVariants}
          initial="closed"
          animate={solvedAll ? "open" : "closed"}
          transition={{ duration: 1 }}
        >
          <ChestLid />
        </motion.g>
      </motion.svg>
    </div>
  );
};

export default TreasureChest;
 






/*
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChestBody from './TreasureBottomSVG.jsx'; // Das SVG für den Körper (ohne Deckel)
import ChestLid from './TreasureLidSVG.jsx';   // Den separater SVG-Deckel 
import styles from './TreasureChest.module.css';

const chestVariants = {
  closed: { y: 0 },
  open: { y: -50 } // hier den Wert anpassen damit der Deckel nach oben schwingt?
};

const TreasureChest = ({ solvedAll, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div 
        className={styles.chestContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <svg viewBox="0 0 2360 1640" xmlns="http://www.w3.org/2000/svg">
          {/* Truhe Körper 
          <ChestBody />
          {/* Animierter Deckel 
          <motion.g
            variants={chestVariants}
            initial="closed"
            animate={solvedAll ? "open" : "closed"}
            transition={{ duration: 1 }}
            onClick={solvedAll ? onClose : undefined}
          >
            <ChestLid />
          </motion.g>
        </svg>
      </motion.div>
    </AnimatePresence>
  );
};

export default TreasureChest; */ 
