// CoinRiddle.jsx


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardRiddle from './CardRiddle.jsx';
import coinImg from '../../assets/coin.png';
import coinRiddleStyles from './CoinRiddle.module.css';
// separate Overlay-Komponente:
import Overlay from './Overlay.jsx';

const CoinRiddle = ({ questionData, onSolved, active }) => {
  const [showCard, setShowCard] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleIconClick = () => {
    console.log('Icon clicked');
    if (!active) return;
    setShowCard(true);
  };

  const handleAnswer = (option) => {
    console.log('Answer chosen:', option);
    if (option.correct) {
      setFeedback('✅ Richtig!');
      setTimeout(() => {
        setShowCard(false);
        setFeedback('');
        if (onSolved) onSolved();
      }, 1000);
    } else {
      setFeedback('❌ Falsch!');
      setTimeout(() => {
        setFeedback('');
      }, 1000);
    }
  };

  return (
    <div className={coinRiddleStyles.container}>
      {/* Münz-Icon als interaktiver Button */}
      <motion.button 
        className={coinRiddleStyles.iconButton} 
        onClick={handleIconClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img 
          src={coinImg} 
          alt="Münze" 
          className={coinRiddleStyles.coinIcon}
        />
      </motion.button>

      {/* Statt des direkten Overlay-Markups verwenden wir jetzt die Overlay-Komponente */}
      <AnimatePresence>
        {showCard && (
          <Overlay onClose={() => setShowCard(false)}>
            {/* Hier rendert das Overlay den Inhalt, also die Fragekarte und das Feedback */}
            <CardRiddle 
              question={questionData.text}
              options={questionData.options}
              onAnswer={handleAnswer}
            />
            {feedback && (
              <motion.p 
              className={overlayStyles.feedback}
                // hier inline sonst in der overlay.moudle.css einfpgen
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {feedback}
              </motion.p>
            )}
          </Overlay>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CoinRiddle;
