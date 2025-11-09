import { useParams, Link } from "react-router-dom";
import { productos } from "../data/produtos";
import "../styles/productos.css";
import "../styles/home.css";

export default function DetallesProd() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) return <h2>Producto no encontrado</h2>;

  return (
    <div className="detalle-producto">
      <img src={producto.imagen} alt={producto.nombre} className="detalle-img" />
      <h2>{producto.nombre}</h2>
      <p className="descripcion">{producto.descripcion}</p>
      <p className="precio-detalle">💰 {producto.precio} Dragones de Oro</p>

      <Link to="/productos" className="btn-volver">← Volver</Link>
    </div>
  );
}

