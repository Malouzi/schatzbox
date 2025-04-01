//Pfad3.jsx

import React from "react"; 
import { motion } from "framer-motion";



const groupVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: { 
    opacity: 1, 
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" }
  },
};



const SVGPfad3 = ({activeCoin, coinsTotal, ...props }) => (
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
    <style type="text/css">{".st0{fill:none;}"}</style>
    <motion.g
      initial="hidden"
      animate={activeCoin >= 0 ? "visible" : "hidden"}
      variants={groupVariants}
    >
    <motion.path
      id="Pfad1.0"
      d="M499.74 623.05c-9.18-13.6 10.83-21.45 18.71-29.32l33.87-27.3c11.49-9.07 25.52 9.02 13.84 17.93-15.29 12.33-30.59 24.65-45.88 36.98-5.44 5.9-14.84 9.11-20.54 1.71"
      fill="#59270A"               //Linienfüllung
      stroke="#59270A"                // Linienfarbe
      strokeWidth="2"                 //Liniendicke
      />
    <motion.path
    id="Pfad1.1"
    d="M427.37 681.38c-4.69-5.98-1.8-13.93 4.24-17.65 10.94-8.82 21.89-17.64 32.83-26.45 4.9-5.31 13.65-5.81 18.21.17 3.83 4.96 2.75 12.02-2.05 15.89-11.7 9.42-23.39 18.85-35.08 28.28-4.89 5.25-13.59 5.72-18.15-.24"
    fill="#59270A"               
    stroke="#59270A"                
    strokeWidth="2" 
    /> </motion.g>

<motion.g
      initial="hidden"
      animate={activeCoin >= 1 ? "visible" : "hidden"}
      variants={groupVariants}
    >
    <motion.path
      id="Pfad2.0"
      d="M217.53 881.19c-4.89-3.78-5.8-10.99-2.04-15.89 10.78-14.07 21.57-28.12 32.36-42.18 4.76-7.34 12.69-16.88 21.89-9.88 4.89 3.78 5.8 10.99 2.05 15.89-11.74 15.3-23.48 30.61-35.22 45.91-3.8 6.79-12.08 11.6-19.04 6.15"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
       
    />
    <motion.path
      id="Pfad2.1"
      d="M169.74 943.49c-4.91-3.79-5.79-10.98-2.05-15.89 8.42-11.05 16.91-22.04 25.36-33.06 3.75-4.89 11.02-5.81 15.89-2.05 4.89 3.78 5.8 10.99 2.05 15.89-8.46 11.02-16.95 22.02-25.36 33.06-3.75 4.93-11.05 5.79-15.89 2.05"
      fill="#59270A"               
       stroke="#59270A"                
       strokeWidth="2" 
        
    />
    </motion.g>
    <motion.g
      initial="hidden"
      animate={activeCoin >= 2 ? "visible" : "hidden"}
      variants={groupVariants}
    >
    <motion.path
      id="Pfad3.0"
      d="M159.43 1167c-6.51-17.16-13.01-34.32-19.52-51.49-1.22-2.99-1.46-6.24-.17-9.26 3.42-8.99 17.49-9.11 20.87 0 6.44 17.05 12.92 34.09 19.38 51.14 6.91 13.54-14.75 23.69-20.56 9.61"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
      
    />
    <motion.path
      id="Pfad3.1"
      d="M201.89 1279.05c-7.14-18.88-14.3-37.75-21.46-56.62-3.59-7.66-7.41-19.01 2.83-23.27 5.52-2.34 12.66.26 14.85 6.03 7.16 18.91 14.33 37.81 21.49 56.72 12.15 20.25-8.22 32.88-17.71 17.14"
      fill="#59270A"               
       stroke="#59270A"                
       strokeWidth="2" 
/> </motion.g>

<motion.g
      initial="hidden"
      animate={activeCoin >= 3 ? "visible" : "hidden"}
      variants={groupVariants}
    >
    <motion.path
      id="Pfad4.0"
      d="M414.22 1431.22c-24.19-4.33-48.41-8.51-72.58-12.91-9.46-2.17-11.2-16.16-2.71-20.7 2.46-1.44 5.22-1.79 7.25-1.44 18.01 3.1 35.99 6.38 53.98 9.58 8.04 2.36 18.53.71 24.55 7.34 6.26 7.48-.88 19.93-10.49 18.13"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
    />
    <motion.path
      id="Pfad4.1"
      d="M532.25 1452.17c-20.32-3.61-40.64-7.21-60.96-10.82-7.81-.4-17.04-4.49-15.61-13.81.81-5.93 6.68-10.77 12.76-9.69 19.34 3.43 38.68 6.86 58.03 10.3 24.2.08 23.73 24.11 5.78 24.02"
      fill="#59270A"               
       stroke="#59270A"                
       strokeWidth="2" 
       
    />
    </motion.g>

    <motion.g
      initial="hidden"
      animate={activeCoin >= 4 ? "visible" : "hidden"}
      variants={groupVariants}
    >
    <motion.path
      id="Pfad5.0"
      d="M739.15 1367.42c-5.38-3.02-7.12-10.22-4.07-15.5 7.56-14.74 15.25-29.42 22.86-44.13 4.48-8.62 18.52-6.65 20.7 2.71.83 3.04.28 5.98-1.14 8.73-7.62 14.71-15.3 29.39-22.86 44.13-2.85 5.35-10.36 7.2-15.49 4.06"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
      
    />
    <motion.path
      id="Pfad5.1"
      d="M795.88 1257.91c-5.37-3.02-7.13-10.24-4.06-15.5 8.83-17.01 17.64-34.04 26.45-51.06 2.84-11.41 19.45-13.47 22.85-1.45.84 3.03.28 5.98-1.14 8.73-8.79 16.96-17.57 33.92-26.36 50.87-2.38 7.48-10.35 12.76-17.74 8.41"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
        
    /> </motion.g>

<motion.g
      initial="hidden"
      animate={activeCoin >= 5 ? "visible" : "hidden"}
      variants={groupVariants}
    >
    <motion.path
      id="Pfad6.0"
      d="M970.69 965.31c-5.15-3.02-7.41-10.31-4.06-15.5l33.54-51.96c2.58-3.92 4.83-8.67 9.79-9.89 9.29-2.94 18.16 8.37 12.79 16.64-11.02 17.07-22.04 34.14-33.07 51.22-3.49 7.11-10.7 14.51-18.99 9.49"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
      
    />
    <motion.path
      id="Pfad6.1"
      d="M1031.37 871.31c-5.62-3.26-7.55-11.39-3.34-16.59 9.48-14.49 18.77-29.09 28.16-43.64 1.62-2.5 3.85-4.4 6.77-5.21 9.29-2.94 18.16 8.37 12.79 16.64-9.62 14.91-19.15 29.89-28.88 44.74-3.08 5.26-10.24 7.27-15.5 4.06"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
      
    /> </motion.g>

<motion.g
      initial="hidden"
      animate={activeCoin >= 6 ? "visible" : "hidden"}
      variants={groupVariants}
    >
    <motion.path
      id="Pfad7.0"
      d="M1220.45 723.41c-14.85.52-15.2-22.76-.33-22.66h41.99c14.65-.12 14.67 22.78 0 22.66z"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
 />
    <motion.path
      id="Pfad7.1"
      d="M1307.16 723.41c-15.4 1-16.49-22.35-1.03-22.66h45.03c14.65-.12 14.68 22.78 0 22.66z"
      fill="#59270A"               
       stroke="#59270A"                
       strokeWidth="2" 
       
    /> </motion.g>

<motion.g
      initial="hidden"
      animate={activeCoin >= 7 ? "visible" : "hidden"}
      variants={groupVariants}
    >
    <motion.path
      id="Pfad8.0"
      d="M1447 890.4c-7.3-.86-11.54-8.81-9.15-15.55 3.64-18.89 7.25-37.78 10.88-56.67.55-3.65 1.61-7.28 4.71-9.59 7.52-6.25 19.9.84 18.14 10.5-3.68 19.24-7.39 38.47-11.08 57.71-.37 7.31-5.33 14.9-13.5 13.6"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
     />
    <motion.path
      id="Pfad8.1"
      d="M1420.71 1027.31c-14.75-2.59-8.29-19.09-6.56-29.05 3.29-17.13 6.58-34.27 9.87-51.41.52-3.51 1.67-6.91 4.62-9.12 7.52-6.26 19.9.84 18.14 10.5-3.4 17.73-6.81 35.45-10.21 53.18-2.47 9.73-1.47 27.4-15.86 25.9"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
       
    /> </motion.g>

<motion.g
      initial="hidden"
      animate={activeCoin >= 8 ? "visible" : "hidden"}
      variants={groupVariants}

    >
    <motion.path
      id="Pfad9.0"
      d="M1483.48 1289.24c-11.56-4.02-17.09-17.87-25.82-26-7.04-10.19-30.17-26.26-11.92-36.78 14.28-4.55 20.78 15.16 29.78 22.85 6.16 7.26 12.31 14.52 18.47 21.78 6.36 7.49-.93 19.85-10.51 18.15"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
      
    />
    <motion.path
      id="Pfad9.1"
      d="M1566.34 1386.97c-3.03-.41-5.49-2.01-7.43-4.3-12.36-14.58-24.74-29.14-37.08-43.73-6.51-7.45.77-19.96 10.41-18.25 3.02.41 5.49 2.01 7.43 4.3 11.99 14.17 24 28.31 36 42.46 7.99 7.13 1.19 21.3-9.33 19.52"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
   
    /> </motion.g>

<motion.g
      initial="hidden"
      animate={activeCoin >= 9 ? "visible" : "hidden"}
      variants={groupVariants}
    >
    <motion.path
      id="Pfad10.0"
      d="M1695.36 1378.94c-6.17-2.58-8.95-10.56-5.32-16.34 7.41-15.63 14.82-31.26 22.24-46.89 1.27-2.69 3.25-4.86 6.03-6.03 8.84-4.13 19.1 5.94 14.84 14.84-7.47 15.75-14.93 31.51-22.41 47.26-2.14 6.17-9.25 9.91-15.38 7.16"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
     />
    <motion.path
      id="Pfad10.1"
      d="M1734.16 1297.1c-6.19-2.59-8.96-10.61-5.29-16.38 7.64-16.05 15.23-32.13 22.85-48.2 1.28-2.69 3.25-4.85 6.03-6.03 8.84-4.13 19.11 5.94 14.85 14.84-7.71 16.26-15.39 32.53-23.13 48.77-2.17 6.1-9.25 9.71-15.31 7"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
     
    /> </motion.g>
    {activeCoin === coinsTotal && (
     <motion.g
      initial="hidden"
      animate="visible"
      variants={groupVariants}
    >
    <motion.path
      id="Pfad11.0"
      d="M1859.03 1030.43c-5.58-4.12-5.52-12.21-1.15-17.19 8.95-9.17 16.21-36.92 32.69-26.59 13.63 11.36-10.36 30.37-15.65 41.74-3.52 5.06-11.19 5.68-15.89 2.04"
      fill="#59270A"               
      stroke="#59270A"                
      strokeWidth="2" 
    /> </motion.g>
    )}

  </svg>
);
export default SVGPfad3;
