

import React from "react";
import { motion } from "framer-motion";
import SquirrelSVG from "./SquirrelSVG.jsx";
import styles from "./Squirrel.module.css";

const Sprechblase = () => {
  const text = `Hallo, ich bin Juli.
Hast du Lust mit mir auf eine kleine Schatzsuche zu gehen?
Dann lass uns loslegen! Gehe zu der ersten Münze und berühre sie.
`;

  // Animation: Buchstabe-für-Buchstabe einblenden
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={styles.sprechblase}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.textContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {text.split("\n").map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {line.split("").map((letter, letterIndex) => (
              <motion.span key={letterIndex} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
            {/* Zeilenumbruch */}
            <br />
          </React.Fragment>
        ))}
      </motion.div>
    </motion.div>
  );
};

const EichhoernchenMitSprechblase = () => {
  return (
    <div className={styles.squirrelContainer}>
      <SquirrelSVG />
      <Sprechblase />
    </div>
  );
};

export default EichhoernchenMitSprechblase;
