import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './TreasureMap.module.css';

gsap.registerPlugin(ScrollTrigger);

// Schatztruhe als SVG
const TreasureChestIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="60"
    height="60"
  >
    <rect
      x="8"
      y="24"
      width="48"
      height="24"
      fill="#8B4513"
      stroke="#000"
      strokeWidth="2"
    />
    <polygon
      points="8,24 12,16 52,16 56,24"
      fill="#A0522D"
      stroke="#000"
      strokeWidth="2"
    />
    <rect
      x="16"
      y="32"
      width="32"
      height="8"
      fill="#D2B48C"
      stroke="#000"
      strokeWidth="2"
    />
  </svg>
);

const TreasureMapPath = () => {
  const pathRef = useRef(null);
  const chestRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 0,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      opacity: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: path,
        start: 'top 90%',
        end: 'bottom bottom',
        scrub: 1,
        //markers: true,  zum finden wo es startet und endet der scrolltrigger auf der seite
      },
    });

    // Schatzbox Animation
    gsap.fromTo(
      chestRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: 'elastic.out(1, 0.5)',
        duration: 1.5,
        scrollTrigger: {
          trigger: chestRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <div className={styles.svgContainer}>
      <svg
        className={styles.treasurePath}
        viewBox="0 0 500 2500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M50,200
            C150,200 50,400 250,600 
            C450,800 150,1000 350,1200 
            C550,1400 200,1600 400,1800
            C450,1900 250,2100 250,2600"
          stroke="black"
          strokeWidth="3"
          strokeDasharray="10,10"
        />
      </svg>
      {/* Schatzbox am Ende */}
      <img
        ref={chestRef}
        className={styles.treasureChest}
        src="/images/treasure-chest.png"
        alt="Schatztruhe"
      />
    </div>
  );
};

export default TreasureMapPath;
