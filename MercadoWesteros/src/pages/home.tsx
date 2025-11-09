import { Link } from "react-router-dom";
import "../styles/home.css";

// Importar imágenes
import logo from "../imgs/logo.jpg";
import trono from "../imgs/trono.jpg";
import targaryen from "../imgs/targaryen.jpg";
import casas from "../imgs/casas.jpg";

export default function Home() {
  return (
    <div className="home-bg">

      {/* HEADER */}
      <header className="home-header">
        <img src={logo} alt="Targaryen Logo" className="logo" />
        <nav className="nav-links flex justify-start gap-4">
          <Link to="/register">| Subastas 💰</Link>
          <Link to="/regiones">| Regiones ⚡</Link>
          <Link to="/joyas" className="nav-joyas">| Joyas/Reliquias 💎 <span className="joya-badge" aria-hidden>💍</span></Link>
          <Link to="/register">Registrarse 🏰</Link>
        </nav>


      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="home-content">

        {/* IZQUIERDA */}
        <div className="oval-card">
          <img src={trono} className="oval-img" alt="Trono" />
          <Link to="/register" className="btn-oval">VER RANKING</Link>
        </div>

        {/* CENTRO */}
        <div className="banner-center">
          <img src={targaryen} alt="House Banner" className="banner-img" />
          <Link to="/login" className="btn-center">Sign in</Link>
        </div>

        {/* DERECHA */}
        <div className="oval-card">
          <img src={casas} className="oval-img" alt="Casas Westeros" />
          <Link to="/productos" className="btn-oval" title="Ver lista completa de productos (detalles)" aria-label="Ver productos">VER PRODUCTOS</Link>
        </div>

      </main>
    </div>
  );
}
