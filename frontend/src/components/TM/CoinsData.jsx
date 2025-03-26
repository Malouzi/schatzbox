// CoinsData.jsx

import coinImg from '../../assets/Coin.svg';

const coinsData = [
    {
      id: "Coin1",
      imageSrc: coinImg,
      transform: "matrix(0.1704 0 0 0.1704 125 520)",
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
      imageSrc: coinImg,
      transform: "matrix(0.1704 0 0 0.1704 -70 805)",
      riddle: {
        text: "Welches Tier hat einen Rüssel?",
        options: [
          { label: "Ein Löwe", correct: false },
          { label: "Ein Elefant", correct: true },
          { label: "Ein Vogel", correct: false }
        ]
      }
    },
    {
      id: "Coin3",
      imageSrc: coinImg,
      transform: "matrix(0.1704 0 0 0.1704 17 1138)",
      riddle: {
        text: "Was wird beim Trocknen nass?",
        options: [
          { label: "Ein Schwamm", correct: false },
          { label: "Ein Fön", correct: false },
          { label: "Ein Handtuch", correct: true }
        ]
      }
    },
    {
      id: "Coin4",
      imageSrc: coinImg,
      transform: "matrix(0.1704 0 0 0.1704 450 1190)",
      riddle: {
        text: "Was hat viele Schlüssel, aber kann keine Türen öffnen?",
        options: [
          { label: "Ein Schloss", correct: false },
          { label: "Ein Klavier", correct: true },
          { label: "Eine Tastatur", correct: false }
        ]
      }
    },
    {
      id: "Coin5",
      imageSrc: coinImg,
      transform: "matrix(0.1704 0 0 0.1704 680 850)",
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
      imageSrc: coinImg,
      transform: "matrix(0.1704 0 0 0.1704 910 515)",
      riddle: {
        text: "Was kann man brechen, ohne es in die Hand zu nehmen?",
        options: [
          { label: "Ein Glas", correct: false },
          { label: "Ein Stift", correct: false },
          { label: "Ein Versprechen", correct: true }
        ]
      }
    },
    {
      id: "Coin7",
      imageSrc: coinImg,
      transform: "matrix(0.1704 0 0 0.1704 1205 520)",
      riddle: {
        text: "Was hat einen Hals, aber keinen Kopf?",
        options: [
          { label: "Ein Elefant", correct: false },
          { label: "Ein Baum", correct: false },
          { label: "Eine Flasche", correct: true }
        ]
      }
    },
    {
      id: "Coin8",
      imageSrc: coinImg,
      transform: "matrix(0.1704 0 0 0.1704 1220 920)",
      riddle: {
        text: "Was läuft, ohne zu gehen?",
        options: [
          { label: "Ein Auto", correct: false },
          { label: "Ein Fluss", correct: true },
          { label: "Eine Uhr", correct: false }
        ]
      }
    },
    {
      id: "Coin9",
      imageSrc: coinImg,
      transform: "matrix(0.1704 0 0 0.1704 1445 1205)",
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
      imageSrc: coinImg,
      transform: "matrix(0.1704 0 0 0.1704 1600 910)",
      riddle: {
        text: "Was kommt einmal in einer Minute, zweimal in einem Moment, aber nie in tausend Jahren?",
        options: [
          { label: "Der Tag", correct: false },
          { label: "Der Buchstabe M", correct: true },
          { label: "Die Stunde", correct: false }
        ]
      }
    }
  ];
  

         
          

export default coinsData;
