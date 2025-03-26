//Squirrel.jsx

import React from "react";
import { motion } from "framer-motion";
import styles from "./Squirrel.module.css";
import squirrelImage from "../../assets/Eichhörnchen.svg"; 




// Sprechblase als HTML innerhalb eines foreignObject im SVG
const Sprechblase = () => {
  const text = `Hallo, ich bin Juli.
Hast du Lust mit mir auf eine Schatzsuche zu gehen?
Dann mal los! 
Gehe zu der ersten Münze und berühre sie.
... 
danach werden weitere Münzen auftauchen 
...
beantworte alle Rätselfragen die du finden kannst,
dann wirst du den Schatz entdecken!`;

  // Animation für die Buchstaben der Sprechblase
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    
    <foreignObject x="750" y="35" width="670" height="700">
      <div xmlns="http://www.w3.org/1999/xhtml" className={styles.sprechblase}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.textContainer}
        >
          {text.split("\n").map((line, lineIndex) => (
            <div key={lineIndex}>
              {line.split("").map((letter, letterIndex) => (
                <motion.span key={letterIndex} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </foreignObject>
  );
};

const EichhoernchenMitSprechblase = () => {
  return (
    <g id="eichhoernchenGroup">
      {/* Animation für das Eichhörnchen separat */}
      <motion.image
       /*style={{ pointerEvents: 'all' }} */
        x="160"      // Position anpassen
        y="30"      // Position 
        width="1800" // Größe anpassen
        height="1800"// Größe 
        xlinkHref={squirrelImage}
        alt="Eichhörnchen"
        /*whileHover={{ y: [0, -20, 0] }}
        , scale: [1, 1.1, 1] 
        transition={{ duration: 0.6, repeat: 3, repeatType: "loop" }}*/
      />
      <Sprechblase />
    </g>
  );
};

export default EichhoernchenMitSprechblase;
