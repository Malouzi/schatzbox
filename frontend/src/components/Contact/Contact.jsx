import React from "react";
import styles from "./Contact.module.css"; 

export default function Kontakt() {
  const onSubmit = (event) => {
    event.preventDefault();
    alert("Formular wurde abgeschickt!");
  };

  return (
    <div className={styles.kontaktPage}>
      <h1>Kontakt</h1>
      <p>So könnt Ihr uns erreichen:</p>
      <ul>
        <li>Telefon: 0123 456789</li>
        <li>Email: <a href="mailto:kontakt@schatzbox.de">kontakt@schatzbox.de</a></li>
        <li>Adresse: Musterstraße 10, 12345 Musterstadt</li>
      </ul>

      <section className={styles.contact}>
        <form onSubmit={onSubmit}>
          <h2>Kontaktformular</h2>

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

          <button type="submit" className={styles.submitButton}>Absenden</button>
        </form>
      </section>
    </div>
  );
}
