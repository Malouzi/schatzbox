//SquirrelCard.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// Importiere das SVG als React-Komponente (vorausgesetzt, dein Build-Setup unterstützt das)
import { ReactComponent as SquirrelWaving } from '../../assets/EichhörnchenWinkt.svg?svgr';
import styles from './SquirrelCard.module.css';

export default function WavingSquirrel() {
  const svgRef = useRef(null);

  useEffect(() => {
    // Greife auf das Arm-Element innerhalb des SVGs zu
    const arm = svgRef.current.querySelector('#arm');
    if (arm) {
      gsap.to(arm, {
        rotation: 20,              // Arm schwingt 20 Grad
        transformOrigin: "left center", // Drehpunkt anpassen (evtl. muss dieser Wert optimiert werden)
        repeat: -1,                // Endlosschleife
        yoyo: true,                // Hin- und herbewegen
        duration: 0.5,             // Animationsdauer
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <SquirrelWaving ref={svgRef} />
    </div>
  );
}


/*
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdClose, MdKeyboardArrowRight } from 'react-icons/md';
import { gsap } from 'gsap';
import styles from './SquirrelCard.module.css';
import squirrelImage from '../../assets/EichhörnchenWinkt.svg';

export default function SquirrelCard() {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const squirrelRef = useRef(null);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        squirrelRef.current,
        { opacity: 0, x: -300, y: 50, rotate: -90 },
        { opacity: 1, x: 0, y: 0, rotate: 0, duration: 2, ease: "power3.out" }
      );
    }
  }, [visible]);

  const handleNavigate = (e) => {
    e.stopPropagation();
    navigate('/schatzkarte');
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.cardContainer}>
      {/* Schließ-Button 
      <button
        className={styles.closeButton}
        onClick={handleClose}
        onTouchStart={handleClose}
        aria-label="Karte schließen"
      >
        <MdClose className={styles.closeIcon} />
      </button>

      <div className={styles.cardContent}>
        <img
          ref={squirrelRef}
          src={squirrelImage}
          alt="Eichhörnchen"
          className={styles.squirrelImage}
        />

        <div className={styles.speechBubble}>
          <p className={styles.speechText}>
            Hallo, ich bin Juli.
            <br />
            Hast du Lust auf eine Schatzsuche?
          </p>
        </div>

        {/* Pfeil außerhalb der Sprechblase 
        <a
          href="/schatzkarte"
          onClick={handleNavigate}
          onTouchStart={handleNavigate}
          aria-label="Zur Schatzkarte"
          className={styles.arrowLink}
        >
          <MdKeyboardArrowRight className={styles.arrowIcon} />
        </a>
      </div>
    </div>
  );
} */
