// Coin.jsx - VORSICHT die Coin nicht Coins Kompoenente
//zum rendern der münzen als reines SVG Element um foreignObject zu umgehen weil es nicht
//funktioniert hat. import erfolgt in CoinsData und wir hier nur als Prop übergeben. 

import React from 'react';

const Coin = ({ transform, imageSrc, onClick }) => {
  return (
    <g transform={transform} onClick={onClick} style={{ cursor: 'pointer' }}>
      <image
        href={imageSrc}
        width="200"  //  Größe noch anpassen
        height="200"
        style={{ pointerEvents: 'all' }}
      />
    </g>
  );
};

export default Coin;
