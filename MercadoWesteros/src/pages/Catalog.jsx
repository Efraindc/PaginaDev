import { useState } from 'react'
import AuctionCard from '../components/auctionCard'
import { subastas, casas, tiposReliquias } from '../data/mockData'
import './Catalog.css'

function Catalog() {
  const [filtros, setFiltros] = useState({
    casa: 'todas',
    tipo: 'todos',
    busqueda: ''
  })

  // Manejar cambios en filtros
  const handleFiltroChange = (tipo, valor) => {
    setFiltros(prev => ({
      ...prev,
      [tipo]: valor
    }))
  }

  // Filtrar subastas
  const subastasFiltradas = subastas.filter(subasta => {
    // Filtro por casa
    if (filtros.casa !== 'todas' && subasta.casa !== filtros.casa) {
      return false
    }

    // Filtro por tipo
    if (filtros.tipo !== 'todos' && subasta.tipo_reliquia !== filtros.tipo) {
      return false
    }

    // Filtro por búsqueda
    if (filtros.busqueda && !subasta.titulo.toLowerCase().includes(filtros.busqueda.toLowerCase())) {
      return false
    }

    return true
  })

  return (
    <div className="catalog">
      <div className="container">
        {/* Header */}
        <div className="catalog-header">
          <h1>Subastas Activas</h1>
          <p className="catalog-subtitle">
            Explora las reliquias más codiciadas de los Siete Reinos
          </p>
        </div>

        {/* Barra de Filtros */}
        <div className="filters-bar">
          {/* Búsqueda */}
          <div className="filter-group filter-search">
            <input
              type="text"
              placeholder="🔍 Buscar reliquia..."
              value={filtros.busqueda}
              onChange={(e) => handleFiltroChange('busqueda', e.target.value)}
              className="search-input"
            />
          </div>

          {/* Filtro por Casa */}
          <div className="filter-group">
            <label>Casa:</label>
            <select
              value={filtros.casa}
              onChange={(e) => handleFiltroChange('casa', e.target.value)}
              className="filter-select"
            >
              <option value="todas">Todas las Casas</option>
              {casas.map(casa => (
                <option key={casa.id} value={casa.id}>
                  {casa.nombre}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro por Tipo */}
          <div className="filter-group">
            <label>Tipo:</label>
            <select
              value={filtros.tipo}
              onChange={(e) => handleFiltroChange('tipo', e.target.value)}
              className="filter-select"
            >
              <option value="todos">Todos los Tipos</option>
              {tiposReliquias.map(tipo => (
                <option key={tipo.id} value={tipo.id}>
                  {tipo.nombre}
                </option>
              ))}
            </select>
          </div>

          {/* Botón Limpiar Filtros */}
          {(filtros.casa !== 'todas' || filtros.tipo !== 'todos' || filtros.busqueda) && (
            <button
              className="btn-clear-filters"
              onClick={() => setFiltros({ casa: 'todas', tipo: 'todos', busqueda: '' })}
            >
              Limpiar Filtros
            </button>
          )}
        </div>

        {/* Contador de resultados */}
        <div className="results-counter">
          <p>
            Mostrando <strong>{subastasFiltradas.length}</strong> de <strong>{subastas.length}</strong> subastas
          </p>
        </div>

        {/* Grid de Subastas */}
        {subastasFiltradas.length > 0 ? (
          <div className="auctions-grid">
            {subastasFiltradas.map(subasta => (
              <AuctionCard key={subasta.id} subasta={subasta} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h2>No se encontraron subastas</h2>
            <p>Intenta ajustar los filtros o realiza una búsqueda diferente</p>
            <button
              className="btn-reset"
              onClick={() => setFiltros({ casa: 'todas', tipo: 'todos', busqueda: '' })}
            >
              Ver todas las subastas
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Catalog