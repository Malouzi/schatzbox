import React, { useState } from 'react';
import Coins from './Coins.jsx';
import TreasureChest from './TreasureChest.jsx';
import coinsData from './CoinsData.jsx';

const App = () => {
  const [activeCoin, setActiveCoin] = useState(0);

  const handleCoinSolved = () => {
    if (activeCoin < coinsData.length) {
      setActiveCoin(activeCoin + 1);
    }
  };

  const solvedAll = activeCoin === coinsData.length;

  return (
    <div>
      {/* Coins-Komponente, die auch den aktuellen Zustand und die Lösungsmethode weitergibt */}
      <Coins activeCoin={activeCoin} onCoinSolved={handleCoinSolved} />
      
      {/* Schatztruhe, die den Zustand solvedAll kennt und den Rabattcode anzeigen kann */}
      <TreasureChest solvedAll={solvedAll} discountCode="DEIN-RABATTCODE" />
    </div>
  );
};

export default App;
