import "../styles/regiones.css";
import regionesImg from "../imgs/regiones.jpg";
import { Link } from "react-router-dom";

const regiones = [
  {
    nombre: "El Norte",
    descripcion:
      "Tierra fría y vasta, hogar de la Guardia y antiguas casas. Sus gentes son resistentes y leales.",
  },
  {
    nombre: "Desembarco del Rey",
    descripcion:
      "Centro del poder, palacios y traiciones. Aquí se encuentran las intrigas de la corte y el Trono de Hierro.",
  },
  {
    nombre: "Dorne",
    descripcion:
      "Región del sur con un clima cálido y tradiciones propias; sus casas son orgullosas y combativas.",
  },
  {
    nombre: "El Valle",
    descripcion:
      "Montañas escarpadas y fortalezas impenetrables. Gente reservada y honor en su sangre.",
  },
  {
    nombre: "Tierras del Río",
    descripcion:
      "Ríos que cruzan fértiles llanuras, escenario de muchas batallas que cambiaron reinos.",
  },
  {
    nombre: "Occidente",
    descripcion:
      "Ricas minas y casas poderosas, famosa por su oro y su influencia política.",
  },
  {
    nombre: "Islas del Hierro",
    descripcion:
      "Pobladas por fieros marineros, su cultura venera al mar y la conquista.",
  },
];

export default function Regiones() {
  return (
    <div className="regiones-page">
      <div className="regiones-hero" style={{ backgroundImage: `url(${regionesImg})` }}>
        <div className="regiones-hero-inner">
          <h1>Regiones de Poniente</h1>
          <p>Explora las tierras, costumbres y secretos de cada región.</p>
          <Link to="/" className="btn-oval small">← Volver</Link>
        </div>
      </div>

      <main className="regiones-content">
        {regiones.map((r) => (
          <section key={r.nombre} className="region-card">
            <h3>{r.nombre}</h3>
            <p>{r.descripcion}</p>
          </section>
        ))}
      </main>
    </div>
  );
}
