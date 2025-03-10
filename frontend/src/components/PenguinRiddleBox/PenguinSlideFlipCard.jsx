import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './PenguinSlideFlipCard.module.css';
import PenguinSVG from '../../assets/PinguinNell2.svg'; // Pfad zum SVG

export default function PenguinSlideFlipCard() {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(true); // Für das Entfernen der Karte
  const [feedback, setFeedback] = useState('');

  const riddle = {
    text: 'Was hat vier Beine, aber kann nicht laufen?',
    options: [
      { label: 'Ein Tisch', correct: true },
      { label: 'Ein Stuhl', correct: false },
      { label: 'Ein Hund', correct: false },
    ],
  };

  const handleAnswer = (option) => {
    if (option.correct) {
      setFeedback('✅ Richtig!');
      hideCardAfterDelay();
    } else {
      setFeedback('❌ Leider falsch, versuche es nochmal!');
      if (navigator.vibrate) {
        navigator.vibrate(200); // Vibrationsfeedback/haptisches Feedback für falsche Antwort
      }
    }

    setTimeout(() => {
      document.querySelector(`.${styles.flipCardContainer}`).focus();
    }, 10);
    //Fokus nach dem Click wieder auf die Karte setzen
  };

  const hideCardAfterDelay = () => {
    setTimeout(() => setVisible(false), 1000); //kann bei Bedarf erweitert werden
  };

  if (!visible) return null; // Karte wird entfernt, wenn `visible` false ist

  return (
    <motion.div
      className={styles.flipCardContainerWrapper}
      initial={{ opacity: 0 }} // Karte startet unsichtbar
      animate={{ opacity: 1 }} // Karte wird sichtbar - FadeInEffekt
      transition={{ duration: 0.5 }} // Dauer des Einblendens
    >
      <div className={styles.flipCardContainer}>
        <div className={`${styles.flipCard} ${flipped ? styles.flipped : ''}`}>
          <div className={styles.flipCardInner}>
            {/* Vorderseite */}
            <div
              className={styles.flipCardFront}
              onClick={() => setFlipped(true)}
            >
              {/* Schließen-Button auf der Vorderseite */}
              <button
                className={styles.closeButton}
                onClick={(e) => {
                  e.stopPropagation(); // Verhindert, dass der Button das Umdrehen der Karte auslöst
                  setVisible(false); // Karte entfernen
                }}
                role="button"
                aria-label="Karte schließen"
              >
                ✖
              </button>
              {/* Pinguin Bild */}
              <motion.img
                src={PenguinSVG} // Bildquelle
                alt="Pinguin"
                className={styles.riddleImage} // CSS-Klasse
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0], //wackeln und drehen
                }} // Pinguin hüpft
                transition={{
                  repeat: Infinity,
                  duration: 0.7,
                  ease: 'easeInOut',
                }} // Animationseffekt
              />
            </div>
            {/* Rückseite - Ohne den Schließen-Button */}
            <div className={styles.flipCardBack}>
              <div className={styles.riddleBox}>
                <p className={styles.riddleText}>{riddle.text}</p>
                <div className={styles.options}>
                  {riddle.options.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      className={styles.optionButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAnswer(option);
                      }}
                      aria-label={`Antwortmöglichkeit: ${option.label}`} //eine weitere Beschreibung für Screenreader
                      //wenn der sichtbare Text nicht ausreicht
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                {feedback && <p className={styles.feedbackText}>{feedback}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
