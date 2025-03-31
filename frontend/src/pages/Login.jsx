import axios from "axios";
import { useState } from "react";
import { Alert, Button, FormControl, Input, InputLabel } from "@mui/material";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formError, setFormError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });
localStorage.setItem('authToken', response.data.token);
      setFormSuccess(true);
      navigate('/');
      setTimeout(() => {
        setFormSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data.message : 'Server not reachable');
      setFormError(true);
      setTimeout(() => {
        setFormError(false);
      }, 2000);
      setFormError(true);
      setTimeout(() => {
        setFormError(false);
      }, 2000);
    }
  };

  

  return (
      <div>

      {formError ? (
        <Alert severity="error">Es gab einen Fehler beim Einloggen!</Alert>
      ) : null}
      {formSuccess ? <Alert severity="success">Benutzer eingeloggt!</Alert> : null}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="email">E-Mail</InputLabel>
          <Input
            name="email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Passwort</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
        </FormControl>
        <Button type="submit" variant="contained">
          Einloggen
        </Button>
      </form>
      <p>
        Noch kein Konto? <Link to="/register">Registriere dich hier</Link>
      </p>
    </div>
  );
};

export default Login;
