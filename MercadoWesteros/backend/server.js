const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { nombre, usuario, password } = req.body;

  const data = `${nombre} | ${usuario} | ${password}\n`;

  fs.appendFile("usuarios.txt", data, (err) => {
    if (err) {
      return res.status(500).send("Error al guardar usuario");
    }
    res.send("✅ Usuario registrado correctamente");
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile('usuarios.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error leyendo usuarios.txt', err);
      return res.status(500).json({ success: false, message: 'Error del servidor' });
    }

    const lines = data.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    for (const line of lines) {
      // formato esperado: Nombre | usuario | password
      const parts = line.split('|').map(p => p.trim());
      if (parts.length >= 3) {
        const usuario = parts[1];
        const pass = parts[2];
        if (usuario === username && pass === password) {
          return res.json({ success: true, message: 'Inicio de sesión exitoso', nombre: parts[0] });
        }
      }
    }

    return res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
  });
});

app.listen(4000, () => {
  console.log("Servidor corriendo en http://localhost:4000");
});
