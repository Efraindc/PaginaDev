import "../styles/home.css";

interface Guerrero {
  nombre: string;
  casa: string;
  puntos: number;
}

export default function Ranking() {
  const ranking: Guerrero[] = [
    { nombre: "Jon Snow", casa: "Stark", puntos: 98 },
    { nombre: "Daenerys Targaryen", casa: "Targaryen", puntos: 95 },
    { nombre: "Tyrion Lannister", casa: "Lannister", puntos: 90 },
    { nombre: "Arya Stark", casa: "Stark", puntos: 88 },
  ];

  return (
    <div className="page-container">
      <h2>🏆 Ranking de Guerreros Comerciales</h2>
      <table className="ranking-table">
        <thead>
          <tr>
            <th>Posición</th>
            <th>Nombre</th>
            <th>Casa</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((g, index) => (
            <tr key={g.nombre}>
              <td>{index + 1}</td>
              <td>{g.nombre}</td>
              <td>{g.casa}</td>
              <td>{g.puntos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
