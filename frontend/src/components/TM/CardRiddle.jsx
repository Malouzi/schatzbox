// CardRiddle.jsx

import React from 'react';
import styles from './CardRiddle.module.css';

const CardRiddle = ({ question, options, onAnswer }) => {
  return (
    <div className={styles.cardriddle}>
      <p className={styles.question}>{question}</p>
      <div className={styles.options}>
        {options.map((option, index) => (
          <button 
            key={index} 
            className={styles.optionButton1} 
            onClick={() => onAnswer(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardRiddle;
