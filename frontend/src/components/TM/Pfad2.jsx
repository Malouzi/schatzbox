//Pfad2.jsx

import React from "react";
import { motion } from "framer-motion";


const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: { 
    opacity: 1, 
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" }
  },
};



const SvgPfad2 = ({activeCoin, ...props }) => (
  <svg
    id="Vektorebene_1_"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="2360px"
    height="1640px"
    viewBox="0 0 2360 1640"
    style={{
      enableBackground: "new 0 0 2360 1640",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">
      {".st0{stroke:#FFFFFF;stroke-miterlimit:10;}"}
    </style>
      <motion.path
        id="Pfad1.1"
        d="M210.25 911.56c-5.1-4.97 29.36-22.32 34.04-27.05 2.72-1.8 6.5 1.17 5.51 4.24-9.8 9.51-23.34 15.81-34.42 24.16-1.69 1.13-4.15.34-5.13-1.35"
        variants={pathVariants}
        initial="hidden"
        animate={activeCoin >= 0 ? "visible" : "hidden"}
      />
      <motion.path
        id="Pfad1.2"
        d="M286.57 860.38c-4.59-5.24 24.94-19.41 29.37-23.92 2.72-1.79 6.49 1.17 5.51 4.24-8.27 8.44-20.21 13.74-29.75 21.03-1.69 1.13-4.15.34-5.13-1.35"
        variants={pathVariants}
        initial="hidden"
        animate={activeCoin >= 0 ? "visible" : "hidden"}
      />
    <motion.path
      id="Pfad1.3"
      d="M368.35 805.53c-5.1-4.99 29.75-22.57 34.48-27.35 2.72-1.8 6.5 1.17 5.51 4.24-9.95 9.61-23.63 16-34.86 24.46-1.69 1.14-4.14.34-5.13-1.35"
      variants={pathVariants}
      initial="hidden"
      animate={activeCoin >= 0 ? "visible" : "hidden"}
    />
    <motion.path
      id="Pfad2.1"
      d="M609.29 640.83c-4.01-5.6 20.91-16.72 25.16-21.1 2.72-1.8 6.49 1.17 5.51 4.24-6.88 7.47-17.39 11.88-25.54 18.21-1.69 1.13-4.14.33-5.13-1.35"
      variants={pathVariants}
      initial="hidden"
      animate={activeCoin >= 1 ? "visible" : "hidden"}
    />
    <motion.path
      id="Pfad2.2"
      d="M671.17 599.33c-4.78-5.1 26.17-20.23 30.64-24.77 2.72-1.8 6.5 1.17 5.51 4.24-8.69 8.73-21.06 14.3-31.02 21.88-1.69 1.13-4.14.34-5.13-1.35"
      variants={pathVariants}
      initial="hidden"
      animate={activeCoin >= 1 ? "visible" : "hidden"}
    />
    <motion.path
      id="Pfad3.1"
      d="M881.7 461.29c-3.22-6.11 15.87-13.35 19.93-17.59 2.72-1.8 6.49 1.18 5.51 4.24-5.18 6.25-13.87 9.58-20.31 14.7-1.68 1.13-4.14.34-5.13-1.35"
      variants={pathVariants}
      initial="hidden"
      animate={activeCoin >= 2 ? "visible" : "hidden"}
    />
    <motion.path
      id="Pfad3.2"
      d="M932.93 426.93c-4.4-5.37 23.82-18.64 28.19-23.13 2.71-3.06 8.24-1.26 7.17 3.12-8.43 8.55-20.53 13.95-30.23 21.36-1.68 1.14-4.14.34-5.13-1.35"
      variants={pathVariants}
      initial="hidden"
      animate={activeCoin >= 2 ? "visible" : "hidden"}
    />
      <motion.path
        id="Pfad4.1"
        d="M1152.8 464.08c-4.24-5.39-8.48-10.79-12.72-16.18-1.26-1.61-.93-4.02.68-5.26 6.03-3.9 13.5 13.24 17.98 16.86 2.99 3.8-2.99 8.45-5.94 4.58"
        variants={pathVariants}
        initial="hidden"
        animate={activeCoin >= 3 ? "visible" : "hidden"}
      />
      <motion.path
        id="Pfad4.2"
        d="M1194.33 516.94c-2.68-5.53-24.26-25.18-17.96-28.99 5.27-5 19.13 20.47 23.9 24.4 2.98 3.81-2.99 8.46-5.94 4.59"
        variants={pathVariants}
        initial="hidden"
        animate={activeCoin >= 3 ? "visible" : "hidden"}
      />
    <motion.path
      id="Pfad5.1"
      d="M1158.69 720.48c-4.69-5.2 26.01-20.11 30.51-24.69 2.72-1.8 6.5 1.17 5.51 4.24-8.64 8.7-20.97 14.24-30.89 21.8-1.69 1.13-4.15.33-5.13-1.35"
      variants={pathVariants}
      initial="hidden"
      animate={activeCoin >= 4 ? "visible" : "hidden"}
    />
 
    <motion.path
      id="Pfad5.2"
      d="M1098.42 760.89c-3.75-5.79 19.53-15.77 23.74-20.15 2.72-1.79 6.49 1.17 5.51 4.24-6.43 7.14-16.44 11.25-24.12 17.26-1.69 1.13-4.15.34-5.13-1.35"
      variants={pathVariants}
      initial="hidden"
      animate={activeCoin >= 4 ? "visible" : "hidden"}
    />
    <motion.path
      id="Pfad6.1"
      d="M970.02 954.63c-7.36.06 6.26-33.77 6.6-40.06.52-1.98 2.66-3.15 4.61-2.62 1.99.55 3.13 2.64 2.62 4.61l-9.21 35.45c-.52 1.99-2.7 3.16-4.62 2.62"
      variants={pathVariants}
      initial="hidden"
      animate={activeCoin >= 5 ? "visible" : "hidden"}
    />
    <motion.path
      id="Pfad6.2"
      d="M947.14 1042.63c-7.65.3 8.15-40.52 8.53-47.48.52-1.98 2.66-3.15 4.61-2.62 7.65-.26-8.16 40.53-8.53 47.48-.51 1.99-2.69 3.15-4.61 2.62"
      variants={pathVariants}
      initial="hidden"
      animate={activeCoin >= 5 ? "visible" : "hidden"}
    />
      <motion.path
        id="Pfad7.1"
        d="M990.42 1190.45c-4.52-3.32-22.14-6.01-19.91-12.73 3.22-6.41 17.38 4.79 22.82 5.82 4.51 1.86 1.52 8.85-2.91 6.91"
        variants={pathVariants}
        initial="hidden"
        animate={activeCoin >= 6 ? "visible" : "hidden"}
      />
      <motion.path
        id="Pfad7.2"
        d="M1045.39 1214.44c-7.19-3.14-14.38-6.27-21.56-9.41-4.48-1.85-1.54-8.85 2.92-6.91 4.74 3.46 26.22 7.7 23.56 14.33-.79 1.87-3.08 2.81-4.92 1.99"
        variants={pathVariants}
        initial="hidden"
        animate={activeCoin >= 6 ? "visible" : "hidden"}
      />
      <motion.path
        id="Pfad7.3"
        d="M1104.97 1240.45c-10.03-4.38-20.07-8.76-30.1-13.14-4.48-1.85-1.54-8.85 2.92-6.91 10.04 4.38 20.07 8.76 30.1 13.14 4.49 1.86 1.52 8.85-2.92 6.91"
        variants={pathVariants}
        initial="hidden"
        animate={activeCoin >= 6 ? "visible" : "hidden"}
      />

<motion.path
      id="Pfad8.1"
      d="M1266.03 1239.58c-4.12-5.59 22.43-17.69 26.8-22.2 2.72-1.8 6.49 1.17 5.51 4.24-7.42 7.85-18.49 12.61-27.18 19.31-1.69 1.14-4.14.34-5.13-1.35"
      variants={pathVariants}
      initial="hidden"
      animate={activeCoin >= 7 ? "visible" : "hidden"}
    />
    <motion.path
      id="Pfad8.2"
      d="M1314.29 1207.22c-2.81-6.36 13.17-11.54 17.11-15.7 2.72-1.8 6.49 1.18 5.51 4.24-4.28 5.57-11.96 8.34-17.49 12.81-1.69 1.14-4.14.34-5.13-1.35"
      variants={pathVariants}
      initial="hidden"
      animate={activeCoin >= 7 ? "visible" : "hidden"}
    />

      <motion.path
        id="Pfad9.1"
        d="M1477.12 1077.11c-6.95-2.24 7.9-24.33 9.05-30.14.82-1.87 3.02-2.8 4.92-2 1.86.79 2.82 3.04 2 4.92-3.53 4.88-9.58 30.46-15.97 27.22"
        variants={pathVariants}
        initial="hidden"
        animate={activeCoin >= 8 ? "visible" : "hidden"}
      />
      <motion.path
        id="Pfad9.2"
        d="M1499.12 1026.89c-6.85-2.51 7.34-23.01 8.47-28.79.65-2.22 2.99-3.77 5.26-2.78 1.86.79 2.82 3.04 2 4.91-3.55 4.87-9.27 29.76-15.73 26.66"
        variants={pathVariants}
        initial="hidden"
        animate={activeCoin >= 8 ? "visible" : "hidden"}
      />

    <motion.path
      id="Pfad10.1"
      d="M1585.7 830.97c-4.54-5.98 9.83-12.27 12.98-16.74 4.75-4.19 9.5-8.37 14.25-12.55l-.03.03c-.06.05-.11.1-.16.15 7.08-8.51 14.15-.02 4.81 5.73l.24-.21.03-.03c-4.72 4.16-9.45 8.32-14.17 12.48.06-.05.11-.1.17-.14.02-.02.04-.04.13-.11-4.83 2.68-12.81 15.59-18.25 11.39"
      variants={pathVariants}
      initial="hidden"
      animate={activeCoin >= 9 ? "visible" : "hidden"}
    />
    <motion.path
      id="Pfad10.2"
      d="M1649.36 774.9c-5.05-5.26 11.26-13.69 14.2-17.81 4.02-3.54 7.87-6.93 11.87-10.45 2.49-1.74 4.37-5.03 7.54-5.4 8.19 1.77.91 8.55-2.57 11-3.81 3.36-7.32 6.46-10.88 9.59-4.57 2.61-15.81 17.86-20.16 13.07"
      variants={pathVariants}
      initial="hidden"
      animate={activeCoin >= 9 ? "visible" : "hidden"}
    />
    <motion.path
      id="Pfad10.3"
      className="st0"
      d="M1740.46 739.24c-.27-1.96 1.17-4.04 3.21-4.23 7.68.79 53.86-8.78 52.91-1.31.27 1.96-1.17 4.04-3.21 4.23-7.67-.78-53.86 8.78-52.91 1.31z"
      variants={pathVariants}
      initial="hidden"
      animate={activeCoin >= 9 ? "visible" : "hidden"}
    />
  </svg>
);
export default SvgPfad2;
