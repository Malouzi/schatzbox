import "./Welcome.css";
import Kindergeburtstag from "../../assets/Bild-Header.png";

export default function Welcome() {
  return (
    <>
    <div className="welcome-container">
        <img className="header-bild" src={Kindergeburtstag} alt="Kindergeburtstag Schatzsuche" />
        <div className="header-text">

      <h1>Willkommen bei Schatzbox</h1>
      <h4>Plane den perfekten Kindergeburtstag mit unseren spannenden Schatzsuch-Vorlagen!</h4>
      <p>
        Bei uns findest du liebevoll gestaltete Abenteuer,
        die Du mit einem Mausklick kaufen, downloaden und ausdrucken kannst. Ob
        Piraten, Detektive oder magische Welten – wir haben die passende
        Schatzsuche für jedes Kind! Unsere Schatzboxen sind entweder nach Thema
        wählbar oder wir stellen individuell für Euch eine Schatzsuche nach ganz
        ersönlichen Wünschen. Nutze dafür unsere individuelle Schatzsuche.
        </p>
        
        <ul>
          <li><strong>Sofort-Download</strong> - Direkt nach dem Kauf verfügbar</li>
          <li><strong>Einfache Anleitung</strong> - Schnell vorbereitet & los geht&#39;s</li>
          <li><strong>Perfekt für drinnen & draußen</strong> - Flexible Nutzung</li>
        </ul>
        
        <p>
        Entdecke jetzt die passende Schatzsuche für Deine
        Liebsten und machen nächsten Kindergeburtstag zu einem unvergesslichen
        Erlebnis!
        </p>
      
        </div>

    </div>
    </>
  );
}
