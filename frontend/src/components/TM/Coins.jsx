
// Coins.jsx

import React, { useState, useEffect } from 'react';
import Coin from './Coin.jsx';
import coinsData from './CoinsData.jsx';
import CoinRiddle from './CoinRiddle.jsx';
import Overlay from './Overlay.jsx';


//lokale Verwaltung des activecoin nur hier in der Coins.jsx
/*const Coins = () => {
  const [activeCoin, setActiveCoin] = useState(0);
  const [showRiddle, setShowRiddle] = useState(false);*/

  //ausgelagert in die TM komponente u deswegen state lifting damit 
  //sie als props an die TM.jsx übergeben werden

  const Coins = ({ activeCoin, setActiveCoin }) => {
    const [showRiddle, setShowRiddle] = useState(false);
    const [showCoin, setShowCoin] = useState(false);

      // WZeitverzögerung für erst den Pfad anzeigen dann die Münze
  useEffect(() => {
    setShowCoin(false);
    // Verzögerung passend zur PfadAnimation
    const timer = setTimeout(() => {
      setShowCoin(true);
    }, 2100);
    return () => clearTimeout(timer);
  }, [activeCoin]);

  const handleCoinClick = (index) => {
    if (index === activeCoin) {
      setShowRiddle(true);
    }
  };


  const handleRiddleSolved = () => {
    setShowRiddle(false);
    if (activeCoin < coinsData.length) {
      setActiveCoin(activeCoin + 1);
    }
  };


  return (
    <>
      {/* Statt einem eigenen SVG, nur eine Gruppe innerhalb des übergeordneten SVG's */}
      <g id="coins" style={{ pointerEvents: 'all' }}>
        {coinsData.map((coin, index) => {
          if (index > activeCoin) return null;
          if (index === activeCoin && !showCoin) return null;
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





