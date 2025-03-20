// Coins.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CoinFlipCard from './CoinFlipCard';

const coinsData = [
    {
      id: "Coin1",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAEAAAQBCAYAAABbg5MYAAAACXBIWXMA...", // vollständiger Base64-Code hier
      transform: "matrix(0.1704 0 0 0.1704 252 634)",
      riddle: {
        text: "Was hat vier Beine, aber kann nicht laufen?",
        options: [
          { label: "Ein Tisch", correct: true },
          { label: "Ein Stuhl", correct: false },
          { label: "Ein Hund", correct: false }
        ]
      }
    },
    {
      id: "Coin2",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAEAAAQBCAYAAABbg5MYAAAACXBIWXMA...",
      transform: "matrix(0.1704 0 0 0.1704 26 928)",
      riddle: {
        text: "Welches Tier hat einen Rüssel?",
        options: [
          { label: "Ein Elefant", correct: true },
          { label: "Ein Löwe", correct: false },
          { label: "Ein Vogel", correct: false }
        ]
      }
    },
    {
      id: "Coin3",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAEAAAQBCAYAAABbg5MYAAAACXBIWXMA...",
      transform: "matrix(0.1704 0 0 0.1704 100 700)",
      riddle: {
        text: "Was wird beim Trocknen nass?",
        options: [
          { label: "Ein Handtuch", correct: true },
          { label: "Ein Schwamm", correct: false },
          { label: "Ein Fön", correct: false }
        ]
      }
    },
    {
      id: "Coin4",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAEAAAQBCAYAAABbg5MYAAAACXBIWXMA...",
      transform: "matrix(0.1704 0 0 0.1704 150 750)",
      riddle: {
        text: "Was hat viele Schlüssel, aber kann keine Türen öffnen?",
        options: [
          { label: "Ein Klavier", correct: true },
          { label: "Ein Schloss", correct: false },
          { label: "Eine Tastatur", correct: false }
        ]
      }
    },
    {
      id: "Coin5",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAEAAAQBCAYAAABbg5MYAAAACXBIWXMA...",
      transform: "matrix(0.1704 0 0 0.1704 200 800)",
      riddle: {
        text: "Was hat einen Kopf und einen Fuß, aber keinen Körper?",
        options: [
          { label: "Ein Bett", correct: true },
          { label: "Ein Mensch", correct: false },
          { label: "Ein Stuhl", correct: false }
        ]
      }
    },
    {
      id: "Coin6",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAEAAAQBCAYAAABbg5MYAAAACXBIWXMA...",
      transform: "matrix(0.1704 0 0 0.1704 250 850)",
      riddle: {
        text: "Was kann man brechen, ohne es in die Hand zu nehmen?",
        options: [
          { label: "Ein Versprechen", correct: true },
          { label: "Ein Glas", correct: false },
          { label: "Ein Stift", correct: false }
        ]
      }
    },
    {
      id: "Coin7",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAEAAAQBCAYAAABbg5MYAAAACXBIWXMA...",
      transform: "matrix(0.1704 0 0 0.1704 300 900)",
      riddle: {
        text: "Was hat einen Hals, aber keinen Kopf?",
        options: [
          { label: "Eine Flasche", correct: true },
          { label: "Ein Elefant", correct: false },
          { label: "Ein Baum", correct: false }
        ]
      }
    },
    {
      id: "Coin8",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAEAAAQBCAYAAABbg5MYAAAACXBIWXMA...",
      transform: "matrix(0.1704 0 0 0.1704 350 950)",
      riddle: {
        text: "Was läuft, ohne zu gehen?",
        options: [
          { label: "Ein Fluss", correct: true },
          { label: "Ein Auto", correct: false },
          { label: "Eine Uhr", correct: false }
        ]
      }
    },
    {
      id: "Coin9",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAEAAAQBCAYAAABbg5MYAAAACXBIWXMA...",
      transform: "matrix(0.1704 0 0 0.1704 400 1000)",
      riddle: {
        text: "Was hat Flügel, aber kann nicht fliegen?",
        options: [
          { label: "Ein Pinguin", correct: true },
          { label: "Ein Adler", correct: false },
          { label: "Ein Schmetterling", correct: false }
        ]
      }
    },
    {
      id: "Coin10",
      imageSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAEAAAQBCAYAAABbg5MYAAAACXBIWXMA...",
      transform: "matrix(0.1704 0 0 0.1704 450 1050)",
      riddle: {
        text: "Was kommt einmal in einer Minute, zweimal in einem Moment, aber nie in tausend Jahren?",
        options: [
          { label: "Der Buchstabe M", correct: true },
          { label: "Der Tag", correct: false },
          { label: "Die Stunde", correct: false }
        ]
      }
    }
  ];
  

const Coins = () => {
  const [activeCoin, setActiveCoin] = useState(0);

  // Sobald das Rätsel der aktiven Münze gelöst wurde, wird diese Funktion aufgerufen
  const handleCoinSolved = () => {
    if (activeCoin < coinsData.length - 1) {
      setActiveCoin(activeCoin + 1);
    }
  };

  return (
    <motion.svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0"
      y="0"
      width="2360px"
      height="1640px"
      viewBox="0 0 2360 1640"
      style={{ enableBackground: 'new 0 0 2360 1640' }}
      xmlSpace="preserve"
    >
      <g id="Münzen">
        {coinsData.map((coin, index) => {
          // Zeige Münzen nur, wenn ihr Index <= activeCoin ist
          if (index <= activeCoin) {
            return (
              // hier <foreignObject> verwendet, weil ich CSS innerhalb eines SVGs anwenden
              <foreignObject key={coin.id} x={index * 300} y={100} width="300" height="400">
                <CoinFlipCard
                  coinData={coin}
                  active={index === activeCoin}
                  onSolved={handleCoinSolved}
                />
              </foreignObject>
            );
          }
          return null;
        })}
      </g>
    </motion.svg>
  );
};

export default Coins;
