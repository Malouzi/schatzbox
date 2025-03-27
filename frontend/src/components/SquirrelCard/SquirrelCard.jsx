//SquirrelCard.jsx

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
      {/* Schließ-Button */}
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
            Hey, Lust auf einen Rabattcode?
            <br />
            Dann komm mal mit ...
          </p>
        </div>

        {/* Pfeil außerhalb der Sprechblase */}
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
} 
