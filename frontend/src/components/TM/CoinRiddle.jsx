// CoinRiddle.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CardRiddle from './CardRiddle.jsx';
import coinRiddleStyles from './CoinRiddle.module.css';

const CoinRiddle = ({ questionData, onSolved }) => {
  const [feedback, setFeedback] = useState('');

  const handleAnswer = (option) => {
    if (option.correct) {
      setFeedback('✅ Richtig!');
      setTimeout(() => {
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
      <CardRiddle 
        question={questionData.text}
        options={questionData.options}
        onAnswer={handleAnswer}
      />
      {feedback && (
        <motion.p 
          className={coinRiddleStyles.feedback}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {feedback}
        </motion.p>
      )}
    </div>
  );
};

export default CoinRiddle;
