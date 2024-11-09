// Login.js
import { useState } from 'react';
import style from '../css/Login.module.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Usuario y clave de ejemplo
    const validUsername = "admin";
    const validPassword = "admin";

    navigate('/posts')

    if (username === validUsername && password === validPassword) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Bienvenido",
        showConfirmButton: false,
        timer: 500
      });
      setError('');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className={style.loginContainer}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div className={style.formGroup}>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={style.error}>{error}</p>}
        <button type="submit" className={style.loginButton}>Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
