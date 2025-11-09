import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Sección Izquierda - Info */}
        <div className="footer-section">
          <h3>La Gran Subasta de Westeros</h3>
          <p>Donde las casas nobles compiten por los tesoros más codiciados de los Siete Reinos.</p>
        </div>

        {/* Sección Central - Links Rápidos */}
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><a href="/subastas">Ver Subastas</a></li>
            <li><a href="/ranking">Ranking</a></li>
            <li><a href="/maestres">Maestres</a></li>
            <li><a href="/ayuda">Ayuda</a></li>
          </ul>
        </div>

        {/* Sección Derecha - Casas */}
        <div className="footer-section">
          <h4>Las Grandes Casas</h4>
          <ul className="footer-houses">
            <li>🐺 Casa Stark - El Norte</li>
            <li>☀️ Casa Martell - Dorne</li>
            <li>🦁 Casa Lannister - Corona</li>
            <li>🐙 Casa Greyjoy - Islas de Hierro</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2025 La Gran Subasta de Westeros | Universidad Nacional de Colombia - Grupo 2</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer