// TreasureChest.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChestBody from './TreasureBottomSVG.jsx'; // Das SVG für den Körper (ohne Deckel)
import ChestLid from './TreasureLidSVG.jsx';   // Den separater SVG-Deckel 
import styles from './TreasureChest.module.css';

const chestVariants = {
  closed: { y: 0 },
  open: { y: -50 } // hier den Wert so anpassen, dass der Deckel nach oben schwingt
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
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          {/* Truhe Körper */}
          <ChestBody />
          {/* Animierter Deckel */}
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

export default TreasureChest;
