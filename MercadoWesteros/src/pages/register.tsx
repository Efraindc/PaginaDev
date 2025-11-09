import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // ← IMPORTANTE
import "./register.css";

// imágenes de subastas (nota: algunos nombres tienen pequeñas variaciones)
import sub1 from "../imgs/subasta1.jpg";
import sub2 from "../imgs/subaste2.jpg"; // nombre en disco: subaste2.jpg
import sub3 from "../imgs/subasta3.jpg";
import sub4 from "../imgs/subasta4.jpg";
import sub5 from "../imgs/subasta5.jpg";
import BidModal from "../components/BidModal";
import "../styles/bid-modal.css";

export default function Register() {
  const [form, setForm] = useState({ nombre: "", usuario: "", password: "" });
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate(); // ← PREPARAR NAVEGACIÓN
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.text();
    setMensaje(data);

    // Si el servidor responde que el usuario fue guardado, redirigimos:
    if (data.toLowerCase().includes("registrado") || data.toLowerCase().includes("éxito")) {
      setTimeout(() => navigate("/"), 800); // ← pequeña pausa para que se vea el mensaje
    }
  };

  const auctions = [
    { id: 1, imagen: sub1, titulo: "Manta Con Diseño Cromado De Casa De Juego De Tronos", min: 50 },
    { id: 2, imagen: sub2, titulo: "Factory Entertainment Juego De Tronos Westeros Map - Almohad", min: 100 },
    { id: 3, imagen: sub3, titulo: "Manta Tejida De Jacquard De Juego De Tronos Del Noroeste", min: 75 },
    { id: 4, imagen: sub4, titulo: "Funko Pop Juego De Tronos - Arya Stark 76", min: 60 },
    { id: 5, imagen: sub5, titulo: "El Trono De Hierro: Figuras De Juego De Tronos", min: 40 },
  ];

  const [modalAuction, setModalAuction] = useState<number | null>(null);

  const goToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      const firstInput = formRef.current.querySelector('input[name="nombre"]') as HTMLInputElement | null;
      if (firstInput) firstInput.focus();
    }
  };

  const openBid = (auctionId: number, _min: number) => {
    // si hay usuario en localStorage, abrir modal; si no, llevar al form
    const userRaw = localStorage.getItem('user');
    if (userRaw) {
      setModalAuction(auctionId);
    } else {
      // scroll to form and show message
      goToForm();
      setTimeout(() => alert('Debes crear una cuenta para pujar. Rellena el formulario.'), 300);
    }
  };

  return (
    <div className="register-page">
      <div className="register-wrap">
        <aside className="auctions-panel">
          <h2>Subastas Activas</h2>
          <div className="auction-grid">
            {auctions.map((a) => {
              const key = `auction_${a.id}_highest`;
              const highest = localStorage.getItem(key);
              return (
                <div key={a.id} className="auction-item">
                  <img src={a.imagen} alt={a.titulo} className="auction-img" />
                  <div className="auction-title">{a.titulo}</div>
                  <div className="auction-meta">Min: {a.min} 🪙 — Actual: {highest ? `${highest} 🪙` : 'Sin pujas'}</div>
                  <div className="auction-cta">
                    <button className="cta-register" onClick={goToForm}>Crear cuenta para pujar</button>
                    <button className="cta-bid" onClick={() => openBid(a.id, a.min)}>Pujar</button>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        <section className="register-card-wrapper">
          <div className="register-card" ref={formRef as any}>
            <h2>Crear cuenta</h2>

            <form onSubmit={handleSubmit}>
              <input type="text" name="nombre" placeholder="Nombre completo" onChange={handleChange} required />
              <input type="text" name="usuario" placeholder="Usuario" onChange={handleChange} required />
              <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />

              <button type="submit">Registrarse</button>
            </form>

            {mensaje && <p>{mensaje}</p>}
          </div>
        </section>
      </div>
      {modalAuction && (
        <BidModal auctionId={modalAuction} minBid={auctions.find(a => a.id === modalAuction)?.min || 1} onClose={() => setModalAuction(null)} />
      )}
    </div>
  );
}
