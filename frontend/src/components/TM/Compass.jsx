// Compass.jsx
import React from 'react';
import styles from './TM.module.css';

const Compass = () => {
  return (
    <g
      id="compass"
      className={styles.compass}
      transform="matrix(1 0 0 1 2137 64)"
    >
      <image
        width="119"
        height="154"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAACaCAYAAACT49fWAAAACXBIWXMAAAsSAAALEgHS3X78AAAg..."
        alt="Kompass"
      />
    </g>
  );
};

export default Compass;
