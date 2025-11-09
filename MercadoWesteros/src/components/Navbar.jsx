import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo y Título */}
        <div className="navbar-brand">
          <h2>⚔️ La Gran Subasta de Westeros</h2>
        </div>

        {/* Links de Navegación */}
        <ul className="navbar-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/subastas">Subastas</a></li>
         
          <li><a href="/perfil">Perfil</a></li>
        </ul>

        {/* Botones de Acción */}
        <div className="navbar-actions">
          <button className="btn-secondary">Iniciar Sesión</button>
          <button className="btn-primary">Registrarse</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar