import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import HeaderVar1 from "../../assets/Header-var1.jpg";
import HeaderVar3 from "../../assets/Header-var3.jpg";
import HeaderVar4 from "../../assets/Header-var4.jpg";
import styles from './Welcome.module.css';

export default function Welcome() {
  const images = [HeaderVar1, HeaderVar3, HeaderVar4]; 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  
    autoplaySpeed: 3000, 
    fade: true, 
    arrows: false,
    pauseOnHover: true, 
    customPaging: () => (
      <div className={styles.customDot}></div>
    ),
  };

  return (
    <>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className={styles.slide}>
              <img src={image} alt="Slideshow" className={styles.sliderImage} />
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles.container1}>
        <h1>Willkommen bei Schatzbox</h1>
        <h2>
          Plane den perfekten Kindergeburtstag mit unseren spannenden
          Schatzsuch-Vorlagen!
        </h2>
        <p>
          Bei uns findest du liebevoll gestaltete Abenteuer, die Du mit einem
          Mausklick kaufen, downloaden und ausdrucken kannst. Ob Piraten,
          Detektive oder magische Welten – wir haben die passende Schatzsuche
          für jedes Kind! Unsere Schatzboxen sind entweder nach Thema wählbar
          oder wir stellen individuell für Euch eine Schatzsuche nach ganz
          ersönlichen Wünschen. Nutze dafür unsere individuelle Schatzsuche.
        </p>

        <p>
          Entdecke jetzt die passende Schatzsuche für Deine Liebsten und
          machen nächsten Kindergeburtstag zu einem unvergesslichen Erlebnis!
        </p>
      </div>

      <div className={styles.container2}>
        <h1>Und so einfach funkioniert's:</h1>
          <ul className={styles.listWelcome}>
            <li>
              <strong>Sofort-Download</strong> - Direkt nach dem Kauf
              verfügbar
            </li>
            <li>
              <strong>Einfache Anleitung</strong> - Schnell vorbereitet & los
              geht&#39;s
            </li>
            <li>
              <strong>Perfekt für drinnen & draußen</strong> - Flexible
              Nutzung
            </li>
          </ul>
      </div>
    </>
  );
}



// import Kindergeburtstag from "../../assets/Bild-Header.png";
// import styles from './Welcome.module.css'

// export default function Welcome() {
//   return (
//     <>
//       <div>
//         <img className={styles.header} src={Kindergeburtstag} alt="Kindergeburtstag Schatzsuche" />

//         <div className={styles.container1}>
//           <h1>Willkommen bei Schatzbox</h1>
//           <h2>
//             Plane den perfekten Kindergeburtstag mit unseren spannenden
//             Schatzsuch-Vorlagen!
//           </h2>
//           <p>
//             Bei uns findest du liebevoll gestaltete Abenteuer, die Du mit einem
//             Mausklick kaufen, downloaden und ausdrucken kannst. Ob Piraten,
//             Detektive oder magische Welten – wir haben die passende Schatzsuche
//             für jedes Kind! Unsere Schatzboxen sind entweder nach Thema wählbar
//             oder wir stellen individuell für Euch eine Schatzsuche nach ganz
//             ersönlichen Wünschen. Nutze dafür unsere individuelle Schatzsuche.
//           </p>

//           <p>
//             Entdecke jetzt die passende Schatzsuche für Deine Liebsten und
//             machen nächsten Kindergeburtstag zu einem unvergesslichen Erlebnis!
//           </p>
//         </div>

//         <div className={styles.container2}>
//           <h1>Und so einfach funkioniert's:</h1>
//           <p>
//             <ul className={styles.listWelcome}>
//               <li>
//                 <strong>Sofort-Download</strong> - Direkt nach dem Kauf
//                 verfügbar
//               </li>
//               <li>
//                 <strong>Einfache Anleitung</strong> - Schnell vorbereitet & los
//                 geht&#39;s
//               </li>
//               <li>
//                 <strong>Perfekt für drinnen & draußen</strong> - Flexible
//                 Nutzung
//               </li>
//             </ul>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
