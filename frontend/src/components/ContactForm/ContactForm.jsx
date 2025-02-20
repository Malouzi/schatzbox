import React from "react";
import '../ContactForm/ContactForm.css'

export default function ContactForm() {
    return (
        <section>
            <form>
                <h2>Kontaktformular</h2>
                <div className="input-box">
                    <label>Vor- und Nachname</label>
                    <input type="text" className="field" placeholder="Gib hier deinen Namen ein"/>


                </div>
            </form>
        </section>

    )
}

