import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Circles.module.css";

const Circles = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const startWidth = 500;
  const maxCircleSize = 200; 

  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const circles = [
    { id: 1, baseSize: 45, top: "50%", right: "3%", color: "#b5e7f6" },
    { id: 2, baseSize: 80, top: "15%", right: "25%", color: "#E86100" },
    { id: 3, baseSize: 100, top: "50%", right: "12%", color: "#FFA001" },
    { id: 4, baseSize: 50, top: "10%", right: "41%", color: "#EFBE7B" },
    { id: 5, baseSize: 90, top: "0%", right: "5%", color: "#BAB56B" }
  ];

  return (
    <section className={styles.container}>
      {circles.map((circle, index) => {
        const scaleFactor = Math.min((windowWidth / startWidth) ** 1.2, 3); // Exponentielles Wachstum mit einer Maximalgrenze
        const size = Math.min(circle.baseSize * scaleFactor, maxCircleSize); // Maximalgröße einstellen

        return (
          <motion.span
            key={circle.id}
            className={styles.circle}
            style={{
              height: `${size}px`,
              width: `${size}px`,
              top: circle.top,  
              right: circle.right,  
              boxShadow: `inset 0 0 30px 5px ${circle.color}`
            }}
          ></motion.span>
        );
      })}
    </section>
  );
};

export default Circles;
