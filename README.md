# React Router ( instalar)
npm install react-router-dom

#Instalar dependencias para el servidor backend (carpeta server)
npm init -y
npm install express cors
node server.js

2. Instala las dependencias del frontend:
```bash
npm install
```

3. Instala las dependencias del backend:
```bash
cd backend
npm install
```

## Configuración y ejecución ⚡

1. Inicia el servidor backend:
```bash
cd backend
npm start
```
El servidor se ejecutará en `http://localhost:4000`

2. En otra terminal, inicia el frontend:
```bash
# Desde la raíz del proyecto
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

## Scripts disponibles 📜

### Frontend:
- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la versión de producción

### Backend:
- `npm start`: Inicia el servidor backend