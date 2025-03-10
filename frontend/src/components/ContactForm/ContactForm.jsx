import React from "react"
import styles from './ContactForm.module.css'
import Swal from "sweetalert2"


export default function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "bc8821f0-66f6-4b7f-875e-5c74ed828950");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Deine Nachricht wurde versendet",
                text: "Wir kümmern uns um Dein Anliegen und melden uns schnellstmöglich bei Dir!",
                icon: "success"
            });
        }
    };

    return (
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
                <button type="submit">absenden</button>
            </form>
        </section>
    );
}
