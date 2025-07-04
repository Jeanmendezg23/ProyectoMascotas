import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MascotaList() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/mascotas/')
      .then(res => setMascotas(res.data))
      .catch(err => console.error(err));
  }, []);

  const eliminarMascota = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/mascotas/${id}/`)
      .then(() => setMascotas(mascotas.filter(m => m.id !== id)));
  };

  return (
    <div>
      <h2>Lista de Mascotas</h2>
      <Link to="/crear" className="btn btn-primary mb-2">Agregar Mascota</Link>
      <ul className="list-group">
        {mascotas.map(m => (
          <li key={m.id} className="list-group-item d-flex justify-content-between align-items-center">
            {m.nombre} ({m.tipo}) - {m.edad} años
            <div>
              <Link to={`/editar/${m.id}`} className="btn btn-sm btn-warning me-2">Editar</Link>
              <button onClick={() => eliminarMascota(m.id)} className="btn btn-sm btn-danger">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MascotaList;