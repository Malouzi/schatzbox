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
          { label: "Ein Tiger", correct: false },
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
        text: "Was ist süss, kalt und schmilzt in der Sonne?",
        options: [
          { label: "Popcorn", correct: false },
          { label: "Eis", correct: true },
          { label: "Käsebrot", correct: false }
        ]
      }
    },
    {
      id: "Coin5",
      imageSrc: coinImg,
      transform: "matrix(0.1704 0 0 0.1704 680 850)",
      riddle: {
        text: "Wer scheint in der Nacht?",
        options: [
          { label: "Der Mond", correct: true },
          { label: "Die Sonne", correct: false },
          { label: "Die Planeten", correct: false }
        ]
      }
    },
    {
      id: "Coin6",
      imageSrc: coinImg,
      transform: "matrix(0.1704 0 0 0.1704 910 515)",
      riddle: {
        text: "Was fehlt bei diesem Kinderlied? Laterne, Laterne, Sonne, Mond und ...",
        options: [
          { label: "Wolken", correct: false },
          { label: "Flugzeug", correct: false },
          { label: "Sterne", correct: true }
        ]
      }
    },
    {
      id: "Coin7",
      imageSrc: coinImg,
      transform: "matrix(0.1704 0 0 0.1704 1205 520)",
      riddle: {
        text: "Wer legt Geschenke in die Stiefel?",
        options: [
          { label: "Der Weihnachtsmann", correct: false },
          { label: "Der Osterhase", correct: false },
          { label: "Der Nikolaus", correct: true }
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
