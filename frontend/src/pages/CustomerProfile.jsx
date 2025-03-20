import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerProfile = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${userId}`)
      .then(response => {
        setFormData({
          username: response.data.user.username,
          email: response.data.user.email,
          password: ''
        });
      })
      .catch(() => console.error('Fehler beim Laden des Profils.'));
  }, [userId]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/user/${userId}`, formData);
      setMessage('Profil erfolgreich aktualisiert!');
    } catch {
      setMessage('Fehler beim Aktualisieren des Profils.');
    }
  };

  return (
    <div>
      <h1>Profil bearbeiten</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Neues Passwort (optional)" />
        <button type="submit">Speichern</button>
      </form>
      <button onClick={() => navigate('/customer')}>Zurück</button>
    </div>
  );
};

export default CustomerProfile;
