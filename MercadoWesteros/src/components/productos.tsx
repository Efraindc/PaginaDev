import { Link } from "react-router-dom";
import { productos } from "../data/produtos";
import "../styles/productos.css";

// imágenes de joyas para incluir en la lista de productos
import joya1 from "../imgs/joya1.jpg";
import joya2 from "../imgs/joya2.jpg";
import joya3 from "../imgs/joya3.jpg";
import joya4 from "../imgs/joya4.jpg";

const joyas = [
  {
    id: 101,
    nombre: "Collar de Dragón Valyrio",
    descripcion: "Forjado en las antiguas fraguas de Valyria.",
    precio: "—",
    imagen: joya1,
    tipo: "joya",
  },
  {
    id: 102,
    nombre: "Broche del Cuervo Blanco",
    descripcion: "Reliquia de la Guardia de la Noche.",
    precio: "—",
    imagen: joya2,
    tipo: "joya",
  },
  {
    id: 103,
    nombre: "Diadema de las Rosas",
    descripcion: "Tesoro de Altojardín.",
    precio: "—",
    imagen: joya3,
    tipo: "joya",
  },
  {
    id: 104,
    nombre: "Medallón del Sol Dorniense",
    descripcion: "Joya ancestral de la casa Martell.",
    precio: "—",
    imagen: joya4,
    tipo: "joya",
  },
];

export default function Productos() {
  // Intercalar joyas en la lista de productos: insertar 1 joya cada 2 productos
  const productosConTipo = productos.map(p => ({ ...p, tipo: 'producto' }));
  const joyasCopy = [...joyas];
  const lista: Array<any> = [];

  let prodIndex = 0;
  let joyIndex = 0;

  while (prodIndex < productosConTipo.length || joyIndex < joyasCopy.length) {
    // añadir hasta 2 productos
    for (let i = 0; i < 2 && prodIndex < productosConTipo.length; i++) {
      lista.push(productosConTipo[prodIndex++]);
    }
    // añadir una joya si existe
    if (joyIndex < joyasCopy.length) {
      lista.push(joyasCopy[joyIndex++]);
    }
  }

  return (
    <div className="productos-bg">
      <div className="productos-container">
        <h1 className="productos-title">💎🗡️Joyas y Reliquias Valyrias</h1>
        <Link to="/" className="volver-btn">← Volver al Inicio</Link>

        <div className="productos-list">
          {lista.map((p) => (
            <div key={p.id} className={`producto-card ${p.tipo === 'joya' ? 'is-joya' : ''}`}>
              {p.imagen && <img src={p.imagen} alt={p.nombre} className="producto-img" />}

              <div className="producto-body">
                <h2 className="producto-nombre">{p.nombre}</h2>
                <p className="producto-desc">{p.descripcion}</p>
                <div className="producto-foot">
                  <p className="producto-precio">{p.precio} {p.precio !== '—' && '🪙'}</p>

                  {p.tipo === 'producto' ? (
                    <Link to={`/detalles/${p.id}`} className="producto-btn">
                      Ver Detalles
                    </Link>
                  ) : (
                    <span className="producto-tag">Joyas</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}