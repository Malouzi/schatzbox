import { useState } from 'react';
import styles from './Register.module.css';

export default function Register() {
  const [formUser, setFormUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormUser({
      ...formUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/auth/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(formUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setFormUser({ username: "", email: "", password: "" });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.registerContainer}>
        <h1>Registrieren</h1>
        <form onSubmit={handleSubmit} className={styles.registerForm}>
          <div className={styles.formGroup}>
            <label>Benutzername:</label>
            <input
              autoComplete="username"
              type="text"
              name="username"
              value={formUser.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>E-Mail:</label>
            <input
              autoComplete="email"
              type="email"
              name="email"
              value={formUser.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Passwort:</label>
            <input
              autoComplete="new-password"
              type="password"
              name="password"
              value={formUser.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.registerButton}>Registrieren</button>
        </form>
      </div>
    </div>
  );
}
