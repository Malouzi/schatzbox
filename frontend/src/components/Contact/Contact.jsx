import React from "react";
import styles from "./Contact.module.css";
import CirclesRight from "../Circles/CirclesRight";
import CirclesLeft from "../Circles/CirclesLeft";

export default function Kontakt() {
  const onSubmit = (event) => {
    event.preventDefault();
    alert("Formular wurde abgeschickt!");
  };

  return (
    <>
      <CirclesRight />
      <div className={styles.kontaktPage}>
        <section className={styles.contact}>
          <div className={styles.contactInfo}>
            <h1>Unsere Kontaktdaten</h1>
            <p>Telefon: 030 123456789</p>
            <p>
              Email:{" "}
              <a href="mailto:kontakt@schatzbox.de">kontakt@schatzbox.de</a>
            </p>
            <p>Adresse: Schatzkarte 10, 12345 Berlin</p>
          </div>
          <div className={styles.separator}></div>
          <form onSubmit={onSubmit} className={styles.contactForm}>
            <h2>Schreib uns eine Nachricht:</h2>
            <div className={styles.inputBox}>
              <input
                type="text"
                className="field"
                placeholder="Vorname*"
                name="vorname"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <input
                type="text"
                className="field"
                placeholder="Nachname"
                name="nachname"
              />
            </div>

            <div className={styles.inputBox}>
              <input
                type="email"
                className="field"
                placeholder="Deine E-Mail Adresse*"
                name="email"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <input
                type="text"
                className="field"
                placeholder="Telefon"
                name="telefon"
              />
            </div>

            <div className={styles.inputBox}>
              <input
                type="text"
                className="field"
                placeholder="Betreff*"
                name="betreff"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <textarea
                name="nachricht"
                placeholder="Nachricht*"
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Absenden
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
