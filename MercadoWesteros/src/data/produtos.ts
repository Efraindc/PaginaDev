// src/data/productos.ts
import espada from "../imgs/espada.jpg";
import armadura from "../imgs/armadura.jpg";
import mapa from "../imgs/mapa.jpg";
import anillo from "../imgs/anillo.jpg";
import capa from "../imgs/capa.jpg";
import corona from "../imgs/corona.webp";
import dragon from "../imgs/drangon.jpg";
import pergamino from "../imgs/pergramio.jpg";

export const productos = [
  {
    id: 1,
    nombre: "Espada de Acero Valyrio",
    descripcion: "Forjada en fuego de dragón, ligera y extremadamente afilada. Una reliquia digna de una casa noble.",
    precio: 1200,
    imagen: espada
  },
  {
    id: 2,
    nombre: "Armadura Dorada Lannister",
    descripcion: "Armadura de batalla con detalles en oro puro. Favorece la protección y el estilo regio.",
    precio: 950,
    imagen: armadura
  },
  {
    id: 3,
    nombre: "Mapa Antiguo del Norte",
    descripcion: "Representación antigua de los territorios más allá del Muro. Contiene rutas olvidadas.",
    precio: 400,
    imagen: mapa
  },
  {
    id: 4,
    nombre: "Anillo de Invernalia",
    descripcion: "Un anillo con el emblema del lobo huargo, símbolo de la casa Stark, cargado de historia.",
    precio: 300,
    imagen: anillo
  },
  {
    id: 5,
    nombre: "Capa de la Guardia Nocturna",
    descripcion: "Capa negra de lana gruesa, indispensable para los guardianes del Muro y sus misiones en la nieve.",
    precio: 250,
    imagen: capa
  },
  {
    id: 6,
    nombre: "Dragón de Cristal Miniatura",
    descripcion: "Pequeña figura de dragón hecha de cristal, perfecta para coleccionistas y fanáticos de Daenerys.",
    precio: 150,
    imagen: dragon
  },
  {
    id: 7,
    nombre: "Corona de Hierro",
    descripcion: "Réplica de la corona usada por los reyes de Poniente. Hecha en metal envejecido, con gran detalle.",
    precio: 700,
    imagen: corona
  },
  {
    id: 8,
    nombre: "Pergamino de Hechizos de Melisandre",
    descripcion: "Reproducción de los antiguos conjuros de la sacerdotisa roja. Ideal para decoraciones místicas.",
    precio: 180,
    imagen: pergamino
  }
];


