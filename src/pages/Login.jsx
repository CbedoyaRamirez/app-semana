import { useState } from "react";
import style from "../css/Login.module.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { validateAccessUsers } from '../services/api';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateUser = async (username, password) => {
    const validateUse = await validateAccessUsers(username, password);
    console.log(validateUse.image)
    sessionStorage.setItem('image', validateUse.image)
    return validateUse
  }

  const handleLogin = (e) => {
    e.preventDefault();
    validateUser(username, password);

    navigate("/posts");

    /*
    if (username === validUsername && password === validPassword) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Bienvenido",
        showConfirmButton: false,
        timer: 500,
      });
      setError("");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
      */
  };

  return (
    <div className={style.loginContainerItems}>
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
          <button type="submit" className={style.loginButton}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
