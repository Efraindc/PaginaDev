import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./components/login";
import Ranking from "./components/ranking";
import DetallesProd from "./components/detallesprod";
import Register from "./pages/register";
import Productos from "./components/productos";
import Joyas from "./components/Joyas";
import Regiones from "./pages/regiones";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/detalles/:id" element={<DetallesProd />} />
        <Route path="/register" element={<Register />} />
  <Route path="/regiones" element={<Regiones />} />
  <Route path="/productos" element={<Productos />} />
  <Route path="/joyas" element={<Joyas />} />
      </Routes>
    </Router>
  );
}

export default App;
