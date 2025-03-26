import { useState } from 'react';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';



  export default function Register() {
    const [formUser, setFormUser] = useState({
      username: "",
      email: "",
      password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
      e.preventDefault();
      setFormUser({
        ...formUser,
        [e.target.name]: e.target.value,
      });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("hallo");
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
          navigate("/login");
        } else {
          console.log("error");
          
        }
      } catch (error) {
        console.error(error);
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
            name='username'            
            value={formUser.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>E-Mail:</label>
          <input
            autoComplete="email"
            type="email"
            name='email'
            value={formUser.email}          
           onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Passwort:</label>
          <input
            autoComplete="new-password"
            type="password"
            name='password'
            value={formUser.password}        
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrieren</button>
      </form>
    </div>
  );
}
