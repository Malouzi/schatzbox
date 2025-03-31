import axios from "axios";
import { useState } from "react";
import styles from "./Login.module.css";
import { Alert, Button, FormControl, Input, InputLabel } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formError, setFormError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setFormSuccess(true);
      navigate("/");
      setTimeout(() => {
        setFormSuccess(false);
      }, 2000);
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data.message : "Server not reachable"
      );
      setFormError(true);
      setTimeout(() => {
        setFormError(false);
      }, 2000);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        {formError && <Alert severity="error">Es gab einen Fehler beim Einloggen!</Alert>}
        {formSuccess && <Alert severity="success">Benutzer eingeloggt!</Alert>}

        <h1 className={styles.loginTitle}>Login</h1>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <FormControl className={styles.loginFormControl}>
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
          <FormControl className={styles.loginFormControl}>
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
          <Button type="submit" variant="contained" className={styles.loginButton}>
            Einloggen
          </Button>
        </form>
        <p className={styles.loginText}>
          Noch kein Konto? <Link to="/register" className={styles.loginLink}>Registriere dich hier</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
