// CoinFlipCard.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CoinFlipCard.module.css';

const CoinFlipCard = ({ coinData, active, onSolved }) => {
  const [flipped, setFlipped] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [visible, setVisible] = useState(true);

  const { riddle, imageSrc, id, transform } = coinData;

  const handleAnswer = (option) => {
    if (option.correct) {
      setFeedback('✅ Richtig!');
      setTimeout(() => {
        setVisible(false);
        onSolved();
      }, 1000);
    } else {
      setFeedback('❌ Leider falsch, versuche es nochmal!');
      if (navigator.vibrate) {
        navigator.vibrate(200);
      }
    }
  };

  if (!visible) return null;

  return (
    <div className={styles.flipCardContainer}>
      <div
        className={`${styles.flipCard} ${flipped ? styles.flipped : ''}`}
        onClick={() => {
          if (active) setFlipped(true);
        }}
      >
        <div className={styles.flipCardInner}>
          {/* Vorderseite: Münze */}
          <div className={styles.flipCardFront}>
            <motion.image
              id={id} // Hier wird die ursprüngliche ID gesetzt, z. B. "Coin1"
              style={{ overflow: 'visible' }}
              width="1024"
              height="1024"
              xlinkHref={imageSrc}
              transform={transform}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              alt="Münze"
            />
          </div>
          {/* Rückseite: Rätselkarte */}
          <div className={styles.flipCardBack}>
            <div className={styles.riddleBox}>
              <p className={styles.riddleText}>{riddle.text}</p>
              <div className={styles.options}>
                {riddle.options.map((option, index) => (
                  <button
                    key={index}
                    className={styles.optionButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAnswer(option);
                    }}
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
  );
};

export default CoinFlipCard;
