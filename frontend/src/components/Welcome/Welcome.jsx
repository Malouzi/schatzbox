import Kindergeburtstag from "../../assets/Bild-Header.png";
import styles from './Welcome.module.css'

export default function Welcome() {
  return (
    <>
      <div>
        <img className={styles.header} src={Kindergeburtstag} alt="Kindergeburtstag Schatzsuche" />

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
          <p>
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
          </p>
        </div>
      </div>
    </>
  );
}
