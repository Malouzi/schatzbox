import "./Welcome.css";
import Kindergeburtstag from "../../assets/Bild-Header.png";

export function Welcome() {
  return (
    <>
    <div>
        <img className="header-bild" src={Kindergeburtstag} alt="" />
      <h1>Willkommen bei Schatzbox</h1>
      <h4>Plane den perfekten Kindergeburtstag mit unseren spannenden
      Schatzsuch-Vorlagen!</h4>
      <p>
        Bei uns findest du liebevoll gestaltete Abenteuer,
        die Du mit einem Mausklick kaufen, downloaden und ausdrucken kannst. Ob
        Piraten, Detektive oder magische Welten – wir haben die passende
        Schatzsuche für jedes Kind! Unsere Schatzboxen sind entweder nach Thema
        wählbar oder wir stellen individuell für Euch eine Schatzsuche nach ganz
        ersönlichen Wünschen. Nutze dafür unsere individuelle Schatzsuche.
        
        <ul>
          <li>Sofort-Download - Direkt nach dem Kauf verfügbar</li>
          <li>Einfache Anleitung - Schnell vorbereitet & los geht’s </li>
          <li>Perfekt für drinnen & draußen –Flexible Nutzung</li>
        </ul>
        
        Entdecke jetzt die passende Schatzsuche für Deine
        Liebsten und machen nächsten Kindergeburtstag zu einem unvergesslichen
        Erlebnis!
      </p>

    </div>
    </>
  );
}
/*Listen-Elemente müssen noch gestylt werden. 
Vor dem Bindestrich fett und vielleicht ein Haken davor?*/
