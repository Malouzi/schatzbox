// src/components/ParallaxSection/ParallaxSection.jsx
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styles from './ParallaxSection.module.css';

export default function ParallaxSection() {
  return (
    <div className={styles.parallaxContainer}>
      <Parallax className={styles.parallaxBackground} y={[-20, 20]} />
      <div className={styles.content}>
        <h2>Willkommen in unserer Parallax-Sektion!</h2>
        <p>Dies ist ein Parallax-Effekt, der nur in dieser Sektion auf der Seite sichtbar ist.</p>
      </div>
    </div>
  );
}
