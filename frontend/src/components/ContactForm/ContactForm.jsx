import React from "react";
import "../ContactForm/ContactForm.css";

export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bc8821f0-66f6-4b7f-875e-5c74ed828950");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>Kontaktformular</h2>
        <div className="input-box">
          <label></label>
          <input
            type="text"
            className="field"
            placeholder="Vorname*"
            name="vorname"
            required
          />
        </div>
        <div className="input-box">
          <label></label>
          <input
            type="text"
            className="field"
            placeholder="Nachname"
            name="nachname"
          />
        </div>
        <div className="input-box">
          <label></label>
          <input
            type="text"
            className="field"
            placeholder="Deine E-Mail Adresse*"
            name="email"
            required
          />
        </div>
        <div className="input-box">
          <label></label>
          <input type="text" className="field" placeholder="telefon" />
        </div>
        <div className="input-box">
          <label></label>
          <input
            type="text"
            className="field"
            placeholder="Betreff*"
            name="betreff"
            required
          />
        </div>
        <div className="input-box">
          <label></label>
          <textarea
            name="nachricht"
            id=""
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
