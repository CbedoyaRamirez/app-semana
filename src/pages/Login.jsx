import { useEffect, useState } from "react";
import style from "../css/Login.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  });

  const validateUser = async (username, password) => {
    const data = {
      username: username,
      password: password,
      expiresInMins: 30,
    };

    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message !== "Invalid credentials") {
          console.log("data");
          console.log(data);
          sessionStorage.setItem("image", data.image);
          sessionStorage.setItem("token", data.accessToken);
          navigate("/app-semana/posts");
        } else {
          Swal.fire({
            title: "Error",
            text: "Credenciales invalidas",
            icon: "error",
          });
          sessionStorage.setItem("token", "");
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error",
          text: "Credenciales invalidas",
          icon: "error",
        });
        return;
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    validateUser(username, password);
  };

  const viewPass = () => {
    setViewPassword(!viewPassword)
  }

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
              type={viewPassword ? 'text' : 'password' }
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <label htmlFor="">
            <input type="checkbox" onClick={() => viewPass()}  />
            Mostrar contraseña
          </label>
          <button type="submit" className={style.loginButton}>
            Iniciar Sesión
          </button>
        </form>
      </div>
      <Outlet />
    </div>
  );
};

export default Login;
