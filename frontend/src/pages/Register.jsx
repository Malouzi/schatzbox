import { useState } from "react";
import styles from "./Register.module.css";
import { Alert, Button, FormControl, Input, InputLabel } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formError, setFormError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        username,
        email,
        password,
      });
      setFormSuccess(true);
      navigate("/login");
      setTimeout(() => {
        setFormSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Registration failed:", error.response ? error.response.data.message : "Server not reachable");
      setFormError(true);
      setTimeout(() => {
        setFormError(false);
      }, 2000);
    }
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.registerContainer}>
        {formError && <Alert severity="error">Es gab einen Fehler bei der Registrierung!</Alert>}
        {formSuccess && <Alert severity="success">Benutzer erfolgreich registriert!</Alert>}

        <h1 className={styles.registerTitle}>Registrieren</h1>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <FormControl className={styles.registerFormControl}>
            <InputLabel htmlFor="username">Benutzername</InputLabel>
            <Input
              name="username"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FormControl>

          <FormControl className={styles.registerFormControl}>
            <InputLabel htmlFor="email">E-Mail</InputLabel>
            <Input
              name="email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>

          <FormControl className={styles.registerFormControl}>
            <InputLabel htmlFor="password">Passwort</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>

          <Button type="submit" variant="contained" className={styles.registerButton}>
            Registrieren
          </Button>
        </form>
        <p className={styles.registerText}>
          Schon ein Konto? <Link to="/login" className={styles.registerLink}>Melde dich hier an</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
