
// Coins.jsx

import React, { useState } from 'react';
import Coin from './Coin.jsx';
import coinsData from './CoinsData.jsx';
import CoinRiddle from './CoinRiddle.jsx';
import Overlay from './Overlay.jsx';

const Coins = () => {
  const [activeCoin, setActiveCoin] = useState(0);
  const [showRiddle, setShowRiddle] = useState(false);

  const handleCoinClick = (index) => {
    if (index === activeCoin) {
      setShowRiddle(true);
    }
  };

  const handleRiddleSolved = () => {
    setShowRiddle(false);
    if (activeCoin < coinsData.length - 1) {
      setActiveCoin(activeCoin + 1);
    }
  };

  return (
    <>
      {/* Statt einem eigenen SVG, nur eine Gruppe innerhalb des übergeordneten SVG's */}
      <g id="coins" style={{ pointerEvents: 'all' }}>
        {coinsData.map((coin, index) => {
          if (index > activeCoin) return null;
          return (
            <Coin
              key={coin.id}
              transform={coin.transform}
              imageSrc={coin.imageSrc}
              onClick={() => handleCoinClick(index)}
            />
          );
        })}
      </g>

      {/* HTML Overlay außerhalb des SVG */}
      {showRiddle && (
        <Overlay onClose={() => setShowRiddle(false)}>
          <CoinRiddle
            questionData={coinsData[activeCoin].riddle}
            onSolved={handleRiddleSolved}
          />
        </Overlay>
      )}
    </>
  );
};

export default Coins;





/* 
Hier rendere ich die aktiven Münzen als SVG-Elemente ( <g>) direkt im SVG.
 Das Overlay ( Rätsel) kann ich aber als separates HTML-Komponente ( Modal) außerhalb des
  SVGs dargestellt. So kann ich die HTML-Inhalte besser stylen
   und interaktiv machen? so die theorie. ;) 


import React, { useState } from 'react';
import Coin from './Coin.jsx';
import coinsData from './CoinsData.jsx';
import CoinRiddle from './CoinRiddle.jsx';
import Overlay from './Overlay.jsx';

const Coins = () => {
  const [activeCoin, setActiveCoin] = useState(0);
  const [showRiddle, setShowRiddle] = useState(false);

  const handleCoinClick = (index) => {
    if (index === activeCoin) {
      setShowRiddle(true);
    }
  };

  const handleRiddleSolved = () => {
    setShowRiddle(false);
    if (activeCoin < coinsData.length - 1) {
      setActiveCoin(activeCoin + 1);
    }
  };

  return (
    <>
      {/* SVG mit Münzen 
      <svg viewBox="0 0 2360 1640" xmlns="http://www.w3.org/2000/svg">
        <g id="coins" transform="translate(60,60)">
          {coinsData.map((coin, index) => {
            if (index > activeCoin) return null;
            return (
              <Coin
                key={coin.id}
                transform={coin.transform}
                imageSrc={coin.imageSrc}
                onClick={() => handleCoinClick(index)}
              />
            );
          })}
        </g>
      </svg>

      {/* HTML Overlay als separater Teil der Komponente 
      {showRiddle && (
        <Overlay onClose={() => setShowRiddle(false)}>
          <CoinRiddle
            questionData={coinsData[activeCoin].riddle}
            onSolved={handleRiddleSolved}
          />
        </Overlay>
      )}
    </>
  );
};

export default Coins;

*/


/*

import React, { useState } from 'react';
import CoinRiddle from './CoinRiddle.jsx';
import coinsData  from './CoinsData.jsx';
im

const Coins = () => {
  const [activeCoin, setActiveCoin] = useState(0);

  const handleCoinSolved = () => {
    if (activeCoin < coinsData.length - 1) {
      setActiveCoin(activeCoin + 1);
    }
  };

  return (
    <g id="coins" transform="translate(60,60)">
      {coinsData.map((coin, index) => {
        //Nur aktive Münzen rendern sprich index <= activeCoin
        if (index > activeCoin) return null; 
      return (
<foreignObject 
          key={coin.id}  
          width="300" 
          height="400" 
          transform={coin.transform}
          overflow="visible"
          style ={{ pointerEvents: 'all', border: '1px solid red' }}
        >
                     {/* Innerer Container übernimmt den Transform, so bleiben Interaktionen erhalten 
                     <div style={{ transform: coin.transform, transformOrigin: 'top left' }}> 
          <CoinRiddle
            questionData={coin.riddle}
            active={index === activeCoin}
            onSolved={handleCoinSolved}
          />
          </div>
        </foreignObject> 
      );
})}
    </g>
  );
};

export default Coins; */



