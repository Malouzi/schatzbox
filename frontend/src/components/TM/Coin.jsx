// Coin.jsx - VORSICHT die Coin nicht Coins Kompoenente
//zum rendern der münzen als reines SVG Element um foreignObject zu umgehen weil es nicht
//funktioniert hat. import erfolgt in CoinsData und wir hier nur als Prop übergeben. 

import React from 'react';

const Coin = ({ transform, imageSrc, onClick }) => {
  return (
   
     

   <g transform={transform} onClick={onClick} style={{ cursor: 'pointer', pointerEvents: 'all' }}>
      <image
        href={imageSrc}   //oder xlinkHref ???
        width="2500"  //  Größe HIER anpassen
        height="2500"
        style={{ pointerEvents: 'all' }}
      />
    </g> 
);
}; 

export default Coin; 

   /* <g transform={transform} style={{ cursor: 'pointer', pointerEvents: 'all' }}>
  <image
    href={imageSrc}
    width="2500"
    height="2500"
    style={{ pointerEvents: 'all' }}
    onClick={() => console.log("Image clicked")}
  />
</g> */
