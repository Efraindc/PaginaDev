import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Bienvenido a La Gran Subasta de Westeros</h1>
            <p className="hero-subtitle">
              Donde las casas nobles de los Siete Reinos compiten por los tesoros más codiciados del continente
            </p>
            <div className="hero-buttons">
              <button className="btn-hero-primary">Ver Subastas Activas</button>
              <button className="btn-hero-secondary">Crear Cuenta</button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Casas */}
      <section className="houses-section">
        <div className="container">
          <h2 className="section-title">Las Grandes Casas</h2>
          <p className="section-subtitle">Explora las reliquias por casa y región</p>
          
          <div className="houses-grid">
            {/* Casa Stark */}
            <div className="house-card house-stark">
              <div className="house-icon">🐺</div>
              <h3>Casa Stark</h3>
              <p className="house-region">El Norte</p>
              <p className="house-description">
                Pieles gruesas, espadas de hielo y acero valiriano forjado en las tierras del eterno invierno.
              </p>
              <button className="btn-house">Ver Reliquias</button>
            </div>

            {/* Casa Martell */}
            <div className="house-card house-martell">
              <div className="house-icon">☀️</div>
              <h3>Casa Martell</h3>
              <p className="house-region">Dorne</p>
              <p className="house-description">
                Vinos exóticos, especias raras y venenos misteriosos del desierto ardiente de Dorne.
              </p>
              <button className="btn-house">Ver Reliquias</button>
            </div>

            {/* Casa Lannister */}
            <div className="house-card house-lannister">
              <div className="house-icon">🦁</div>
              <h3>Casa Lannister</h3>
              <p className="house-region">Tierras de la Corona</p>
              <p className="house-description">
                Joyas refinadas, oro puro y armas ceremoniales de las familias más ricas de Poniente.
              </p>
              <button className="btn-house">Ver Reliquias</button>
            </div>

            {/* Casa Greyjoy */}
            <div className="house-card house-greyjoy">
              <div className="house-icon">🐙</div>
              <h3>Casa Greyjoy</h3>
              <p className="house-region">Islas de Hierro</p>
              <p className="house-description">
                Tesoros saqueados de las travesías marítimas y acero brutal de los hijos del mar.
              </p>
              <button className="btn-house">Ver Reliquias</button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Información */}
      <section className="info-section">
        <div className="container">
          <h2 className="section-title">¿Cómo Funciona?</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-number">1</div>
              <h3>Regístrate</h3>
              <p>Crea tu cuenta y recibe 10 monedas iniciales para comenzar</p>
            </div>

            <div className="info-card">
              <div className="info-number">2</div>
              <h3>Explora</h3>
              <p>Navega por las subastas activas organizadas por casas y regiones</p>
            </div>

            <div className="info-card">
              <div className="info-number">3</div>
              <h3>Puja</h3>
              <p>Compite con otros usuarios por los tesoros más valiosos</p>
            </div>

            <div className="info-card">
              <div className="info-number">4</div>
              <h3>Gana</h3>
              <p>Acumula puntos, conviértete en Maestre y desbloquea reliquias exclusivas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Listo para reclamar tu tesoro?</h2>
          <p>Únete a los lores y damas de Westeros en la batalla por las reliquias más codiciadas</p>
          <button className="btn-cta">Comenzar Ahora</button>
        </div>
      </section>
    </div>
  )
}

export default Home