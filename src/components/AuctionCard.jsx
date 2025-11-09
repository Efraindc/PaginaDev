import { useState, useEffect } from 'react'
import './AuctionCard.css'

function AuctionCard({ subasta }) {
  const [tiempoRestante, setTiempoRestante] = useState('')

  // Calcular -tiempo restante
  useEffect(() => {
    const calcularTiempo = () => {
      const ahora = new Date().getTime()
      const fechaFin = new Date(subasta.fecha_fin).getTime()
      const diferencia = fechaFin - ahora

      if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60))

        if (dias > 0) {
          setTiempoRestante(`${dias}d ${horas}h`)
        } else if (horas > 0) {
          setTiempoRestante(`${horas}h ${minutos}m`)
        } else {
          setTiempoRestante(`${minutos}m`)
        }
      } else {
        setTiempoRestante('Finalizada')
      }
    }

    calcularTiempo()
    const intervalo = setInterval(calcularTiempo, 60000) // Actualizar cada minuto

    return () => clearInterval(intervalo)
  }, [subasta.fecha_fin])

  // Obtener nombre y color de casa
  const getCasaInfo = () => {
    const casasInfo = {
      stark: { nombre: 'Stark', color: '#708090', icono: '🐺' },
      lannister: { nombre: 'Lannister', color: '#d4af37', icono: '🦁' },
      martell: { nombre: 'Martell', color: '#ff8c00', icono: '☀️' },
      greyjoy: { nombre: 'Greyjoy', color: '#2f4f4f', icono: '🐙' }
    }
    return casasInfo[subasta.casa] || casasInfo.stark
  }

  const casaInfo = getCasaInfo()

  return (
    <div className="auction-card">
      {/* Imagen */}
      <div className="auction-card-image">
        <img 
          src={subasta.imagen || 'https://via.placeholder.com/400x300?text=Reliquia'} 
          alt={subasta.titulo}
        />
        
        {/* Badges superiores */}
        <div className="auction-badges">
          <span 
            className="badge badge-casa" 
            style={{ backgroundColor: casaInfo.color }}
          >
            {casaInfo.icono} {casaInfo.nombre}
          </span>
          <span className="badge badge-tipo">
            {subasta.tipo_reliquia}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="auction-card-content">
        <h3 className="auction-title">{subasta.titulo}</h3>
        
        <p className="auction-description">
          {subasta.descripcion.substring(0, 80)}...
        </p>

        {/* Info de la subasta */}
        <div className="auction-info">
          <div className="auction-price">
            <span className="price-label">Precio Actual</span>
            <span className="price-value">
              💰 {subasta.precio_actual} dragones
            </span>
          </div>

          <div className="auction-stats">
            <div className="stat">
              <span className="stat-icon">⏰</span>
              <span className="stat-value">{tiempoRestante}</span>
            </div>
            <div className="stat">
              <span className="stat-icon">🔨</span>
              <span className="stat-value">{subasta.num_pujas} pujas</span>
            </div>
          </div>
        </div>

        {/* Botón */}
        <button className="btn-card-details">
          Ver Detalles
        </button>
      </div>
    </div>
  )
}

export default AuctionCard