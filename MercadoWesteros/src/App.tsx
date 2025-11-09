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
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 522fc6b2b51efacc97aa05a5f0eec1dc2ec1375c
