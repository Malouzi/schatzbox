import { useState } from 'react';
import axios from 'axios';
import styles from './Register.module.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Registrierungsversuch gestartet', { email, password });
    try {
      const response = await axios.post('http://localhost:3000/auth/register', { email, password, roles: 'User' });
      console.log('Benutzer registriert:', response.data);
    } catch (error) {
      console.error('Registrierung fehlgeschlagen:', error.response.data.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Registrieren</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Benutzername:</label>
          <input
            autoComplete="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>E-Mail:</label>
          <input
            autoComplete="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Passwort:</label>
          <input
            autoComplete="new-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrieren</button>
      </form>
    </div>
  );
}
