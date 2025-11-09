import { Link } from "react-router-dom";
import "../styles/joyas.css";

// Importar imágenes de joyas
import joya1 from "../imgs/joya1.jpg";
import joya2 from "../imgs/joya2.jpg";
import joya3 from "../imgs/joya3.jpg";
import joya4 from "../imgs/joya4.jpg";

const joyas = [
  { 
    id: 1, 
    imagen: joya1,
    nombre: "Charm Colgante Astrolabio Giratorio de Juego de Tronos",
    descripcion: "Forjado en las antiguas fraguas de Valyria",
    historia: "Se dice que perteneció a los primeros jinetes de dragones. Las gemas cambian de color con el fuego."
  },
  { 
    id: 2, 
    imagen: joya2,
    nombre: "Anillo Giratorio de Juego de Tronos",
    descripcion: "Reliquia de la Guardia de la Noche",
    historia: "Usado por los Lord Comandantes para sellar mensajes importantes desde el Muro."
  },
  { 
    id: 3, 
    imagen: joya3,
    nombre: "Charm Jon Snow de Juego de Tronos",
    descripcion: "Tesoro de Altojardín",
    historia: "Regalo de bodas de la casa Tyrell, cada rosa tiene un significado oculto."
  },
  { 
    id: 4, 
    imagen: joya4,
    nombre: "Anillo Corona Casa de Dragón de Juego de Tronos",
    descripcion: "Joya ancestral de la casa Martell",
    historia: "Sus gemas fueron extraídas de las profundidades de las Montañas Rojas de Dorne."
  },
];

export default function Joyas() {
  return (
    <div className="joyas-page">
      <header className="joyas-header">
        <h1>💎 Joyas y Reliquias</h1>
        <Link to="/" className="back-btn">← Volver al Inicio</Link>
      </header>

      <div className="joyas-grid">
        {joyas.map((joya) => (
          <div key={joya.id} className="joya-item">
            <img 
              src={joya.imagen} 
              alt={joya.nombre} 
              className="joya-imagen"
            />
            <div className="joya-info">
              <h3>{joya.nombre}</h3>
              <p className="joya-descripcion">{joya.descripcion}</p>
              <p className="joya-historia">{joya.historia}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}