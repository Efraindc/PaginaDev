import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import trono from "../imgs/trono.jpg";
import logo from "../imgs/logo.jpg";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      if (data && data.success) {
        // guardar sesión simple en localStorage
        try {
          const user = { username, nombre: data.nombre || '' };
          localStorage.setItem('user', JSON.stringify(user));
        } catch (e) {
          // ignore
        }
        // iniciar sesión OK -> redirigir a home
        navigate('/');
      } else {
        setError(data.message || 'Usuario o contraseña incorrectos');
      }
    } catch (err) {
      alert("Error de red al intentar iniciar sesión.");
    }
  };

  return (
    <div className="login-bg" style={{ backgroundImage: `url(${trono})` }}>
      <div className="login-card">
        <img src={logo} alt="Westeros" className="login-logo" />
        <h2 className="login-title">Iniciar Sesión — Mercado Westeros</h2>
        <p className="login-sub">Ingresa tu usuario y contraseña para continuar</p>

        <input
          className="login-input"
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="login-input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={loginUser}>
          Entrar
        </button>

        {error && <div style={{ color: '#ffb3b3', marginTop: 10 }}>{error}</div>}

        <div className="login-note">¿No tienes cuenta? Regístrate en la corte.</div>
      </div>
    </div>
  );
}
